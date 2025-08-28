
import {generarCadenaFizzBuzz, convertirFizzBuzz} from "./fizzbuzz.js";
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
        expect(convertirFizzBuzz(30)).toEqual("FizzBuzz")
    })
    it ("deberia retornar la cadena 1 2 Fizz 4",()=>{
        expect(generarCadenaFizzBuzz(4)).toEqual("1 2 Fizz 4 ")
    })
       it ("deberia retornar la cadena 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 14 FizzBuzz",()=>{
        expect(generarCadenaFizzBuzz(15)).toEqual("1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz ")
    })
})
