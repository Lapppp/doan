<?php

namespace App\Repositories\API\Post;

use App\Models\Post;
use Illuminate\Support\Facades\Hash;
use Prettus\Repository\Eloquent\BaseRepository;

class PostRepository
{
    public function model()
    {
        return Post::class;
    }

}
