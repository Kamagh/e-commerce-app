<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {
    // Index - Get all products
    Route::get('/products', [ProductController::class, 'index']);

    // Show - Get a single product
    Route::get('/products/{id}', [ProductController::class, 'getProduct']);

    // Store - Create a new product
    Route::post('/products', [ProductController::class, 'store']);

    // Update - Update an existing product
    Route::put('/products/{id}', [ProductController::class, 'update']);

    // Destroy - Delete a product
    Route::delete('/products/{id}', [ProductController::class, 'destroy']);
});


Route::middleware('auth:sanctum')->group(function () {
    // Index - Get all categories
    Route::get('/categories', [CategoryController::class, 'index']);

    // Show - Get a single category
    Route::get('/categories/{id}', [CategoryController::class, 'show']);

    // Store - Create a new category
    Route::post('/categories', [CategoryController::class, 'store']);

    // Update - Update an existing category
    Route::put('/categories/{id}', [CategoryController::class, 'update']);

    // Destroy - Delete a category
    Route::delete('/categories/{id}', [CategoryController::class, 'destroy']);
});
