import React from "react";
import "../index.css"
function Footer() {
  return (
    <>
      <div >
        <h1 style={{ color: "white", fontSize: "4rem" }}>Contact Me</h1>

        <div className="redes-fooder" style={{display:"flex", color:"white"}}>
          <a href="https://www.facebook.com/profile.php?id=100095502885829">
            <i
              class="fab fa-facebook-f icon-redes-fooder"
              aria-hidden="true"
            ></i>
          </a>
          <a href="https://www.instagram.com/thony_cm_18/">
            <i
              class="fab fa-instagram icon-redes-fooder"
              aria-hidden="true"
            ></i>
          </a>

          <a href="https://web.whatsapp.com/">
            <i class="fab fa-whatsapp icon-redes-fooder" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/anthony-c-a12928111/">
            <i
              class="fab fa-linkedin icon-redes-fooder"
              aria-hidden="true"
            ></i>
          </a>
        </div>

        <hr></hr>

        <p style={{ color: "white" }}>
          &copy; 2023 ANTHONY CORDOVA - Todos los Derechos Reservados
        </p>
      </div>
    </>
  );
}

export default Footer;
