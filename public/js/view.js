const deleteItem=function(){
  let id=event.target.id;
  let item = document.getElementById(id);
  item.parentNode.removeChild(item);  
  updateItems(id);
}

const updateItems=function(id){
  
}