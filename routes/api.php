<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware(['cors'])->group(function(){
  Route::get('/', function(){ 
    return 'hello world';
  });

  // 商品一覧取得 
  Route::get('/products', 'ProductController@productsList')->name('productsList');
});

