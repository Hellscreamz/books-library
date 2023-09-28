import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import BookCreate from './components/book-create/book-create';
import BookList from './components/book-list/book-list';

function App() {
  const [books, setBook] = useState([])

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: uuidv4(), title }
    ]
    setBook(updatedBooks);
  }

  const deleteBookByID = (id) => {
      const deletedBook = books.filter((book) => {
        return book.id !== id;
      })
      setBook(deletedBook)
  }

  const editBookByID = (id, newTitle) => {
    const editedBook = books.map((book) => {
      if (book.id === id) {
        return {
          ...books,
          title: newTitle
        }
      }
      return book;
    })
    setBook(editedBook)
  }

  return (
    <div className="app">
      <BookCreate onCreate={createBook}/>
      <BookList books={books} onDelete={deleteBookByID} onEdit={editBookByID}/>
    </div>
  );
}

export default App;
