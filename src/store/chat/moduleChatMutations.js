/*=========================================================================================
  File Name: moduleChatMutations.js
  Description: Chat Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'

export default {
    UPDATE_ABOUT_CHAT(state, obj) {
        obj.rootState.AppActiveUser.about = obj.value;
    },
    UPDATE_STATUS_CHAT(state, obj) {
      obj.rootState.AppActiveUser.status = obj.value;
    },
    SET_CHAT_SEARCH_QUERY(state, query) {
        state.chatSearchQuery = query;
    },
    SEND_CHAT_MESSAGE(state, payload) {
        if(payload.chatData){
            state.chats[Object.keys(state.chats).find(key => key == payload.id)].msg.push(payload.msg);
        }else{
            const chatId = payload.id;
            Vue.set(state.chats, [chatId], {isPinned: payload.isPinned, msg: [payload.msg]});
        }
    },
    TOGGLE_IS_PINNED(state, payload) {
        state.chats[Object.keys(state.chats).find(key => key == payload.id)].isPinned = payload.value;
    },
    MARK_SEEN_ALL_MESSAGES(state, payload) {
        payload.chatData.msg.forEach((msg) => {
            msg.isSeen = true
        });
    },
}
