<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class RunningScript extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'sequenсe'
    ];
}
