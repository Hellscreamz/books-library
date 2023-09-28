import { useState } from 'react';

function BookEdit({ onEdit, book }) {
    const [title, setTitle] = useState(book.title);

    const handleInput = (event) => {
        setTitle(event.target.value);
    }

    const handleBookEdit = (event) => {
        event.preventDefault();
        onEdit(book.id, title)
    }
    return <div>
        <form onSubmit={handleBookEdit} className='book-edit'>
            <label>Title</label>
            <input onChange={handleInput} value={title} className='input' type="text" />
            <button className='button is-primary'>Save</button>
        </form>
    </div>;
}

export default BookEdit;