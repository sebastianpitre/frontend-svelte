// src/auth.js
export function isAuthenticated() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
  
  export function isAdmin() {
    const user = isAuthenticated();
    return user && user.rol === 'admin';
  }
  
  export function protectRoute(role, redirectUrl = '/') {
    const user = isAuthenticated();
    if (!user || (role && user.rol !== role)) {
      window.location.href = redirectUrl;
      return false;
    }
    return true;
  }
  