<script>
    import { onMount } from "svelte";
    import Aside from "../components/Aside.svelte";
    import Swal from "sweetalert2";
  
    export let id;
  
    let sku = "";
    let nombre = "";
    let descripcion = "";
    let urlImagen = "";
    let urlFichaTecnica = "";
    let unidadProducto = "";
    let cantidad = 0;
    let precio = 0.0;
    let promocion = false;
    let stock = 0;
    let activo = true;
    let idCategoria = 0;
    let idUsuario = 0;
  
    let listCategorias = [];
    let listUndMedida = [];
  
    onMount(async () => {
      fetch("http://localhost:8080/categorias")
        .then((response) => response.json())
        .then((results) => (listCategorias = results));
  
      fetch("http://localhost:8080/unidadMedida")
        .then((response) => response.json())
        .then((results) => (listUndMedida = results));
  
      if (id) {
        const response = await fetch(`http://localhost:8080/productos/${id}`);
        const product = await response.json();
        sku = product.sku;
        nombre = product.nombre;
        descripcion = product.descripcion;
        urlImagen = product.urlImagen;
        urlFichaTecnica = product.urlFichaTecnica;
        unidadProducto = product.unidadProducto;
        cantidad = product.cantidad;
        precio = product.precio;
        promocion = product.promocion;
        stock = product.stock;
        activo = product.activo;
        idCategoria = product.idCategoria;
        idUsuario = product.idUsuario;
      }
    });
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const formData = {
        sku,
        nombre,
        descripcion,
        urlImagen,
        urlFichaTecnica,
        unidadProducto,
        cantidad,
        precio,
        promocion,
        stock,
        activo,
        idCategoria,
        idUsuario,
      };
  
      try {
        const method = id ? "PUT" : "POST";
        const url = id ? `http://localhost:8080/productos/${id}` : "http://localhost:8080/productos";
  
        const response = await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
  
        const data = await response.json();
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Producto guardado correctamente',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
        window.location.href = '/productos'; // Redirigir a la lista de productos
        });
  
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al guardar el producto',
        });
      }
    };
  </script>
  
  <main class="row col-12">
    <Aside />
    <div class="col-12 col-md-9 pt-3 mb-4 mb-md-0">
      <div class="col-6 mx-auto">
        <form on:submit={handleSubmit}>
          <div class="">
            <h3 class="text-center">{id ? "Editar Producto" : "Guardar Producto"}</h3>
            <div class="row mx-auto pt-3">
              <div class="col-4">
                <div class="input-group input-group-static my-2">
                  <h6 class="">SKU</h6>
                  <input type="text" class="form-control mt-n3" bind:value={sku} />
                </div>
              </div>
  
              <div class="col-8">
                <div class="input-group input-group-static my-2">
                  <h6 class="">Nombre</h6>
                  <input type="text" class="form-control mt-n3" bind:value={nombre} />
                </div>
              </div>
  
              <div class="col-12">
                <div class="input-group input-group-static my-2">
                  <h6 class="">Descripción</h6>
                  <input type="text" class="form-control mt-n3" bind:value={descripcion} />
                </div>
              </div>
  
              <div class="col-6">
                <div class="input-group input-group-static my-2">
                  <h6 class="">URL Imagen</h6>
                  <input type="text" class="form-control mt-n3" bind:value={urlImagen} />
                </div>
              </div>
  
              <div class="col-6">
                <div class="input-group input-group-static my-2">
                  <h6 class="">URL Ficha Técnica</h6>
                  <input type="text" class="form-control mt-n3" bind:value={urlFichaTecnica} />
                </div>
              </div>
  
              <div class="col-6">
                <div class="input-group input-group-static my-2">
                  <h6 class="">Unidad Producto</h6>
                  <select class="form-select form-select-lg form-control mt-n4" bind:value={unidadProducto}>
                    {#each listUndMedida as item}
                      <option value={item.nombre}>{item.nombre}</option>
                    {/each}
                  </select>
                </div>
              </div>
  
              <div class="col-6">
                <div class="input-group input-group-static my-2">
                  <h6 class="">Cantidad</h6>
                  <input type="number" class="form-control mt-n3" bind:value={cantidad} />
                </div>
              </div>
  
              <div class="col-6">
                <div class="input-group input-group-static my-2">
                  <h6 class="">Precio</h6>
                  <input type="number" class="form-control mt-n3" step="1000" bind:value={precio} />
                </div>
              </div>
  
              <div class="col-6">
                <div class="input-group input-group-static my-2">
                  <h6 class="">Stock</h6>
                  <input type="number" class="form-control mt-n3" bind:value={stock} />
                </div>
              </div>
  
              <div class="col-6">
                <div class="row">
                  <div class="col-auto"><h6 class="mt-2">Activo</h6></div>
                  <div class="col">
                    <div class="toggle-switch">
                      <input class="toggle-input" id="toggle2" type="checkbox" bind:checked={activo} />
                      <label class="toggle-label" for="toggle2"></label>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="col-6">
                <div class="row">
                  <div class="col-auto"><h6 class="mt-2">Promoción</h6></div>
                  <div class="col">
                    <div class="toggle-switch">
                      <input class="toggle-input" id="toggle" type="checkbox" bind:checked={promocion} />
                      <label class="toggle-label" for="toggle"></label>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="col-6">
                <div class="input-group input-group-static my-2">
                  <h6 class="">ID Categoría</h6>
                  <select class="form-select form-select-lg form-control mt-n4" bind:value={idCategoria}>
                    {#each listCategorias as item}
                      <option value={item.id}>{item.nombre}</option>
                    {/each}
                  </select>
                </div>
              </div>
  
              <div class="col-6">
                <div class="input-group input-group-static my-2">
                  <h6 class="">ID Usuario</h6>
                  <input type="number" class="form-control mt-n3" bind:value={idUsuario} />
                </div>
              </div>
  
              <div class="col-12 text-center">
                <a href="/productos" class="btn btn-danger">Cancelar</a>
                <button class="btn btn-success" type="submit">Guardar</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
  
  <style>
    main {
      background-color: #eee;
    }
  
    .toggle-switch {
      position: relative;
      display: inline-block;
      width: 40px;
      height: 24px;
      margin: 10px;
    }
  
    .toggle-switch .toggle-input {
      display: none;
    }
  
    .toggle-switch .toggle-label {
      position: absolute;
      top: 0;
      left: 0;
      width: 40px;
      height: 24px;
      background-color: #000;
      border-radius: 34px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
  
    .toggle-switch .toggle-label::before {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      top: 2px;
      left: 2px;
      background-color: #fff;
      box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s;
    }
  
    .toggle-switch .toggle-input:checked + .toggle-label {
      background-color: #4CAF50;
    }
  
    .toggle-switch .toggle-input:checked + .toggle-label::before {
      transform: translateX(16px);
    }
  </style>
  