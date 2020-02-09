<?php

namespace Tests\Feature;

use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RegisterApiTest extends TestCase
{
  use RefreshDatabase;
  
  /**
   * @test
   */
  public function should_新しい名前を登録して返却する()
  {
    // POST送信時 送信用データ
    $data = [
      'name' => 'tanonder user'
    ];

    // レスポンス
    $response = $this->json('POST', route('register'), $data);

    // ユーザーマスタから最新のレコードを取得
    $user = User::first();
    // 送信用データと登録されたレコードデータの比較
    $this->assertEquals($data['name'], $user->name);

    $response
      ->assertStatus(201)
      ->assertJson(['name' => $user->name]);
  }
}
