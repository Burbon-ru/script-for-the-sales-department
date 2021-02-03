<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Question;
use App\Models\Status;

class TestController extends Controller
{
    /**
     * test
     */
    public function index()
    {
        echo 'TestController@index';
    }
}
