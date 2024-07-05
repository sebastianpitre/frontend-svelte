<div class="carrito">
  <h2>Carrito</h2>
  {#each carrito as item}
    <div class="carrito-item">
      <h3>{item.nombre}</h3>
      <p>Precio: ${item.precio}</p>
    </div>
  {/each}
</div>