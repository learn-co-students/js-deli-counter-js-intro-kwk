function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;
}

function nowServing (katzDeli) {
  var result = `Currently serving ${katzDeli[0]}.`;
  if (katzDeli.length > 0) {
    katzDeli.shift();
    return result;
  }
  else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine (line) {
  var result = `The line is currently: `;
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      if (i < line.length - 1) {
      result += `${i + 1}. ${line[i]}, `;
      }
      else {
        result += `${i + 1}. ${line[i]}`;
      }
    }
    return result;
  }
  else {
    return "The line is currently empty."
  }
}
