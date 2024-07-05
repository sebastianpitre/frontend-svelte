<script>
	import Card from './components/card.svelte';
	import Category from './components/category.svelte';
  import { Router, Route, Link, link } from 'svelte-routing';
  import NavBar from './components/nav.svelte';
  import Header from './components/header.svelte';


  let clasesCard = "col-6 col-sm-4 col-md-4 col-lg-4 col-xl-3 col-xxl-2 mb-4";

  import { onMount } from 'svelte';
  
  let listProductos = [];
  let categorias = [];

  onMount(async () => {
    try {
      // Obtener productos
      const responseProductos = await fetch("http://localhost:8080/productos");
      // const responseProductos = await fetch("http://localhost:8080/api/publico/productos");

      listProductos = await responseProductos.json();
      
      // Obtener categorías
      const responseCategorias = await fetch("http://localhost:8080/categorias");
      // const responseCategorias = await fetch("http://localhost:8080/api/admin/categorias");
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

  <Category />

  <div class="container">


    <div class="row mt-4">
        <h4 class="cursor-pointer">Ofertas</h4>
        {#each listProductos as producto}
          {#if producto.activo === true}
            {#if producto.promocion === true}
              <div class="{clasesCard}">
                <Card {producto} />
              </div>
            {/if}
          {/if}
        {/each}
    </div>
    

    {#each categorias as categoria}
      <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
          <h4>{categoria.nombre}</h4>
          <div class="row">
            {#each listProductos as producto}
              {#if producto.idCategoria === categoria.id}
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

