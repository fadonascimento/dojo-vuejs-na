<template>
  <div class="col box">
    <div class="box__wrapper">
      <header class="l-header">
        <h2>Inventário</h2>
      </header>
      <div class="product">

        <div class="form-group" v-for="item in items">
          <div class="form-inline">
            <input :value="item.name" type="text" class="form-control col-md-4" placeholder="Nome do Prato">
            <input type="text" class="form-control col-md-4" id="inlineFormInput" placeholder="Preço">
            <select class="custom-select col-md-4" id="inlineFormCustomSelect">
              <option value="1">Disponível</option>
              <option value="2">Indisponível</option>
            </select>
          </div>
          <input type="text" class="form-control" id="inlineFormInput" placeholder="URL da Imagem">
          <button class="btn btn-secondary btn-block">Remover item</button>
        </div>
        <hr>

        <button class="btn btn-primary btn-block">Adicionar item</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters({
        items: 'GET_ITEMS',
      }),
    },
  }
</script>
