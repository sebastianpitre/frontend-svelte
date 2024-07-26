// src/authService.js
export async function login(username, password) {
    const response = await fetch('http://localhost:8080/usuario/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
  
    if (!response.ok) {
      throw new Error('Login failed');
    }
  
    const data = await response.json();
    localStorage.setItem('user', JSON.stringify(data));
    return data;
  }
  
  export function logout() {
    localStorage.removeItem('user');
  }
  
  export function getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
  
  export function isAuthenticated() {
    return !!localStorage.getItem('user');
  }
  