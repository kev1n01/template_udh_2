const $ = (selector) => document.querySelector(selector);
const $id = (selector) => document.getElementById(selector);

const chatButton = $('#chatButton');
const closeChat = $('#chat_box_close');
const chatBox = $id('chat_box');

closeChat.addEventListener('click', () => {
    chatBox.classList.remove('active')
})

chatButton.addEventListener('click', () => {
    chatBox.classList.add('active')
})