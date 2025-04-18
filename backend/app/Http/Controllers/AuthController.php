<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

        $credentials = $request->only('username', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();

            if ($user->role === 'admin') {
                return response()->json([
                    'message' => 'Login successful',
                    'redirect' => 'http://localhost:3000/Rekap-surat-masuk', // URL lokal untuk halaman admin
                    'user' => $user,
                ], 200);
            } elseif ($user->role === 'kepala_sekolah') {
                return response()->json([
                    'message' => 'Login successful',
                    'redirect' => 'http://localhost:3000/......', // URL lokal untuk halaman kepala sekolah
                    'user' => $user,
                ], 200);
            }
        }

        return response()->json(['error' => 'Unauthorized'], 401);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json(['message' => 'Successfully logged out']);
    }
}
