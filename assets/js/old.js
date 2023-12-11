//Check if i am working
    function isJohnWorking() {
/*
0 - Not working ( Available - green )
1 - Working on a Project ( Unavailable - red )
*/

var workingStatusVal = 0;

var workingStatus = $(workStatus).attr("value", workingStatusVal);
var pulsatingCircleStatusVal = "unavailable";
    if (workingStatusVal == 0) {
        $(workStatus).text("Available to work");
        $(pulsating_circle).attr("value","available");
    }
    if(workingStatusVal == 1){
        $(workStatus).text("Not available");
        $(pulsating_circle).attr("value","unavailable");
    }            
}
//form validation for love calculator
    function validateFormLC() {
    let x = document.forms["loveCalcForm"]["name1"].value;
    let y = document.forms["loveCalcForm"]["name2"].value;
    if (x == "") {
        document.getElementById("errTxtLC").innerHTML = "Name must be filled out";
        return false;
    }
    if (y == "") {
        document.getElementById("errTxtLC").innerHTML = "Partners name must be filled out";
        return false;
    }
    if ((x == undefined || x == null || x == '') && (y === undefined || y === null || y === '')) {
        
        document.getElementById("errTxtLC").innerHTML = "Empty fields";
        return false;
    }else{
        
        document.getElementById("lcForm").classList.remove("d-flex");
        document.getElementById("lcForm").classList.add("d-none");
        document.getElementById("errTxtLC").innerHTML ="";                
        
        var lc = loveCalculator(x,y);
        return false;
    }
}
//form validation for bmi calculator
    function validateFormBMI() {
        let h = document.forms["bmiForm"]["height1"].value;
        let w = document.forms["bmiForm"]["weight1"].value;
        if (h == "") {
            document.getElementById("errTxtBmi").innerHTML = "Height must be filled out";
            return false;
        }
        if (w == "") {
            document.getElementById("errTxtBmi").innerHTML = "Weight name must be filled out";
            return false;
        }
        if ((h == undefined || h == null || h == '') && (w === undefined || w === null || w === '')) {
            
            document.getElementById("errTxtBmi").innerHTML = "Empty fields";
            return false;
        }else{
            
            document.getElementById("bmiForm").classList.remove("d-flex");
            document.getElementById("bmiForm").classList.add("d-none");
            document.getElementById("errTxtBmi").innerHTML ="";                
            
            var bmi = bmiCalculator(w, h);
            return false;
        }
    }
//love calculator
    function loveCalculator(x,y) { 
        
        var loveCalc = Math.random() * 100;
        var loveCalcScore = Math.floor(loveCalc) + 1;
        var showResult = document.getElementById("loveCalcResult");

        if (loveCalc < 20.5){
            showResult.classList.remove("d-none");
            showResult.classList.add("d-flex");
            document.getElementById("loveScore").innerHTML = "Your Love Score is " + loveCalcScore;
            document.getElementById("loveScoreDesc").innerHTML = "You are not compatible";    
            document.getElementById("loveCalcStatusImg").src = "assets/img/projects/loveCalculator/no.png";
            
        }   
        if ((loveCalc > 20.5) && (loveCalc < 74.5)){
            showResult.classList.remove("d-none");
            showResult.classList.add("d-flex");
            document.getElementById("loveScore").innerHTML = "Your Love Score is " + loveCalcScore;
            document.getElementById("loveScoreDesc").innerHTML = "You can work on it";    
            document.getElementById("loveCalcStatusImg").src = "assets/img/projects/loveCalculator/maybe.png";
            
        }   
        if (loveCalc > 74.5){
            showResult.classList.remove("d-none");
            showResult.classList.add("d-flex");
            document.getElementById("loveScore").innerHTML = "Your Love Score is " + loveCalcScore;
            document.getElementById("loveScoreDesc").innerHTML = "you are compatible";    
            document.getElementById("loveCalcStatusImg").src = "assets/img/projects/loveCalculator/yes.png";
            
        }
        return false;
    }
