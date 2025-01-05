<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\StoreController;

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

Route::controller(StoreController::class)->group(function() {
    Route::get('/stores', 'index')->name('stores.index');
    Route::get('/stores/create', 'create')->name('stores.create');
    Route::post('/stores/store', 'store')->name('stores.store');
});