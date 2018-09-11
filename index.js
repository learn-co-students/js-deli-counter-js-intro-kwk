function takeANumber(line, name) {
  line.push(name)

  for (var i = 0; i < line.length; i++) {
    if (line[i] == name){
      return `Welcome, ${name}. You are number ${i+1} in line.`
    } // if
  } // for loop
} // takeANumber

function nowServing(line, name){
  if (line.length == 0){
    return `There is nobody waiting to be served!`
  } else {
    var currServe = `Currently serving ${line[0]}.`
    //return `Currently serving ${katzDeliLine[0]}.`
    line.shift()
    return currServe
  } // if else
} // nowServing

function currentLine(line) {
  if(line.length == 0) {
    return `The line is currently empty.`
  } else {
    var currLine = 'The line is currently: '
    for (var i = 0; i < line.length-1; i++) {
      currLine = currLine + `${[i+1]}. ${line[i]}, `
    } // for
    if (i == line.length-1)
      currLine = currLine + `${[i+1]}. ${line[i]}`
    return currLine
  } // if else
} // currentLine
