<template>
  <div class="col box">
    <div class="box__wrapper">
      <header class="l-header">
        <h2>Central Perk Café</h2>
      </header>
      <div class="form-group">
        <input class="form-control" placeholder="Pesquise por prato" type="text">
      </div>
      <div v-for="item in items" class="media">
        <div class="col-4 media-image" :style="{ 'background-image': 'url(' + item.url + ')'}">

        </div>
        <div class="col-8 media-body">
          <h5 class="mt-0">{{ item.name }} <span v-if="!item.status" class="badge badge-secondary">Indisponível</span></h5>
          <div>{{ item.price }}</div>
          <p>{{ item.description }}</p>
          <button class="btn btn-secondary" v-on:click="addItem(item)">Incluir no Pedido</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import { mapGetters } from 'vuex';
  import store from '@/store/store';

  export default {
    computed: {
      ...mapGetters({
        items: 'GET_ITEMS',
      }),
    },
    methods: {
      addItem(item) {
        store.commit('SET_ORDER_ITEM', item);
      }
    }
  }
</script>

<style lang="scss" scoped>
.media-image {
  height: 150px;
  background-size: cover;
  background-position: center;
}
</style>
