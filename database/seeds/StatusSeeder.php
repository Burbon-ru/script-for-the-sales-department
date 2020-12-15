<?php

use App\Models\Status;
use Illuminate\Database\Seeder;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $texts = [
            "Плохой", "Хороший", "Нейтральный"
        ];

        $colors = [
            "red", "green", "blue"
        ];

        for ($i = 0; $i < 3; $i++) {
            $item = new Status();

            $item->text = $texts[$i];
            $item->color = $colors[$i];

            $item->save();
        }
    }
}
