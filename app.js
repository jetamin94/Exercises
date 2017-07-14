// 1.	Default + rest + spread
// 1.1
const arrChar = (string) => {
	let res = []
	for( let c of string){
		res.push(c)
	}
	return res
}

// 1.2
const addVal = (arr1, val, arr2) => {
	let res = arr1.concat(val).concat(arr2)
	return res
}

//sum function
const sum = (a, b) => a + b
// 1.3
const sumArgs = (...numbs) => {
	let res = numbs.reduce(sum, 0)
	return res
}

// 1.4
const sumExceptFirst = (...numbs) => {
	let res = numbs.reduce(sum, 0) - numbs[0]
	return res
}

// 1.5
const sumExceptLast = (...numbs) => {
	let res = numbs.reduce(sum, 0) - numbs[numbs.length-1]
	return res
}

// 1.6
const sumFirst3Args = (...numbs) => {
	let res = numbs[0] + numbs[1] + numbs[2]
	return res
}

// 3.1
const getCountdownIterator = () => {
	let arr = []
	for(let i=9; i>=1; i--){
		arr.push(i)
	}
	let iterator = arr[Symbol.iterator]()
	let res = []
	for(let i of arr) {
		res.push(iterator.next().value)
	}
	return res
}

// 3.2
const fibGenerator = (n) => {
	if(n === 0 || n === 1){
		return n
	}
	if(n>1){
		return fibGenerator(n-1) + fibGenerator(n-2)
	}
}

// 4.1
const getCountdownGenerator = () => {
	function* numGenerator() {
		let index = 9
		while(index >= 1)
			yield index--
	}
	var gen = numGenerator()
	let res = []
	let i = 9
	while(i >= 1) {
		i--
		res.push(gen.next().value)
	}
	return res
}

// 4.3
const fibFilter = (n) => {
	res = []
	if(n===0 || n===1){
		return []
	}
	if(n>1){
		let i=2
		while(i<n){
			if(fibGenerator(i)%2 === 0){
				res.push(fibGenerator(i))
			}
			i++
		}
		return res
	}
}

module.exports= {
	arrChar,
	addVal,
	sumArgs,
	sumExceptFirst,
	sumExceptLast,
	sumFirst3Args,
	getCountdownIterator,
	fibGenerator,
	getCountdownGenerator,
	fibFilter
}