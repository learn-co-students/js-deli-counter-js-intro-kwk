function takeANumber (katzDeliLine, nextName) {
  var newKatzDeliLine = katzDeliLine
  newKatzDeliLine.push(nextName)
  return "Welcome, " + newKatzDeliLine[newKatzDeliLine.length-1] + ". You are "+
  "number " + newKatzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var newKatzDeliLine = katzDeliLine[0]
    katzDeliLine = katzDeliLine.shift()

    return "Currently serving " + newKatzDeliLine + "."
  }
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  var lineString = "The line is currently: "
  for (let i = 0; i < katzDeliLine.length; ++i) {
    if (i === katzDeliLine.length-1) {
      lineString = lineString + (i + 1) + ". " + katzDeliLine[i]

    } else {
      lineString = lineString + (i + 1) + ". " + katzDeliLine[i] + ", "
    }
  }
  return lineString
}
