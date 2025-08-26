describe("Fizzbuzz",()=>{
    it("deberia retornar Fizz si el numero es 3",()=>{
        expect(fizzbuzz(3)).toBe("Fizz")
    })
    /*
    it("deberia retornar Buzz si el numero es multiplo de 5",()=>{
        expect(fizzbuzz(10)).toBe("Buzz")
    })
    it("deberia retornar Fizzbuzz si el numero es multiplo de 3 y 5",()=>{
        expect(fizzbuzz(15)).toBe("Fizzbuzz")
    })*/
    it("deberia retornar el mismo numero si no es multiplo de 3 o 5",()=>{
        expect(fizzbuzz(1)).toBe("1")
    })
})
