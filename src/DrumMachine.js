import React, { useState } from "react";
import DrumPad from "./DrumPad";
import Display from "./Display";
const DrumMachine = () => {
  const [clipName, setClipName] = useState(
    "Click on drums or press a key on keyboard..."
  );
  const [touched, setTouched] = useState({
    Q: false,
    W: false,
    E: false,
    A: false,
    S: false,
    D: false,
    Z: false,
    X: false,
    C: false,
  });

  const playSound = (id) => {
    const audio = document.getElementById(id);
    const sound = audio.firstChild;
    sound.play();
    const clip = audio.getAttribute("name");
    setClipName(clip);
    setTouched({ [id]: true });
    setTimeout(() => {
      setTouched({ [id]: false });
    }, 200);
  };

  const handleKeyPress = (e) => {
    const pressedKey = e.key.toUpperCase();
    console.log("a key pressed ", e.key);
    if ("QWEASDZXC".includes(pressedKey)) playSound(pressedKey);
  };

  return (
    <div>
      <div id="drum-machine">
        <Display id="display" clipName={clipName} />
        <div id="drums">
          <DrumPad
            touched={touched}
            playSound={playSound}
            handleKeyPress={handleKeyPress}
            id="Q"
            name="Heater 1"
            soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
          />
          <DrumPad
            touched={touched}
            playSound={playSound}
            handleKeyPress={handleKeyPress}
            id="W"
            name="Heater 2"
            soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          />
          <DrumPad
            touched={touched}
            playSound={playSound}
            handleKeyPress={handleKeyPress}
            id="E"
            name="Heater 3"
            soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          />
          <DrumPad
            touched={touched}
            playSound={playSound}
            handleKeyPress={handleKeyPress}
            id="A"
            name="Heater 4"
            soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          />
          <DrumPad
            touched={touched}
            playSound={playSound}
            handleKeyPress={handleKeyPress}
            id="S"
            name="Clap"
            soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          />
          <DrumPad
            touched={touched}
            playSound={playSound}
            handleKeyPress={handleKeyPress}
            id="D"
            name="Open HH"
            soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          />
          <DrumPad
            touched={touched}
            playSound={playSound}
            handleKeyPress={handleKeyPress}
            id="Z"
            name="Kick n' Hat"
            soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          />
          <DrumPad
            touched={touched}
            playSound={playSound}
            handleKeyPress={handleKeyPress}
            id="X"
            name="Kick"
            soundUrl="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          />
          <DrumPad
            touched={touched}
            playSound={playSound}
            handleKeyPress={handleKeyPress}
            id="C"
            name="Closed HH"
            soundUrl="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          />
        </div>
      </div>
    </div>
  );
};

export default DrumMachine;
