<?php

namespace App\Repositories;

use App\Models\Category;
use Illuminate\Support\Facades\Hash;

use Prettus\Repository\Eloquent\BaseRepository;
class CategoryRepository
{
    protected $model;

    public function __construct(Category $category)
    {
        $this->model = $category;
    }

    public function all()
    {
        return $this->model->all();
    }

    public function create(array $data)
    {
        return $this->model->create($data);
    }
}
