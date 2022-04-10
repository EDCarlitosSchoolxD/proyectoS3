import React from 'react'

function Card(props) {
  return (
    <div className="card">
        <button>
         <img onClick={props.marca} className="card-img-top" src={props.img} alt="Card image cap" />
        </button>
        <div className="card-body">
            <h4 className="card-title">{props.titulo}</h4>
        </div>

    </div>
  )
}

export {Card};