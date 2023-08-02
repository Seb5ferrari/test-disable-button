import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const DiscoverButton = () => {

  let [isDisabled, setIsDisabled] = useState(false);
  const [btnText, setBtnText] = useState("Hello World!");

  // for refresh scenario
  useEffect(() => {
    const disabledUntil = localStorage.getItem('disabledUntil');
    if (disabledUntil && new Date().getTime() < disabledUntil) {
      setIsDisabled(true);
      setTimeout(() => {
        setIsDisabled(false);
        localStorage.clear();
      }, disabledUntil - new Date().getTime());
    }
  }, []);

 
  function btnHandler() {
    setBtnText("Bye World...!");
    setIsDisabled(true);
    const disabledUntil = new Date().getTime() + 20000;
    localStorage.setItem('disabledUntil', disabledUntil);

    Axios({

      "url": "http://localhost:8000"
    })
      .then((response) => {
        console.log(response.data);
        setIsDisabled(false);
        setBtnText("Hello World!");
        localStorage.clear();
      })
      .catch((error) => {
        console.log(error);
        setIsDisabled(false);
        setBtnText("Hello World!");
        localStorage.clear();
      });
  }

  return (
    <>
      <Link to="/discover">
        <Button
          style={{
            backgroundColor: "#21b6ae"
          }}
          id="btn"
          onClick={btnHandler}
          disabled={isDisabled}
          variant="contained"
        >
          {btnText}
        </Button>
      </Link>
    </>
  );
};

export default DiscoverButton;
