<script>
  import Car from './components/car.svelte';
  import { onMount } from 'svelte';
  import Card from './components/card.svelte';
  import Category from './components/category.svelte';
  import { selectedCategory } from './stores/stores';
  import NavBar from './components/nav.svelte';
  import Header from './components/header.svelte';

  let categorias = [];

  // Accesos rápidos
  let clasesCard = "col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2 col-xxl-2 mb-3 px-2";

  // Llamar a la API
  onMount(async () => {
    try {
      // Obtener productos
      const responseProductos = await fetch("http://localhost:8080/productos");
      listProductos = await responseProductos.json();
      
      // Obtener categorías
      const responseCategorias = await fetch("http://localhost:8080/categorias");
      categorias = await responseCategorias.json();
      
    } catch (error) {
      console.error('Error al obtener productos o categorías:', error);
    }
  });

  // Filtrar productos por categoría seleccionada
  $: filteredProducts = $selectedCategory === 'all'
    ? listProductos
    : listProductos.filter(producto => {
        const categoria = categorias.find(cat => cat.nombre === $selectedCategory);
        return categoria ? producto.idCategoria === categoria.id : false;
      });

  // Filtrar categorías que tienen productos filtrados
  $: categoriasConProductos = categorias.filter(categoria =>
    filteredProducts.some(producto => producto.idCategoria === categoria.id)
  );

  // Verificar si hay productos en promoción
  $: productosEnPromocion = filteredProducts.filter(producto => producto.activo && producto.promocion);

  // Verificar si hay productos después del filtrado
  $: noProducts = filteredProducts.length === 0;


  // carrito 

  import { cart, addToCart, incrementQuantity, decrementQuantity } from './stores/cart';
  import Footer from './components/footer.svelte';
  import Slider from './components/slider.svelte';

  let listProductos = []; // Aquí obtienes tu lista de productos

  // Lógica para obtener productos desde API u otra fuente
  onMount(async () => {
    try {
      const responseProductos = await fetch("http://localhost:8080/productos");
      listProductos = await responseProductos.json();
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  });

  // Función para agregar al carrito desde Home.svelte
  function handleAddToCart(producto) {
    addToCart(producto);
  }
</script>

<main>
  <NavBar />
  <Header />
  <Category />

  <div class="position-fixed" style="right: 10px; bottom: 0px; z-index: 9999;">
    <button type="button" class="btn btn-sm pt-0 pb-0 px-2 border border-white bg-success text-white" id="openModal1">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="35" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"></path>
      </svg>
      <span class="ms-1">Carrito</span>
    </button>
  </div>

  <Car/>



  <div class="card-body mx-2 mx-md-5">
    
    {#if productosEnPromocion.length > 0 && $selectedCategory === 'all'}
      <div class="row mt-1">
        <div class="row">
          <h5 class="text-dark">Ofertas</h5>
        </div>
        {#each productosEnPromocion as producto (producto.id)}
          <div class="{clasesCard}">
            <Card {producto} addToCart={handleAddToCart}/>
          </div>
        {/each}
        <div class="bg-gradient-dark col page-header p-0 mb-3 mx-2 border-radius-2xl" style="background-image: url(&quot;/img/img-sena/ganaderia.jpg&quot;); background-position-y: 55%; background-size: cover; background-position-x: 70%;">
        <span class="mask bg-gradient-dark opacity-5"></span>
        <h5 class="col text-center text-white">ofertas</h5>
        </div>

      </div>
    {/if}

    {#if noProducts}
      <div class="text-center my-5">
        <img class="opacity-4" src="./img/unavailable_icon.webp" alt="No products available" style="width: 50px; height: auto;">
        <p class="text-muted mt-3">No hay productos disponibles en esta categoría.</p>
      </div>
    {/if}

    {#each categoriasConProductos as categoria}
      <div class="row">
        <div class="col-md-12 col-lg-12">
          <div class="row">
            <h5 class="col text-dark">{categoria.nombre}</h5>
          </div>
          <div class="row">
            {#each filteredProducts as producto (producto.id)}
              {#if producto.idCategoria === categoria.id}
                <div class="{clasesCard}">
                  <Card {producto} addToCart={handleAddToCart}/>
                </div>
              {/if}
            {/each}
              <div class="bg-gradient-dark col page-header p-0 mb-3 mx-2 border-radius-2xl" style="background-image: url(&quot;/img/img-sena/ganaderia.jpg&quot;); background-position-y: 55%; background-size: cover; background-position-x: 70%;">
              <span class="mask bg-gradient-dark opacity-5"></span>
              <h5 class="col text-center text-white">{categoria.nombre}</h5>
              </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
  <Footer/>
</main>
