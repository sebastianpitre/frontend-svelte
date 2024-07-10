<script>
    import { onMount } from 'svelte';
    import Aside from '../components/Aside.svelte';
    import Swal from "sweetalert2";



    let listProductos = [];
  
    fetch("http://localhost:8080/productos")
  
    .then((response)=>response.json())
    .then((results)=> (listProductos=results))


    async function eliminarProducto(id) {
    try {
        const result = await Swal.fire({
            
            title: '¿Estás seguro?',
            text: 'Esta acción no se puede deshacer',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, eliminar'
        });

        if (result.isConfirmed) {
            const response = await fetch(`http://localhost:8080/productos/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Actualizar la lista de productos después de la eliminación
                listProductos = listProductos.filter(producto => producto.id !== id);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: '¡Eliminado!',
                    text: 'El producto ha sido eliminado.',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire(
                    'Error',
                    `Hubo un problema al eliminar el producto: ${response.statusText}`,
                    'error'
                );
            }
        }
    } catch (error) {
        Swal.fire(
            'Error',
            `Hubo un problema al eliminar el producto: ${error}`,
            'error'
        );
    }
}



</script>


<main class="row col-12 ">
    <Aside />

    <div class="col-12 col-md-9 mb-4 mb-md-0">
        
        <div class="col-12 mt-3 text-end">
            <a href="/producto/nuevo" class="btn btn-sm btn-success">Agregar producto</a>
        </div>
        <div class="card">
            <div class="table-responsive">
                <table class="table align-items-center mb-0">
                    <thead>
                        <tr>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nombre</th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Precios y descuentos</th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">estado de producto</th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Employed</th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each listProductos as values}
                        <tr>
                            <td>
                                <div class="d-flex px-2 py-1">
                                    
                                    <img src="{values.urlImagen}" class="avatar-xl me-3" >
                                    
                                    <div class="d-flex flex-column justify-content-center">
                                        <h5 class="mb-0 text-sm">{values.nombre}</h5>
                                        <p class="text-sm mb-0">Categoria: {values.idCategoria} </p>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <p class="text-sm mb-0">Precio: <span class="text-success font-weight-bold">$ {values.precio}  </span>{values.unidadProducto}</p>
                                {#if values.promocion === true}
                                <p class="text-sm mb-0">Precio con oferta: <span class="text-warning font-weight-bold">{values.precio-values.precio*10/100}</span> {values.unidadProducto}</p>
                                {/if}
                                

                            </td>

                            <td>
                                
                                {#if values.activo === true}
                                <p class="text-sm mb-0">Estado: <span class="text-success font-weight-bold">Activo</span></p>
                                {:else}
                                <p class="text-sm mb-0">Estado: <span class="text-danger font-weight-bold">No activo</span></p>
                                {/if}
                                {#if values.promocion === true}
                                <p class="text-sm  mb-0">Oferta: <span class="text-success font-weight-bold">En Oferta <span class="text-warning">10%</span></span></p>
                                {:else}
                                <p class="text-sm  mb-0">Oferta: <span class="text-danger font-weight-bold">Sin oferta</span></p>
                                {/if}

                            </td>

                            <td class="align-middle text-center">
                                <span class="text-secondary text-xs font-weight-bold">23/04/18</span>
                            </td>
                            <td class="align-middle">
                                <button class="btn btn-sm btn-outline-danger" on:click={() => eliminarProducto(values.id)}>X</button>
                                <a class="btn btn-sm btn-outline-success" href={`/producto/editar/${values.id}`}>Editar</a>
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
        background-color: #f5f5f5;
    }
</style>