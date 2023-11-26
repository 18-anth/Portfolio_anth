import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "../index.css";

function AboutMe() {
  return (
    <>
      <div>
        <div>
          <h1 style={{ color: "white", fontSize: "4rem" }}>About Me</h1>
        </div>
        <div
          style={{
            display: "flex",
            padding: "20px",
            justifyContent: "space-between",
          }}
        >
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="secondary"
                >
                  <div className="image">
                    <h3> </h3>
                    <p
                      style={{
                        marginTop: "49vh", 
                        padding: "20px",
                      }}
                    >
                      Ingeniero en sistemas de información
                    </p>
                  </div>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <div style={{ padding: "20px" }}>
            <Card
              sx={{ maxHeight: 500, maxWidth: 545, flexDirection: "column" }}
            >
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="secondary"
                  >
                    ANTHONY CORDOVA
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Desarrollar y aplicar conocimientos en el diseño, desarrollo
                    y mantenimiento de sistemas informáticos, buscando
                    especializarme en áreas como desarrollo de software,
                    arquitectura de sistemas, seguridad informática, gestión de
                    proyectos tecnológicos, consultoría tecnológica o innovación
                    y desarrollo de nuevas tecnologías. Adicional tengo gran
                    conocimiento en los lenguajes de etiquetado HTML, CSS,
                    además en lenguajes de programación tales como React.js y
                    React-Native, JavaScript, Node.js, java y también tengo
                    conocimiento sobre base de datos: MongoDB, Firebase,
                    PostgreSQL y MySQL. Tengo conocimiento para desplegar Apps
                    web utilizando GitHub-Pages y Heruko.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
