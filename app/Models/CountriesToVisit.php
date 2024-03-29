<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CountriesToVisit extends Model
{
    use HasFactory;

    protected $table = "countries_to_visit";
    public $timestamps = false;

    protected $fillable = [
        'country_id',
        'user_id',
    ];
}
