var uppercase, lowercase

function logshout(string){
  uppercase = string.toUpperCase();
  console.log (string.toUpperCase);
}

function shout(string){
  uppercase = string.toUpperCase();
  string = uppercase;
  return uppercase;
}
 function whisper(string){
   lowercase = string.toLowerCase();
   string = lowercase;
   return lowercase;
 }

 function logwhisper(string){
   lowercase = string.toLowerCase();
   string = lowercase;
   console.log(lowercase);
 }
