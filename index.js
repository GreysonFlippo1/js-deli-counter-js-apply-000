//var katzDeliLine = [];
var served = 0;

function takeANumber(deliLine,name)
{
  var next = deliLine.length;
  deliLine[next] = name;
  var string1 = "Welcome, "+name+". You are number "+next - served + 1 +" in line.";
  return string1; 
}