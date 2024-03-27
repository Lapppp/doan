<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Users\User; 
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index()
    {
        $user = User::all();
        return response()->json([           
            'name' => $user->name,
            'email'=>$user->email,
            'password'=>$user->password,
        ]);
    }
}
