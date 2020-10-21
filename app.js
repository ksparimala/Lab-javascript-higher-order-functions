const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
//progression 1
function modifiedFood()
{
console.log(foods.slice(1,4));
}
console.log(modifiedFood(foods));
//2
const foods1 = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
foods1.splice(2,0,'noodles','icecream');
console.log(foods1);
//3
const numberArray = [12,324,213,4,2,3,45,4234];
function isEven(numberArray)
{
let evenNumbers=numberArray.filter(function(num)
{
    return num%2==0;
});
return evenNumbers;
}
console.log(isEven(numberArray));
//3.1
function isPrime(numberArray)
{
    let primes=numberArray.filter(function(number) 
    { for (var i=2;i<=number;i++) 
        {
          return number%i!=0;
        }
        }); 
      return primes;
}
console.log(isPrime(numberArray));
//4
function nonPrime(numberArray)
{
    let nonprimes=numberArray.filter(function(number) 
    { for (var i=2;i<=number;i++) 
        {
          return number%i==0;
        }
        }); 
      return nonprimes;
}
console.log(nonPrime(numberArray));
//5
function isEven1()
{
let evenNumbers=numberArray.filter(number=>number%2==0);
return evenNumbers;
}
console.log(isEven1(numberArray));
//6
const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray)
{
    let squares=myArray.map(function(item)
    {
        return item*item;
    });
    return squares;
}
console.log(findSquareOfNumbers(myArray));
//7
const myArray1=[2, 3, 5, 10];
function multiply(myArray1)
{
let multiplyvalues=myArray1.reduce(function(initial,item)
{
    return initial*item;
});
return multiplyvalues;
}
console.log(multiply(myArray1))

