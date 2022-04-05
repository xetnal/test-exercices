// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
const fromDollarToYen = (valueInDollar) =>{
    let valueinEuro = valueInDollar / 1.2
    let valueinYen = valueinEuro * 127.9;
    return valueinYen

}

const fromYenToPound = (valueinYen) =>{
     let valueInEuro = valueinYen / 127.9
     let valueinPound = valueInEuro * 0.8
     return valueinPound
 }





// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar , fromDollarToYen, fromYenToPound}