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
 switch sayHiToGrandma(string) {
   case (string.toLowerCase === string):
     console.log ("I can't hear you!");
   break;
   case (string.toUpperCase() === string):
     console.log ("YES INDEED!");
   break;
   case (string === "I loveyou, Grandma."):
     console.log ("I love you, too.");
   }
