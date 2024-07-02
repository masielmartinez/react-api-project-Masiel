import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function CharacterCard({ title }) {
  const [triviaQuestion, setTriviaQuestion] = useState("")
  const [correctAnswer, setCorrectAnswer] = useState("")
  //an array of incorrect answers, use spread op.
  const [incorrectAnswers, setIncorrectAnswers] = useState([])
  const [questionNumber, setQuestionNumber] = useState(1)
  const [score, setScore] = useState(0)
  function fetchFact() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.text);
        alert(result.text);
      })
      .catch((error) => console.log("error", error));
  }

  function fetchTrivia() {
    const myHeaders = new Headers();
    myHeaders.append("Cookie", "PHPSESSID=05e6b8ebadbe85215b6b2287f8ec1148");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=multiple",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
                console.log("Question: ", result.results[0].question);
                setTriviaQuestion(result.results[0].question)

                console.log("This may be it : ", result.results[0].correct_answer);
                setCorrectAnswer(result.results[0].correct_answer) 

                console.log("Incorrect: ", result.results[0].incorrect_answers)
                setIncorrectAnswers(result.results[0].incorrect_answers)////use spread operator to update state
              })
      .catch((error) => console.error(error));
  }
  return (
    <Grid item xs={12} md={4}>
      <Card>
        {/* <CardMedia component="img" height="350px" image={title.pic} /> */}
        <CardHeader
          title={triviaQuestion}
          titleTypographyProps={{ align: "center" }}
          sx={{ mt: 1 }}
        />

        <CardContent sx={{ pt: 0 }}>
          <ul>
            {/* {title.description.map((descriptionBulletPoint) => (
              <Typography component="li">{descriptionBulletPoint}</Typography>
            ))} */}
            {triviaQuestion}
          </ul>
        </CardContent>

        <CardActions>
          <Button
            variant="contained"
            sx={{ px: 6, mx: "auto", border: "5px solid yellow" }}
            className="characterButton"
            onClick={() => {
              fetchTrivia();
            }}
          >
            Click Me
          </Button>
        </CardActions>

      </Card>
    </Grid>
  );

//   function fetchFact() {
//     var requestOptions = {
//       method: "GET",
//       redirect: "follow",
//     };

//     fetch("https://uselessfacts.jsph.pl/api/v2/facts/random", requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//         console.log(result.text);
//         alert(result.text);
//       })
//       .catch((error) => console.log("error", error));
//   }

//   function fetchTrivia() {
//     const myHeaders = new Headers();
//     myHeaders.append("Cookie", "PHPSESSID=05e6b8ebadbe85215b6b2287f8ec1148");

//     const requestOptions = {
//       method: "GET",
//       headers: myHeaders,
//       redirect: "follow",
//     };

//     fetch(
//       "https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=multiple",
//       requestOptions
//     )
//       .then((response) => response.json())
//       .then((result) => {
//                 console.log("Question: ", result.results[0].question);
//                 setTriviaQuestion(result.results[0].question)

//                 console.log("This may be it : ", result.results[0].correct_answer);
//                 setCorrectAnswer(result.results[0].correct_answer) 

//                 console.log("Incorrect: ", result.results[0].incorrect_answers)
//                 setIncorrectAnswers(result.results[0].incorrect_answers)////use spread operator to update state
//               })
//       .catch((error) => console.error(error));
//   }
  
}
