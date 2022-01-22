let topText = document.querySelector('#topText');
let introInput = document.querySelector('#introInput');
let quiz = document.querySelector('#quiz');
let question1Btn = document.querySelector('#question1Btn');
let question2Btn = document.querySelector('#question2Btn');
let question3Btn = document.querySelector('#question3Btn');
let question4Btn = document.querySelector('#question4Btn');
let question5Btn = document.querySelector('#question5Btn');
let question6Btn = document.querySelector('#question6Btn');
let question = document.querySelector('#question');
let optionA = document.querySelector('#optionA');
let optionB = document.querySelector('#optionB');
let optionC = document.querySelector('#optionC');
let optionD = document.querySelector('#optionD');
let iterationNum = 0;
let qnOption = "";
let score = 0;
let timeInterval;
let timeEl;
let countDown = document.getElementById('countDown');
let secondsRemain = 60;
 
let sixQuestions = [
    "1. Where are the red doors located?",
    "2. How many Jos Coffee Shops are located on campus?",
    "3. Which athletic programs were discontinued in 2020?",
    "4. Where is the university located?",
    "5. What is the university mascot?",
    "6. Which sport does not have a location to train?"
]
 
let optionAList = ["The chapel", '3', "Mens Soccer", "Austin", "Bobcats", "Softball",]
let optionBList = ["Moody Hall", '2', "Mens and Womens Tennis", "San Antonio", "Hilltopers", "Tennis",]
let optionCList = ["Main Building", '1', "Mens and Womens Golf", "San Marcos", "Bulldogs", "Track",]
let optionDList = ["Doyel", '0', "All of the above", "Corpus Christi", "Cougars", "Basketball",]

quiz.style.display = "none";
question1Btn.style.display = "none";
question2Btn.style.display = "none";
question3Btn.style.display = "none";
question4Btn.style.display = "none";
question5Btn.style.display = "none";
question6Btn.style.display = "none";
 
function save() {
    topText.innerHTML = ""
    topText.innerHTML = "Hello " + initials.value + ", welcome to the St. Edwards Quiz!";
    introInput.style.display = "none"
    quiz.style.display = "block";
    question1Btn.style.display = "block";
    question.innerHTML = sixQuestions[iterationNum];
    optionA.innerHTML = optionAList[iterationNum];
    optionB.innerHTML = optionBList[iterationNum];
    optionC.innerHTML = optionCList[iterationNum];
    optionD.innerHTML = optionDList[iterationNum];
 
}
 
function functionA() {
    optionA.style.color = "gold";
    optionB.style.color = "snow";
    optionC.style.color = "snow";
    optionD.style.color = "snow";
    qnOption = "a";
}
function functionB() {
    optionA.style.color = "snow";
    optionB.style.color = "gold";
    optionC.style.color = "snow";
    optionD.style.color = "snow";
    qnOption = "b";
}
function functionC() {
    optionA.style.color = "snow";
    optionB.style.color = "snow";
    optionC.style.color = "gold";
    optionD.style.color = "snow";
    qnOption = "c";
}
function functionD() {
    optionA.style.color = "snow";
    optionB.style.color = "snow";
    optionC.style.color = "snow";
    optionD.style.color = "gold";
    qnOption = "d";
}
 
function submitq1(){
    if (qnOption == "c") {
        score += 1;
    }
    iterationNum += 1;
    question1Btn.style.display = "none";
    question2Btn.style.display = "block";
    reset()
}
 
function submitq2(){
    if (qnOption == "b") {
        score += 1;
    }
    iterationNum += 1;
    question2Btn.style.display = "none";
    question3Btn.style.display = "block";
    reset()
}
 
function submitq3(){
    if (qnOption == "d") {
        score += 1;
    }
    iterationNum += 1;
    question3Btn.style.display = "none";
    question4Btn.style.display = "block";
    reset()
}
 
function submitq4(){
    if (qnOption == "a") {
        score += 1;
    }
    iterationNum += 1;
    question4Btn.style.display = "none";
    question5Btn.style.display = "block";
    reset()
}
 
function submitq5(){
    if (qnOption == "b") {
        score += 1;
    }
    iterationNum += 1;
    question5Btn.style.display = "none";
    question6Btn.style.display = "block";
    reset()
}
 
function submitq6(){
    if (qnOption == "c") {
        score += 1;
    }
    iterationNum += 1;
    topText.innerHTML = "Your final score is: " + score;
    quiz.style.display = "none"
    reset()
}

function reset() {
    optionA.style.color = "snow";
    optionB.style.color = "snow";
    optionC.style.color = "snow";
    optionD.style.color = "snow";
    question.innerHTML = sixQuestions[iterationNum];
    optionA.innerHTML = optionAList[iterationNum];
    optionB.innerHTML = optionBList[iterationNum];
    optionC.innerHTML = optionCList[iterationNum];
    optionD.innerHTML = optionDList[iterationNum];
}




