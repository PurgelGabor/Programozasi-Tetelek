function Auto(Marka,Tipus,Szin,Hengerurtartalom,NettoAr){
    this.Marka = Marka;
    this.Tipus = Tipus;
    this.Szin = Szin;
    this.Hengerurtartalom = Hengerurtartalom;
    this.NettoAr = NettoAr;    
}

const auto1 = new Auto("Audi","A6","Fekete",3000,6800000);
const auto2 = new Auto("Bmw","E36","Feher",2500,3200000);
const auto3 = new Auto("Opel","Corsa","Szurke",1600,1800000);
const auto4 = new Auto("Fiat","Punto","Zold",1300,3500000);
const auto5 = new Auto("Seat","Ibiza","Piros",1400,570000);
const auto6 = new Auto("Audi","A4","Piros",2000,5700000);

var autok = [auto2,auto3,auto4,auto5,auto1,auto6];


function LegdragabbAutoIndex(){

    var max = 0;

    for(var i = 0; i < autok.length; i++){
        if(autok[max].NettoAr < autok[i].NettoAr){
           max = i;
        }
    }
    return max;
}


console.log(LegdragabbAutoIndex(autok));

function LegolcsobbAutoIndex(){

    var min  = 0;

    for(var i = 0; i < autok.length; i++){
        if(autok[min].NettoAr > autok[i].NettoAr){
            min = i;
        }
    }
    return min;
}

console.log(LegolcsobbAutoIndex(autok));

function LegdragabbAutoErteke(){

    var max = 0;

    for(var i = 0; i < autok.length; i++){
        if(max < autok[i].NettoAr){
            max = autok[i].NettoAr;
        }
    }
    return max;
}

console.log(LegdragabbAutoErteke(autok));

function LegolcsobbAutoErteke(){

    var min = autok[0].NettoAr;

    for(var i = 0; i < autok.length; i++){
        if(min > autok[i].NettoAr){
            min = autok[i].NettoAr;
        }
    }
    return min;
}   

console.log(LegolcsobbAutoErteke(autok));

function AutokAtlagAra(){

    var atlag = 0;

    for(var i = 0; i < autok.length; i++){

        atlag = atlag + autok[i].NettoAr;
        var atlagAr = atlag / autok.length;

    }

    return atlagAr;
}

console.log(AutokAtlagAra(autok));

function SzurkeAutoKivalaszt(){

    var keresettAuto = autok[0];

    var i = 0;

    while(i < autok.length && !(autok[i].Szin == "Szurke")){
        i = i + 1;
        if(i < autok.length){   
            keresettAuto = autok[i];
        }
        else{
            console.log("Nem találtunk ilyen színű autót a tömbben!");
        }    
    }
    return keresettAuto;
}

console.log(SzurkeAutoKivalaszt(autok));

function VanEFordEldontes(){
     var vanFord = false;

     var i = 0;

     var n = autok.length;

     while(i < n && !(autok[i].Marka == "Ford")){

        i++;

        if(i < n){
            vanFord == i <= n;
        }
        else {
            console.log("Nem létezik ilyen márkájú autó a tömbben!");
        }
     }
     return vanFord;
}

console.log(VanEFordEldontes(autok));

function DragaAutoSzetvalogatas(){

    var dragaAuto = [];
    var olcsoAuto = [];

    var d = 0;
    var o = 0;

    for(var i = 0; i <autok.length; i++){
        if(autok[i].NettoAr > 3000000){
            dragaAuto[d] = autok[i];
            d = d + 1;
        }
        else{
            olcsoAuto[o] = autok[i];
            o = o + 1;
        }
    }
    return [dragaAuto, olcsoAuto];
}

console.log(DragaAutoSzetvalogatas(autok));

function PirosAutoKivalogat(){

    var pirosAutok = [];
    var p = 0;

    for(var i = 0; i < autok.length; i++){
        if(autok[i].Szin == "Piros"){
            pirosAutok[p] = autok[i].Marka;
            p++;
        }    
    }
    return pirosAutok;
}

console.log(PirosAutoKivalogat(autok));

function NagyCCmFelettiAutok(){
    var db = 0;
    for(var i = 0; i < autok.length; i++){
        if(autok[i].Hengerurtartalom > 1800){
            db ++;
        }    
    }
    return db;
}

console.log(NagyCCmFelettiAutok(autok));
