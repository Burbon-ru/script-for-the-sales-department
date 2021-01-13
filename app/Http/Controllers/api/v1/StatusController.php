<?php

namespace App\Http\Controllers\api\v1;

use App\Models\Status;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;

class StatusController extends Controller
{
    /**
     * Получить все статусы
     *
     * @return \Illuminate\Http\Response
     */
    public function index ()
    {
        return response(Status::all()->jsonSerialize(), Response::HTTP_OK);
    }

    /**
     * Получить статус по его id
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     */
    public function getStatusById (Request $request) {
        $data = $request->input();
        $id = $data['id'];

        $status = Status::find($id);

        $status->coords = unserialize($status->coords);

        return response($status->jsonSerialize(), Response::HTTP_OK);
    }

}
