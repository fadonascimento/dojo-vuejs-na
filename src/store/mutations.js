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
  // @Todo think if maybe we can DRY THIS
  'UPDATE_ITEM_NAME' (state, params) {
    state.hasChange = true;
    state.item[params[0]].name = params[1].target.value;
  },
  'UPDATE_ITEM_PRICE' (state, params) {
    state.hasChange = true;
    state.item[params[0]].price = params[1].target.value;
  },
  'UPDATE_ITEM_STATUS' (state, params) {
    state.hasChange = true;
    state.item[params[0]].status = parseInt(params[1].target.value);
  },
  'UPDATE_ITEM_URL' (state, params) {
    state.hasChange = true;
    state.item[params[0]].url = params[1].target.value;
  },
  'UPDATE_ITEM_DESCRIPTION'(state, params) {
    state.hasChange = true;
    state.item[params[0]].description = params[1].target.value;
  },
  'REMOVE_ITEM' (state, key) {
    state.hasChange = true;
    Vue.delete(state.item, key)
  },
  'ADD_ITEM' (state) {
    state.hasChange = true;
    let newItem = {
      description: '',
      id: '',
      name: '',
      price: '',
      status: 0,
      url: '',
    };
    Vue.set(state.item, [Object.keys(state.item).length], newItem)
  },
  'SET_LOADING'(state, param) {
    state.isLoading = param;
  },
  'SET_HAS_CHANGE'(state, param) {
    state.hasChange = param;
  },

}
