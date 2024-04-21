<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use Illuminate\Support\Facades\Route;

// Root route
Route::group(['prefix' => '/'], function() {
    Route::get('/', [HomeController::class, 'view']);

    Route::post('/', [HomeController::class, 'handleComment'])
        ->middleware(['auth', 'throttle:comment']);
});

// Comment actions route
Route::group(['middleware' => 'auth'], function() {
    Route::group(['prefix' => '/'], function() {
        Route::get('/delete/{id}', [HomeController::class, 'handleDeleteComment']);

        Route::post('/update', [HomeController::class, 'handleUpdateComment']);
    });
});

Route::get('/projects', function() {
    return view('projects');
});

Route::get('/aboutweb', function() {
    return view('about_web');
});

// Register and login route
Route::group(['middleware' => 'guest'], function() {
    Route::group(['prefix' => 'register'], function() {
        Route::get('/', [RegisterController::class, 'view']);

        Route::post('/', [RegisterController::class, 'handleRegister']);
    });

    Route::group(['prefix' => 'login'], function() {
        Route::get('/', [LoginController::class, 'view'])->name('login');

        Route::post('/', [LoginController::class, 'handleLogin'])->middleware('throttle:login');
    });
});
