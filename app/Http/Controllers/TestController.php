<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Status;

class TestController extends Controller
{
    /**
     *
     */
    public function index()
    {
        $id = 1;

        $data = [
            'name' => 'Привет',
            'text' => '<p>asdfasdfas<br>dfasdf</p>'
        ];

        $result = Question::find($id)
            ->update($data);

        dd($result);
    }

    /**
     * todo: перенести в сидоры
     */
    public function createStatuses () {
        $texts = [
            "Плохой", "Хороший", "Нейтральный"
        ];

        $colors = [
            "red", "green", "blue"
        ];

        for ($i = 0; $i < 3; $i++) {
            $item = new Status();

            $item->text = $texts[$i];
            $item->color = $colors[$i];

            $item->save();
        }
    }
}
