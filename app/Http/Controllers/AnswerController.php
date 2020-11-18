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
}
