<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckUserType
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @param  string  $type
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, $type)
    {
        if (!Auth::check()) {
            return redirect()->route('login');
        }

        $user = Auth::user();

        if ($user->user_type !== $type) {
            // Redirect to appropriate dashboard based on user type
            if ($user->user_type === 'employer') {
                return redirect()->route('employer.dashboard')
                    ->with('error', 'You do not have permission to access this page.');
            } else {
                return redirect()->route('candidate.dashboard')
                    ->with('error', 'You do not have permission to access this page.');
            }
        }

        return $next($request);
    }
}