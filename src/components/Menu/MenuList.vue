<template>
  <div class="col box">
    <div class="box__wrapper">
      <header class="l-header">
        <img src="../../assets/logo.png">
      </header>
      <div class="form-group">
        <input class="form-control" placeholder="Pesquise por prato" type="text">
      </div>
      <div v-for="item in items" class="media">
        <img class="d-flex mr-3" src="https://dummyimage.com/150x150.png" alt="Generic placeholder image">
        <div class="media-body">
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
