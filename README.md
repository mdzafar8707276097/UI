# Laravel Authentication System - Login & Register

This is a complete authentication system for a Laravel application with beautiful, modern UI for both login and registration pages.

## Features

- **Modern Design**: Clean, responsive UI with smooth animations
- **User Types**: Support for both candidates (job seekers) and employers
- **Form Validation**: Comprehensive client-side and server-side validation
- **Laravel Integration**: Full integration with Laravel's authentication system
- **CSRF Protection**: Built-in CSRF protection for all forms
- **Password Confirmation**: Password confirmation field in registration
- **Remember Me**: Login persistence functionality
- **Error Handling**: Beautiful error message display
- **Responsive**: Mobile-friendly design

## Installation & Setup

### 1. Register the Middleware

Add the middleware to your `app/Http/Kernel.php`:

```php
protected $routeMiddleware = [
    // ... other middleware
    'check.user.type' => \App\Http\Middleware\CheckUserType::class,
];
```

### 2. Run the Migration

```bash
php artisan migrate
```

### 3. Configure Authentication

Make sure your `config/auth.php` is set up to use the User model:

```php
'providers' => [
    'users' => [
        'driver' => 'eloquent',
        'model' => App\Models\User::class,
    ],
],
```

### 4. Update Routes

The routes are already configured in `routes/web.php`. Make sure to adjust the route names and controllers based on your application structure.

## File Structure

```
├── resources/views/
│   ├── layouts/
│   │   └── app.blade.php          # Base layout
│   └── auth/
│       ├── login.blade.php        # Login page
│       └── register.blade.php     # Registration page
├── app/Http/Controllers/Auth/
│   └── AuthController.php         # Authentication controller
├── app/Http/Middleware/
│   └── CheckUserType.php          # Middleware for user type checking
├── app/Models/
│   └── User.php                   # User model
├── database/migrations/
│   └── 2024_01_01_000000_create_users_table.php
└── routes/
    └── web.php                    # Web routes
```

## Usage

### Login Page

Visit `/login` to access the login form. Features:
- Email and password authentication
- Remember me functionality
- Validation error display
- Redirect to appropriate dashboard based on user type

### Registration Page

Visit `/register` to access the registration form. Features:
- User type selection (candidate/employer)
- Full name, email, phone, password fields
- Password confirmation
- Terms and conditions acceptance
- Comprehensive validation

### User Types

The system supports two user types:
- **Candidate**: Job seekers who can browse and apply for jobs
- **Employer**: Companies who can post jobs and manage applications

## Customization

### Styling

All styles are included in the layout file. You can:
- Extract CSS to separate files
- Use Laravel Mix for asset compilation
- Customize colors and animations
- Add your own branding

### Form Fields

To add more fields to the registration form:

1. Update the database migration
2. Add fields to the User model's `$fillable` array
3. Update the validation rules in the controller
4. Add form inputs to the view

### User Types

To add more user types:

1. Update the database migration enum
2. Update validation rules
3. Add new middleware checks
4. Create appropriate routes and views

## Security Features

- **CSRF Protection**: All forms include CSRF tokens
- **Password Hashing**: Passwords are hashed using Laravel's Hash facade
- **Input Validation**: Comprehensive server-side validation
- **SQL Injection Protection**: Eloquent ORM prevents SQL injection
- **Session Management**: Secure session handling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE11+ (with polyfills)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).