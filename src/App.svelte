<script>
  import { Router, Route, link, Link } from 'svelte-routing';
  import NavBar from './components/nav.svelte';
  import Header from './components/header.svelte';
  import Category from './components/category.svelte';
  import Products from './components/products.svelte';
  import Filter from './components/card.svelte';

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

  <div class="container">
    <Category />


    <div class="row">
      <div class="col-md-2 d-none d-lg-inline mt-4">
        <div class="row p-2 card">
          <div class="col-12">category</div>
          <div class="col-12">category</div>
          <div class="col-12">category</div>
          <div class="col-12">category</div>
          <div class="col-12">category</div>
        </div>
      </div>
        <div class="col-md-12 col-lg-10"><Products /></div>
      <Filter/>
    </div>

    

    
  </div>

</main>
