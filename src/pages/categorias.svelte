<script>
    import { onMount } from 'svelte';
    import Aside from '../components/Aside.svelte';

    import Swal from 'sweetalert2';

    // Definimos las variables reactivas para el estado del formulario
    let id;
    let icon = '';
    let nombre = '';
    

    // Función para manejar el envío del formulario
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            id,
            icon,
            nombre,
            
        };

        try {
            const response = await fetch('http://localhost:8080/categorias', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const data = await response.json();
            console.log('Datos enviados correctamente:', data);
        } catch (error) {
            console.error('Error al enviar los datos:', error);
        }
    };

    let listCategorias = [];

    fetch("http://localhost:8080/categorias")
    // fetch("http://localhost:8080/api/admin/categorias")
    .then((response) => response.json())
    .then((results) => (listCategorias = results));

    // eliminar Categorias

    async function eliminarCategoria(id) {
        try {
        const response = await fetch(`http://localhost:8080/categorias/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            listCategorias = listCategorias.filter(values => values.id !== id);
        } else {
            console.error('Error al eliminar categoria:', response.statusText);
        }
        } catch (error) {
        console.error('Error al eliminar categoria:', error);
        }
    }

    

    async function verCategoria(id) {
        Swal.fire({
        title: nombre,

        html: `
            You can use <b>bold text</b>,
            <a href="#" autofocus>links</a>,
            and other HTML tags
        `,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `
            <i class="fa fa-thumbs-up"></i> Great!
        `,
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: `
            <i class="fa fa-thumbs-down"></i>
        `,
        cancelButtonAriaLabel: "Thumbs down"
        });
    }
</script>

<main class="row col-12 ">
    <Aside />

    <div class="col-12 col-md-9 pt-3 mb-4 mb-md-0">


        <div class="col-12 mx-auto">
            <!-- Definimos el formulario -->
            <form on:submit={handleSubmit}>
                <div class="">
                    <h3 class="text-center">Formulario de guardar categorias</h3>
                    <div class="row mx-auto pt-3 ">
                        
                        <div class="col-12 col-md-6">
                            <div class="input-group  input-group-static my-2">
                                <h6 class="">Nombre de la categoria</h6>
                                <input type="text" class="form-control mt-n3" bind:value={nombre} />
                            </div>
                        </div>

                        <div class="col-12 col-md-6">
                            <div class="input-group  input-group-static my-2">
                                <h6 class="">Link Icono</h6>
                                <input type="text" class="form-control mt-n3" bind:value={icon} />
                            </div>
                        </div>

                        <div class="col-12 text-center">
                            <button class="btn btn-success " type="submit">Guardar</button>
                        </div>
                    </div>
                </div>
            </form>

            <div class="table-responsive">
                <table class="table align-items-center mb-0">
                    <thead>
                        <tr>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                Nombres</th>
                            
                            <th
                                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                fechas</th>
                            <th
                                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                acciones</th>
                            <th class="text-secondary opacity-7"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each listCategorias as values}
                        <tr>
                            <td>
                                <div class="d-flex px-2 py-1">
                                    <div>
                                        <img src="{values.icon}" alt="img" class=" avatar-xs me-3">
                                    </div>
                                    <div class="d-flex flex-column justify-content-center">
                                        <h6 class="mb-0 text-xs">{values.nombre}</h6>
                                    </div>
                                </div>
                            </td>
                            <td class="align-middle text-center">
                                <span class="text-secondary text-xs font-weight-bold">23/04/18</span>
                            </td>
                            <td class="align-middle">
                                <button class="btn btn-sm btn-danger" on:click={() => eliminarCategoria(values.id)}>X</button>
                                <button class="btn btn-sm btn-success" on:click={() => verCategoria(values.id)}>ver</button>
                            </td>
                        </tr>
                        {/each}
                        
                    </tbody>
                </table>
            </div>

            
        </div>

    </div>
</main>

<style>
    main{
        background-color: #eee;
    }
</style>