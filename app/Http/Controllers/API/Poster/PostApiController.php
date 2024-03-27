<?php

namespace App\Http\Controllers\Api\Poster;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use app\Repositories\API\Post\PostRepository;
use app\Http\Requests\Poster\PostRequest;

class PostApiController extends Controller
{

    protected $postRepository;

    public function __construct(PostRepository $postRepository)
    {
        $this->postRepository = $postRepository;
    }
    public function index()
    {
        // $posts = Post::all();
        // return response()->json($posts);
        return 1;
    }

    public function store(PostRequest $request)
    {


    }

    public function show($id)
    {
        return Post::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        // Xử lý logic để cập nhật post
    }

    public function destroy($id)
    {
        // Xử lý logic để xóa post
    }
}

