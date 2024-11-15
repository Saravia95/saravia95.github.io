import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

export function AboutPage() {
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <button
          type="submit"
          onClick={onBackButtonClick}
          style={{
            position: "absolute",
            width: "75px",
            height: "75px",
            margin: "auto",
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "rgb(0, 176, 255)", // Dark purple button
            color: "rgb(30, 30, 30)", // White text
            fontSize: "42px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            transition: "background 0.3s",
            left: "25px",
            top: "25px",
          }}
        >
          &#8592;
        </button>

        <div
          style={{
            backgroundColor: "#0c0c0c",
            borderStyle: "inset",
            borderColor: "#00ccff",
            borderRadius: "12px",
            width: "75vw",
            height: "auto",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              textShadow: "3px 3px #000000",
            }}
          >
            About Me
          </h1>
          <hr
            style={{
              backgroundColor: "#00ccff",
              border: "none" /* Remove default border */,
              height: "1px" /* Set height of the line */,
              margin: "10px",
              marginLeft: "100px",
              marginRight: "100px",
              alignItems: "center",
            }}
          />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              src="/images/TEMPPROFILEPIC.jpg"
              style={{
                margin: "30px",
                width: "30vw",
                display: "flex",
                border: "5px #00ccff inset",
                marginRight: "0px",
              }}
            />
            <div
              style={{
                width: "100%",
                paddingRight: "30px",
                paddingLeft: "30px",
                margin: "30px",
                lineHeight: "40px",
                fontSize: "23px",
                backgroundColor: "black",
                border: "5px grey inset",

                //display: "flex",
              }}
            >
              <p
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  lineHeight: "1.5cm",
                }}
              >
                I am a game developer with a strong foundation in Unity and C#,
                experienced in all facets of game development. My journey has
                led me through various projects, enhancing my skills in design,
                programming, and problem-solving. During my 16-month co-op, I
                expanded my expertise into web development, utilizing React,
                TypeScript, Three.js, and React Three Fiber to create dynamic
                web applications. This experience allowed me to develop a solid
                understanding of user interface design and client-side
                programming. While my passion lies in game development, I am
                open to opportunities in web and software development, where I
                can leverage my skills and continue to grow. I thrive in
                collaborative environments and am always eager to learn new
                technologies and methodologies to enhance my work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
