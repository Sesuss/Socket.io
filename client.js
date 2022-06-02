const socket = io("http://localhost:4000")
let mes=document.getElementById("mes")
let form=document.getElementById("form")

socket.on("mensaje", (data,user) => {
    addmes(data,user)
})
form.addEventListener("submit", data =>{
    data.preventDefault();
    socket.emit("newmes",form.input.value,form.inputuser.value)
    form.input.value=""
    form.inputuser.disabled=true

})

function addmes(data,user){
    let nuevomes = "<div><strong>"+user+":</strong>"+data+"</div>"
    mes.innerHTML += nuevomes
}