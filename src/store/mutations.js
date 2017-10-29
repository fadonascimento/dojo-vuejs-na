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
  'UPDATE_FORM_NAME' (state, name) {
    state.item.name = name
  }
}
