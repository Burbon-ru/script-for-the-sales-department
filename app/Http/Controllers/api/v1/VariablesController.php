<?php

namespace App\Http\Controllers\api\v1;

use App\Models\Variable;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;

class VariablesController extends Controller
{

    /**
     * Создает переменную
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function create(Request $request): Response
    {
        $data = $request->input();

        $item = new Variable();
        $item->name = $data['name'];
        $item->code = \Str::slug($data['name']);
        $item->script_id = $data['script_id'];
        $item->save();

        return response($item->jsonSerialize(), Response::HTTP_CREATED);
    }

    /**
     * Обновляет переменную и если все ок возвращает обновленную переменную
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function update(Request $request)
    {
        $data = $request->input();
        $id = $data['id'];
        unset($data['id']);

        $result = Variable::findOrFail($id)
            ->update($data);

        if ($result) {
            $variable = Variable::where('id', $id)->first();

            return response($variable->jsonSerialize(), Response::HTTP_OK);
        }
    }

    /**
     * Удаляет переменную
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function destroy(Request $request)
    {
        $data = $request->input();
        $id = $data['id'];

        if (Variable::destroy($id)) {
            return response(null, Response::HTTP_OK);
        }

        return response(null, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * Получает все переменные по id скрипта
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function getVariablesByScriptId(Request $request)
    {
        $data = $request->input();
        $id = $data['id'];

        $variables = Variable::where('script_id', $id)
            ->get();

        return response($variables->jsonSerialize(), Response::HTTP_OK);
    }

}
