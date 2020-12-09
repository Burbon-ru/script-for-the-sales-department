<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class QuestionController extends Controller
{
    /**
     * Создает вопрос
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function create(Request $request): Response
    {
        $data = $request->input();
        $data['coords'] = serialize($data['coords']);

        if (isset($data['is_first'])) {
            if ($firstQuestionName = $this->getFirstQuestionName($data['script_id'])) {
                return response(json_encode([
                    'first_question_name' => $firstQuestionName
                ]), Response::HTTP_OK);
            }
        }

        $item = new Question();
        $item->name = $data['name'];
        $item->text = $data['text'];
        $item->coords = $data['coords'];
        $item->script_id = $data['script_id'];

        if (isset($data['is_first'])) {
            $item->is_first = true;
        }

        $item->save();

        return response($item->jsonSerialize(), Response::HTTP_CREATED);
    }

    /**
     * Обновляет вопрос и если все ок возвращает обновленный вопрос
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function update(Request $request)
    {
        $data = $request->input();
        $id = $data['id'];
        unset($data['id']);

        if (isset($data['is_first'])) {
            if ($firstQuestionName = $this->getFirstQuestionName($data['script_id'], $id)) {
                return response(json_encode([
                    'first_question_name' => $firstQuestionName
                ]), Response::HTTP_OK);
            }
        }

        if (isset($data['coords'])) {
            $data['coords'] = serialize($data['coords']);
        }

        if (isset($data['is_first'])) {
            $data['is_first'] = true;
        }

        $result = Question::findOrFail($id)
            ->update($data);

        if ($result) {
            $question = Question::where('id', $id)->first();
            $question->coords = unserialize($question->coords);

            return response($question->jsonSerialize(), Response::HTTP_OK);
        }
    }

    /**
     *
     *
     * @param int $scriptId
     * @param int $questionId
     * @return string
     */
    protected function getFirstQuestionName(int $scriptId, int $questionId = 0)
    {
        $firstQuestionName = '';

        $questions = Question::where('script_id', $scriptId)
            ->where('id', '!=', $questionId)
            ->get();

        foreach ($questions as $question) {
            if (isset($question->is_first)) {
                $firstQuestionName = $question->name;
            }
        }

        return $firstQuestionName;
    }

    /**
     * Удаляет вопрос, все связанные с ним ответы
     * и привязки ответов к этому вопросу
     * todo: нужен репозиторий (или пока protected методы), не дело это все в контроллере делать
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function destroy(Request $request)
    {
        $data = $request->input();
        $id = $data['id'];

        $question = Question::find($id);

        $deleteResult = true;

        foreach ($question->answers as $answer) {
            $res = Answer::destroy($answer->id);

            if (!$res) {
                $deleteResult = false;
            }
        }

        Answer::where('next_question_id', $id)
            ->update([
                'next_question_id' => null
            ]);

        if ($deleteResult && Question::destroy($id)) {
            return response(null, Response::HTTP_OK);
        }

        return response(null, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * Получает все вопросы по id скрипта
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function getQuestionsByScriptId(Request $request)
    {
        $data = $request->input();
        $id = $data['id'];

        $questions = Question::where('script_id', $id)
            ->get();

        foreach ($questions as $question) {
            $question->coords = unserialize($question->coords);
        }

        return response($questions->jsonSerialize(), Response::HTTP_OK);
    }

    /**
     * Получить первый вопрос
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function getFirstQuestion(Request $request)
    {
        $data = $request->input();

        $question = Question::where('is_first', 1)
            ->where('script_id', $data['scriptId'])
            ->get();

        return response($question->jsonSerialize(), Response::HTTP_OK);
    }

    /**
     * Получить вопрос по его id
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function getQuestionById(Request $request)
    {
        $data = $request->input();
        $id = $data['id'];

        $question = Question::where('id', $id)
            ->first();

        $question->coords = unserialize($question->coords);

        return response($question->jsonSerialize(), Response::HTTP_OK);
    }

}
