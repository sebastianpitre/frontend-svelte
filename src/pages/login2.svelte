<script>
    import { login } from '../stores/store.js';
    import { isAuthenticated } from '../stores/store.js';
    import { onMount } from 'svelte';

    let email = '';
    let password = '';
    let errorMessage = '';

    async function handleLogin() {
        try {
            const response = await fetch('http://localhost:8086/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                login(data.token); // Iniciar sesión y almacenar el token
            } else {
                errorMessage = 'Credenciales incorrectas';
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            errorMessage = 'Ocurrió un error al intentar iniciar sesión';
        }
    }

    // Redirigir si ya está autenticado
    onMount(() => {
        isAuthenticated.subscribe(value => {
            if (value) {
                window.location.href = '/usuarios';
            }
        });
    });
</script>

<form on:submit|preventDefault={handleLogin}>
    <input type="email" bind:value={email} placeholder="Correo electrónico" />
    <input type="password" bind:value={password} placeholder="Contraseña" />
    <button type="submit">Login</button>
    {#if errorMessage}
        <p>{errorMessage}</p>
    {/if}
</form>
