function takeANumber(katzDeliLine,name) {
  var num = katzDeliLine.length + 1 
  katzDeliLine.push("Welcome, " + name + ". You are number " + num + " in line.");
  return num
}