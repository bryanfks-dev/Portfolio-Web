<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
});

Route::get('/projects', function() {
    return view('projects');
});

Route::get('/aboutweb', function() {
    return view('about_web');
});
