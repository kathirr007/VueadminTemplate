/*=========================================================================================
  File Name: moduleTodoGetters.js
  Description: Todo Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
    todoArrayLength: state => state.todoArray.length,
    todoList: state => state.todoArray.filter((todoItem) => {
        if (state.todoFilter == 'all') return !todoItem.isTrashed && (todoItem.title.toLowerCase().includes(state.todoSearchQuery.toLowerCase()) || todoItem.desc.toLowerCase().includes(state.todoSearchQuery.toLowerCase()));
        if (state.todoFilter == 'starred') return !todoItem.isTrashed && todoItem.isStarred && (todoItem.title.toLowerCase().includes(state.todoSearchQuery.toLowerCase()) || todoItem.desc.toLowerCase().includes(state.todoSearchQuery.toLowerCase()));
        if (state.todoFilter == 'important') return !todoItem.isTrashed && todoItem.isImportant && (todoItem.title.toLowerCase().includes(state.todoSearchQuery.toLowerCase()) || todoItem.desc.toLowerCase().includes(state.todoSearchQuery.toLowerCase()));
        if (state.todoFilter == 'done') return !todoItem.isTrashed && todoItem.isDone && (todoItem.title.toLowerCase().includes(state.todoSearchQuery.toLowerCase()) || todoItem.desc.toLowerCase().includes(state.todoSearchQuery.toLowerCase()));
        if (state.todoFilter == 'trashed') return todoItem.isTrashed && (todoItem.title.toLowerCase().includes(state.todoSearchQuery.toLowerCase()) || todoItem.desc.toLowerCase().includes(state.todoSearchQuery.toLowerCase()));
        if (state.todoFilter == 'frontend') return !todoItem.isTrashed && todoItem.tags.includes('frontend') && (todoItem.title.toLowerCase().includes(state.todoSearchQuery.toLowerCase()) || todoItem.desc.toLowerCase().includes(state.todoSearchQuery.toLowerCase()));
        if (state.todoFilter == 'backend') return !todoItem.isTrashed && todoItem.tags.includes('backend') && (todoItem.title.toLowerCase().includes(state.todoSearchQuery.toLowerCase()) || todoItem.desc.toLowerCase().includes(state.todoSearchQuery.toLowerCase()));
        if (state.todoFilter == 'doc') return !todoItem.isTrashed && todoItem.tags.includes('doc') && (todoItem.title.toLowerCase().includes(state.todoSearchQuery.toLowerCase()) || todoItem.desc.toLowerCase().includes(state.todoSearchQuery.toLowerCase()));
        if (state.todoFilter == 'bug') return !todoItem.isTrashed && todoItem.tags.includes('bug') && (todoItem.title.toLowerCase().includes(state.todoSearchQuery.toLowerCase()) || todoItem.desc.toLowerCase().includes(state.todoSearchQuery.toLowerCase()));
    }).reverse(),
    getTodosBySection: state => (sectionId) => state.todoArray.filter((todoItem) => todoItem.sectionId == sectionId),
}