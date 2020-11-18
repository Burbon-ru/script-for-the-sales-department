<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('answers', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('name');
            $table->string('coords');

            $table->bigInteger('next_question_id')->unsigned()->nullable();
            $table->bigInteger('status_id')->unsigned();
            $table->bigInteger('question_id')->unsigned();

            $table->foreign('next_question_id')->references('id')->on('questions');
            $table->foreign('status_id')->references('id')->on('statuses');
            $table->foreign('question_id')->references('id')->on('questions');

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('answers');
    }
}
