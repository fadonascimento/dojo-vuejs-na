<template>
  <div class="col box">
    <div class="box__wrapper">
      <header class="l-header">
        <h2>Inventário</h2>
      </header>
      <div class="product">
        <div class="form-group" v-for="(item, key) in items" v-bind:key="key">
          <div class="form-inline">
            <input :value="item.name" @input="updateName(key, $event)" type="text" class="form-control col-md-4" placeholder="Nome do Prato">
            <input :value="item.price" @input="updatePrice(key, $event)" type="text" class="form-control col-md-4" id="inlineFormInput" placeholder="Preço">
            <select :value="item.status" @input="updateStatus(key, $event)" class="custom-select col-md-4">
              <option value="1">Disponível</option>
              <option value="0">Indisponível</option>
            </select>
          </div>
          <textarea :value="item.description" @input="updateDescription(key, $event)" class="form-control"></textarea>
          <input :value="item.url" @input="updateUrl(key, $event)" type="text" class="form-control" placeholder="URL da Imagem">
          <button class="btn btn-secondary btn-block" v-on:click="removeItem(key)">Remover item</button>
        </div>
        <hr>

        <button class="btn btn-primary btn-block" v-on:click="addItem()">Adicionar item</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';

  export default {
    computed: {
      ...mapGetters({
        items: 'GET_ITEMS',
      }),
    },
    methods: {
      updateName(key, e) {
        this.$store.commit('UPDATE_ITEM_NAME', [key, e]);
      },
      updatePrice(key, e) {
        this.$store.commit('UPDATE_ITEM_PRICE', [key, e]);
      },
      updateStatus(key, e) {
        this.$store.commit('UPDATE_ITEM_STATUS', [key, e]);
      },
      updateUrl(key, e) {
        this.$store.commit('UPDATE_ITEM_URL', [key, e]);
      },
      updateDescription(key, e) {
        this.$store.commit('UPDATE_ITEM_DESCRIPTION', [key, e]);
      },
      removeItem(key) {
        this.$store.commit('REMOVE_ITEM', key);
      },
      addItem() {
        this.$store.commit('ADD_ITEM');
      }
    }
  }
</script>
