export default {
  getFilteredItems: ({item}) => (params) => {
    if (!params) return item

    return item.filter(item => {
      return item.name.toLowerCase().includes(params)
    })
  },
  'GET_ITEMS' ({ item, params }) {
    return item;
  },
  'GET_ORDER' ({ order }) {
    return order;
  },
  'GET_ITEM_NAME' ({ item }) {
    return item.name;
  },
  'GET_ORDER_PRICE'(state) {
    let price = 0;
    state.order.forEach( (orderItem) => {
      price += parseFloat(orderItem.price);
    });
    return price.toFixed(2);
  },
  'GET_HAS_CHANGE' (state) {
    return state.hasChange;
  },
  'GET_LOADING' (state) {
    return state.isLoading;
  }
}
