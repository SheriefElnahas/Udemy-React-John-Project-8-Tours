import React from 'react'

export default function Tour(props) {
  return (
    <div className='single-tour'>
        <img src={props.image} alt={props.name} />
            <footer>
                <div className="tour-info">
                <h4>{props.name}</h4>
                <h4 className="tour-price">{props.price}</h4>
                </div>
            <p>{props.info}</p>
            <button className="delete-btn">Not Intrested</button>
            </footer>
       

    </div>
  )
}


