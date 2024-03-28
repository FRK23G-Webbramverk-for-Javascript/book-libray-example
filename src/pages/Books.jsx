import './Books.css'
import { useState, useEffect } from 'react'

import Book from '../components/Book/Book'

function Books() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    async function getBooks() {
      const response = await fetch(
        'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books'
      )
      const data = await response.json()
      setBooks(data)
    }

    getBooks()
  }, [])

  const bookComponents = books.map((book) => {
    return <Book book={book} key={book.id} />
  })

  return <section className="books">{bookComponents}</section>
}

export default Books
