// src/stores/cart.js
import { writable } from 'svelte/store';

const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
export const cart = writable(storedCart);

cart.subscribe(value => {
  localStorage.setItem('cart', JSON.stringify(value));
});

export function addToCart(producto) {
  cart.update(items => {
    const existingItem = items.find(item => item.id === producto.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      items.push({ ...producto, quantity: 1 });
    }
    return items;
  });
}

export function incrementQuantity(productoId) {
  cart.update(items => {
    const item = items.find(item => item.id === productoId);
    if (item) {
      item.quantity += 1;
    }
    return items;
  });
}

export function decrementQuantity(productoId) {
  cart.update(items => {
    const item = items.find(item => item.id === productoId);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
    } else {
      items = items.filter(item => item.id !== productoId);
    }
    return items;
  });
}
