import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <textarea type={"text"} style={{resize: "none", height: "250px", width: "300px", borderRadius: "5px"}}/>
      <button type={"submit"} className="appBtn" id='submitBtn'>Submit</button>
    </div>
  );
}