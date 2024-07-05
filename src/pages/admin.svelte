<script>
    import { onMount } from 'svelte';
    import Nav from '../components/nav.svelte';
    import Aside from '../components/Aside.svelte';

    // Definimos las variables reactivas para el estado del formulario
    let id;
    let sku = '';
    let nombre = '';
    let descripcion = '';
    let urlImagen = '';
    let urlFichaTecnica = '';
    let unidadProducto = '';
    let cantidad = 0;
    let precio = 0.0;
    let promocion = false;
    let stock = 0;
    let activo = false;
    let idCategoria = 0;
    let idUsuario = 0;

    // Función para manejar el envío del formulario
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            id,
            sku,
            nombre,
            descripcion,
            urlImagen,
            urlFichaTecnica,
            unidadProducto,
            cantidad,
            precio,
            promocion,
            stock,
            activo,
            idCategoria,
            idUsuario
        };

        try {
            const response = await fetch('http://localhost:8080/productos', {
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

    let listUndMedida = [];

    fetch("http://localhost:8080/unidadMedida")
    .then((response) => response.json())
    .then((results) => (listUndMedida = results));
</script>

<main class="row pt-4 col-12 ">
    <Aside />

    <div class="col-12 col-md-9 mb-4 mb-md-0">
        <div class="col-12">
            <div class="card py-2 mb-3">
                <div class="row">
                    <div class="col-8 ms-3">logo + nombre</div>
                    <div class="col-auto">
                        <div class="row">
                            <a class="col ms-2">hola</a>
                            <a class="col ms-2">hola</a>
                            <a class="col ms-2">hola</a>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
        
        <div class="col-12 text-end">
            <a href="/admin" class="btn btn-sm btn-success">Agregar producto</a>
        </div>


        <div class="col">
            <!-- Definimos el formulario -->
            <form on:submit={handleSubmit}>
                <div class="card">
                    <h3 class="text-center">Formulario de guardar datos</h3>
                    <div class="row mx-auto pt-3 ">
                    <label class="col-12">
                        SKU:
                        <input type="text" bind:value={sku} />
                    </label>
                    <label class="col-12">
                        Nombre:
                        <input type="text" bind:value={nombre} />
                    </label>
                    <label class="col-12">
                        Descripción:
                        <input type="text" bind:value={descripcion} />
                    </label>
                    <label class="col-12">
                        URL Imagen:
                        <input type="text" bind:value={urlImagen} />
                    </label>
                    <label class="col-12">
                        URL Ficha Técnica:
                        <input type="text" bind:value={urlFichaTecnica} />
                    </label>
                    <label class="col-12">
                        Unidad Producto:
                        <select bind:value={unidadProducto}>
                            {#each listUndMedida as item}
                            <option value="{item.nombre}">{item.nombre}</option>
                            {/each}
                        </select>
                    </label>
                    <label class="col-12">
                        Cantidad:
                        <input type="number" bind:value={cantidad} />
                    </label>
                    <label class="col-12">
                        Precio:
                        <input type="number" step="0.01" bind:value={precio} />
                    </label>
                    <label class="col-12">
                        Promoción:
                        <input type="checkbox" bind:checked={promocion} />
                    </label>
                    <label class="col-12">
                        Stock:
                        <input type="number" bind:value={stock} />
                    </label>
                    <label class="col-12">
                        Activo:
                        <input type="checkbox" bind:checked={activo} />
                    </label>
                    <label class="col-12">
                        ID Categoría:
                        <select bind:value={idCategoria}>
                            {#each listCategorias as item}
                            <option value="{item.id}">{item.nombre}</option>
                            {/each}
                        </select>
                    </label>
                    <label class="col-12">
                        ID Usuario:
                        <input type="number" bind:value={idUsuario} />
                    </label>
                    <button class="btn btn-success col-4 mx-auto" type="submit">Enviar</button>
                    </div>
                </div>
            </form>
        </div>

    </div>
</main>

<style>
    main{
        background-color: #eee;
    }
</style>