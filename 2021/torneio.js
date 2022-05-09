var points = 0;
var match;
for (var c = 0; c < 6; c++){
    match = prompt("Venceu ou perdeu: ");
    if (match == 'V'){
        points += 1;
    }
}

if (points < 3){
    if (points == 0){
        console.log(-1);
    }
    else{
        console.log(3);
    }
}
else if (points < 5 ){
    console.log(2);
}
else{
    console.log(1);
}