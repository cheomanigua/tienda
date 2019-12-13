import React from 'react';
function Shop(props) {
  const sidebar = (
    <ul>
      {props.cards.map((card) =>
        <li key={card.id}>
          {card.title}
        </li>
      )}
    </ul>
  );
  const content = props.cards.map((card) =>
  <ul className="card">
    <div key={card.id}>
        <img src={card.image} 
            alt={card.title} 
            style={{ maxWidth:'200px', height:'auto', marginBottom: '0px'}}
            />
        <div className="container">
          <h2>{card.title}</h2>
          <p>{card.content}</p>
        </div>                           
    </div>
  </ul>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}
export default Shop;

