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



