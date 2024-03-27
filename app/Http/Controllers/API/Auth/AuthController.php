<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\LoginUserRequest;
use App\Http\Requests\User\RegisterUserRequest;
use App\Models\Users\User;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Helpers\ResponseHelper;

class AuthController extends Controller
{
    protected $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function login(LoginUserRequest $request)
    {
        try {
            $credentials = $request->only('email', 'password');
            if (!Auth::attempt($credentials)) {
                return ResponseHelper::error('Mật khẩu hoặc tài khoản không đúng', [], 401);
            }
            $user = Auth::user();
            $token = $user->createToken('Personal Access Token')->accessToken;
            return ResponseHelper::success('Đăng nhập thành công', ['token' => $token]);
        } catch (\Exception $e) {
            return ResponseHelper::error($e->getMessage(), [], 500);
        }
    }

    public function register(RegisterUserRequest $request)
    {
        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
            $user = Auth::user();
            $token = $user->createToken('Personal Access Token')->accessToken;

            return ResponseHelper::success('Đăng nhập thành công', ['token' => $token]);
        } catch (\Exception $e) {
            return ResponseHelper::error($e->getMessage(), [], 500);
        }
    }
    public function logout()
    {
        try {
            auth()->user()->token()->revoke();
            return ResponseHelper::success('Đăng xuất thành công');
        } catch (\Exception $e) {
            return ResponseHelper::error($e->getMessage(), [], 500);
        }
    }

    public function refresh()
    {
        try {
            $accessToken = auth()->user()->token()->refresh();
            return ResponseHelper::success('Token đã được làm mới', ['token' => $accessToken]);
        } catch (\Exception $e) {
            return ResponseHelper::error($e->getMessage(), [], 500);
        }
    }
}
