function distribuicaoNiveis()    {
    
    var n1, n2, n3, n4, n5, n6, n7;
            
    var elemento = document.getElementById('elemento').value;
    var numeroAtomico = document.getElementById('numeroAtomico').value;
        
        if (numeroAtomico <= 2) {
            n1 = numeroAtomico;
            n2 = n3 = n4 = n5 = n6 = n7 = " ";
            
        } else {
            n1 = 2;
            n2 = numeroAtomico - 2;
                if (n2 <= 0)
                    n2 = " ";
                else if ((n2 > 0) && (n2 <= 8))
                 n2 = n2;
                else
                 n2 = 8;
            n3 = numeroAtomico - 2 - n2;
                if (n3 <= 0)
                    n3 = " ";
                else if (n3 > 0 && n3 < 8)
                    n3 = n3;
                else if (n3 < 18) 
                    n3 = 8;
                else
                    n3 = 18;
            n4 = numeroAtomico - 2 - n2 - n3;
                if (n4 <= 0)
                    n4 = " ";
                else if (n4> 0 && n4 < 8)
                    n4 = n4;
                else if (n4 > 8 && n4 < 18)
                    n4 = 8;
                else if (n4 > 18 && n4 < 32)
                    n4 = 18;
                else
                    n4 = 32;
            n5 = numeroAtomico - 2 - n2 - n3 - n4;
                if (n5 <= 0)
                    n5 = " ";
                else if (n5 > 0 && n5 <= 8)
                    n5 = n5;
                else if (n5 > 8 && n5 <= 18)
                    n5 = 8;
                else if (n5 > 18 && n5 <= 32)
                    n5 = 18;
                else
                    n5 = 32;
            n6 = numeroAtomico - 2 - n2 - n3 - n4 - n5;
                if (n6 <= 0)
                    n6 = " ";
                else if (n6 > 0 && n6 <= 8)
                    n6 = n6;
                else if (n6 > 8 && n6 <= 18)
                    n6 = 8;
                else 
                    n6 = 18;
            n7 = numeroAtomico - 2 - n2 - n3 - n4 - n5 - n6;
                if (n7 <= 0)
                    n7 = " ";
                else
                    n7 = n7;

        }
    

    document.getElementById("distribuicao").innerHTML = "<td>" + elemento + "</td>" +
     "<td>" + n1 + "</td>" + "<td>" + n2 + "</td>" + "<td>" + n3 + "</td>" + "<td>" + n4 + "</td>" + 
     "<td>" + n5 + "</td>" + "<td>" + n6 + "</td>" + "<td>" + n7 + "</td>";
}

