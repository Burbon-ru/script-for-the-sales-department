<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AnswerController extends Controller
{
    /**
     * Создает ответ
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function create (Request $request) {
        $data = $request->input();
        $data['coords'] = serialize($data['coords']);

        $item = new Answer();
        $item->name = $data['name'];
        $item->coords = $data['coords'];
        $item->question_id = $data['question_id'];
        $item->status_id = $data['status_id'];
        $item->save();

        return response($item->jsonSerialize(), Response::HTTP_CREATED);
    }

    /**
     * Обновляет ответ и если все ок возвращает обновленный ответ
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function update (Request $request) {
        $data = $request->input();
        $id = $data['id'];

        $this->writeLogArray($data);

        if ($data['coords']) {
            $data['coords'] = serialize($data['coords']);
        }

        unset($data['id']);

        $result = Answer::findOrFail($id)
            ->update($data);

        if ($result) {
            $answer = Answer::find($id);
            $answer->coords = unserialize($answer->coords);

            return response($answer->jsonSerialize(), Response::HTTP_OK);
        }
    }

    /**
     * Удаляет ответ
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function destroy (Request $request) {
        $data = $request->input();

        Answer::destroy($data['id']);

        return response(null, Response::HTTP_OK);
    }

    /**
     * Получить все ответы вопроса по его id
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function getAnswersOfQuestionById (Request $request) {
        $data = $request->input();

        $answers = Answer::where('question_id', $data['id'])
            ->get();

        foreach ($answers as $answer) {
            $answer->coords = unserialize($answer->coords);
        }

        return response($answers->jsonSerialize(), Response::HTTP_OK);
    }

    /**
     * Получить ответ по его id
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function getAnswerById (Request $request) {
        $data = $request->input();
        $id = $data['id'];

        $answer = Answer::find($id);
        $answer->coords = unserialize($answer->coords);

        return response($answer->jsonSerialize(), Response::HTTP_OK);
    }

}
