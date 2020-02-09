<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
  protected $visible = [
    'id', 'name', 'path', 'price', 'category'
  ];
}
