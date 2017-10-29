export default {
  'GET_ITEMS' ({ item }) {
    return item;
  },
  'GET_ORDER' ({ order }) {
    return order;
  },
  'GET_ITEM_NAME' ({ item }) {
    return item.name;
  }
}
