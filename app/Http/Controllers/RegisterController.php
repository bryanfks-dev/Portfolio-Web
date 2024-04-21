<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function view() {
        return view('register');
    }

    public function handleRegister(Request $req) {
        // Get and validate user data
        $validatedData = $req->validate([
            'username' => 'required|unique:users',
            'password' => 'required|min:8|max:16',
            're-password' => 'required|min:8|max:16|same:password|required_with:password'
        ]);

        // Encrypt user password
        $validatedData['password'] = Hash::make($validatedData['password']);

        // Create user
        User::create($validatedData);

        return redirect('/login')->with('regist_success', 'status:success');
    }
}
