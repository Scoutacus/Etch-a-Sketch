function addElement(){
    var item = document.createElement("div");
    item.setAttribute('id', 'children');
    item.addEventListener("mouseover",func,false);
    document.getElementById("container").appendChild(item)
    event.stopPropagation();
}


function func()
{  
    let item = document.getElementById("children")
    item.setAttribute("style", "background-color: blue")
}
