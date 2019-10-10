/*=========================================================================================
  File Name: moduleEmailGetters.js
  Description: Email Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
    filteredMails: state => state.mails.filter((mail) => {
        if (state.mail_filter == 'inbox') return mail.mailType == "inboxed" && ( mail.sender_name.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.sender.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.subject.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.message.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) );
        if (state.mail_filter == 'sent') return mail.mailType == "sent" && ( mail.sender_name.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.sender.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.subject.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.message.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) );
        if (state.mail_filter == 'draft') return mail.mailType == "drafted" && ( mail.sender_name.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.sender.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.subject.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.message.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) );
        if (state.mail_filter == 'starred') return mail.isStarred && mail.mailType != "trashed" && ( mail.sender_name.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.sender.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.subject.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.message.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) );
        if (state.mail_filter == 'trash') return mail.mailType == "trashed" && ( mail.sender_name.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.sender.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.subject.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.message.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) );
        if (state.mail_filter == 'spam') return mail.mailType == "spam" && ( mail.sender_name.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.sender.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.subject.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.message.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) );
        if (state.mail_filter == 'personal') return mail.mailType != "trashed" && mail.labels.includes('personal') && ( mail.sender_name.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.sender.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.subject.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.message.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) );
        if (state.mail_filter == 'company') return mail.mailType != "trashed" && mail.labels.includes('company') && ( mail.sender_name.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.sender.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.subject.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.message.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) );
        if (state.mail_filter == 'important') return mail.mailType != "trashed" && mail.labels.includes('important') && ( mail.sender_name.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.sender.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.subject.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.message.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) );
        if (state.mail_filter == 'private') return mail.mailType != "trashed" && mail.labels.includes('private') && ( mail.sender_name.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.sender.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.subject.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) || mail.message.toLowerCase().includes(state.mailSearchQuery.toLowerCase()) );
    }).reverse(),
    unreadMails: state => (mailType) => state.mails.filter((mail) => mail.mailType == mailType && mail.unread).length,
    NumdraftMails: state => state.mails.filter((mail) => mail.mailType == 'drafted').length,
    getMail: state => (mailId) => state.mails.filter((mail) => mail.id == mailId)[0],
}