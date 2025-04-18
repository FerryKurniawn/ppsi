<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNameAndRoleToUsersTable extends Migration
{
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('nama')->after('username'); // Menambahkan kolom nama
            $table->string('role')->after('password'); // Menambahkan kolom role
        });
    }

    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('nama'); // Menghapus kolom nama
            $table->dropColumn('role'); // Menghapus kolom role
        });
    }
}
