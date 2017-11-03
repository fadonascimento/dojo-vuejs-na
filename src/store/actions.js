import axios from 'axios';

export default {
  FETCH_ITEMS({ commit } ) {
    axios.get('https://coding-dojo-vuejs-na.herokuapp.com/item').then((response) => {
      commit('SET_ITEMS', response.data);
    }, (err) => {
      console.log(err);
    })
  },
  POST_ITEMS({state, commit}) {
    commit('SET_LOADING', true);
    axios.post('https://coding-dojo-vuejs-na.herokuapp.com/item',  state.item ).then((response) => {
      commit('SET_LOADING', false);
      commit('SET_HAS_CHANGE', false);
    }, (err) => {
      console.log(err);
      commit('SET_LOADING', false);
    })
  },
};
