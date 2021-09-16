const readlineSync = require("readline-sync");
const chalk = require("chalk");

//ex13, 14, 15:
console.log(
  chalk.greenBright.bgMagenta("  Let's find out how well you know me!!! 🙈  \n")
);

const userName = readlineSync.question(
  chalk.cyanBright("❤️ Please enter your name ❤️\n")
);

console.log(
  chalk.hex("#DEADED")(
    "\nHi " +
      userName +
      ". Get ready for Level 1. \nEnter a/ b/ c for each question to answer. For each correct answer you will get 2 points."
  )
);

//variable declaration for score and question-answers
let score = 0;

const question1 = {
  que: "What is my nickname?\na.sonu\nb.monu\nc.mru",
  ans: "a",
  description: "Correct answer is a.sonu",
};

const question2 = {
  que: "Where do i live? \na.Mumbai \nb.Satara \nc.Pune ",
  ans: "c",
  description: "See you forgot it again. I live in Pune.",
};
const question3 = {
  que: "Where do i work?\na.IBM \nb.Tech M\nc.Anveshak Technology",
  ans: "c",
  description: "Oh no! I work in Anveshak Technology",
};
const question4 = {
  que: "Which food i like the most?\na.Puri Bhaji \nb.Pani puri \nc.Noodles",
  ans: "a",
  description: "I love all those items. But PuriBhaji wins.",
};
const question5 = {
  que: "Which movie is my favourite one?\na.Life of Pi \nb.Theeran Adhigaaram Ondru \nc.Udta Punjab",
  ans: "a",
  description:
    "This one was easy. I hate horror movies. Correct Ans is a.Life of Pi",
};
const question6 = {
  que: "Who is my favourite singer?\na.Lata Mangeshkar \nb.Mohammad Rafi \nc.Asha Bhosle",
  ans: "a",
  description: "All time favourite. Lata Mangeshkar!! ",
};
const question7 = {
  que: "What is my birthdate?\na.5th Jan \nb.5th Aug \nc.5th May",
  ans: "a",
  description: "See you forgot it again. It's 5th Jan.",
};
const question8 = {
  que: "Who is my favourite avenger?\na.Harry Potter \nb.Thor \nc.Captain Marvel",
  ans: "b",
  description: "Aww! you were close. I love Thor.",
};
const question9 = {
  que: "Which is my favourite color?\na.Black \nb.Red \nc.Blue",
  ans: "b",
  description: "I love Red 🥳 ",
};
const question10 = {
  que: "Who is my favourite actor?\na.Amitabh Bachchan \nb.Aamir Khan \nc.Hrithik Roshan",
  ans: "a",
  description: "This one was tough. Correct ans is Amitabh Bachchan",
};
//saving all questions in array
const questionSet1 = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
];
//defining Leaderboard
const highScore = [
  { nameH: "Sonu", scoreH: "20" },
  { nameH: "Vaiju", scoreH: "18" },
  { nameH: "Anku", scoreH: "16" },
  { nameH: "Pinki", scoreH: "14" },
];

//posting quiz and validating answers
for (let i = 0; i < questionSet1.length; i++) {
  if (i === 3) {
    if (score >= 4) {
      console.log("Congratulations! You have entered Level 2 🤩");
    } else {
      console.log("Aww! you failed level 1");
      break;
    }
  }
  if (i === 6) {
    if (score >= 8) {
      console.log(
        "Congratulations! You have entered Final Level 🤩. Get ready for the toughest questions."
      );
    } else {
      console.log("Hurry! you failed level 2");
      break;
    }
  }
  checkScore(
    i + 1,
    questionSet1[i].que,
    questionSet1[i].ans,
    questionSet1[i].description
  );
}

//posting leaderboard
console.log(chalk.keyword("orange").bold("\n*****Check out Leaderboard*****"));


//compare score with high scores
let scoreBeaten = false;
let index = highScore.findIndex((obj)=> score >= obj.scoreH)
console.log(index)
if (index === -1) {
  highScore.push({
    nameH: `${userName}`,
    scoreH: `${score}`,
  })
} else {
  scoreBeaten = true;
  highScore.splice(index, 0, {
    nameH: `${userName}`,
    scoreH: `${score}`,
  });
}
printScoreBoard(highScore);
console.log("---------------------------------");

//Printing final score
console.log(chalk.hex("#DEADED").bold("Yay! Your Final Score is " + score));
//if score is beaten, print leaderboard with username and score

if (scoreBeaten) {
  console.log(
    chalk.bold.keyword("pink")(
      "Congratulations " + userName + " 🥳 , you are my best friend 😍"
    )
  );

  console.log(chalk.keyword("orange").bold("\n*****Leaderboard*****"));
  printScoreBoard(highScore);
} else {
  console.log(
    chalk.bold.hex("#DEADED")(
      "Sorry " + userName + ", you were so close to be my best friend 🙃"
    )
  );
}

//function to validate answers and update score
function checkScore(queNo, checkQue, checkAns, description) {
  const userAns = readlineSync.keyIn(
    chalk.cyanBright("\n" + queNo + ") " + checkQue + "\n"),
    { limit: "$<a-c>" }
  );
  if (userAns === checkAns) {
    console.log(chalk.green("You are absolutely right. You get 2 points 🎉"));
    score += 2;
  } else {
    console.log(chalk.redBright(`You are wrong.\n${description}`));
  }
  console.log(chalk.yellowBright("Your current score is " + score));
  console.log("---------------------\n");
}

//function to print leaderBoard
function printScoreBoard(highScore) {
  highScore.forEach((obj)=>{
    console.log(
      chalk
        .keyword("orange")
        .bold(obj.nameH + " : " + obj.scoreH)
    );
  })
}
