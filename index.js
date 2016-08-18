function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }
    return `Currently serving ${line.shift()}.`
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }
    const list = [];
    for (let i = 0, m = line.length; i < m; i++) {
       list.push(`${i + 1}. ${line[i]}`)
     }
    return `The line is currently: ${list.join(', ')}`
}
