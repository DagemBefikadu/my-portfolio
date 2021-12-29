import React from "react";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      {/* <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("My name is Dagem Befikadu \n I am Software Engineer baised out of the Bay Area(San Jose)")
            // .callFunction(() => {
            //   console.log("String typed out!");
            // })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .start();
        }}
      /> */}
      {/* <Typewriter
  options={{
    strings: ['Hello, my name is Dagem Befikadu', 'I am Software Engineer baised out of San Jose,CA'],
    autoStart: true,
    loop: true,
  }}
/> */}
    </div>
  );
}
