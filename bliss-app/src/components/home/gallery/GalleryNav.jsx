import React from "react";

const GalleryNav = ({activeItem, setActiveItem, data}) => {
  const next = (e) => {
    e.preventDefault();
    if (data.length - 1 === activeItem) {
      setActiveItem(0);
    } else {
      setActiveItem((item) => item + 1);
    }
  };

  const prev = (e) => {
    e.preventDefault();
    if (activeItem === 0) {
      setActiveItem(data.length - 1);
    } else {
      setActiveItem((item) => item - 1);
    }
  };

  const goto = (e, i) => {
    e.preventDefault();
    setActiveItem(i);
  };
  return (
    <div className="gallery-nav">
      <button onClick={prev}>{`<-`}</button>
      {data.map((item, i) => (
        <button key={`gallery-${item.id}`} onClick={(e) => goto(e, i)}>
          {item.id}
        </button>
      ))}
      <button onClick={next}>{`->`}</button>
    </div>
  );
};

export default GalleryNav;
