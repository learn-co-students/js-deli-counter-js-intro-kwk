var katzDeliLine = []

function takeANumber(katzDeliLine, person) {
	katzDeliLine.push(person)
	var result = `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`
	return result
}

function nowServing(katzDeliLine) {
	if (katzDeliLine.length == 0) {
		return "There is nobody waiting to be served!"
	}
	var next = katzDeliLine[0]
	katzDeliLine.shift()
	return `Currently serving ${next}.`
}

function currentLine(line) {
	if (line.length == 0) {
		return "The line is currently empty."
	}
	var lineList = "The line is currently:"
	for (var i = 0; i < line.length - 1; i++) {
		lineList += ` ${i + 1}. ${line[i]},`
	}
	lineList += ` ${line.length}. ${line[line.length - 1]}`
	return lineList
}
