<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patient_visits', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_id')->constrained('users', 'id');
            $table->foreignId('doctor_id')->constrained('doctors', 'id');
            $table->foreignId('appoinment_id')->constrained('appoinments', 'id');
            $table->string('ipfsHashId',256);
            $table->integer('charges')->unsigned()->nullable();
            $table->string('medicine')->nullable();
            $table->string('disease')->nullable();
            $table->string('disease_description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patient_visits');
    }
};
