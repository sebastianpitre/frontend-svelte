<script>
    let listCategorias = [];

    fetch("http://localhost:8080/api/v1/publico/categorias")
    .then((response) => response.json())
    .then((results) => (listCategorias = results));

</script>
<div class="_1LnEC mt-2">
    <ul class="_3r4FV bg-white mb-0 py-2  border-radius-lg">
        <li class="_2X7zW ms-n4"><a class="_1uCty _18olZ" href="/">Todos</a></li>
        {#each listCategorias as values}
        <li class="_2X7zW "><a class="_1uCty " href="/estilos/rock/">{values.name}</a></li>
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
    border: 1px solid #e0e0e0;
    border-radius: 16px;
    box-sizing: border-box;
    color: #9e9e9e;
    display: flex;
    font-family: Roboto,Helvetica,Arial,sans-serif;
    font-size: 17px;
    font-weight: 500;
    padding: 7px 16px
}
._1uCty:active {
    background: #f5f5f5
}
._1uCty._18olZ {
    background: #151515;
    border-color: #151515;
    color: #fff
}
li, ul {
    list-style: none;}
</style>