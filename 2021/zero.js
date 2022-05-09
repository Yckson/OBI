var N = Number.parseInt(prompt());
var numbers = Array();
var number;
for (var c = 0; c < N; c++){
    number = Number.parseInt(prompt());
    if (number == 0){
        numbers.pop();
    }
    else{
        numbers.push(number);
    }
}

var somaTotal = 0

for (var c = 0; c < numbers.length; c++){
    somaTotal += numbers[c];
}

console.log(somaTotal);
sum