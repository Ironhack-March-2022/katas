/*
https://www.codewars.com/kata/55eea63119278d571d00006a
You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!
Therefore you need a method, which returns the smallest unused ID for your next new data item...
Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!
Go on and code some pure awesomeness!
*/

function nextId(ids) {
	for (let i = 0; ; i++) {
		if (!ids.includes(i)) {
			return i
		}
	}
}

function nextId(ids) {
	const max = Math.max(...ids)
	for (let i = 0; i <= max; i++) {
		if (ids.indexOf(i) === - 1) {
			return i
		}
	}
	return max + 1
}


function nextId(ids) {
	let check = 0
	for (let i = 0; i < ids.length; i++) {
		if (ids.includes(check)) {
			check++
		}
	}
	return check
}