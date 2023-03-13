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
 }
 window.addEventListener("load",(Event)=> f5(this.document));

//  window.onload = function() {
//     var reloading = sessionStorage.getItem("reloading");
//     if (reloading) {
//         sessionStorage.removeItem("reloading");
//         f5(this.document);
//     }
// }
