var katzDeliLine = [];
var served = 0;

takeANumber(katzDeliLine,name)
{
  var next = katzDeliLine.length;
  katzDeliLine[next] = name;
  var string1 = "Welcome, "+name+". You are number "+next - served + 1 +" in line.";
  return string1; 
}