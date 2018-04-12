function shout  (string){
  return string.toUpperCase();
  
}
function whisper (Hello){
  return Hello.toLowerCase();
}
function logShout (string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}
function sayHiToGrandma (string) {
  if ( string == string.toLowerCase()) {
  
     return "I can't hear you!"
}

 else  if(string == string.toUpperCase()){

    return 'YES INDEED!'
<<<<<<< HEAD
  }else if(string == "I love you, Grandma."){
    return  'I love you, too.';
  }
  
=======
  }else if(string == "I love tou, Grandma."){
    return 
  }
>>>>>>> cfd9dd1589ca159cae9487e723aed2ebbd16fbc6
}