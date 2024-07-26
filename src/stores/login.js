import { writable } from 'svelte/store';

// Inicializa el store con los datos del usuario almacenados en localStorage si existen
const initialUser = JSON.parse(localStorage.getItem('currentUser')) || null;

export const userLog = writable(initialUser);

// Suscribirse al store para actualizar localStorage cuando el usuario cambie
userLog.subscribe((value) => {
    if (value) {
        localStorage.setItem('currentUser', JSON.stringify(value));
    } else {
        localStorage.removeItem('currentUser');
    }
});