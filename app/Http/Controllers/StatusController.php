<?php

namespace App\Http\Controllers;

use App\Models\Status;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class StatusController extends Controller
{
    /**
     * Display a listing of the resource.
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
