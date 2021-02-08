<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\RunningScript;
use Illuminate\Http\Response;
use Carbon\Carbon;

class RunningScriptController extends Controller
{
    /**
     * Палучить все запущенные скрипты
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function index()
    {
        $scripts = RunningScript::select(['id', 'created_at'])
            ->get();

        foreach ($scripts as &$script) {
            $script['created'] = Carbon::parse($script['created_at'])->format('d M Y H:i');
        }

        return response($scripts->jsonSerialize(), Response::HTTP_OK);
    }


    public function getById(int $id)
    {
        $script = RunningScript::find($id);

        if ($script) {
            return response($script->jsonSerialize(), Response::HTTP_OK);
        } else {
            return response(null, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Сохранить последовательность
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function saveSequence(Request $request)
    {
        $data = $request->input();

        $item = new RunningScript;
        $item->questions = $data['questions'];
        $item->answers = $data['answers'];
        $item->save();

        return response($item->jsonSerialize(), Response::HTTP_OK);
    }
}
