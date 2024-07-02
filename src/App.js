import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import characters from "./protagonists.json";
import CharacterCard from "./CharacterCard";
import { useState } from "react";

function App() {
  const [subtitle, setSubtitle] = useState("fun fact here");
  function fetchFact() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("2b - Got new fact:", Date.now(), result.text);
        //myFact = result.text;

        //let subtitle = document.getElementById("subtitle");
        //subtitle.innerHTML = myFact;
        setSubtitle(result.text);
      })
      .catch((error) => console.log("error", error));
  }

  // const [num, setNum] = useState(0);
  // function getRandom() {
  //   let randomNum = Math.floor(Math.random() * 100);
  //   setNum(randomNum);
  // }
  function handleClick() {
    setSubtitle(fetchFact());
    //alert('Clicked! Counter: ' + counter);
  }

  console.log("characters: ", characters);

  return (
    <div className="App">
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: "1px solid lightgray" }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            A Ducky Production
          </Typography>
          <Button
            href="#"
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
            onClick={handleClick}
          >
            Button
            {/* For Random: {num} */}
          </Button>

          <ButtonTest></ButtonTest>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ py: 2 }}
        >
          Test Your Knowledge
        </Typography>

        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mx: 10 }}
          id="subtitle"
        >
          {subtitle}
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="lg">
        <Grid
          container
          spacing={5}
          justifyContent="center"
          alignItems="flex-start"
        >
          {characters.map((oneCharacter) => (
            <CharacterCard title={oneCharacter}></CharacterCard>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

function ButtonTest() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
    //alert('Clicked! Counter: ' + counter);
  }

  return <button onClick={handleClick}>Clicks - {counter}</button>;
}
export default App;
