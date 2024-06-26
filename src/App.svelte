<script>
	import Card from './components/card.svelte';
	import Category from './components/category.svelte';
	import Ofertas from './components/ofertas.svelte';
  import { Router, Route, link, Link } from 'svelte-routing';
  import NavBar from './components/nav.svelte';
  import Header from './components/header.svelte';
  import Products from './components/products.svelte';


  let clasesCard = "col-6 col-sm-4 col-md-4 col-lg-4 col-xl-3 col-xxl-2 mb-4";

  import { onMount } from 'svelte';
  
  let listProductos = [];
  let categorias = [];

  onMount(async () => {
    try {
      // Obtener productos
      const responseProductos = await fetch("http://localhost:8080/api/v1/publico/productos");
      listProductos = await responseProductos.json();
      
      // Obtener categorías
      const responseCategorias = await fetch("http://localhost:8080/api/v1/publico/categorias");
      categorias = await responseCategorias.json();
      
      console.log(categorias); // Verifica en la consola si las categorías se obtienen correctamente
    } catch (error) {
      console.error('Error al obtener productos o categorías:', error);
    }
  });
</script>


<main>
  <NavBar />
  <Header />


  <Category/>

  <div class="container">
    <Ofertas/>
    {#each categorias as categoria}
      <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
          <h3>{categoria.name}</h3>
          <div class="row">
            {#each listProductos as producto}
              {#if producto.categoryId === categoria.id}
                <div class="{clasesCard}">
                  <Card {producto} />
                </div>
              {/if}
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
  
</main>

