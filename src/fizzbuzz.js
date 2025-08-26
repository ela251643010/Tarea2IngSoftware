
function convertirFizzBuzz(n){
     if(n%5===0 && n%3===0)
    {
        return "FizzBuzz"
    }
else
    if (n % 3===0)
    {
        return "Fizz"
    }
    if(n%5===0)
    {
        return "Buzz"
    }
   

    return n+ "";
}
export default convertirFizzBuzz;