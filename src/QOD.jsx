// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
    const questions = [{
                type: "radiogroup",
                name: "question1",
                title: "When working in a lab, what is the most appropriate choice of clothing?",
                choices: [
                    "Open-toe shoes", "Shorts", "Lab coat", "Bikini"
                ],
                correctAnswer: "Lab coat"
            },
            {
                type: "radiogroup",
                name: "question2",
                title: "How often should gloves be worn in the lab when handling chemicals?",
                choices: [
                    "Always", "Not much, its optional", "Never", "During supervision only"
                ],
                correctAnswer: "Always"
            },

            {
                type: "radiogroup",
                name: "question3",
                title: "What should you do if you spill any chemical on yourself?",
                choices: [
                    "Immediately clean it up with the correct procedures", "Rub it with your gloves", "Wait an hour", "Ignore it and eat lunch"
                ],
                correctAnswer: "Immediately clean it up with the correct procedures"
            },

            {
                type: "radiogroup",
                name: "question4",
                title: "How do you deal with broken glassware?",
                choices: [
                    "Leave it there", "Scream at the top of your lungs", "Kick it at your lab partner", "Use a dustpan to gather the peices and throw it in a container for glass disposal"
                ],
                correctAnswer: "Use a dustpan to gather the peices and throw it in a container for glass disposal"
            },

            {
                type: "radiogroup",
                name: "question5",
                title: "When are food and drink allowed in the lab?",
                choices: [
                    "Whenever I get hungry", "Never", "When experiments aren't being conducted", "During supervision only"
                ],
                correctAnswer: "Never"
            },

            {
                type: "radiogroup",
                name: "question6",
                title: "What does the W in WHMIS stand for?",
                choices: [
                    "Work", "Worry", "Workplace", "Winning"
                ],
                correctAnswer: "Workplace"
            },

            {
                type: "radiogroup",
                name: "question7",
                title: "What does the H in WHMIS stand for?",
                choices: [
                    "Hello", "Hazardous", "Hungry", "Hazards"
                ],
                correctAnswer: "Hazardous"
            },

            {
                type: "radiogroup",
                name: "question8",
                title: "What does the M in WHMIS stand for?",
                choices: [
                    "Materials", "Money", "Manpower", "Male"
                ],
                correctAnswer: "Materials"
            },

            {
                type: "radiogroup",
                name: "question9",
                title: "What does the I in WHMIS stand for?",
                choices: [
                    "Ignite", "Iglo", "Information", "Insecure"
                ],
                correctAnswer: "Information"
            },

            {
                type: "radiogroup",
                name: "question10",
                title: "What does the S in WHMIS stand for?",
                choices: [
                    "Situation", "System", "Scientist", "Safety"
                ],
                correctAnswer: "System"
            }];
    const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "Lab Safety",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Lab Safety. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
        }]
    };
    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
        }
    });

    return <Survey model={survey} />;
}