<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
Route::get('/question/getFirstQuestion', 'QuestionController@getFirstQuestion');
Route::patch('/question/update', 'QuestionController@update');
Route::delete('/question/delete', 'QuestionController@destroy');

/**
 * Статусы вопросов
 */
Route::get('/status', 'StatusController@index');
Route::get('/status/getStatusById', 'StatusController@getStatusById');

/**
 * Ответы
 */
Route::post('/answer/create', 'AnswerController@create');
Route::get('/answer/getAnswersOfQuestionById', 'AnswerController@getAnswersOfQuestionById');
Route::get('/answer/getAnswerById', 'AnswerController@getAnswerById');
Route::patch('/answer/update', 'AnswerController@update');
Route::delete('/answer/delete', 'AnswerController@destroy');

/**
 * Переменные
 */
Route::get('/variable/getVariablesByScriptId', 'VariablesController@getVariablesByScriptId');
Route::post('/variable/create', 'VariablesController@create');
Route::patch('/variable/update', 'VariablesController@update');
Route::delete('/variable/delete', 'VariablesController@destroy');
