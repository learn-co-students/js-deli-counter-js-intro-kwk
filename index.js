function takeANumber(katzDeliLine, newCustomer) {
  katzDeliLine.push(newCustomer)
  var newCustomerPosition = katzDeliLine.indexOf(newCustomer) + 1
  return `Welcome, ${newCustomer}. You are number ${newCustomerPosition} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var customerList = "The line is currently: "
    for (let i = 0; i < katzDeliLine.length; i++) {
      customerList += `${katzDeliLine.indexOf(katzDeliLine[i]) + 1}. ${katzDeliLine[i]}`
      if (i + 1 < katzDeliLine.length) {
        customerList += ", "              // nested `if` statement... gross, I know
      }
    }
    return customerList
  } else {
    return "The line is currently empty."
  }
}
