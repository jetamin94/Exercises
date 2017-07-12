const chai = require('chai')
const server = require('../app')
const should = chai.should()
//const expect = chai.expect

describe('Test part1', () => {
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
})