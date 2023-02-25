function carpma(...list){
    var i= 0;
    var sonuc = 1;

    for(i=0;i<list.length;i++){
        if( typeof list[i] === "number"){
        sonuc = sonuc * list[i];
        }
    }

    console.log(sonuc);
}

carpma(5,4,"kedi",8,12);