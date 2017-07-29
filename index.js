var katzDeli = []

function takeANumber(katzDeliLine, customerName){
  katzDeliLine.push(customerName)
  var length = katzDeliLine.length
  return `Welcome, ${customerName}. You are number ${length} in line.`
}

function nowServing(position){
  if(position.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
    var nextCustomer = position[0]
    position.shift()
    return `Currently serving ${nextCustomer}.`
  }
}
function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty."
  }
  else {
    var customerInLine = "The line is currently: "
    for(var i = 0; i < line.length; i++) {
      customerInLine += `${i + 1}. ${line[i]}`
      if(line.length > i +1){
        customerInLine += ', '
      }
    }
    return customerInLine
  }
}
