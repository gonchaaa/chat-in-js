let chat=document.querySelector('#chat')
let close=document.querySelector('#chat .close')
let miniChat=document.querySelector('#mini-chat')
let textChat=document.querySelector('#chat #chat-text')
let main=document.querySelector('#chat main')

close.addEventListener('click', function(){
chat.classList.add("d-none")
})


miniChat.addEventListener('click',function(){
    chat.classList.remove('d-none')
})


textChat.addEventListener('keyup',function(e){
// console.log(e);
if (e.keyCode===13) {
    if (textChat.value.trim()!='') {
        if (textChat.value[0].toUpperCase()==textChat.value[0]) {
            addChat('support')
        }
        else{
            addChat('user')
        }   
    }
    textChat.value=""

}
})


function addChat(clname){
    let dt=new Date()
    main.insertAdjacentHTML(
        'beforeend',
        `
        <div class="message ${clname}">
        <p>${textChat.value}</p>
        <p class="time">${dt.getHours()+":"+dt.getMinutes()}</p>
        </div>
        
        `
    )
    main.scrollTop=main.scrollHeight
}