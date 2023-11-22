import React from "react";
import Card from "../shared/Section/listContainer/card/card";

function CustomDescription({ CustomDescription }) {
  const image = <img src="https://placehold.co/600x400?text=Hello+World"></img>;
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
      title={CustomDescription?.headline}
      to={"#"}
      image={image}
      content={content}
    />
  );
}

export default CustomDescription;
