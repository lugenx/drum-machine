import React, { useRef, useEffect } from "react";
const DrumPad = (props) => {
  const focused = useRef();

  useEffect(() => {
    focused.current.focus();
  });

  return (
    <div
      className="drum-pad"
      style={{ backgroundColor: props.touched[props.id] ? "orange" : "grey" }}
      id={props.id}
      name={props.name}
      onClick={() => props.playSound(props.id)}
      onKeyPress={(e) => props.handleKeyPress(e)}
      ref={focused}
      tabIndex="-1"
    >
      <audio
        id={props.id}
        className="clip"
        src={props.soundUrl}
        type="audio/mpeg"
      />
      {props.id}
    </div>
  );
};

export default DrumPad;
