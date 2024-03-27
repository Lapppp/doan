<?php


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::any('/', [\App\Http\Controllers\Frontend\Home\HomeController::class, 'index'])->name('frontend.home.index');
Route::any('login', [\App\Http\Controllers\Auth\FrontendLoginController::class, 'login'])->name('frontend.auth.login');




