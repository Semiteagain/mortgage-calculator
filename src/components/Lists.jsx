import React from 'react'

function Lists(props) {
 

  function handleDelete() {
      props.onDelete(props.id);
  }

    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Lists
