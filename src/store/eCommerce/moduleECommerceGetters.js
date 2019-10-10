/*=========================================================================================
  File Name: moduleEcommerceGetters.js
  Description: Ecommerce Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
    isInCart: state => itemId => {
        return state.cartItems.some((item) => item.objectID == itemId )
    },
    isInWishList: state => itemId => {
        return state.wishList.some((item) => item.objectID == itemId )
    }
}