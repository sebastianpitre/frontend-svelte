<script>
	import Productos from './pages/productos.svelte';

  import { Router, Route, Link, link } from 'svelte-routing';

  import Home from './Home.svelte';
  import Adm from './components/adm.svelte';
  import Categorias from './pages/categorias.svelte';
  import ProductForm from './pages/ProductForm.svelte';
  import Dasboard from './pages/dasboard.svelte';


</script>

<Router>
  <div>
    <Route path="/" component={Home} />
    
    <Route path="/adm" component={Adm} />

    <Route path="/productos" component={Productos}/>
    <Route path="/categorias" component={Categorias}/>

    <Route path="/producto/editar/:id" component={ProductForm} />
    <Route path="/producto/nuevo" component={ProductForm} />
    <Route path="/example" component={Dasboard} />

  </div>
</Router>

