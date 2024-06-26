<script>
    export let producto;
    let noDisponible = producto.stock === 0;
  </script>
  
  <div class="card border bg-gray {noDisponible ? 'bg-gray-200 ' : ''} position-relative">
    {#if producto.stock === 3}
        <span class="bg-warning col-6 text-white text-center position-absolute" style="z-index: 3; border-radius: 10px 0px 20px 0px;"> 
        Oferta
        </span>
    {/if}

    {#if producto.stock === 0}
        <span class="bg-gray-600 col-6 text-white text-center position-absolute" style="z-index: 3; border-radius: 10px 0px 20px 0px;">  
        Agotado
        </span>
    {/if}
  
    <div class="card-header p-0 position-relative z-index-2" style="border-radius: 0.75rem 0.75rem 0px 0px">
      <div class="d-block blur-shadow-image cursor-pointer">
        <img src="{producto.urlImage}" width="100%" height="160vh" alt="img-producto" class="shadow img" style="border-radius: 0.75rem 0.75rem 0px 0px">
      </div>
      <div class="colored-shadow" style="background-image: url(&quot;{producto.urlImage}&quot;);"></div>
    </div>
    <div class="card-body py-0">
      <p class="text-dark text-center font-weight-bold mt-1 mb-0">{producto.name}</p>
      {#if producto.stock === 3}
        <p class="text-success text-center border-bottom font-weight-bold border-gray mt-1 mb-0"><del class="text-underline text-dark opacity-9">$ {producto.price} </del><span class="text-dark h5"> /</span>  $ {producto.price-200} <span class="text-dark text-sm">KL</span></p>
        {:else}
        <p class="text-success text-center border-bottom font-weight-bold border-gray mt-1 mb-0">$ {producto.price} <span class="text-dark text-sm">KL</span></p>
      {/if}
      
        
      
  
      <div class="row text-center mt-2">
        <div class="col-md-6 col-12">
          <div class="btn col-12 bg-gradient-success btn-sm py-2">Ver</div>
        </div>
  
        <div class="col-md-6 col-12">
          <div class="btn col-12  btn-sm {noDisponible ? 'disabled' : 'btn-outline-success'} pb-0 py-1 px-2">
            <span class="material-symbols-outlined">shopping_cart</span>+
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <style>
  @media (max-width: 768px) {
    .img {
      height: 120px;
    }
  }
  </style>
  