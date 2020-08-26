import React, {useState} from 'react'

const AppAsFunction = () => {

    const [list, setList] = useState([])
    const [value, setValue] = useState("");

    const handleAdd = () => {
        setList([...list, value])
    };

    const handleDelete = () => {
        const newList = [];
        list.forEach(
            element => element !== value
                ? newList.push(element)
                : console.log(`Element ${element} removed`)
        )
        setList(newList)
    };

    const handleChange = (e) => {
        setValue(e.target.value)
    };

    return (
        <div>
            <input type={"text"} placeholder={"Name"} onChange={handleChange}/>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleDelete}>Delete</button>
            <div>
                {list.map((element) => {
                    return <p>{element}</p>
                })}
            </div>
        </div>
    );
};

export default AppAsFunction