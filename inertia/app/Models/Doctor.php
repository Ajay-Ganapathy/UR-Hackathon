<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{    protected $fillable = [
    'patient_id',
    'doctor_id',
    'specialization',
    'appoinment_at',
        ];
    use HasFactory;
}
