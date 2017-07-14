const chai = require('chai')
const server = require('../app')
const should = chai.should()
//const expect = chai.expect

describe('Test part2', () => {
	it('1.1. Returns an array of characters of a string.', () => {
		let res = server.arrChar('string')
		res.should.be.an('array')
		res.should.have.members(['s', 't', 'r', 'i', 'n', 'g'])
	})

	it('1.2 Need to add randome value inside two array', () => {
		let res = server.addVal([1, 2, 3], 'something', [4, 5, 6])
		res.should.be.an('array')
		res.should.have.members([1, 2, 3, 'something', 4, 5, 6])
	})

	it('1.3  returns sum of its arguments', () => {
		let res = server.sumArgs(1, 2, 3, 4, 5)
		res.should.to.equal(15)
	})

	it('1.4 returns sum of its arguments except for the first one', () => {
		let res = server.sumExceptFirst(1, 2, 3, 4, 5)
		res.should.to.equal(14)
	})

	it('1.5 returns sum of its arguments except for the last one', () => {
		let res = server.sumExceptLast(1, 2, 3, 4, 5)
		res.should.to.equal(10)
	})

	it('1.6 which returns sum of its first 3 arguments', () => {
		let res = server.sumFirst3Args(1, 2, 3, 4, 5)
		res.should.to.equal(6)
	})

	it('3.1 Create a countdown iterator that counts from 9 to 1 Use iterator', () => {
		let res = server.getCountdownIterator()
		res.should.be.an('array')
		res.should.have.members([9, 8, 7, 6, 5, 4, 3, 2, 1])
	})

	it('3.2 generates the next value of the Fibonacci sequence', () => {
		let res = server.fibGenerator(7)
		res.should.to.equal(13)
	})

	it('4.1 Create a countdown iterator that counts from 9 to 1 Use generator', () => {
		let res = server.getCountdownGenerator()
		res.should.be.an('array')
		res.should.have.members([9, 8, 7, 6, 5, 4, 3, 2, 1])
	})

	it('4.2 Create an infinite sequence that generates the next val', () => {
		let res = server.fibGenerator(7)
		res.should.to.equal(13)
	})

	it('4.3 Create a lazy filter generator function with even val', () => {
		let res = server.fibFilter(7)
		res.should.be.an('array')
		res.should.have.members([2, 8])
	})

/*
	it('1.1 Hello function', () => {
		let res = server.hello()
		res.should.to.equal('Hello world!')
	})
	it('1.2 Square function', () => {
		let res = server.square(5)
		res.should.to.equal(25)
	})
	it('1.3 Above70 array', () => {
		let res = server.above70
		res.should.be.an('array');
		res.should.have.members([ 234, 74, 76, 92 ])
	})
	it('1.4 Filter then reduce', () => {
		let res = server.totalMachineValue
		res.should.to.equal(5727)
	})
	it('3.1 Enhanced Object Literals', () => {
		let res = server.price
		res.should.to.equal(40)
	})
	it('5.1, 5.2 Get name and age of person object', () => {
		let res = server.getInfo()
		res.should.be.an('object')
		res.should.have.property('name')
		res.should.have.property('age')
		res.name.should.equal('Joe')
		res.age.should.equal(21)
	})
	it('5.3 Get 2 first hobbies', () => {
		let res = server.getHobs()
		res.should.be.an('array')
		res[0].should.equal('football')
		res[1].should.equal('tennis')
	})
	it('5.4 Get person’s married.', () => {
		let res = server.getMarr()
		res.should.be.an('object')
		res.should.have.property('married')
		res.married.should.be.true
	})
	it('5.5 Get person’s phone and email.', () => {
		let res = server.getCont(request)
		res.should.be.an('object')
		res.should.have.property('phone')
		res.should.have.property('email')
		res.phone.should.equal('0123456789')
	})
	*/
})