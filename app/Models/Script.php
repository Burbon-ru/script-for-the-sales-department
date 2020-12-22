<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Script extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name'
    ];

    /**
     * Получить вопросы скрипта
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function questions () {
        return $this->hasMany(Question::class, 'script_id');
    }

    /**
     * Получить переменные скрипта
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function variables () {
        return $this->hasMany(Variable::class, 'script_id');
    }

}
