function takeANumber(katzDeliLine,name) {
  var num = katzDeliLine.length + 1 
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + num + " in line."
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) {
  return "Currently serving " + katzDeliLine.shift()  +"."
  }
  else
  return "There is nobody waiting to be served!"
}
function currentLine(katzDeliLine) {
  
}