//let assert = require('assert');

import {generatePost, isEqual} from "../store/reducer/utils";
let assert = require('assert');


describe("Post:", ()=>{
    it("GeneratePost", ()=>{
        console.log(generatePost(5));
        assert.equal(isEqual(generatePost(-10), []), true);
    });



});