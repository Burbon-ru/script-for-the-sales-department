<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use Illuminate\Http\Request;

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
        $this->writeLogArray($data);

        $item = new Answer($data);
        $item->save();

        return response($item->jsonSerialize(), Response::HTTP_CREATED);
    }
}
