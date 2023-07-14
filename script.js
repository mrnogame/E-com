

var carProd =[];

var tel1= {
    id:"tel1",
    nome: "Telefono 1",
    prezzo: "299",
    dettaglio : [
        "Rete: 5G",
        "camera: 20px",
        "peso: 200g"
    ]
    
}
var tel2= {
        id:"t2",
        nome: "Telefono 2",
        prezzo: "599",
        dettaglio : [
            "Rete: 5G",
            "camera: 20px",
            "peso: 200g"
        ]
        
        
}

var tel3= {
        id:"t3",
        nome: "Telefono 3",
        prezzo: "199",
        dettaglio : [
            "Rete: 5G",
            "camera: 20px",
            "peso: 200g"
        ]
        
        
}

var pc1= {
        id:"c1",
        nome: "pc 1",
        prezzo: "699",
        dettaglio : [
            "Processore: xxx-xxx",
            "Ram: 8 GB",
            "peso: 3 KG"
        ]
        
        
}
var pc2= {
        id:"c2",
        nome: "pc 2",
        prezzo: "799",
        dettaglio : [
            "Processore: xxx-xxx",
            "Ram: 8 GB",
            "peso: 3 KG"
        ]
        
        
}
    let pc3= {
        id:"c3",
        nome: "pc 3",
        prezzo: "999",
        dettaglio : [
            "Processore: xxx-xxx",
            "Ram: 8 GB",
            "peso: 3 KG"
        ]
}

    let watch1= {
        id:"w1",
        nome: "watch 1",
        prezzo: "199",
        dettaglio : [
            "OS: Android",
            "Ram: 8 GB",
            "peso: 3 KG"
        ]
        
        
}
var watch2= {
        id:"w2",
        nome: "watch 2",
        prezzo: "299",
        dettaglio : [
            "OS: Android",
            "Ram: 8 GB",
            "peso: 3 KG"
        ]
        
        
}

var watch3= {
        id:"w3",
        nome: "watch 3",
        prezzo: "399",
        dettaglio : [
            "OS: Android",
            "Ram: 8 GB",
            "peso: 3 KG"
        ]
}

function aggProd(prodotto){
     carProd.push(prodotto),
     document.getElementById("numeroprodotti").innerHTML = carProd.length ;
     mostraTotale()
    //  localStorage.setItem("data", JSON.stringify (carProd));
}









//////////////////////


function mostraTotale(){
     var totaleCarrello = document.getElementById("totale");
     totaleCarrello.innerHTML ="Totale: " + somma () + "€";
 }





function somma(){
    var sommaTotale = 0;
  for (var i = 0; i < carProd.length; i++ ){
      sommaTotale += parseFloat(carProd[i].prezzo);
  }
  return sommaTotale
}



function showDetails(pippo){
    var dettaglio = document.getElementById(pippo);
        dettaglio.classList.toggle("hidden");
     
}

  