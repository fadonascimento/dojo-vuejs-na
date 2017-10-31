import Vue from 'vue'

export default {
  'SET_ITEMS' (state, item) {
    state.item = item;
  },
  'SET_ORDER_ITEM' (state, orderItem) {
    state.order.push({
      id_item: orderItem.id,
      name: orderItem.name,
      price: orderItem.price
    })
  },
  'REMOVE_ORDER_ITEM' (state, key) {
    state.order.splice(key,1);
  },
  'UPDATE_ITEM_NAME' (state, params) {
    state.item[params[0]].name = params[1].target.value;
  },
  'UPDATE_ITEM_PRICE' (state, params) {
    state.item[params[0]].price = params[1].target.value;
  },
  'UPDATE_ITEM_STATUS' (state, params) {
    state.item[params[0]].status = parseInt(params[1].target.value);
  },
  'UPDATE_ITEM_URL' (state, params) {
    state.item[params[0]].url = params[1].target.value;
  },
  'REMOVE_ITEM' (state, key) {
    Vue.delete(state.item, key)
  },
  'ADD_ITEM' (state) {
    let newItem = {
      description: '',
      id: '',
      name: '',
      price: '',
      status: 0,
      url: '',
    };
    Vue.set(state.item, [Object.keys(state.item).length], newItem)
    console.log(state.item);
    // Vue.delete(state.item, key)
  },
}
