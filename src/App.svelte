<script>
  import { Router, Route, navigate } from 'svelte-routing';

  import Home from './Home.svelte';
  import Categorias from './pages/categorias.svelte';
  import ProductForm from './pages/ProductForm.svelte';
  import Login from './pages/login.svelte';
  import CategoryForm from './pages/CategoryForm.svelte';
  import Productos from './pages/productos.svelte';

</script>

<Router>
  <div>
    <Route path="/" component={Home} />
    
    <Route path="/login" component={Login} />

    <Route path="/productos" component={Productos}/>
    <Route path="/producto/editar/:id" component={ProductForm} />
    <Route path="/producto/nuevo" component={ProductForm} />


    <Route path="/categorias" component={Categorias}/>
    <Route path="/categoria/editar/:id" component={CategoryForm} />
    <Route path="/categoria/nueva" component={CategoryForm} />

  </div>
</Router>

