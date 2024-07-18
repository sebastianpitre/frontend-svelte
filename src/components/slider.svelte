<script>
    import { onMount } from 'svelte';



    let listProductos = [];
  
    fetch("http://localhost:8080/productos")
  
    .then((response)=>response.json())
    .then((results)=> (listProductos=results))
</script>
    <div class="main">
    
        <div class="slide-container swiper">
            <div class="slide-content">
                <div class="card-wrapper swiper-wrapper">

                    {#each listProductos as values}
                    <div class="card swiper-slide">
                        <img class="card-img-top" src="{values.urlImagen}" alt="Card "/>
                        <div class="card-body">
                            <h4 class="card-title">{values.nombre}</h4>
                            <p class="card-text">Text</p>
                        </div>
                    </div>
                        
                    {/each}
                    
                    
                </div>
            </div>
    
            <div class="swiper-button-next swiper-navBtn"></div>
            <div class="swiper-button-prev swiper-navBtn"></div>
            <div class="swiper-pagination"></div>
        </div>

    
        <!-- JavaScript -->
        <script>
            var swiper = new Swiper(".slide-content", {
                slidesPerView: 3,
                spaceBetween: 25,
                loop: true,
                centerSlide: 'true',
                fade: 'true',
                grabCursor: 'true',
                pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
                },
                navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                },
    
                breakpoints:{
                    0: {
                        slidesPerView: 1,
                    },
                    520: {
                        slidesPerView: 2,
                    },
                    950: {
                        slidesPerView: 3,
                    },
                },
            });
        </script>
    </div>