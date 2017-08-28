'use strict';

import aritGeo from '../src/main.js';
import chai  from 'chai';
const assert = chai.assert;

        
describe("Check that an array of numbers is either arithmetic or geometric: ", () => {

    describe("When it is an empty array", () => {

        it("should return 0 for an empty array", () => {
            assert.equal(0,aritGeo([]));
        });

    });

    describe("When it is an arithmetic sequence", () => {

        it("should return `Arithmetic` for [2, 4, 6, 8, 10]", () => {
            assert.equal('Arithmetic',aritGeo([2, 4, 6, 8, 10]));

        });

        it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", () => {
            assert.equal('Arithmetic',aritGeo([5, 11, 17, 23, 29, 35, 41]));

        });

        it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", () => {
            assert.equal('Arithmetic',aritGeo([15, 10, 5, 0, -5, -10]));
        });

    });

    describe("When it is a geometric sequence", () => {

        it("should return `Geometric` for [2, 6, 18, 54, 162]", () => {
            assert.equal('Geometric',aritGeo([2, 6, 18, 54, 162]));
            
        });

        it("should return `Geometric` for [0.5, 3.5, 24.5, 171.5]", () => {
            assert.equal('Geometric',aritGeo([0.5, 3.5, 24.5, 171.5]));

        });

        it("should return `Geometric` for [−128, 64, −32, 16, −8]", () => {
            assert.equal('Geometric',aritGeo([-128, 64, -32, 16, -8]));
            
        });

    });

    describe("When it is neither arithmetic nor geometric sequence", () => {

        it("should return -1 for [1, 2, 3, 5, 8]", () => {
            assert.equal(-1,aritGeo([1, 2, 3, 5, 8]));

        });

        it("should return -1 for [1, 3, 6, 10, 15]", () => {
            assert.equal(-1,aritGeo([1, 3, 6, 10, 15]));
        });

        it("should return -1 for [1, 8, 27, 64, 125]", () => {
            assert.equal(-1,aritGeo([1, 8, 27, 64, 125]));
 
        });
        
    });

    describe("When the array contains different data types", () => {
        
        it("should return 'enter an array that contains all numbers' for [1, 2,undefined, 5, 8]", () => {
            assert.equal('enter an array that contains all numbers',aritGeo([1, 2, undefined, 5, 8]));

        });

        it("should return 'enter an array that contains all numbers' for [1, 2,true, 5, 8]", () => {
            assert.equal('enter an array that contains all numbers',aritGeo([1, 2, true, 5, 8]));

        });

        it("should return 'enter an array that contains all numbers' for [1, 'symbol',undefined, 5, 8]", () => {
            assert.equal('enter an array that contains all numbers',aritGeo([1, 'symbol', undefined, 5, 8]));

        });
        it("should return 'enter an array that contains all numbers' for [1, 'symbol',undefined, ()=>{}, 8]", () => {
            assert.equal('enter an array that contains all numbers',aritGeo([1, 'symbol', undefined, ()=>{}, 8]));

        });
                
    });
});
    