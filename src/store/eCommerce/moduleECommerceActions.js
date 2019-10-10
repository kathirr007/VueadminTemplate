/*=========================================================================================
  File Name: moduleEcommerceActions.js
  Description: Ecommerce Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default {
    toggleItemInWishList({ commit }, item) {
        commit('TOGGLE_ITEM_IN_WISH_LIST', item)
    },
    toggleItemInCart({ commit }, item) {
        commit('TOGGLE_ITEM_IN_CART', item)
    },
    additemInCart({ commit }, item) {
        item["quantity"] = 1
        item["discount_in_percentage"] = Math.floor(Math.random() * 20) + 4
        item["offers_count"] = Math.floor(Math.random() * 4) + 1
        item["delivery_date"] = new Date(new Date().getTime() + (Math.random()*10*24*60*60*1000)).toDateString().slice(0, -4)
        commit('ADD_ITEM_IN_CART', item)
    },
    updateItemQuantity({ commit }, payload){
      commit('UPDATE_ITEM_QUANTITY', payload)
    }
}