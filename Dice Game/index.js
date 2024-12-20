var img1 = Math.floor(Math.random()*6)+1;
var img2 = Math.floor(Math.random()*6)+1;

document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice"+img1+".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice"+img2+".png");
if(img1>img2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(img1<img2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}

