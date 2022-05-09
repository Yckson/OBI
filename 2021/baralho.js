var baralho = prompt().toString();
var carta = '';
var cartas = Array();
var repetidas = Array();
var contagem;

for (var c = 0; c < baralho.length; c++){
    carta += baralho.charAt(c);
    if ((c + 1) % 3 == 0){
        cartas.push(carta);
        carta = '';
        
    }
}

baralho = Array(0, 0, 0, 0);

for (var c = 0; c < cartas.length; c++){
    contagem = 0;
    switch(cartas[c].charAt(2)){
        case 'C':
            baralho[0] += 1;
            break;
        case 'E':
            baralho[1] += 1;
            break;
        case 'U':
            baralho[2] += 1;
            break;
        default:
            baralho[3] += 1;
            break;
    }
    
    for (var d = 0; d < cartas.length; d++){
        if (cartas[c] == cartas[d]){
            contagem += 1;
        }
    }
    if (contagem > 1){
        switch (cartas[c].charAt(2)){
            case 'C':
                repetidas[0] = 1;
                break;
            case 'E':
                repetidas[1] = 1;
                break;
            case 'U':
                repetidas[2] = 1;
                break;
            default:
                repetidas[3] = 1;
                break;
        }
    }
    
}

for (var c = 0; c < 4; c++){
    if (13 - baralho[c] == 0){
        console.log(0);
    }
    else{
        if (repetidas[c] == 1){
            console.log('erro');
        }
        else {
            console.log(13 - baralho[c]);
        }
    }
}