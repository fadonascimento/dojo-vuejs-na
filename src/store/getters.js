export default {
  'GET_ITEMS' ({ item }) {
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
  }
}
