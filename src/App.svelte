<script>
  import { Router, Route, navigate } from 'svelte-routing';

  import Home from './Home.svelte';
  import Categorias from './pages/categorias.svelte';
  import ProductForm from './pages/ProductForm.svelte';
  import Login from './pages/login.svelte';
  import CategoryForm from './pages/CategoryForm.svelte';
  import Productos from './pages/productos.svelte';
  import Perfil from './pages/perfil.svelte';
  import Usuarios from './pages/usuarios.svelte';
  import Login2 from './pages/login2.svelte';
  import Validar from './pages/validar.svelte';
    import UsuariosForm from './pages/usuariosForm.svelte';
    import DatosPersonales from './pages/datosPersonales.svelte';

</script>

<Router>
  <div>
    <Route path="/" component={Home} />
    
    <Route path="/login" component={Login} />
    <Route path="/perfil" component={Perfil} />

    <Route path="/datos-personales" component={DatosPersonales} />

    <Route path="/productos" component={Productos}/>
    <Route path="/producto/editar/:id" component={ProductForm} />
    <Route path="/producto/nuevo" component={ProductForm} />


    <Route path="/categorias" component={Categorias}/>
    <Route path="/categoria/editar/:id" component={CategoryForm} />
    <Route path="/categoria/nueva" component={CategoryForm} />

    <Route path="/login2" component={Login2} />
    <Route path="/usuarios" component={Usuarios} />
    <Route path="/usuarios/new" component={UsuariosForm} />

    <Route path="/validar" component={Validar} />


  </div>
</Router>

