<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class QuestionController extends Controller
{
    /**
     * Получает все вопросы по id скрипта
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function getQuestionsByScriptId (Request $request) {
        $data = $request->input();
        $id = $data['id'];

        $questions = Question::where('script_id', $id)->get();

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

        $question = Question::where('id', $id)->first();
        $question->coords = unserialize($question->coords);

        return response($question->jsonSerialize(), Response::HTTP_OK);
    }

    /**
     * Создает вопрос
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function create (Request $request) {
        $data = $request->input();
        $data['coords'] = serialize($data['coords']);

        $item = new Question($data);
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

        if ($data['coords']) {
            $data['coords'] = serialize($data['coords']);
        }

        unset($data['id']);

        $result = Question::find($id)
            ->update($data);

        if ($result) {
            $question = Question::where('id', $id)->first();
            $question->coords = unserialize($question->coords);

            return response($question->jsonSerialize(), Response::HTTP_OK);
        }
    }

}
