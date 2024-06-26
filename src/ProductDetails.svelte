<script>
    import { onMount } from 'svelte';
    import { useParams } from 'svelte-routing';
  
    let productId;
    let product;
  
    // Obtener el ID del producto de los parámetros de la URL
    const params = useParams();
  
    onMount(async () => {
      productId = params.id;
  
      // Realizar la petición para obtener los detalles del producto
      const response = await fetch(`http://localhost:8080/api/v1/publico/productos/${productId}`);
      product = await response.json();
    });
  </script>
  
  {#if product}
    <div>
      <h1>{product.name}</h1>
      <img src="{product.urlImage}" alt="img-producto" />
      <p>{product.description}</p>
      <p>Price: $ {product.price}</p>
      <p>Stock: {product.stock}</p>
    </div>
  {:else}
    <p>Loading...</p>
  {/if}
  