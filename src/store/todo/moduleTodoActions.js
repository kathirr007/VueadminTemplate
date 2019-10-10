/*=========================================================================================
  File Name: moduleTodoActions.js
  Description: Todo Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
    addTodo({ commit }, payload) {
        commit('ADD_TODO', payload);
    },
    toggleIsDone({ commit }, payload) {
        commit('TOGGLE_IS_DONE', payload);
    },
    toggleIsImportant({ commit }, payload) {
        commit('TOGGLE_IS_IMPORTANT', payload);
    },
    toggleIsStarred({ commit }, payload) {
        commit('TOGGLE_IS_STARRED', payload);
    },
    updateTags({ commit }, payload) {
        commit('UPDATE_TAGS', payload);
    },
    moveToTrash({ commit }, payload) {
        commit('MOVE_TO_TRASH', payload);
    },
    applyTodoFilter({ commit }, filterName) {
        commit('APPLY_TODO_FILTER', filterName);
    },
    setTodoSearchQuery({ commit }, query){
        commit('SET_TODO_SEARCH_QUERY', query)
    },
    setTodoTitle({ commit }, payload){
        commit('SET_TODO_TITLE', payload)
    },
    setTodoDesc({ commit }, payload){
        commit('SET_TODO_DESC', payload)
    },
}