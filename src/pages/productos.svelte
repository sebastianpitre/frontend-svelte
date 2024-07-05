<script>
    import { onMount } from 'svelte';
    import Aside from '../components/Aside.svelte';



    let listProductos = [];
  
    fetch("http://localhost:8080/productos")
  
    .then((response)=>response.json())
    .then((results)=> (listProductos=results))


    async function eliminarProducto(id) {
        try {
        const response = await fetch(`http://localhost:8080/productos/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            listProductos = listProductos.filter(producto => producto.id !== id);
        } else {
            console.error('Error al eliminar producto:', response.statusText);
        }
        } catch (error) {
        console.error('Error al eliminar producto:', error);
        }
    }


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
        <div class="card">
            <div class="table-responsive">
                <table class="table align-items-center mb-0">
                    <thead>
                        <tr>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                Nombre</th>
                            <th
                                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Function</th>
                            <th
                                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                Technology</th>
                            <th
                                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                Employed</th>
                            <th class="text-secondary opacity-7"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each listProductos as values}
                        <tr>
                            <td>
                                <div class="d-flex px-2 py-1">
                                    <div>
                                        <img src="{values.urlImagen}" class=" avatar-xl me-3">
                                    </div>
                                    <div class="d-flex flex-column justify-content-center">
                                        <h6 class="mb-0 text-xs">{values.nombre}</h6>
                                        <p class="text-xs text-secondary mb-0">john@creative-tim.com</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p class="text-xs font-weight-bold mb-0">Manager</p>
                                <p class="text-xs text-secondary mb-0">Organization</p>
                            </td>
                            <td class="align-middle text-center text-sm">
                                <span class="badge badge-sm badge-success">Online</span>
                            </td>
                            <td class="align-middle text-center">
                                <span class="text-secondary text-xs font-weight-bold">23/04/18</span>
                            </td>
                            <td class="align-middle">
                                <button on:click={() => eliminarProducto(values.id)}>Eliminar</button>
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