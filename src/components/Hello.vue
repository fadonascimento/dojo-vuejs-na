<template>
  <div class="container-fluid">
    <div class="row">
      <app-menu-list></app-menu-list>
      <app-order></app-order>
      <app-inventary-list></app-inventary-list>
    </div>
  </div>
</template>


<script>
import MenuList from './Menu/MenuList';
import Order from './Order/Order';
import InventaryList from './Inventary/InventaryList';

import { mapActions } from 'vuex';

export default {
  components: {
    appMenuList: MenuList,
    appOrder: Order,
    appInventaryList: InventaryList,
  },
  methods: {
    ...mapActions({
      fetch: 'FETCH_ITEMS',
    }),
  },
  created() {
    this.fetch();
  }
}
</script>

