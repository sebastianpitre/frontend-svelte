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

  <div class="position-fixed " style="right: 10px; bottom: 10px; z-index: 9999;">
    <button type="button" class="btn btn-sm pt-0 pb-0 px-2 bg-white btn-outline-warning" id="openModal1">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="35" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"></path>
      </svg><span class="ms-1">Carrito</span></button>
  </div>
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
          <div class="row">
            <div class="col-auto">
              <img class="icon opacity-9" src="{categoria.icon}" alt="icon">
            </div>
            <h4 class="col ms-n3">{categoria.nombre}</h4>
          </div>
          
          
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

