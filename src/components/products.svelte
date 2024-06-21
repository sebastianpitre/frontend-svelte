<script>
  let listProductos = [];

  fetch("http://localhost:8080/api/v1/publico/productos")

  .then((response)=>response.json())
  .then((results)=> (listProductos=results))
</script>

<div class="row pt-4">
  <div class="col-12 text-end"><h5 class="cursor-pointer text-success">ver mas...</h5> </div>
  {#each listProductos as values}
  <div class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
    <div class="card border bg-gray position-relative">
      <span class="bg-success col-6 text-white text-center position-absolute" style="z-index: 3; border-radius: 10px 0px 20px 0px;"> Oferta</span>

      <div class="card-header  p-0 position-relative z-index-2" style="border-radius: 0.75rem 0.75rem 0px 0px">
      <div class="d-block blur-shadow-image cursor-pointer">
          <img src="{values.urlImage}" width="100%" height="160vh" alt="img-producto" class="shadow img" style="border-radius: 0.75rem 0.75rem 0px 0px">
      </div>
      <div class="colored-shadow" style="background-image: url(&quot;{values.urlImage}&quot;);"></div></div>
      <div class="card-body py-0">
          <p class="text-dark text-center font-weight-bold mt-1 mb-0">{values.name}</p>
          <p class="text-success text-center border-bottom font-weight-bold border-gray mt-1 mb-0">$ {values.price} <span class="text-dark text-sm">KL</span></p>

          
          <div class="row text-center mt-2">
            <div class="col-md-6 col-12">
              <div class="btn col-12 bg-gradient-success btn-sm py-2">Ver</div>
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