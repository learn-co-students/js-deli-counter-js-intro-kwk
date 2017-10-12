var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(newarray) {
  if (newarray.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var youreUp = newarray.splice(0,1);
    return `Currently serving ${youreUp}.`
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.';
  } else {
    var customers = [];
    for (let i = 0; i < line.length; i++) {
      customers.push(` ${i+1}. ${line[i]}`);
      console.log(`${i+1}. ${line[i] }`);
    }
    return `The line is currently:${customers}`
  }
}
