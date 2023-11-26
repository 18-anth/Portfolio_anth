import React, { useEffect, useState } from "react";

function ButtonUp() {
  const [bactobutton, setbacktubutton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setbacktubutton(true);
      } else {
        setbacktubutton(false);
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {bactobutton && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            height: "50px",
            width: "50px",
            fontSize: "100px",
            cursor: "pointer",
            background: "white",
          }}
          onClick={scrollUp}
        >
          ^
        </button>
      )}
    </div>
  );
}
export default ButtonUp;
