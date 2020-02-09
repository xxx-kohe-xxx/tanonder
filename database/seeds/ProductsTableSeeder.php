<?php

use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    DB::table('products')->insert([
      'name' => 'まぐろ',
      'path' => 'http://localhost',
      'price' => 108,
      'category' => '握り'
    ]);
    DB::table('products')->insert([
      'name' => 'まぐろはらみ',
      'path' => 'http://localhost',
      'price' => 108,
      'category' => '握り'
    ]);
    DB::table('products')->insert([
      'name' => '特製漬けまぐろ',
      'path' => 'http://localhost',
      'price' => 108,
      'category' => '握り'
    ]);
  }
}
