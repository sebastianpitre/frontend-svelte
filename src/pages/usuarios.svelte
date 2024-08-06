<script>
    import { onMount } from 'svelte';

    let id = 0;
    let nombres = '';
    let apellidos = '';
    let email = '';
    let password = '';
    let tipoIdentificacion = 'CC';
    let identificacion = '';
    let telefono = '';
    let direccion = '';
    let barrio = '';
    let ciudad = '';

    async function registrarUsuario() {
        const usuario = {
            id,
            nombres,
            apellidos,
            email,
            password,
            tipoIdentificacion,
            identificacion,
            telefono,
            direccion,
            barrio,
            ciudad
        };

        try {
            const response = await fetch('http://localhost:8086/auth/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            });

            if (!response.ok) {
                throw new Error('Error en el registro');
            }

            const data = await response.json();
            console.log('Registro exitoso:', data);
            // Manejar el éxito del registro (por ejemplo, redirigir al login)
        } catch (error) {
            console.error('Error registrando usuario:', error);
        }
    }
</script>

<form on:submit|preventDefault={registrarUsuario}>
    <label>
        Nombres:
        <input type="text" bind:value={nombres} required>
    </label>
    <label>
        Apellidos:
        <input type="text" bind:value={apellidos} required>
    </label>
    <label>
        Email:
        <input type="email" bind:value={email} required>
    </label>
    <label>
        Contraseña:
        <input type="password" bind:value={password} required>
    </label>
    <label>
        Tipo de Identificación:
        <select bind:value={tipoIdentificacion}>
            <option value="CC">CC</option>
            <option value="TI">TI</option>
            <option value="NIT">NIT</option>
        </select>
    </label>
    <label>
        Identificación:
        <input type="text" bind:value={identificacion} required>
    </label>
    <label>
        Teléfono:
        <input type="tel" bind:value={telefono} required>
    </label>
    <label>
        Dirección:
        <input type="text" bind:value={direccion} required>
    </label>
    <label>
        Barrio:
        <input type="text" bind:value={barrio} required>
    </label>
    <label>
        Ciudad:
        <input type="text" bind:value={ciudad} required>
    </label>
    <button type="submit">Registrar</button>
</form>
