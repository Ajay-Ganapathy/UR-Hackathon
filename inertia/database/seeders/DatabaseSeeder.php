<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

         \App\Models\User::factory()->create([
             'name' => 'Test User',
             'email' => 'test@example.com',
             'role' =>  'admin',
         ]);
         \App\Models\User::factory()->create([
            'name' => 'Test User1',
            'email' => 'test1@example.com',
            'role' =>  'patient',
        ]);
        \App\Models\User::factory()->create([
            'name' => 'Test User2',
            'email' => 'test2@example.com',
            'role' =>  'patient',
        ]);
        \App\Models\User::factory()->create([
            'name' => 'Test User3',
            'email' => 'test3@example.com',
            'role' =>  'doctor',
        ]);
        \App\Models\User::factory()->create([
            'name' => 'Test User4',
            'email' => 'test4@example.com',
            'role' =>  'doctor',
        ]);
    }
}
