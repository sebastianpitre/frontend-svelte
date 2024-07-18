<script>
    import { selectedCategory } from '../stores/stores';
  
    let listCategorias = [];
  
    // Obtener categorías
    fetch("http://localhost:8080/categorias")
      .then((response) => response.json())
      .then((results) => (listCategorias = results));
  
    // Función para seleccionar una categoría
    function selectCategory(categoria) {
      $selectedCategory = categoria;
    }
  </script>
  
  <div class="_1LnEC">
    <ul class="_3r4FV mb-0 py-2 mt-1 border-radius-lg">
      <li class="_2X7zW ms-n4">
        <a class="_1uCty _18olZ { $selectedCategory === 'all' ? 'selected' : '' }" href="/" on:click|preventDefault={() => selectCategory('all')}>Todos</a>
      </li>
      {#each listCategorias as values}
        <li class="_2X7zW">
          <a class="_1uCty { $selectedCategory === values.nombre ? 'selected' : '' }" href="/estilos/{values.nombre}/" on:click|preventDefault={() => selectCategory(values.nombre)}>
            <img class="icon opacity-9 bg-white" src="{values.icon}" alt="icon" width="11%">
            <span class="ms-2 me-3 me-xl-0">{values.nombre}</span>
          </a>
        </li>
      {/each}
    </ul>
  </div>
  
<style>
    
._1LnEC {
    -ms-overflow-style: none;
    box-sizing: border-box;
    display: block;
    overflow: scroll;
    scrollbar-width: none;
    text-align: center;
}
._1LnEC::-webkit-scrollbar {
    display: none
}
._3r4FV {
    display: inline-flex;
    white-space: nowrap
}
._2X7zW {
    scrollbar-face-color:transparent;scrollbar-track-color:transparent;margin-right: 10px;
    scrollbar-width: none
}
._2X7zW::-webkit-scrollbar {
    display: none
}
._1uCty {
    align-items: center;
    background: #fff;
    border-radius: 0.60rem;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);
    box-sizing: border-box;
    display: flex;
    font-family: Roboto,Helvetica,Arial,sans-serif;
    font-size: 15px;
    font-weight: 500;
    padding: 7px 16px
}
._1uCty:active {
    background: #f5f5f5
}

._1uCty:hover {
    box-shadow: 4px 4px 2px 1px rgba(0, 0, 0, 0.2);
    color:#151515;
}

li, ul {
    list-style: none;
}

.selected {
    border: 2px solid white;
    background-color: #04324d !important;
    color: white;
}

.selected:hover {
    color: white;
}
</style>