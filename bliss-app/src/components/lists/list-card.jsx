import React from "react";
import { Link } from "react-router-dom";
import Card from "../card/card";

function ListCard({ list }) {
  const listComponents = list.ThingsToDos.length ? (
    list.ThingsToDos.map((bliss) => <li>{bliss.thingName}</li>)
  ) : (
    <h3>Nothing...yet...</h3>
  );
  const image = (
    <img src={`https://placehold.co/600x400`}></img>
  );

  const title = `${list?.title} by ${list?.User?.username}`

  const content = (
    <>
      <div>
        {/* Body: Desc, Some ToDos */}
        <p>{list.listDescription}</p>
        <ul>{listComponents}</ul>
      </div>
    </>
  );
  return <Card id={list?.id} to={`/lists/${list?.id}`} image={image} title={title} content={content}/>;
}

export default ListCard;
