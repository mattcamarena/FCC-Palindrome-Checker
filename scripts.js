/*
palidrome will check to see if the sentence passed is a palindrome 
It will ignore special characters, spaces, symboles, and capitalization
*/

// passes on the string to get fixed while also making it all lowercase
// then checks from start and end to the center whether the values are equal O(n/2)
function startCheck(){
  clearVis();
  if(palindrome(document.getElementById("textBox").value)){
    document.getElementById("is").style = "visible";
  }else{
    document.getElementById("isnt").style= "visible";
  }
}

function clearText(){
  document.getElementById("textBox").value = "";
  clearVis();
}

function clearVis(){
  document.getElementById("is").style = "display:none";
  document.getElementById("isnt").style = "display:none";
}

function palindrome(str) {
  str = fixStr(str.toLowerCase()); 
  for(var i = 0; i < str.length/2; i++){
    if(str[i]!= str[str.length-1-i]) return false;
  }
  return true;
}

// deletes all characters non alphanumeric (excluding underscores) 
// and returns the remaining string
function fixStr(str){
  let anRege = /[^a-zA-Z0-9]*/g;
  return str.replace(anRege,"");
}

