<script>
    import { cart, incrementQuantity, decrementQuantity } from '../stores/cart';
    import { onMount } from 'svelte';
  
    let cartItems = [];
    cart.subscribe(value => {
      cartItems = value;
    });
  </script>
  
  <div class="cart">
    {#if cartItems.length === 0}
      <p>El carrito está vacío.</p>
    {/if}
    {#each cartItems as item (item.id)}
      <div class="cart-item border-top">
        <div class="row">
          <div class="col">
            <h5>{item.nombre}</h5>
            <p>${item.precio}</p>
          </div>
          <div class="col-auto my-auto">
              <button class="btn col btn-sm btn-blue" on:click={() => decrementQuantity(item.id)}>-</button>
              <span class="col p-1 btn disabled text-dark">{item.quantity}</span>
              <button class="btn col btn-sm btn-success" on:click={() => incrementQuantity(item.id)}>+</button>
      
          </div>
        </div>
        
       
      </div>
    {/each}
  </div>
  