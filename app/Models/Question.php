<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Question extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'text',
        'coords'
    ];

    /**
     * Получить ответы вопроса
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function answers () {
        return $this->hasMany(Answer::class, 'question_id');
    }

}
