
function factorial(sayi){

    var sonuc = 1;
    if((typeof sayi) === "number"){

        if(sayi>0){
    
            while (sayi>0){
                sonuc = sonuc * sayi;
                sayi--;
            }

            return sonuc;
        }
        else{
            console.log("Sifirdan buyuk sayi giriniz");
        }
    }
    
    else{
        console.log("Hata");
    }
}

let num = "kedi" ;
console.log(factorial(num));