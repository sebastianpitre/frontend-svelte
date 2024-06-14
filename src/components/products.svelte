<script>
  let listProductos = [];

  fetch("http://localhost:8080/api/v1/productos")
  .then((response)=>response.json())
  .then((results)=> (listProductos=results))
</script>

<div class="row pt-4">
  {#each listProductos as values}
  <div class="col-6 col-md-3 mb-4">
    <div class="card bg-gray">
      <div class="card-header p-0 position-relative z-index-2">
      <div class="d-block blur-shadow-image cursor-pointer">
          <img src="{values.urlImage}" width="100%" height="160vh" alt="img-producto" class="shadow rounded-top img">
      </div>
      <div class="colored-shadow" style="background-image: url(&quot;{values.urlImage}&quot;);"></div></div>
      <div class="card-body py-0">
          <p class="text-dark text-center font-weight-bold mt-1 mb-0">{values.name}</p>
          <p class="text-success text-center border-bottom border-gray mt-1 mb-0">$ 0000000</p>

          
          <div class="row text-center mt-2">
            <div class="col-md-6 col-12">
              <div class="btn col-12 bg-gradient-success btn-sm">Ver</div>
            </div>

            <div class="col-md-6 col-12">
              <div class="btn col-12 btn-outline-success btn-sm pb-0 py-1 px-2">
                <span class="material-symbols-outlined">
                shopping_cart
                </span>+
              </div>
            </div>
          </div>
          
      </div>
  </div>
  </div>
  {/each}
</div>

<style>


@media (max-width: 768px) {

  .img{
    
    height: 120px;
  }
}

</style>