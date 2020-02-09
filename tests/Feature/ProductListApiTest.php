<?php

namespace Tests\Feature;

use App\Product;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ProductListApiTest extends TestCase
{
  use RefreshDatabase;
  /** 
   * @test
  */
  public function should_登録してある全商品のデータを取得する()
  {
    // APIのレスポンス
    $response = $this->json('GET', route('productList'));

    // 商品データを取得
    $products = Product::select('name', 'path', 'price', 'category')->get();

    // レスポンスの期待値
    $expected = $products->map(function ($product) {
      return [
        'name' => $product->name,
        'path' => $product->path,
        'price' => $product->price,
        'category' => $product->category
      ];
    })
    ->all();
    
    $response->assertStatus(200)
      ->assertJsonCount(4, 'data')
      ->assertJsonFragment([
        "data" => $expected,
      ]);
  }
}
