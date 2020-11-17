<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Answer extends Model
{
    use SoftDeletes;

    /**
     * Получить следующий вопрос
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function nextQuestion () {
        return $this->hasOne(Question::class, 'next_question_id');
    }

    /**
     * Получить статус
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function status () {
        return $this->hasOne(Status::class, 'status_id');
    }

}
