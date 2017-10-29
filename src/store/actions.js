import axios from 'axios';

export default {
  FETCH_ITEMS({ commit } ) {
    axios.get('http://localhost:3000/item').then((response) => {
      commit('SET_ITEMS', response.data);
    }, (err) => {
      alert(err);
    })
  },
};
