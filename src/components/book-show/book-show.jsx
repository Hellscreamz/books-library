import BookEdit from '../book-edit/book-edit';
import { useState } from 'react';

function BookShow({ book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);

    const handleOnDelete = () => {
        onDelete(book.id);
    }

    const handleOnEdit = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle);
    };

    return <div className='book-show'>
        <img alt='books' src={`https://picsum.photos/seed/${book.id}/200/300`}></img>
        <div>
            {showEdit === false ? <h3>{book.title}</h3> : <BookEdit book={book} onEdit={handleSubmit}/>}
        </div>
        <div className='actions'>
            <button className='delete' onClick={handleOnDelete}>
                Delete
            </button>
            <button className='edit' onClick={handleOnEdit}>
                Edit
            </button>
        </div>
    </div>
}

export default BookShow;