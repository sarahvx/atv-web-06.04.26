export function triangulo(num1, num2, num3){
    if (num1 >= num2 + num3 || num2 >= num1 + num3 || num3 >= num1 + num2) return 'invalid'	
    else if (num1 === num2 && num2 === num3 ) return 'equilateral';
    else if (num1 !== num2 && num2 !== num3 && num1 !== num3) return 'scalene'
    else
	return 'isosceles'
}

