@extends('layouts.app')

@section('title', 'Register - Gulf Jobs Portal')

@section('content')
<div class="auth-container">
    <div class="auth-wrapper register-wrapper">
        <div class="auth-header">
            <h2>Create Account</h2>
            <p>Join thousands of job seekers and employers</p>
        </div>

        <div class="auth-form">
            <!-- Display validation errors -->
            @if ($errors->any())
                <div class="alert alert-error">
                    <ul style="margin: 0; padding-left: 1.5rem;">
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            <!-- Display success message -->
            @if (session('success'))
                <div class="alert alert-success">
                    {{ session('success') }}
                </div>
            @endif

            <form method="POST" action="{{ route('register') }}">
                @csrf

                <!-- User Type Selection -->
                <div class="form-group">
                    <label>Account Type</label>
                    <div class="user-type-selector">
                        <div class="user-type-option">
                            <input type="radio" id="candidate" name="user_type" value="candidate" 
                                   {{ old('user_type', 'candidate') == 'candidate' ? 'checked' : '' }}>
                            <label for="candidate" class="user-type-label">
                                <i class="fas fa-user"></i>
                                <span>Job Seeker</span>
                            </label>
                        </div>
                        <div class="user-type-option">
                            <input type="radio" id="employer" name="user_type" value="employer" 
                                   {{ old('user_type') == 'employer' ? 'checked' : '' }}>
                            <label for="employer" class="user-type-label">
                                <i class="fas fa-building"></i>
                                <span>Employer</span>
                            </label>
                        </div>
                    </div>
                    @error('user_type')
                        <div class="error-message">{{ $message }}</div>
                    @enderror
                </div>

                <!-- Name -->
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        class="form-control @error('name') error @enderror" 
                        value="{{ old('name') }}" 
                        required 
                        autofocus
                        placeholder="Enter your full name"
                    >
                    @error('name')
                        <div class="error-message">{{ $message }}</div>
                    @enderror
                </div>

                <!-- Email Address -->
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        class="form-control @error('email') error @enderror" 
                        value="{{ old('email') }}" 
                        required
                        placeholder="Enter your email address"
                    >
                    @error('email')
                        <div class="error-message">{{ $message }}</div>
                    @enderror
                </div>

                <!-- Phone Number -->
                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        class="form-control @error('phone') error @enderror" 
                        value="{{ old('phone') }}" 
                        required
                        placeholder="Enter your phone number"
                    >
                    @error('phone')
                        <div class="error-message">{{ $message }}</div>
                    @enderror
                </div>

                <!-- Password -->
                <div class="form-group">
                    <label for="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        class="form-control @error('password') error @enderror" 
                        required
                        placeholder="Create a strong password"
                    >
                    @error('password')
                        <div class="error-message">{{ $message }}</div>
                    @enderror
                    <small class="help-text">Password must be at least 8 characters long</small>
                </div>

                <!-- Confirm Password -->
                <div class="form-group">
                    <label for="password_confirmation">Confirm Password</label>
                    <input 
                        type="password" 
                        id="password_confirmation" 
                        name="password_confirmation" 
                        class="form-control @error('password_confirmation') error @enderror" 
                        required
                        placeholder="Confirm your password"
                    >
                    @error('password_confirmation')
                        <div class="error-message">{{ $message }}</div>
                    @enderror
                </div>

                <!-- Terms and Conditions -->
                <div class="form-group">
                    <div class="checkbox-group">
                        <input type="checkbox" id="terms" name="terms" 
                               {{ old('terms') ? 'checked' : '' }} required>
                        <label for="terms">
                            I agree to the <a href="/terms" target="_blank">Terms of Service</a> 
                            and <a href="/privacy" target="_blank">Privacy Policy</a>
                        </label>
                    </div>
                    @error('terms')
                        <div class="error-message">{{ $message }}</div>
                    @enderror
                </div>

                <!-- Submit Button -->
                <button type="submit" class="btn btn-primary">
                    <i class="fas fa-user-plus"></i> Create Account
                </button>
            </form>

            <!-- Auth Links -->
            <div class="auth-links">
                <p>Already have an account? <a href="{{ route('login') }}">Sign in here</a></p>
            </div>
        </div>
    </div>
</div>

<style>
    .register-wrapper {
        max-width: 500px;
    }
    
    .auth-container {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        position: relative;
        overflow: hidden;
    }
    
    .auth-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.1)"/></svg>') repeat;
        background-size: 50px 50px;
        animation: float 6s ease-in-out infinite;
    }
    
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
    
    .auth-wrapper {
        position: relative;
        z-index: 1;
    }

    .auth-header {
        background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
        position: relative;
        overflow: hidden;
    }
    
    .auth-header::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
        animation: pulse 3s ease-in-out infinite;
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); opacity: 0.5; }
        50% { transform: scale(1.1); opacity: 0.8; }
    }
    
    .user-type-selector {
        display: flex;
        gap: 1rem;
        margin-bottom: 0.5rem;
    }
    
    .user-type-option {
        flex: 1;
    }
    
    .user-type-option input[type="radio"] {
        display: none;
    }
    
    .user-type-label {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        border: 2px solid #e5e7eb;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.3s ease;
        background: white;
        margin-bottom: 0;
    }
    
    .user-type-label:hover {
        border-color: #2563eb;
        background: #f0f4ff;
    }
    
    .user-type-option input[type="radio"]:checked + .user-type-label {
        border-color: #2563eb;
        background: #f0f4ff;
        color: #2563eb;
    }
    
    .user-type-label i {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }
    
    .user-type-label span {
        font-size: 0.9rem;
        font-weight: 500;
    }
    
    .form-control {
        transition: all 0.3s ease;
        position: relative;
    }
    
    .form-control:focus {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15);
    }
    
    .help-text {
        font-size: 0.8rem;
        color: #6b7280;
        margin-top: 0.25rem;
        display: block;
    }
    
    .btn-primary {
        position: relative;
        overflow: hidden;
    }
    
    .btn-primary::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.5s;
    }
    
    .btn-primary:hover::before {
        left: 100%;
    }
    
    .checkbox-group a {
        color: #2563eb;
        text-decoration: none;
    }
    
    .checkbox-group a:hover {
        text-decoration: underline;
    }
</style>
@endsection