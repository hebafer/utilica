<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Apartment extends Model
{
    public function user() //tenet
    {
        return $this->belongsTo('App\User');
    }

    public function building()
    {
        return $this->belongsTo('App\Apartment');
    }



}