import { useState } from 'react';
function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');

    const handleInput = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    }

    return <div className='book-create'>
        <h3>Add a Book</h3>
       <form onSubmit={handleSubmit}>
         <label>Title</label>
         <input placeholder='Write your book title here' className='input' value={title} onChange={handleInput}/>
         {title.length !== 0 ? <button className='button' type='submit'>Create</button> : null}
       </form>

    </div>
}

export default BookCreate;