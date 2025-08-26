
import convertirFizzBuzz from "./fizzbuzz.js";
describe("fizzbuzz",()=>{
    it("deberia retornar Fizz si el numero es multiplo  3",()=>{
        expect(convertirFizzBuzz(12)).toEqual("Fizz")
    })
    it("deberia retornar el mismo numero si no es multiplo de 3 o 5",()=>{
        expect(convertirFizzBuzz(1)).toEqual("1")
    })
    it ("deberia retornar Buzz si el numero es multiplo de 5",()=>{

        expect(convertirFizzBuzz(25)).toEqual("Buzz")
    })
    it ("deberia retornar FizzBuzz si el numero es multiplo de 3 y 5",()=>{
        expect(convertirFizzBuzz(15)).toEqual("FizzBuzz")
    })

})