function distribuicaoSubniveis() {
    
    //distribuição eletrônica em subníveis
    var s = new Array(19);
    var elemento = document.getElementById('elemento').value;
    var numeroAtomico = document.getElementById('numeroAtomico').value;

    //atribui valor " " a todas as posições do array s
        s[0] = s[1] = s[2] = s[3] = s[4] = s[5] = s[6] = s[7] = s[8] = s[9] = s[10] 
            = s[11] = s[12] = s[13] = s[14] = s[15] = s[16] = s[17] = s[18] = " ";
    
    try { 
        //verfica validade do número digitado
        if(numeroAtomico === "") 
            alert("valor inválido!");
        if(isNaN(numeroAtomico)) 
            alert("isso não é um número!");
            
        numeroAtomico = Number(numeroAtomico);
        if(numeroAtomico > 118)
            alert("esse não é um número válido!")
        if (nnumeroAtomico <= 0)
            alert("esse não é um número válido!");
    }
    catch(err) {
        if (numeroAtomico <= 2) {
            s[0] = numeroAtomico;
        } else {
            s[0] = 2;
            s[1] = numeroAtomico - 2;
                if (s[1] <= 0)
                    s[1] = " ";
                else if (s[1] <= 2)
                    s[1] = s[1];
                else
                    s[1] = 2;
            s[2] = numeroAtomico - 2 - s[1];
                if (s[2] <= 0)
                    s[2] = " ";
                else if (s[2] <= 6)
                    s[2] = s[2];
                else
                    s[2] = 6;
            s[3] = numeroAtomico - 2 - s[1] - s[2];
                if (s[3] <= 0)
                    s[3] = " ";
                else if (s[3] <= 2)
                    s[3] = s[3];
                else
                    s[3] = 2;
            s[4] = numeroAtomico - 2 - s[1] - s[2] - s[3];
                if (s[4] <= 0)
                    s[4] = " ";
                else if (s[4] <= 6)
                    s[4] = s[4];
                else
                    s[4] = 6;
            s[5] = numeroAtomico - 2 - s[1] - s[2] - s[3] - s[4];
                if (s[5] <= 0)
                    s[5] = " ";
                else if (s[5] <= 2)
                    s[5] = s[5];
                else
                    s[5] = 2;
            s[6] = numeroAtomico - 2 - s[1] - s[2] - s[3] - s[4] - s[5];
                if (s[6] <= 0)
                    s[6] = " ";
                else if (s[6] <= 10)
                    s[6] = s[6];
                else
                    s[6] = 10;
            s[7] = numeroAtomico - 2 - s[1] - s[2] - s[3] - s[4] - s[5] - s[6];
                if (s[7] <= 0)
                    s[7] = " ";
                else if (s[7] <= 6)
                    s[7] = s[7];
                else
                    s[7] = 6;
            s[8] = numeroAtomico - 2 - s[1] - s[2] - s[3] - s[4] - s[5] - s[6] - s[7];
                if (s[8] <= 0)
                    s[8] = " ";
                else if (s[8] <= 2)
                    s[8] = s[8];
                else
                    s[8] = 2;
            s[9] = numeroAtomico - 2 - s[1] - s[2] - s[3] - s[4] - s[5] - s[6] - s[7] - s[8];
                 if (s[9] <= 0)
                    s[9] = " ";
                else if (s[9] <= 10)
                    s[9] = s[9];
                else
                    s[9] = 10;
            s[10] = numeroAtomico - 2 - s[1] - s[2] - s[3] - s[4] - s[5] - s[6] - s[7] - s[8] - s[9];
                if (s[10] <= 0)
                    s[10] = " ";
                else if (s[10] <= 6)
                    s[10] = s[10];
                else
                    s[10] = 6;
            s[11] = numeroAtomico - 2 - s[1] - s[2] - s[3] - s[4] - s[5] - s[6] - s[7] - s[8] - s[9] - s[10];
                if (s[11] <= 0)
                    s[11] = " ";
                else if (s[11] <= 2)
                    s[11] = s[11];
                else
                    s[11] = 2;
            s[12] = numeroAtomico - 2 - s[1] - s[2] - s[3] - s[4] - s[5] - s[6] - s[7] - s[8] - s[9] - s[10] - s[11];
                if (s[12] <= 0)
                    s[12] = " ";
                else if (s[12] <= 14)
                    s[12] = s[12];
                else
                    s[12] = 14;
            s[13] = numeroAtomico - 2 - s[1] - s[2] - s[3] - s[4] - s[5] - s[6] - s[7] - s[8] - s[9] - s[10] - s[11] - s[12];
                 if (s[13] <= 0)
                    s[13] = " ";
                else if (s[13] <= 10)
                    s[13] = s[13];
                else
                    s[13] = 10;
            s[14] = numeroAtomico - 2 - s[1] - s[2] - s[3] - s[4] - s[5] - s[6] - s[7] - s[8] - s[9] - s[10] - s[11] - s[12] - s[13];
                if (s[14] <= 0)
                    s[14] = " ";
                else if (s[14] <= 6)
                    s[14] = s[14];
                else
                    s[14] = 6;
            s[15] = numeroAtomico - 2 - s[1] - s[2] - s[3] - s[4] - s[5] - s[6] - s[7] - s[8] - s[9] - s[10] - s[11] - s[12] - s[13] - s[14];
                if (s[15] <= 0)
                    s[15] = " ";
                else if (s[15] <= 2)
                    s[15] = s[15];
                else
                    s[15] = 2;
            s[16] = numeroAtomico - 2 - s[1] - s[2] - s[3] - s[4] - s[5] - s[6] - s[7] - s[8] - s[9] - s[10] - s[11] - s[12] - s[13] - s[14] - s[15];
                if (s[16] <= 0)
                    s[16] = " ";
                else if (s[16] <= 14)
                    s[16] = s[16];
                else
                    s[16] = 14;
            s[17] = numeroAtomico - 2 - s[1] - s[2] - s[3] - s[4] - s[5] - s[6] - s[7] - s[8] - s[9] - s[10] - s[11] - s[12] - s[13] - s[14] - s[15] - s[17];
                 if (s[17] <= 0)
                    s[17] = " ";
                else if (s[17] <= 10)
                    s[17] = s[17];
                else
                    s[17] = 10;
            s[18] = numeroAtomico - 2 - s[1] - s[2] - s[3] - s[4] - s[5] - s[6] - s[7] - s[8] - s[9] - s[10] - s[11] - s[12] - s[13] - s[14] - s[15] - s[17] - s[17];
                if (s[18] <= 0)
                    s[18] = " ";
                else if (s[18] <= 6)
                    s[18] = s[18];
                else
                    s[18] = 6;
            
        }
    }
    
    var texto = "", distSubniveis = "";
    var j = 0, k = 1, l = 2, m = 4;
    
   for (var i = 0; i <= s.length; i++) {
       
       texto = "subnivel" + i;
       
        if (s[i] == " ") {
            document.getElementById(texto).innerHTML = s[i];
        } else if ((i == 0) || (i == 1) || (i == 3) || (i == 5) || (i == 8) || (i == 11) || (i == 15)) {
            j++;
            distSubniveis += j + "s" + "<sup>" + s[i] + "</sup>";
            document.getElementById(texto).innerHTML = j + "s" + "<sup>" + s[i] + "</sup>";
        } else if ((i == 2) || (i == 4) || (i == 7) || (i == 10) || (i == 14) || (i == 18)) {
            k++;
            distSubniveis += k + "p" + "<sup>" + s[i] + "</sup>";
            document.getElementById(texto).innerHTML = k + "p" + "<sup>" + s[i] + "</sup>";
        } else if ((i == 6) || (i == 9) || (i == 13) || (i == 17)) {
            l++;
            distSubniveis += l + "d" + "<sup>" + s[i] + "</sup>";
            document.getElementById(texto).innerHTML = l + "d" + "<sup>" + s[i] + "</sup>";
        } else if ((i == 12) || (i == 16)) {
            m++;
            distSubniveis += m + "f" + "<sup>" + s[i] + "</sup>";
            document.getElementById(texto).innerHTML = m + "f" + "<sup>" + s[i] + "</sup>";
       } else {
           
       }
       
       distSubniveis += "  ";

   }

    document.getElementById("distSubniveis").innerHTML = distSubniveis;
    document.getElementById("elementoNome2").innerHTML = elemento; 
    
    
} 