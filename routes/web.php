<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\CategoryController;

Route::view('/', 'index')->name('index');

Route::controller(CategoryController::class)->group(function() {
    Route::get('/categories', 'index')->name('categories.index');
    Route::get('/categories/create', 'create')->name('categories.create');
    Route::post('/categories/store', 'store')->name('categories.store');
});

Route::controller(ItemController::class)->group(function() {
    Route::get('/items', 'index')->name('items.index');
    Route::get('/items/create', 'create')->name('items.create');
    Route::post('/items/store', 'store')->name('items.store');
});