import axios from 'axios';

export default {
  FETCH_ITEMS({ commit } ) {
    axios.get('https://private-4585b-gabrielmanara.apiary-mock.com/item').then((response) => {
      commit('SET_ITEMS', response.data);
    }, (err) => {
      console.log(err);
    })
  },
};
