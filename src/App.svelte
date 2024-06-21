<script>
  import { Router, Route, link, Link } from 'svelte-routing';
  import NavBar from './components/nav.svelte';
  import Header from './components/header.svelte';
  import Products from './components/products.svelte';

</script>

<Router>
  <div>
    <Route path="/s" components={Header}/>
    <!-- <Route path="/productos" components={Header}/> -->
  </div>
</Router>

<main>
  
  <NavBar />
  <Header />

  <div class="mx-3 mx-md-5">


    <div class="row mt-3">
      <div class="col-md-3 d-none d-lg-inline mt-4">
        <div class="row p-2 card">
            <div class="col-12 card cursor-pointer bg-gradient-dark text-white mb-2">Todos</div>

          <div class="col-12 card cursor-pointer bg-gray-200 mb-2">Carnes, pollos y pescados</div>
          <div class="col-12 card cursor-pointer bg-gray-200 mb-2">Lacteos, huevos y derivados</div>
          <div class="col-12 card cursor-pointer bg-gray-200 mb-2">Panaderia y reposteria</div>
          <div class="col-12 card cursor-pointer bg-gray-200 mb-2">Viveros y abonos</div>
        </div>
      </div>
        <div class="col-md-12 col-lg-9"><Products /></div>
    </div>

    
  </div>

</main>
