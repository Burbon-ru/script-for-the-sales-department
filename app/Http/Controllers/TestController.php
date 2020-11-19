<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Question;
use App\Models\Status;

class TestController extends Controller
{
    /**
     *
     */
    public function index ()
    {

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
