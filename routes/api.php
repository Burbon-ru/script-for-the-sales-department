<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/scripts', 'ScriptController@index');


Route::post('/question/create', 'QuestionController@create');
Route::get('/question/getQuestionsByScriptId', 'QuestionController@getQuestionsByScriptId');
Route::get('/question/getQuestionById', 'QuestionController@getQuestionById');
Route::patch('/question/update', 'QuestionController@update');
