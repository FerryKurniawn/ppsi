<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'username' => 'admin1',
            'password' => Hash::make('admin123'),
            'nama' => 'Admin TU 1',
            'role' => 'admin',
        ]);

        User::create([
            'username' => 'admin2',
            'password' => Hash::make('admin123'),
            'nama' => 'Admin Kedua',
            'role' => 'admin',
        ]);

        User::create([
            'username' => 'kepsek',
            'password' => Hash::make('kepsek123'),
            'nama' => 'Kepala Sekolah',
            'role' => 'kepala_sekolah',
        ]);
    }
}
