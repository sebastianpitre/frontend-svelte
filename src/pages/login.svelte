<script>
	import Nav from './../components/nav.svelte';
    import { onMount } from "svelte";
    let username = "";
    let password = "";
    let error = "";
  
    async function login() {
      const response = await fetch("http://localhost:8080/usuario");
      const users = await response.json();
      const user = users.find(
        (user) => user.username === username && user.password === password
      );
  
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        if (user.rol === "admin") {
          window.location.href = "/productos";
        } else {
          window.location.href = "/";
        }
      } else {
        error = "Usuario o contraseña incorrectos";
      }
    }
  </script>

<style>
    .error{
        color: red;
    }
</style>

<section >
    <div class="position-sticky mobile-menu z-index-sticky top-0 ">
        <div class="row">
          <div class="col-12">
            <nav class="navbar navbar-expand-lg top-0 z-index-fixed shadow position-absolute py-0 start-0 end-0">
              <div class="container-fluid px-0">
                <a class="col-9 col-sm-7 col-md-5 col-lg-4 col-xl-4 col-xxl-3 font-weight-bolder " href="/" rel="tooltip" data-placement="bottom">
                  <div class="row">
                    <div class="col-3 text-end">
                      <img class="avatar-sm my-2" src="/img/logo.png" alt="imglogo">
                    </div>
                    <p class="col-9 text-dark my-auto font-weight-bold">SENA Empresa vitrina web</p>
                  </div>
                  
                </a>
                
              </div>
            </nav>
          </div>
        </div>
      </div>
    
    <div class="page-header min-vh-100">
        <div class="container">
            
            <div class="row">
                <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
                    <div class="card z-index-0 mt-7">
                        <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div class="bg-success shadow-success border-radius-lg py-3 pe-1 text-center py-4">
                                <h4 class="font-weight-bolder text-white mt-1 mb-0">Iniciar</h4>
                                <p class="mb-1 text-sm text-white">Bienvenido!</p>
                            </div>
                        </div>
                        <div class="card-body pb-0">
                            <form on:submit|preventDefault={login}>
                                <label for="username" class="form-label">Email</label>
                                <div class="input-group input-group-outline mb-3">
                                    <input type="text" id="username" class="form-control" bind:value={username} required>
                                </div>
                                <label for="password" class="form-label">Password</label>
                                <div class="input-group input-group-outline mb-4">
                                    <input type="text" id="password" class="form-control" bind:value={password} required>
                                </div>
                                <div class="text-center">
                                    <button class="btn btn-success" type="submit">iniciar</button>    
                                </div>

                                {#if error}
                                    <p class="error text-center">{error}</p>
                                {/if}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>