import "./App.css";
import { useState } from "react";
import star from "./images/icon-star.svg";
import thanks from "./images/illustration-thank-you.svg";
function App() {
  const [submit, setSubmit] = useState(false);
  const [rating, setRating] = useState(0);
  return (
    <div>
      {submit ? (
        <Thankyou rating={rating} />
      ) : (
        <Feedback setSubmit={setSubmit} rating={rating} setRating={setRating} />
      )}
    </div>
  );
}

function Feedback({ setSubmit, rating, setRating }) {
  function button(num) {
    return (
      <div
        onClick={() => {
          setRating(num);
        }}
        className={`rating ${rating === num ? "active" : ""}`}
      >
        {num}
      </div>
    );
  }

  return (
    <div className="ratingContainer">
      <div className="imageBackground">
        <img src={star} alt="star" className="image" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="buttonContainer">
        {button(1)} {button(2)}
        {button(3)}
        {button(4)}
        {button(5)}
      </div>
      <button
        onClick={() => {
          setSubmit(true);
        }}
      >
        SUBMIT
      </button>
    </div>
  );
}

function Thankyou({ rating }) {
  return (
    <div className="ratingContainer center">
      <img src={thanks} id="thanksImage" />
      <div id="selection">You selected {rating} out of 5</div>
      <h1 id="thankYou">Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. <br />
        If you ever need more support, don't hesitate to <br />
        get in touch!
      </p>
    </div>
  );
}

export default App;
