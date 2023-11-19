import React from "react";
import Card from "../shared/Section/listContainer/card/card";

function CustomDescription({ CustomDescription }) {
  const image = <img src="#"></img>;
  const title = CustomDescription?.title;
  const content = (
    <>
      <p>{CustomDescription?.description}</p>
      <div>
        <p>Upvotes: {CustomDescription?.upvotes}</p>
        <p>Downvotes: {CustomDescription?.downvotes}</p>
      </div>
    </>
  );

  return (
    <Card
      id={CustomDescription?.id}
      to={"#"}
      image={image}
      title={title}
      content={content}
    />
  );
}

export default CustomDescription;
