import React, { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault(); // prevents the original default value to be applied on the data hook
    const name = event.target.elements.name.value;
    const review = event.target.elements.review.value;
    setData((prevData) => [
      ...prevData, // Includes the previous value in the data array.
      {
        name: name,
        review: review,
      },
    ]);
  };

  return (
    <div className="main">
      <div className="reviewInput">
        <form onSubmit={handleSubmit}>
          <h4>Name of the book</h4>
          <textarea
            id="name"
            type="text"
            placeholder="enter name"
            name="name"
            required="true"
            autoFocus="true"
            wrap="hard"
          />
          <h4>Your Review</h4>
          <textarea
            id="review"
            type="text"
            placeholder="enter review"
            name="review"
            required="true"
            className="reviewText"
            wrap="hard"
          />
          <br />
          <input className="submitButton" type="submit" />
        </form>
      </div>

      <div className="reviews">
        {data.map((item) => {
          return (
            <div className="review">
              <div className="reviewMain">
              <h1>{item.name}</h1>
              <p>{item.review}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
