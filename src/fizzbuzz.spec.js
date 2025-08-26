
import convertirFizzBuzz from "./fizzbuzz.js";
describe("fizzbuzz",()=>{
    it("deberia retornar Fizz si el numero es multiplo  3",()=>{
        expect(convertirFizzBuzz(12)).toEqual("Fizz")
    })
    it("deberia retornar el mismo numero si no es multiplo de 3 o 5",()=>{
        expect(convertirFizzBuzz(1)).toEqual("1")
    })
    it ("deberia retornar Buzz si el numero es 5",()=>{

        expect(convertirFizzBuzz(5)).toEqual("Buzz")

    })

})
