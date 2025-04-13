<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    // Kolom yang bisa diisi secara massal
    protected $fillable = [
        'username',
        'password',
    ];

    // Kolom yang disembunyikan dari output JSON
    protected $hidden = [
        'password',
        'remember_token',
    ];
}
