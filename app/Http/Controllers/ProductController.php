<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

class ProductController extends Controller
{
  // 商品一覧取得API
  public function productsList(){
    $products = Product::select('id', 'name', 'path', 'price', 'category')->get();
    return $products;
  }
}
