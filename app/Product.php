<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
  protected $fillable = [
    'name', 'path', 'price', 'category'
  ];

  protected $visible = [
    'id', 'name', 'path', 'price', 'category'
  ];
}
