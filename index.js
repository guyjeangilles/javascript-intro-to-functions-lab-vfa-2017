function shout(string) {
    return string.toUpperCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function whisper(string) {
  return string.toLowerCase()
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  var isLowerCase = string.toLowerCase === string;
  var isUpperCase = string.toUpperCase === string;
  if (isLowerCase){
    return "I can't hear you!"
  }
  if (isUpperCase){
    return "YES INDEED!"
  }
  if (string === "I love you, Grandma."){
    return "I love you, too."
  }
}
