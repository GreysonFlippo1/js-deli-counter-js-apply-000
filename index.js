//var katzDeliLine = [];
var served = 0;

function takeANumber(katzDeliLine,name)
{
  var next = katzDeliLine.length;
  katzDeliLine[next] = name;
  var string1 = "Welcome, "+name+". You are number "+(next - served + 1 )+" in line.";
  return string1; 
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length-served === 0 ){
    return "The line is currently empty.";
  }
  var string1 = "The line is currently:";
  for(var i = 0; i < katzDeliLine.length; i++){
    string1+=(i+1 - served)+". "+katzDeliLine[i];
    if(i!=katzDeliLine.length-1){
      string1 += ", ";
    }
  }
  return string1;
} // "The line is currently: 1. Ada, 2. Grace, 3. Kent"