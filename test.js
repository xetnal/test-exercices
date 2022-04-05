const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
test('One dollar should be 106.58 yen', () =>{
    const { fromDollarToYen } = require('./app.js')

    const yen = fromDollarToYen(1)

    expect(fromDollarToYen(1)).toBe(106.58333333333334)
})
test('A hundred yen should be 0.6 pounds', () => {
    const { fromYenToPound } = require('./app.js')

    const pound = fromYenToPound(100)
    expect (fromYenToPound(100)).toBe(0.6254886630179828)
})
