<script>
  import Swal from "sweetalert2";
    export let producto;
    let noDisponible = producto.activo === false;
    let fotoNoDisponible = producto.urlImagen === "";

    let descuento = 10;


    // alerta de ver producto

    const mostrarAlertaVisibilidad = () => {
        // Mostrar alerta de SweetAlert
        Swal.fire({
            html: `
              <section >
                <div class="container">
                  <div class="row justify-space-between py-2">
                    <div class="card card-plain card-blog mt-5">
                      <div class="row">
                        <div class="col-md-4">
                          <div class="card-image position-relative border-radius-lg cursor-pointer">
                            <div class="blur-shadow-image">
                              <img class="img border-radius-lg" src="${producto.urlImagen}">
                            </div>
                          </div>
                        </div>
                        <div class="col-md-7 my-auto ms-md-3 mt-md-auto mt-4">
                          <h5 class="text-dark text-start cursor-pointer">${producto.nombre}</h5>
                          <p class="text-start">
                            Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story — and <a href="javascript:;" class="text-dark"> Read More </a>
                          </p>
                          <div class="author">
                            <p class="mb-0">by<a class="ps-1 text-dark" href="javascript:;"><b>Megan Rose</b></a>, 2 </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            `,
            width: '60%',
            confirmButtonText: 'Cerrar'
        });
    }
  </script>
  
  <div class="card border bg-gray {noDisponible ? 'bg-gray-200 ' : ''} position-relative">
    {#if producto.promocion === true && producto.activo === true}
        <span class="bg-warning col-6 text-white text-bold text-center position-absolute" style="z-index: 3; border-radius: 10px 0px 20px 0px;">
        Oferta {descuento}%
        </span>
    {/if}

    {#if producto.activo === false}
        <span class="bg-gray-600 col-6 text-white text-bold text-center position-absolute" style="z-index: 3; border-radius: 10px 0px 20px 0px;">
        Agotado
        </span>
    {/if}
  
    <div class="card-header p-0 position-relative z-index-2" style="border-radius: 0.75rem 0.75rem 0px 0px">
      <div class="d-block blur-shadow-image cursor-pointer img-marco" >
        <img src="{fotoNoDisponible ? '/img/logo.png' : producto.urlImagen}" width="100%" height="160vh" alt="producto" class="shadow img" style="border-radius: 0.75rem 0.75rem 0px 0px">
      </div>
      <div class="colored-shadow" style="background-image: url(&quot;{producto.urlImagen}&quot;);"></div>
    </div>
    <div class="px-2 py-0">
      <p class="text-dark text-center text-capitalize font-weight-bold mt-1 mb-0">{producto.nombre}</p>

      {#if producto.promocion === true && producto.activo === true} 
        <div class="text-warning text-center border-bottom border-gray mt-1 mb-0">
          <del class="text-underline text-start text-dark opacity-9 " style="font-size: 12px;left: 14px;">$ {producto.precio}</del>
          <span class="text-dark" style="font-size: 24px;">/</span>  $ {producto.precio-producto.precio*descuento/100} 
          <span class="text-dark text-sm text-lowercase">{producto.unidadProducto}</span>
        </div>
        {:else}
        <p class="text-success text-center border-bottom border-gray mt-1 mb-0">$ {producto.precio} <span class="text-dark text-sm text-lowercase">{producto.unidadProducto}</span></p>
      {/if}
  
      <div class="row text-center mt-2">
        <div class="col-md-6 col-12">
          <div class="btn col-12 btn-success btn-sm pb-0 py-1 px-2" on:click={mostrarAlertaVisibilidad}>
            <span class="material-symbols-outlined">visibility</span>
          </div>
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
      height: 140px;
    }
    .img-marco{
      height: 140px;
    }
  }
  
  </style>
  