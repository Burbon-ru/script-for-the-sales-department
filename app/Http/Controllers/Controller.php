<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function writeLogArray ($array = []) {
        $logPath = __DIR__ . '/log.txt';
        $fd = fopen($logPath, 'a');
        $date = date('Y-m-d H:i:s');
        fwrite($fd, $date." - launched\n");

        ob_start();
        echo "<pre>"; print_r($array); echo "</pre>";
        $data = ob_get_clean();

        if ($data) {
            fwrite($fd, $data);
            fwrite($fd, "\n");
        }

        fclose($fd);
    }
}
