<?php

namespace App\Http\Controllers\Api\Poster;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use app\Http\Requests\Poster\CreateCategoryRequest;

class CategoryApiController extends Controller
{
    public function index()
    {
        $Category = Category::all();
        return response()->json($Category);

    }

    public function store(CreateCategoryRequest $request)
    {
        // Xử lý logic để lưu category mới
    }

    public function show($id)
    {
        return Category::findOrFail($id);
    }

    public function update(CreateCategoryRequest $request, $id)
    {
        // Xử lý logic để cập nhật category
    }

    public function destroy($id)
    {
        // Xử lý logic để xóa category
    }
}
