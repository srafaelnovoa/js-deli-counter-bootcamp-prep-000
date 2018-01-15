function takeANumber(katzDeliLine,name) {
  var num = katzDeliLine.length + 1 
  katzDeliLine.push("Welcome, " + name + ". Your are number " + num + " in line.");
  return num
}