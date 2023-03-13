function f5(doc){
     var numPlayer1 = Math.floor(Math.random()*6)+1;
     var numPlayer2 = Math.floor(Math.random()*6)+1;
     if (numPlayer1 > numPlayer2){
        doc.getElementById("title1").innerHTML="<img class='trophy' src='images/premio.png'> Player 1 Wins";
     }
     else if(numPlayer1 < numPlayer2){
        doc.getElementById("title1").innerHTML="Player 2 Wins <img class='trophy' src='images/premio.png'>";
     }
     else{
        doc.getElementById("title1").innerHTML="Draw!";
     }
     doc.getElementById("image1").src="images/dice"+numPlayer1+".png";
     doc.getElementById("image2").src="images/dice"+numPlayer2+".png";
     sessionStorage.setItem("reloading", "true");
 }

 function onLoad(){
    console.log("entro OnLoad");
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        f5(this.document);
    }
    sessionStorage.setItem("reloading", "true");
 }

 window.addEventListener("load",(Event)=> onLoad());

