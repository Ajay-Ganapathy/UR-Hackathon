<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class patientVisit extends Model
{    protected $fillable = [
    'patient_id',
    'doctor_id',
    'appoinment_id',
    'ipfsHashId',
    'charges',
    'medicine',
    'disease',
    'disease_description',
];
    use HasFactory;
}
