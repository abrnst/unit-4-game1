$(document).ready (function(){
    //for random number to start the game
    var randomNum = Math.floor(Math.random()* 101 + 20);
    

    //append randomNum to html 
    $("#number").append(randomNum);

    //randomise numbers for each gem
    var gem1 = Math.floor(Math.random() * 11 + 1);
    var gem2 = Math.floor(Math.random() * 11 + 1);
    var gem3 = Math.floor(Math.random() * 11 + 1);
    var gem4 = Math.floor(Math.random() * 11 + 1);
    console.log(gem3);

    //variables to keep score

    var total = 0;
    var wins = 0;
    var loses = 0;



    //function for if you win
     function win(){
         alert("You Win")
         wins++;
         $("#userWins").text(wins);
     }
     //function for if you lose;
     function lose(){
         alert("You lose. Good try!");
         loses++;
         $("#userLoses").text(loses);
     }

    //sets function for each gem clicked
        //gem1
    $("#gem1").on("click", function()
    {
        total = total + gem1;
        $("#userScore").text(total);
        if (total == randomNum){
           win();
           reset()
        } else if (total > randomNum){
            lose();
            reset()
        }
    })
        //gem2
    $("#gem2").on("click", function()
    {
        total = total + gem2;
        $("#userScore").text(total);
        if (total == randomNum){
            win();
            reset()
        } else if (total > randomNum){
            lose();
            reset()
        }
    })
        //gem3
    $("#gem3").on("click", function()
    {
        total = total + gem3;
        $("#userScore").text(total);
        if (total == randomNum){
            win();
            reset()
        } else if (total > randomNum){
            lose();
            reset()
        }
    })
        //gem4
    $("#gem4").on("click", function()
    {
        total = total + gem4;
        $("#userScore").text(total);
        if (total == randomNum){
            win();
            reset()
        } else if (total > randomNum){
            lose();
            reset()
            
        }
    })
    //reset function. it will cast on any win or loss.
    function reset()
    {
        random = Math.floor(Math.random() * 101 + 20);
        gem1 = Math.floor(Math.random()* 12 + 1);
        gem2 = Math.floor(Math.random()* 12 + 1);
        gem3 = Math.floor(Math.random()* 12 + 1);
        gem4 = Math.floor(Math.random()* 12 + 1);
        $("#number").text(random);
        total = 0;
        $("#userScore").text(total);



    }

            



})