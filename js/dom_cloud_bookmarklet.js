var storage = {};
var display = document.createElement('div');


function recursiveDOM(start){
  //Gathers the element's name and creates a key value pair.
  if(!storage.hasOwnProperty(start.localName)){
    storage[start.localName] = 1;
  }else{
    storage[start.localName]++;
  }
  //Gathers the element's attributes and creates a value for the corresponding
  if(start.nodeType === 1){
    var attributes = start.attributes;
    for(var i = 0; i< attributes.length; i++){
      if(!storage.hasOwnProperty(start.attributes[i].name)){
        storage[attributes[i].name] = 1;
    } else{
        storage[attributes[i].name]++;
      } 
    }
  }
  for(var i =0; i< start.children.length; i++){
      recursiveDOM(start.children[i]);
  }
}

recursiveDOM.convert = function(){ 
  var sortedArray =[]; 
  for(var key in storage){
    sortedArray.push([key,storage[key]]);
  }
  //Sorts the array from highest count to lowest count
  sortedArray.sort(function(a,b){return b[1] - a[1]});
  sortedArray.splice(20,sortedArray.length - 20);
  for(var i= 0; i<sortedArray.length; i++){
  //Appending to display and sets the font size based on the count of each key.
  var divvy  = document.createElement('div');
  divvy.style.fontSize = (100 - i *3)/3;
  divvy.innerHTML = sortedArray[i];
  display.appendChild(divvy);
  }
}



recursiveDOM(document.body);
recursiveDOM.convert();

document.body.insertBefore(display, document.body.firstChild);
