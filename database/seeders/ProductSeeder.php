<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run()
    {
        // Men's Products
        Product::create([
            'name' => 'Men Jacket',
            'description' => 'A stylish jacket for men.',
            'price' => 99.99,
            'category_id' => 1, // Assuming Men category has ID 1
        ]);

        Product::create([
            'name' => 'Men Shoes',
            'description' => 'Comfortable shoes for men.',
            'price' => 49.99,
            'category_id' => 1,
        ]);

        // Women's Products
        Product::create([
            'name' => 'Women Bracelet',
            'description' => 'An elegant bracelet for women.',
            'price' => 29.99,
            'category_id' => 2, // Assuming Women category has ID 2
        ]);

        Product::create([
            'name' => 'Women Shoes',
            'description' => 'Stylish shoes for women.',
            'price' => 59.99,
            'category_id' => 2,
        ]);

    }
}
