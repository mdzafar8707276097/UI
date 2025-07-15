<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'password',
        'user_type',
        'avatar',
        'bio',
        'profile_data',
        'is_active',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'profile_data' => 'array',
        'is_active' => 'boolean',
    ];

    /**
     * Check if user is a candidate
     */
    public function isCandidate()
    {
        return $this->user_type === 'candidate';
    }

    /**
     * Check if user is an employer
     */
    public function isEmployer()
    {
        return $this->user_type === 'employer';
    }

    /**
     * Get the user's full name
     */
    public function getFullNameAttribute()
    {
        return $this->name;
    }

    /**
     * Get the user's avatar URL
     */
    public function getAvatarUrlAttribute()
    {
        return $this->avatar ? asset('storage/' . $this->avatar) : asset('images/default-avatar.png');
    }

    /**
     * Scope to filter active users
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope to filter users by type
     */
    public function scopeOfType($query, $type)
    {
        return $query->where('user_type', $type);
    }
}