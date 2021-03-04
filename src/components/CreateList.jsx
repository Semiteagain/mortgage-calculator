import React, {useState} from 'react'



function CreateList(props) {

    const [list, setList] = useState({
        title : '',
        content : '',
        photo : []
    })

    function handleChange(e) {
        const {name, value} = e.target
        setList(prevList => {
            return {
                ...prevList,
                [name] : value
            }
        })
    }

    function handleClick(e) {
        props.onAdd(list)
        e.preventDefault();
    }
 
  


    return (
        <div>
            <form>
                <input
                type = 'text'
                name = 'title'
                placeholder = 'This is the title'
                value = {list.title}
                onChange = {handleChange}
                
                />



                <textarea
                 type = 'text'
                 name = 'content'
                 placeholder = 'This is the content area'
                 value = {list.content}
                 onChange = {handleChange}
                
                />
              <input type="file" name="photo" id="photo" value={list.photo}/>
               

                <button onClick={handleClick} >Add List</button>
            </form>
        </div>
    )
}

export default CreateList
