/*=========================================================================================
  File Name: moduleTodoState.js
  Description: Todo Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
    todoArray: [
        {
            "id": 0,
            "title": "Refactor Code",
            "desc": "Pie liquorice wafer cotton candy danish. Icing topping jelly-o halvah pastry lollipop.",
            "isImportant": true,
            "isStarred": false,
            "tags": ["doc", "backend"],
            "isDone": false,
            "isTrashed": false
        },
        {
            "id": 1,
            "title": "Submit Report",
            "desc": "Donut tart toffee cake cookie gingerbread. Sesame snaps brownie sugar plum candy canes muffin cotton candy.",
            "isImportant": false,
            "isStarred": true,
            "tags": ["frontend", "doc"],
            "isDone": false,
            "isTrashed": false
        },
        {
            "id": 2,
            "title": "Send PPT 🎁",
            "desc": "Dragée gummi bears tiramisu brownie cookie. Jelly beans pudding marzipan fruitcake muffin. Wafer gummi bears lollipop pudding lollipop biscuit.",
            "isImportant": true,
            "isStarred": true,
            "tags": ["backend", "doc"],
            "isDone": false,
            "isTrashed": false
        },
        {
            "id": 3,
            "title": "Skype Tommy",
            "desc": "Tart oat cake sesame snaps lollipop croissant cake biscuit.",
            "isImportant": false,
            "isStarred": false,
            "tags": ["bug"],
            "isDone": true,
            "isTrashed": false
        },
        {
            "id": 4,
            "title": "Pick up Natasha 😁",
            "desc": "Sweet roll toffee dragée cotton candy jelly beans halvah gingerbread jelly-o. Ice cream bear claw sugar plum powder.",
            "isImportant": true,
            "isStarred": true,
            "tags": [],
            "isDone": false,
            "isTrashed": false
        },
        {
            "id": 5,
            "title": "Meet Jane ❤️",
            "desc": "Toffee sugar plum oat cake tiramisu tart bonbon gingerbread cheesecake cake. ",
            "isImportant": true,
            "isStarred": true,
            "tags": ["frontend", "backend", "doc"],
            "isDone": false,
            "isTrashed": false
        },
        {
            "id": 6,
            "title": "Promot Products",
            "desc": "Gummi bears bear claw cake tiramisu gummies tiramisu apple pie chocolate jujubes. ",
            "isImportant": true,
            "isStarred": false,
            "tags": [],
            "isDone": false,
            "isTrashed": true
        },
        {
            "id": 7,
            "title": "Fix Project",
            "desc": "Cookie fruitcake macaroon muffin apple pie chocolate bar toffee oat cake. Icing chocolate danish.",
            "isImportant": false,
            "isStarred": false,
            "tags": ["backend"],
            "isDone": false,
            "isTrashed": true
        },
        {
            "id": 8,
            "title": "Remove redundant files",
            "desc": "Brownie jelly beans tootsie roll brownie marshmallow. Sesame snaps halvah marzipan chocolate cake. Icing bear claw pie apple pie.",
            "isImportant": false,
            "isStarred": false,
            "tags": [],
            "isDone": true,
            "isTrashed": true
        },
        {
            "id": 9,
            "title": "Fix Responsiveness 💻",
            "desc": "Jelly topping toffee bear claw. Sesame snaps lollipop macaroon croissant cheesecake pastry cupcake.",
            "isImportant": true,
            "isStarred": false,
            "tags": ["frontend"],
            "isDone": false,
            "isTrashed": false
        },
    ],
    todoTags: [
        { text: 'Frontend' ,value : 'frontend', color: 'primary' },
        { text: 'Backend', value: 'backend', color: 'warning'},
        { text: 'Doc', value: 'doc', color: 'success'},
        { text: 'Bug', value: 'bug', color: 'danger' },
    ],
    todoFilter: 'all',
    todoSearchQuery: '',
}