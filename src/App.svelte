<script>

  import { Router, Route, Link, link } from 'svelte-routing';

  import Home from './Home.svelte';
  import Form from './components/admin.svelte';


</script>

<Router>
  <div>
    <Route path="/" component={Home} />
    <Route path="/admin" component={Form} />
  </div>
</Router>

