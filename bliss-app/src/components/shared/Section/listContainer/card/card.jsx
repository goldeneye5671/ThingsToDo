import React from 'react'
import { Link } from 'react-router-dom'
import "./card.css"

function Card({ id, to, image, title, content, model, showLink }) {
  return (
    <article>
      <div className="article-wrapper">
        <figure>
          {image}
        </figure>
        <div className="article-body">
          <h2>{title}</h2>
          {content}
          <br></br>
          <br></br>
          {showLink && (

            <Link key={id} to={to} className="read-more card">
              Discover
              <span className="sr-only"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          )}
          {model && model}
        </div>
      </div>
    </article>
  )
}

export default Card
