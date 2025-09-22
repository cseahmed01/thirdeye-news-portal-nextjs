# Authentication Implementation

This implementation provides a complete authentication system for the newsportal frontend with the same functionality as the signup page.

## Features Implemented

### 1. **Sign In Page (`/auth/signin`)**

- Form validation using Zod and React Hook Form
- Email and password validation with Bengali error messages
- Password visibility toggle
- "Remember Me" functionality
- Loading states during submission
- Error handling with user feedback
- Link to forget password page
- Link to signup page

### 2. **Token Storage Management**

- **Best Practice Implementation**: Smart token storage based on user preference
  - **Remember Me = true**: Uses `localStorage` (persistent across browser sessions)
  - **Remember Me = false**: Uses `sessionStorage` (cleared when browser tab closes)
- Utility functions in `src/lib/utils.js` for token management
- Automatic cleanup when switching storage types

### 3. **Authentication Context & Hook**

- React Context API for global auth state management
- Custom `useAuth()` hook for easy access throughout the app
- Automatic token detection on app startup
- Centralized login/logout functions

### 4. **Additional Components**

- **LogoutButton**: Ready-to-use logout component
- **ProtectedRoute**: Wrapper component for pages requiring authentication
- **AuthProvider**: Context provider wrapped in main layout

## API Integration

### Login Endpoint

```javascript
POST: {baseUrl}login
Content-Type: application/json

Request Body:
{
    "email": "user@example.com",
    "password": "password"
}

Response:
{
    "message": "Login successful.",
    "data": {
        "token": "jwt_token_here"
    },
    "error": null
}
```

## Usage Examples

### 1. **Using the Auth Hook**

```jsx
import { useAuth } from "@/hooks/useAuth";

function MyComponent() {
  const { isAuthenticated, token, login, logout, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {isAuthenticated ? <p>Welcome! Token: {token}</p> : <p>Please sign in</p>}
    </div>
  );
}
```

### 2. **Protected Routes**

```jsx
import ProtectedRoute from "@/components/common/ProtectedRoute";

function DashboardPage() {
  return (
    <ProtectedRoute>
      <div>This content is only visible to authenticated users</div>
    </ProtectedRoute>
  );
}
```

### 3. **Adding Logout Button**

```jsx
import LogoutButton from "@/components/common/LogoutButton";

function Header() {
  return (
    <header>
      <LogoutButton className="ml-auto" />
    </header>
  );
}
```

### 4. **Manual Token Management**

```jsx
import { tokenStorage } from "@/lib/utils";

// Check if user is authenticated
const isLoggedIn = tokenStorage.isAuthenticated();

// Get current token
const token = tokenStorage.getToken();

// Manual logout
tokenStorage.removeToken();
```

## Security Best Practices Implemented

1. **Conditional Storage**: Uses localStorage only when user explicitly chooses "Remember Me"
2. **Token Validation**: Checks for token existence on app startup
3. **Automatic Cleanup**: Removes tokens from alternative storage when switching types
4. **SSR Safety**: All storage operations check for window object availability
5. **Error Handling**: Comprehensive error handling with user-friendly messages

## File Structure

```
src/
├── app/
│   ├── layout.js (AuthProvider integration)
│   └── auth/
│       └── signin/
│           └── page.jsx (Main signin implementation)
├── hooks/
│   └── useAuth.jsx (Auth context and hook)
├── components/
│   └── common/
│       ├── LogoutButton.jsx
│       └── ProtectedRoute.jsx
└── lib/
    └── utils.js (Token storage utilities)
```

## Next Steps

You can now:

1. Test the signin functionality
2. Use the `useAuth()` hook in other components
3. Wrap protected pages with `ProtectedRoute`
4. Add logout functionality where needed
5. Extend the auth system with additional features like user profile management

The implementation follows React best practices and provides a solid foundation for authentication throughout your newsportal application.
