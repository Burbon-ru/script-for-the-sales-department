<?php

namespace App\Http\Controllers\api\v1;

use App\Models\Script;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;

class ScriptController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index ()
    {
        return response(Script::all()->jsonSerialize(), Response::HTTP_OK);
    }

    /**
     * Создать скрипт
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function create (Request $request)
    {
        $data = $request->input();

        $script = new Script($data);
        $script->save();

        return response($script->jsonSerialize(), Response::HTTP_CREATED);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update (Request $request)
    {
        $data = $request->input();
        $id = $data['id'];

        if (isset($data['is_favorite']) && !empty($data['is_favorite'])) {
            $data['is_favorite'] = true;
        }

        $result = Script::findOrFail($id)
            ->update($data);

        if ($result) {
            return response(null, Response::HTTP_OK);
        }
    }

    /**
     * Получить скрипт по его id
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function getScriptById(Request $request)
    {
        $data = $request->input();
        $id = $data['id'];

        $script = Script::where('id', $id)
            ->first();

        return response($script->jsonSerialize(), Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy ($id)
    {
        //
    }
}
