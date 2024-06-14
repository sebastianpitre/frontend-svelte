<script>
  import { Router, Route, link, Link } from 'svelte-routing';
  import NavBar from './../components/nav.svelte';
  import Header from './../components/header.svelte';
  import Category from './../components/category.svelte';
  import Products from '../components/products.svelte'

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

  <div class="container-fluid">
    <Category />


    <div class="row">
      <div class="col-md-2 mt-3">
        <ul class="card p-2 bg-gray-200">
          <li class="p-2 my-3 bg-dark">category</li>
          <li>category</li>
          <li>category</li>
          <li>category</li>
          <li>category</li>
          <li>category</li>

        </ul>
      </div>
      <div class="col-md-9"><Products /></div>
    </div>

    

    
  </div>

</main>

<style>
  
</style>
