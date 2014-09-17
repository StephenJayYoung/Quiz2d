var chai = require("chai");
var expect = chai.expect;
var lib = require('..index');
var fullNames = lib.fullNames;


describe 'getfullNames'() function () {
	//given an object, it returns the first and last name
it 'provides us with a first and last name' function () {
	var stevePerson = {
		'firstName' : 'Steve',
		'lastname' : 'Young',
	});
expect.getFullNames(stevePerson)).to.eql.('Steve Young');
	};
};