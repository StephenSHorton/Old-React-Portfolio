import React from "react";
import profilePicture from "../../../static/assets/images/bio/image-me.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        <div className="spacer">
          Software engineering has always been my dream, I'm specializing in
          machine learning. Here are the languages and frameworks I have
          learned:
        </div>
        <div className="spacer">
          REACT, Node.js, HTML, CSS, SCSS, JavaScript, Python, Flask, MongoDB,
          Git, MySQL
        </div>
        <div className="spacer">
          I'm passionate about innovative technology. The biographies of Bill
          Gates and Steve Jobs have had a profound influence on me and my
          interest in software specifically. They created machines that augment
          the daily life of everyone on the planet! I think their vision of the
          world is one we should reciprocate. My goal is to join the frontier of
          reaching into the future.
        </div>
      </div>
    </div>
  );
}
