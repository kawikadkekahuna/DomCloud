var storage = {};
var display = document.getElementById('dom_cloud_container');

function recursiveDOM(start){

  if(!storage.hasOwnProperty(start.localName)){
    storage[start.localName] = 1;
  }else{
    storage[start.localName]++;
  }

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

recursiveDOM.convert = function(){ // converts to array;
  var sortedArray =[]; 
  for(var key in storage){
    sortedArray.push([key,storage[key]]);
  }

  sortedArray.sort(function(a,b){return b[1] - a[1]});
  sortedArray.splice(20,sortedArray.length - 20);
  console.log(sortedArray);
  for(var i= 0; i<sortedArray.length; i++){
  var divvy  = document.createElement('div');
  divvy.style.fontSize = (100 - i *3)/3;
  divvy.innerHTML = sortedArray[i];
  display.appendChild(divvy);
  }
}

//kickoff
//recursiveDOM(start);
