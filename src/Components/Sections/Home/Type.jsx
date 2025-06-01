import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

function TypewriterComponent() {
  return (
    <TypeWriterEffect
      textStyle={{
        fontFamily: "'Ancizar Serif', serif", // Replace with your font
        color: "yourColor", // Set your text color
        fontWeight: 500,
        fontSize: "1.5em",
      }}
      startDelay={100} // Auto-starts after 100ms
      cursorColor="yourCursorColor" // Set cursor color
      multiText={["Frontend Developer", "Freelancer"]}
      multiTextDelay={2000} // Delay between texts
      typeSpeed={150} // Typing speed
      deleteSpeed={400} // Backspacing speed
      multiTextLoop={true} // Enable infinite looping
    />
  );
}

export default TypewriterComponent;
