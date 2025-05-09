var ul=document.getElementById("one")
var input=document.getElementById("input")
function add()
{
    var listitem=document.createElement("li")
    listitem.innerHTML=input.value+"<button onclick='deleteitem(event)'>delete</button>"
    ul.append(listitem)

}
function deleteitem(event)
{
    event.target.parentElement.remove()

}