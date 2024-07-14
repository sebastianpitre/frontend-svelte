<script>
  import Swal from "sweetalert2";
    export let producto;
    let noDisponible = producto.activo === false;
    let fotoNoDisponible = producto.urlImagen === "";


    // alerta de ver producto

    const mostrarAlertaVisibilidad = () => {
        // Mostrar alerta de SweetAlert
        Swal.fire({
            html: `
              <div class="row mt-4">

                <div class="col-12 col-lg-12 col-xl-5 col-xxl-5 ">
                  <img src="${producto.urlImagen}" width="100%" height="180vh" alt="imagen" class="shadow border-radius-2xl img" >
                </div>

                <div class="col-12 text-start col-lg-12 col-xl-7 col-xxl-7">
                  <h5>${producto.nombre}</h5> 
                  <p>${producto.descripcion}</p>
                  <p>Este producto es vendido, facturado y entregado por:</p>
                  <span>SENA - CBC</span>
                  <p class="text-success">$ ${producto.precio}</p>
                  <div class="row text-center mt-2">
                    
              
                    <div class="col-md-6 col-6">
                      <div class="btn col-12  btn-sm btn-outline-success pb-0 py-1 px-2">
                        <span class="material-symbols-outlined">shopping_cart</span>+
                      </div>
                    </div>
                  </div>
                </div>
            `,
            confirmButtonText: 'Cerrar',
            showCloseButton: true,
            showConfirmButton: false,
        });
    }
  </script>
  
  <div class="card border bg-gray {noDisponible ? 'bg-gray-200 ' : ''} position-relative">
    {#if producto.promocion === true && producto.activo === true}
        <span class="bg-warning col-6 text-white text-bold text-center position-absolute" style="z-index: 3; border-radius: 10px 0px 20px 0px;">
        Oferta {producto.descuento}%
        </span>
    {/if}

    {#if producto.activo === false}
        <span class="bg-gray-600 col-6 text-white text-bold text-center position-absolute" style="z-index: 3; border-radius: 10px 0px 20px 0px;">
        Agotado
        </span>
    {/if}
  
    <div class="card-header p-0 position-relative z-index-2" style="border-radius: 0.75rem 0.75rem 0px 0px">
      <div class="d-block blur-shadow-image cursor-pointer img-marco" >
        <img src="{fotoNoDisponible ? '/img/logo.png' : producto.urlImagen}" width="100%" height="160vh" alt="producto" class="shadow img" style="border-radius: 0.75rem 0.75rem 0px 0px" on:click={mostrarAlertaVisibilidad}>
      </div>
      <div class="colored-shadow" style="background-image: url(&quot;{producto.urlImagen}&quot;);"></div>
    </div>
    <div class="px-2 py-0">
      <p class="text-dark text-center text-capitalize mt-1 mb-0">{producto.nombre}</p>

      {#if producto.promocion === true && producto.activo === true} 
        <div class="text-warning text-center border-bottom border-gray mt-1 mb-0">
          <del class="text-underline text-start text-dark opacity-9 " style="font-size: 12px;left: 14px;" >$ {producto.precio}</del>
          ${producto.precio-producto.precio*producto.descuento/100} 
          <span class="text-dark text-sm text-lowercase">{producto.unidadProducto}</span>
        </div>
        {:else}
        <p class="text-success text-center border-bottom border-gray mt-1 mb-0">$ {producto.precio} <span class="text-dark text-sm text-lowercase">{producto.unidadProducto}</span></p>
      {/if}
  
      <div class="row text-center mt-2">
  
        <div class="col-md-10 col-12 mx-auto ">
          <div class="btn col-12  btn-sm {noDisponible ? 'disabled' : 'btn-outline-success'}">
            <span class="my-auto">agregar</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <style>
  @media (max-width: 768px) {
    .img {
      height: 140px;
    }
    .img-marco{
      height: 140px;
    }
  }

  .img {
      
      transition: transform 0.3s ease, background-color 0.3s ease;
      cursor: pointer;
    }

    /* Efecto hover */
    .img:hover {
      border: 3px solid rgba(255, 255, 255, 0);
      
    }
  
  
  </style>
  