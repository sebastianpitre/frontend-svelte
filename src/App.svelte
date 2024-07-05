<script>
	import Productos from './pages/productos.svelte';

  import { Router, Route, Link, link } from 'svelte-routing';

  import Home from './Home.svelte';
  import Form from './pages/admin.svelte';
  import Adm from './components/adm.svelte';


</script>

<Router>
  <div>
    <Route path="/" component={Home} />
    <Route path="/admin" component={Form} />
    <Route path="/adm" component={Adm} />
    <Route path="/productos" component={Productos}/>
  </div>
</Router>

