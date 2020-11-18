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

/**
 * Скрипты
 */
Route::get('/script', 'ScriptController@index');
Route::post('/script/create', 'ScriptController@create');

/**
 * Вопросы
 */
Route::post('/question/create', 'QuestionController@create');
Route::get('/question/getQuestionsByScriptId', 'QuestionController@getQuestionsByScriptId');
Route::get('/question/getQuestionById', 'QuestionController@getQuestionById');
Route::patch('/question/update', 'QuestionController@update');
Route::delete('/question/delete', 'QuestionController@destroy');

/**
 * Статусы вопросов
 */
Route::get('/statuses', 'StatusesController@index');

/**
 * Ответы
 */
Route::post('/answer/create', 'AnswerController@create');
