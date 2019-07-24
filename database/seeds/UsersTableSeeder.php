<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        factory(User::class)->create([
            'name' => 'Faustino Vasquez Limon',
            'email' => 'fvasquez@local.com',
        ]);
    }
}
