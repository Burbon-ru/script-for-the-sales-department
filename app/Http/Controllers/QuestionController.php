<?php

namespace App\Http\Controllers;

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
    public function create (Request $request) {
        $data = $request->input();
        $data['coords'] = serialize($data['coords']);

        $item = new Question();
        $item->name = $data['name'];
        $item->text = $data['text'];
        $item->coords = $data['coords'];
        $item->script_id = $data['script_id'];
        $item->save();

        return response($item->jsonSerialize(), Response::HTTP_CREATED);
    }

    /**
     * Обновляет вопрос и если все ок возвращает обновленный вопрос
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function update (Request $request) {
        $data = $request->input();
        $id = $data['id'];

        if (isset($data['coords'])) {
            $data['coords'] = serialize($data['coords']);
        }

        unset($data['id']);

        $result = Question::findOrFail($id)
            ->update($data);

        if ($result) {
            $question = Question::where('id', $id)->first();
            $question->coords = unserialize($question->coords);

            return response($question->jsonSerialize(), Response::HTTP_OK);
        }
    }

    /**
     * Удаляет вопрос
     * todo: и все связанные с ним ответы
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function destroy (Request $request) {
        $data = $request->input();

        Question::destroy($data['id']);

        return response(null, Response::HTTP_OK);
    }

    /**
     * Получает все вопросы по id скрипта
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function getQuestionsByScriptId (Request $request) {
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
     * Получить вопрос по его id
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function getQuestionById (Request $request) {
        $data = $request->input();
        $id = $data['id'];

        $question = Question::where('id', $id)
            ->first();

        $question->coords = unserialize($question->coords);

        return response($question->jsonSerialize(), Response::HTTP_OK);
    }

}
