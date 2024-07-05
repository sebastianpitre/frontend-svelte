<script>
    import { onMount } from 'svelte';
  
    let listProductos = [];
  
    // Realizar la solicitud GET a la API
    onMount(() => {
      fetch("http://localhost:8080/productos")
        .then(response => response.json())
        .then(results => {
          listProductos = results;
        })
        .catch(error => {
          console.error('Error al cargar los productos:', error);
        });
    });
  
    function verProducto(id) {
      // Buscar el producto por su id en listProductos
      let producto = listProductos.find(p => p.id === id);
      if (producto) {
        alert(`Detalles de ${producto.nombre}: ${producto.descripcion}`);
        // Aquí podrías mostrar los detalles en un modal o una nueva sección del componente
      } else {
        console.error(`Producto con ID ${id} no encontrado.`);
      }
    }
  </script>
  
  <style>
    /* Estilos opcionales para las tarjetas de productos */
    .producto-card {
      border: 1px solid #ccc;
      padding: 10px;
      margin: 10px;
      cursor: pointer;
    }
  </style>
  
  <h2>Mis Productos</h2>
  
  {#each listProductos as producto}
    <div class="producto-card" on:click={() => verProducto(producto.id)}>
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
    </div>
  {/each}
  