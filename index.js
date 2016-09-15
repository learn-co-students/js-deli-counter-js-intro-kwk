var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}

function nowServing(line) {
  var next = line[0];

  if(line.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
    line.shift();
    return "Currently serving " + next + ".";
  }
}

function currentLine(line) {
  if(line.length > 0) {
    var lineList = "The line is currently: ";

    line.forEach(function(cust, i) {
      lineList += i+1 + ". " + cust;
      if(i !== line.length-1) {
        lineList += ", ";
      }
    });

    return lineList;
  } else {
    return "The line is currently empty.";
  }
}
