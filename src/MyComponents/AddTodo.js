import React, {useState} from 'react'

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !description){
            alert("Title and Description can't be empty");
        }else{
            props.addTodo(title, description)
            setTitle= "";
            setDescription= "";
        }
    }
    return (
        <div className="container my-3">
            <h3 className="text-center">Add to todos</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlfor="todoTitle" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} className="form-control" id="todoTitle" />
                </div>
                <div className="mb-3">
                    <label htmlfor="todoDescription" className="form-label">Todo Description</label>
                    <input type="text" value={description} onChange={(e) => {setDescription(e.target.value)}} className="form-control" id="todoDescription" />
                </div>
                <button type="submit" className="btn btn-success btn-sm">Submit</button>
            </form>
        </div>
    )
}
