<?php

namespace App\Http\Controllers\Auths;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\User\LoginUserRequest;
use App\Http\Requests\User\RegisterUserRequest;
use App\Helpers\ResponseHelper;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\Session;
use App\Models\Users\User;

class AuthsController extends Controller
{
    public function showLoginForm()
    {
        return view('auth.login-modal');
    }

    public function checklogin(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            return response()->json(['status' => 'success']);
        } else {
            return response()->json(['status' => 'error', 'message' => 'Tên đăng nhập hoặc mật khẩu không chính xác.']);
        }
    }

    // Xử lý đăng nhập
    public function login(LoginUserRequest $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Đăng nhập thành công, chuyển hướng đến trang dashboard
            return redirect()->intended('dashboard');
        }

        // Đăng nhập thất bại, chuyển hướng lại form đăng nhập với thông báo lỗi
        return redirect()->back()->withErrors(['email' => 'Thông tin đăng nhập không chính xác.']);
    }

    // Xử lý đăng xuất
    public function logout()
    {
        Auth::logout();

        return redirect()->route('login');
    }

    public function san_pham(Request $request)
    {
        // $_SESSION['email'] = 'ss';
        session()->put('email', $email = 'ss');
        // dd($_SESSION['email']);
        // return redirect()->route('layouts.app');
        return view('welcome', ['name' => 1]);
    }
}