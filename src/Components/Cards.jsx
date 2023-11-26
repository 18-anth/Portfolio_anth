import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

function Cards() {
  return (
    <div className="grid-section" style={{   justifyContent: "space-between", gridColumn:"1fr, 3" }}>
      <div style={{ padding: "10px" }}>
        <Card sx={{ maxWidth: 345, flexDirection: "column" }}>
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="secondary"
              >
                Project Heros in React
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="secondary">
              <a href="https://18-anth.github.io/heros_reactjs/">Share</a>
            </Button>
          </CardActions>
        </Card>
      </div>
      <div style={{ padding: "10px" }}>
        <Card sx={{ maxWidth: 345, flexDirection: "column" }}>
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="secondary"
              >
                AIDesign
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Con AIDesign, ¡Todo es Posible! El diseñar es la forma de
                organizar y adaptar responsablemente un espacio en la naturaleza
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="secondary">
              <a href="https://18-anth.github.io/AUIdesign.github.io/">Share</a>
            </Button>
          </CardActions>
        </Card>
      </div>
      <div style={{ padding: "10px" }}>
        <Card sx={{ maxWidth: 345, flexDirection: "column" }}>
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="secondary"
              >
                Dino Game
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Este es un juego simple donde el dinosaurio salta con la barra
                espaciadora y evita los obstáculos que se mueven desde la
                derecha.  
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="secondary">
              <a href="https://18-anth.github.io/game_Microsoft/">Share</a>
            </Button>
          </CardActions>
        </Card>
      </div>
      <div style={{ padding: "10px" }}>
        <Card sx={{ maxWidth: 345, flexDirection: "column" }}>
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="secondary"
              >
                Project Heros in React
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="secondary">
              <a href="https://18-anth.github.io/heros_reactjs/">Share</a>
            </Button>
          </CardActions>
        </Card>
      </div>
      <div style={{ padding: "10px" }}>
        <Card sx={{ maxWidth: 345, flexDirection: "column" }}>
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="secondary"
              >
                AIDesign
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Con AIDesign, ¡Todo es Posible! El diseñar es la forma de
                organizar y adaptar responsablemente un espacio en la naturaleza
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="secondary">
              <a href="https://18-anth.github.io/AUIdesign.github.io/">Share</a>
            </Button>
          </CardActions>
        </Card>
      </div>
      <div style={{ padding: "10px" }}>
        <Card sx={{ maxWidth: 345, flexDirection: "column" }}>
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="secondary"
              >
                Dino Game
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Este es un juego simple donde el dinosaurio salta con la barra
                espaciadora y evita los obstáculos que se mueven desde la
                derecha.  
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="secondary">
              <a href="https://18-anth.github.io/game_Microsoft/">Share</a>
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
export default Cards;
