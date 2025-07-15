<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Public routes
Route::get('/', function () {
    return view('welcome');
})->name('home');

// Authentication routes
Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
    Route::post('/login', [AuthController::class, 'login']);
    
    Route::get('/register', [AuthController::class, 'showRegister'])->name('register');
    Route::post('/register', [AuthController::class, 'register']);
});

// Protected routes
Route::middleware('auth')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
    
    Route::get('/dashboard', function () {
        $user = auth()->user();
        
        if ($user->user_type === 'employer') {
            return redirect()->route('employer.dashboard');
        } else {
            return redirect()->route('candidate.dashboard');
        }
    })->name('dashboard');
    
    // Candidate routes
    Route::middleware('check.user.type:candidate')->group(function () {
        Route::get('/candidate/dashboard', function () {
            return view('candidate.dashboard');
        })->name('candidate.dashboard');
        
        Route::get('/candidate/profile', function () {
            return view('candidate.profile');
        })->name('candidate.profile');
        
        Route::get('/jobs', function () {
            return view('jobs.index');
        })->name('jobs.index');
        
        Route::get('/jobs/{job}', function () {
            return view('jobs.show');
        })->name('jobs.show');
    });
    
    // Employer routes
    Route::middleware('check.user.type:employer')->group(function () {
        Route::get('/employer/dashboard', function () {
            return view('employer.dashboard');
        })->name('employer.dashboard');
        
        Route::get('/employer/profile', function () {
            return view('employer.profile');
        })->name('employer.profile');
        
        Route::get('/jobs/create', function () {
            return view('jobs.create');
        })->name('jobs.create');
        
        Route::post('/jobs', function () {
            // Handle job creation
        })->name('jobs.store');
        
        Route::get('/jobs/{job}/edit', function () {
            return view('jobs.edit');
        })->name('jobs.edit');
        
        Route::put('/jobs/{job}', function () {
            // Handle job update
        })->name('jobs.update');
        
        Route::delete('/jobs/{job}', function () {
            // Handle job deletion
        })->name('jobs.destroy');
    });
});

// Password reset routes (if using Laravel's built-in password reset)
Route::get('/forgot-password', function () {
    return view('auth.forgot-password');
})->middleware('guest')->name('password.request');

Route::post('/forgot-password', function () {
    // Handle password reset request
})->middleware('guest')->name('password.email');

Route::get('/reset-password/{token}', function ($token) {
    return view('auth.reset-password', ['token' => $token]);
})->middleware('guest')->name('password.reset');

Route::post('/reset-password', function () {
    // Handle password reset
})->middleware('guest')->name('password.update');