/*=========================================================================================
  File Name: moduleChatGetters.js
  Description: Chat Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import contacts from '@/views/apps/chat/contacts'

export default {
    chatDataOfUser: state => id => {
        return state.chats[Object.keys(state.chats).find(key => key == id)]
    },
    chats: (state, getters) => {
        const chatArray = contacts.filter((contact) => {
            if(getters.chatDataOfUser(contact.id)) return (contact.name.toLowerCase().includes(state.chatSearchQuery.toLowerCase()) && (getters.chatDataOfUser(contact.id).msg.length > 0));
        });
        return chatArray.sort((x,y) => {
            let timeX = getters.chatLastMessaged(x.id).time
            let timeY = getters.chatLastMessaged(y.id).time
            return (new Date(timeY) - new Date(timeX))
        });
    },
    chatcontacts: (state) => contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(state.chatSearchQuery.toLowerCase())
    }),
    chatLastMessaged: (state, getters) => id => {
        if(getters.chatDataOfUser(id)) return getters.chatDataOfUser(id).msg.slice(-1)[0];
        else return false
    },
    chatUnseenMessages: (state, getters) => id => {
        let unseenMsg = 0;
        const chatData = getters.chatDataOfUser(id);
        if(chatData) {
            chatData.msg.map((msg) => {
                if(!msg.isSeen && !msg.isSent) unseenMsg++;
            })
        }
        return unseenMsg;
    },
}