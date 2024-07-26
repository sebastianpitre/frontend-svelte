<script>

  let currentUser = 'admin';

  import { logout } from '../stores/authService';
  import { navigate } from 'svelte-routing';

  function handleLogout() {
    logout();
    navigate('/login');
  }

   
</script>

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
          <!-- <a href="pages//" class="btn btn-sm  btn-white border border-dark  mb-0 ms-auto d-lg-none d-block">Ingresar</a> -->
          <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon mt-2">
              <span class="navbar-toggler-bar bar1"></span>
              <span class="navbar-toggler-bar bar2"></span>
              <span class="navbar-toggler-bar bar3"></span>
            </span>
          </button>
          <div class="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100" id="navigation">
            <ul class="navbar-nav navbar-nav-hover ms-auto">


              {#if currentUser === 'admin'}
              <li class="nav-item dropdown dropdown-hover ms-2">
                <a role="button" class=" btn btn-sm btn-outline-dark mb-0" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false">
                  <img class="icon opacity-9 mt-n1" src="/img/icon/pages.svg" alt="icon" width="20px">
                  acciones
                </a>
                <div class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md mt-0 mt-lg-3 p-3 border-radius-lg" aria-labelledby="dropdownMenuDocs">
                  <div class="d-none d-lg-block">
                    <ul class="list-group">
                      
                      <li class="nav-item list-group-item border-0 p-0">
                        <a class="dropdown-item py-2 ps-3 border-radius-md" href="/productos">
                          <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">productos</h6>
                        </a>
                      </li>
                      <li class="nav-item list-group-item border-0 p-0">
                        <a class="dropdown-item py-2 ps-3 border-radius-md" href="/categorias">
                          <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">categorias</h6>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="row d-lg-none">
                    <div class="col-md-12 g-0">
                      <a class="dropdown-item py-2 ps-3 border-radius-md" href="/productos">
                        <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">productos</h6>
                      </a>
                    </div>
                    <div class="col-md-12 g-0">
                      <a class="dropdown-item py-2 ps-3 border-radius-md bg-danger" href="/login">
                        <h6 class="dropdown-header text-white font-weight-bolder d-flex justify-content-cente align-items-center p-0">categorias</h6>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
                {:else}
                <li class="nav-item dropdown dropdown-hover">
                  
                  <div class="btn btn-sm btn-success mb-0" id="openModal1">
                    <img class="icon opacity-9 mt-n1" src="/img/icon/cart.svg" alt="icon" width="20px">
                    <span class=" me-xl-0">carrito</span>
                  </div>
                </li>
              {/if}

              {#if currentUser === 'admin'}

              <li class="nav-item dropdown dropdown-hover ms-2">
                <a role="button" class=" btn btn-sm btn-blue mb-0" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false">
                  <img class="icon opacity-9 mt-n1" src="/img/icon/admin.svg" alt="icon" width="20px">
                  {currentUser}
                </a>
                <div class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md mt-0 mt-lg-3 p-3 border-radius-lg" aria-labelledby="dropdownMenuDocs">
                  <div class="d-none d-lg-block">
                    <ul class="list-group">
                      
                      <li class="nav-item list-group-item border-0 p-0">
                        <a class="dropdown-item py-2 ps-3 border-radius-md" href="/productos">
                          <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Administrar</h6>
                        </a>
                      </li>
                      <li class="nav-item list-group-item border-0 p-0">
                        <button class="dropdown-item py-2 ps-3 border-radius-md bg-danger" on:click={handleLogout}>
                          <h6 class="dropdown-header text-white font-weight-bolder d-flex justify-content-cente align-items-center p-0">cerrar sesion</h6>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div class="row d-lg-none">
                    <div class="col-md-12 g-0">
                      <a class="dropdown-item py-2 ps-3 border-radius-md" href="/productos">
                        <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Administrar</h6>
                      </a>
                    </div>
                    <div class="col-md-12 g-0">
                      <button class="dropdown-item py-2 ps-3 border-radius-md bg-danger" on:click={handleLogout}>
                        <h6 class="dropdown-header text-white font-weight-bolder d-flex justify-content-cente align-items-center p-0">cerrar sesion</h6>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              {:else if currentUser === 'user'}
                <li class="nav-item dropdown dropdown-hover ms-2">
                  <a role="button" class=" btn btn-sm btn-blue mb-0" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false">
                    <img class="icon opacity-9 mt-n1" src="/img/icon/user.svg" alt="icon" width="20px">
                    {currentUser}
                  </a>
                  <div class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md mt-0 mt-lg-3 p-3 border-radius-lg" aria-labelledby="dropdownMenuDocs">
                    <div class="d-none d-lg-block">
                      <ul class="list-group">
                        
                        <li class="nav-item list-group-item border-0 p-0">
                          <a class="dropdown-item py-2 ps-3 border-radius-md" href="/perfil">
                            <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">perfil</h6>
                          </a>
                        </li>
                        <li class="nav-item list-group-item border-0 p-0">
                          <button class="dropdown-item py-2 ps-3 border-radius-md bg-danger" on:click={handleLogout}>
                            <h6 class="dropdown-header text-white font-weight-bolder d-flex justify-content-cente align-items-center p-0">cerrar sesion</h6>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div class="row d-lg-none">
                      <div class="col-md-12 g-0">
                        <a class="dropdown-item py-2 ps-3 border-radius-md" href="/perfil">
                          <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">perfil</h6>
                        </a>
                      </div>
                      <div class="col-md-12 g-0">
                        <button class="dropdown-item py-2 ps-3 border-radius-md bg-danger" on:click={handleLogout}>
                          <h6 class="dropdown-header text-white font-weight-bolder d-flex justify-content-cente align-items-center p-0">cerrar sesion</h6>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              {:else}
              <li class="nav-item dropdown dropdown-hover ms-2">
                <a href="/login" class="btn btn-sm btn-blue mb-0">Ingresar</a>
              </li>
              {/if}
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</div>

<style>
  nav{
    background-color: #ffffffea;
  }

</style>
