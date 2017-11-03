<template>
  <div class="col-3 box">
    <div class="box__wrapper">
      <header class="l-header">
        <h2>Order</h2>
      </header>
      <div v-for="(orderItem, key, index) in order" v-bind:key="orderItem.id" class="row">
        <div class="col">
          <p>{{ orderItem.name }}</p>
        </div>
        <div class="col">
          <p class="text-right" scale="2">{{ orderItem.price }} <span v-on:click="removeItem(key)"><icon name="close"></icon></span></p>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <p>Total</p>
        </div>
        <div class="col">
          <p class="text-right">R$ {{ price }}</p>
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
      order: 'GET_ORDER',
      price: 'GET_ORDER_PRICE'
    }),
  },
  methods: {
    removeItem(key) {
      store.commit('REMOVE_ORDER_ITEM', key);
    }
  }
}
</script>
