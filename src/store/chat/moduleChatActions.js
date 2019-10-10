/*=========================================================================================
  File Name: moduleChatActions.js
  Description: Chat Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
    updateAboutChat({ commit, rootState }, value) {
        commit('UPDATE_ABOUT_CHAT', {rootState: rootState, value: value})
    },
    updateStatusChat({ commit, rootState }, value) {
        commit('UPDATE_STATUS_CHAT', {rootState: rootState, value: value})
    },
    setChatSearchQuery({ commit }, query){
        commit('SET_CHAT_SEARCH_QUERY', query)
    },
    sendChatMessage({ getters, commit }, payload) {
        payload.chatData = getters.chatDataOfUser(payload.id);
        commit('SEND_CHAT_MESSAGE', payload)
    },
    toggleIsPinned({ commit }, payload) {
        commit('TOGGLE_IS_PINNED', payload);
    },
    markSeenAllMessages({ getters, commit }, id) {
        let payload = {id: id}
        payload.chatData = getters.chatDataOfUser(payload.id);
        commit('MARK_SEEN_ALL_MESSAGES', payload);
    },
}
