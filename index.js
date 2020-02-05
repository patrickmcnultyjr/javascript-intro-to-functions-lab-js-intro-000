var uppercase, lowercase

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
function logShout(string){
  uppercase = string.toUpperCase()
  string = uppercase;
  console.log(uppercase)
}
 function logwhisper(string){
   lowercase = string.toLowerCase()
   string = lowercase;
   console.log(lowercase)
 }
 function sayHiToGrandma(string) {
   if (string.toLowerCase === string) {
     return "I can't hear you!";
   }
   else if (string.toUpperCase() === string){
     return "YES INDEED!";
   }
   elses (string === "I loveyou, Grandma."){
     return "I love you, too.";
   }
 }
