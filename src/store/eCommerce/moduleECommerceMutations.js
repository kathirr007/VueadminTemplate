/*=========================================================================================
  File Name: moduleEcommerceMutations.js
  Description: Ecommerce Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default {
    TOGGLE_ITEM_IN_WISH_LIST(state, item) {
        const index = state.wishList.findIndex(i => i.objectID == item.objectID)
        if (index < 0) {
            state.wishList.push(item)
        } else {
            state.wishList.splice(index, 1)
        }
    },
    TOGGLE_ITEM_IN_CART(state, item) {
        const index = state.cartItems.findIndex(i => i.objectID == item.objectID)
        if (index < 0) {
            state.cartItems.push(item)
        } else {
            state.cartItems.splice(index, 1)
        }
    },
    ADD_ITEM_IN_CART(state, item) {
        state.cartItems.push(item)
    },
    UPDATE_ITEM_QUANTITY(state, payload) {
      state.cartItems[payload.index].quantity = payload.quantity
    }
}
