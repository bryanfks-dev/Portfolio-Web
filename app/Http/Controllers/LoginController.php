<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function view() {
        return view("login");
    }

    public function handleLogin(Request $req) {
        // Get and validate user data from request
        $credentials = $req->validate([
            'username' => 'required',
            'password' => 'required|min:8|max:16'
        ]);
        
        if (Auth::attempt($credentials)) {
            // Generate session for user
            $req->session()->regenerate();

            return redirect()->intended('/#ideas');
        }

        return back()->with('login_error', 'status:error');
    }
}
