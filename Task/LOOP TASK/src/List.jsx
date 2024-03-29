import React from 'react';

function List() {
    const items = ['Use Array.map', 'Not a for loop', 'Give each item a unique key', 'Avoid using array index as the key'];

    return (

        <div className='container mt-5 p-5' style={{ backgroundColor: 'greenyellow', width: 800 }}>
            <h1 style={{ textAlign: 'center' }}> The "React Way " to Render a List</h1>
            <ul>
                {items.map((item, index) => (
                    <span className='d-flex'><i class="fa-solid fa-circle-check mt-3" style={{ fontSize: 30, color: 'white', }}></i> &ensp; &ensp;  <li style={{ listStyleType: 'none', backgroundColor: 'white', marginTop: 10, padding: 10, width: 500 }} key={index}>     {item}
                    </li> </span>

                ))}
            </ul>
        </div>

    );
}

export default List;