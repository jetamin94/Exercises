const chai = require('chai')
const server = require('../app')
const should = chai.should()
//const expect = chai.expect

describe('Test part3', () => {
	it('4.1 Remove invalid data', () => {
		let res = server.removeInvalid([0, 16, false, -21, '', undefined, 45, null])
		res.should.be.an('array')
		res.should.have.members([16, -21, 45])
	})
	it('4.2 Remove a specific element', () => {
		let res = server.removeSpecific([2, 5, 9, 6], 5)
		res.should.be.an('array')
		res.should.have.members([2, 9, 6])
	})
	it('4.3 Get a random item from an array', () => {
		let res = server.getRandom([1, 2, 3, 4, 5])
		res.should.not.be.null;
	})
	it('4.4 Use reduce() to sum all scores', () => {
		let res = server.sumScores([
			{
				id: 1,
				scores: [7, 8, 3, 4]
			},
			{
				id: 2,
				scores: [5, 10, 9, 6]
			},
			{
				id: 3,
				scores: [9, 7, 4, 8]
			}
		])
		res.should.be.an('array')
	})
	it('4.5 Increase all elements by 10', () => {
		let res = server.inscrease10([5, 10, 15, 20, 25, 30])
		res.should.be.an('array')
		res.should.have.members([15, 20, 25, 30, 35, 40])
	})
})