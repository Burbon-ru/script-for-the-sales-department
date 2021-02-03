<?php

use Illuminate\Support\Facades\Route;

$prefix = 'api\v1';

/**
 * Скрипты
 */
Route::get('/script', $prefix . '\ScriptController@index');
Route::get('/script/getScriptById', $prefix . '\ScriptController@getScriptById');
Route::post('/script/create', $prefix . '\ScriptController@create');
Route::patch('/script/update', $prefix . '\ScriptController@update');

/**
 * Вопросы
 */
Route::post('/question/create', $prefix . '\QuestionController@create');
Route::get('/question/getQuestionsByScriptId', $prefix . '\QuestionController@getQuestionsByScriptId');
Route::get('/question/getQuestionById', $prefix . '\QuestionController@getQuestionById');
Route::get('/question/getFirstQuestion', $prefix . '\QuestionController@getFirstQuestion');
Route::patch('/question/update', $prefix . '\QuestionController@update');
Route::delete('/question/delete', $prefix . '\QuestionController@destroy');

/**
 * Статусы вопросов
 */
Route::get('/status', $prefix . '\StatusController@index');
Route::get('/status/getStatusById', $prefix . '\StatusController@getStatusById');

/**
 * Ответы
 */
Route::post('/answer/create', $prefix . '\AnswerController@create');
Route::get('/answer/getAnswersOfQuestionById', $prefix . '\AnswerController@getAnswersOfQuestionById');
Route::get('/answer/getAnswerById', $prefix . '\AnswerController@getAnswerById');
Route::patch('/answer/update', $prefix . '\AnswerController@update');
Route::delete('/answer/delete', $prefix . '\AnswerController@destroy');

/**
 * Переменные
 */
Route::get('/variable/getVariablesByScriptId', $prefix . '\VariablesController@getVariablesByScriptId');
Route::post('/variable/create', $prefix . '\VariablesController@create');
Route::patch('/variable/update', $prefix . '\VariablesController@update');
Route::delete('/variable/delete', $prefix . '\VariablesController@destroy');

/**
 * Запущенные скрипты
 */
Route::post('/RunningScript/saveSequence', $prefix . '\RunningScriptController@saveSequence');
