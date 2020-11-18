<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Status;

class TestController extends Controller
{
    /**
     *
     */
    public function index()
    {
        $data = [
            'name' => 'Привет',
            'coords' => 'a:2:{s:1:"x";i:356;s:1:"y";i:37;}',
            'question_id' => 1,
            'status_id' => 1
        ];

        $item = new Answer();
        $item->name = $data['name'];
        $item->coords = $data['coords'];
        $item->question_id = $data['question_id'];
        $item->status_id = $data['status_id'];
        $item->save();

        dd($item);
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
