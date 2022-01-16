var startButton = document.getElementById("startButton");
var highScore = document.getElementById("highScore");
var codequiz = document.getElementById("codequiz");
var timecount = document.getElementById("timecount");
var buttona = document.getElementById("a");
var buttonb= document.getElementById("b");
var buttonc = document.getElementById("c");
var buttond = document.getElementById("d");
var results = document.getElementById("results");
var highScores = document.getElementById("highScores");
var scorePage = document.getElementById("scorePage");
var finishQuiz = document.getElementById("finishQuiz");
var tryAgain = document.getElementById("tryAgain");
var resetScore = document.getElementById("resetScore");
var timeRemaining = 90;
var timeInterval ;
var score = 0;
var correct;

//Questions for the quiz
var testQuestions = [{
    question:"Where are the red doors located?",
    optionA:"The chapel",
    optionB: "Moody Hall",
    optionC: "Main Building",
    optionD: "Doyel",
    correctOption: "c"},
    {
    question: "How many Jos Coffee Shops are located on campus?",
    optionA: "3",
    optionB: "2",
    optionC: "1",
    optionD: "0",
    correctOption: "b"},
    {
    question: "Which athletic programs were discontinued in 2020?",
    optionA: "Mens Soccer",
    optionB: "Mens and Womens Tennis",
    optionC: "Mens and Womens Golf",
    optionD: "All of the above",
    correctOption: "d"},
    {
    question: "What is the university mascot?",
    optionA: "Bobcats",
    optionB: "Hilltoppers",
    optionC: "Bulldogs",
    optionD: "Cougars",
    correctOption: "b"},
    {
    question: "Where is St Edwards University located?",
    optionA: "Austin",
    optionB: "San Antonio",
    optionC: "San Marcos",
    optionD: "Corpus Christi ",
    correctOption: "a"},
    {
    question: "Which sport does not have a location to train?",
    optionA: "Softball",
    optionB: "Tennis",
    optionC: "Track",
    optionD: "Baseball",
    correctOption: "c"},
];

//Quiz Timmer
//Start of quiz 
//Check Answers
//Results of quiz
//High Scores
//Reset High Scores
//Try Again