//restart button
    function restartLC(){
    //show form
    document.getElementById("lcForm").classList.remove("d-none");
    document.getElementById("lcForm").classList.add("d-flex");

    //hide score
    document.getElementById('nameOne').value = '';
    document.getElementById('nameTwo').value = '';
    document.getElementById("loveCalcResult").classList.remove("d-flex");
    document.getElementById("loveCalcResult").classList.add("d-none");
    
}
//restart Bmi button
    function restartBMIc(){
    //show form
    document.getElementById("bmiForm").classList.remove("d-none");
    document.getElementById("bmiForm").classList.add("d-flex");

    //hide score
    document.getElementById('heightOne').value = '';
    document.getElementById('weightTwo').value = '';
    document.getElementById("bmiCalcResult").classList.remove("d-flex");
    document.getElementById("bmiCalcResult").classList.add("d-none");
    
}
//bmi calculator
    function bmiCalculator(w, h) {
        var hSquared = Math.pow(h, 2); //MathPow get the power of 
        var bmiCalc = w / hSquared ;
        var roundedBmi = Math.round(bmiCalc); //round it to nearest whole number
        var showBmiResult = document.getElementById("bmiCalcResult"); 

        if (roundedBmi < 18.5){
            showBmiResult.classList.remove("d-none");
            showBmiResult.classList.add("d-flex");
            document.getElementById("bmiScore").innerHTML = "Your BMI is " + roundedBmi;
            document.getElementById("bmiScoreDesc").innerHTML = "You are underweight";    
            document.getElementById("bmiCalcStatusImg").src = "assets/img/projects/bmiCalculator/status/1.png";
        }
        if ((roundedBmi > 18.5) && (roundedBmi < 24.9)){
            showBmiResult.classList.remove("d-none");
            showBmiResult.classList.add("d-flex");
            document.getElementById("bmiScore").innerHTML = "Your BMI is " + roundedBmi;
            document.getElementById("bmiScoreDesc").innerHTML = "You are normal weight";    
            document.getElementById("bmiCalcStatusImg").src = "assets/img/projects/bmiCalculator/status/2.png";
        }
        if ((roundedBmi > 25) && (roundedBmi < 29.9)){
            showBmiResult.classList.remove("d-none");
            showBmiResult.classList.add("d-flex");
            document.getElementById("bmiScore").innerHTML = "Your BMI is " + roundedBmi;
            document.getElementById("bmiScoreDesc").innerHTML = "You are over weight";    
            document.getElementById("bmiCalcStatusImg").src = "assets/img/projects/bmiCalculator/status/3.png";
        }
        if ((roundedBmi > 30) && (roundedBmi < 34.9)){
            showBmiResult.classList.remove("d-none");
            showBmiResult.classList.add("d-flex");
            document.getElementById("bmiScore").innerHTML = "Your BMI is " + roundedBmi;
            document.getElementById("bmiScoreDesc").innerHTML = "You are obese";    
            document.getElementById("bmiCalcStatusImg").src = "assets/img/projects/bmiCalculator/status/4.png";
        }
        if (roundedBmi > 35){
            showBmiResult.classList.remove("d-none");
            showBmiResult.classList.add("d-flex");
            document.getElementById("bmiScore").innerHTML = "Your BMI is " + roundedBmi;
            document.getElementById("bmiScoreDesc").innerHTML = "You are extremely obese";    
            document.getElementById("bmiCalcStatusImg").src = "assets/img/projects/bmiCalculator/status/5.png";
        }
        return false;
    }
//dice game
    function rollDice(){
        var ranNum1 = Math.floor(Math.random() * 6) + 1; // get number from 1 - 6
        var randomDiceImage = "diceGame"+ ranNum1 + ".png"; // get image of dice 1 - 6
        var randomDiceImageSrc = "assets/img/projects/diceGame/" + randomDiceImage; //location of dice 1-6 images

        var image1 = document.getElementById("player1imageBox").src = randomDiceImageSrc;

        var ranNum2 = Math.floor(Math.random() * 6) + 1; // get number from 1 - 6
        var randomDiceImage2 = "diceGame"+ ranNum2 + ".png"; // get image of dice 1 - 6
        var randomDiceImageSrc2 = "assets/img/projects/diceGame/" + randomDiceImage2; //location of dice 1-6 images

        var image2 = document.getElementById("player2imageBox").src = randomDiceImageSrc2;

        //if player1 wins

        if (ranNum1 > ranNum2){
            document.getElementById("winnerAlert").innerHTML = "Player 1 wins";
            document.getElementById("winnerAlertImg").src = "assets/img/projects/diceGame/diceGame1wins.png";
        }else if(ranNum2 > ranNum1){ //if player2 wins
            document.getElementById("winnerAlert").innerHTML = "Player 2 wins";
            document.getElementById("winnerAlertImg").src = "assets/img/projects/diceGame/diceGame2wins.png";
        }else{
            document.getElementById("winnerAlert").innerHTML = "It's a tie";
            document.getElementById("winnerAlertImg").src = "assets/img/projects/diceGame/diceGameTie.png";
        }
        return false;
    } 
//keypress event listeners
    //love calculator button
    $(lcCalcBtn).click(function(){
        return validateFormLC();
    });
    //love calculator restart button
    $(lcRestart).click(function(){
        return restartLC();
    });
    //bmi calculator button
    $(bmiCalcBtn).click(function(){
        return validateFormBMI();
    });
    //bmi calculator restart button
    $(bmiRestart).click(function(){
        return restartBMIc();
    });
    //roll dice button
    $(rollDiceBtn).click(function(){
        return rollDice();
    });