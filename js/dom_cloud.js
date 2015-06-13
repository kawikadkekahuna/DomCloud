var storage = {};
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
//        console.log(start[attributes[i].name]);
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

//kickoff
//recursiveDOM(start);
