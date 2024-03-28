import './BookDetails.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function BookDetails() {
  const params = useParams()
  const [book, setBook] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    function filterBook(books) {
      const filteredBook = books.filter((book) => {
        if (book.id === parseInt(params.id)) return book
      })

      setBook(filteredBook[0])
    }

    async function getBooks() {
      const response = await fetch(
        'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books'
      )
      const data = await response.json()
      filterBook(data)
    }

    getBooks()
  }, [])

  function close() {
    navigate('/')
  }

  return (
    <section className="dark">
      {book ? (
        <div className="bookinfo">
          <header>
            <a href="#" className="back" onClick={close}>
              &larr;
            </a>
          </header>
          <section className="display">
            <article className="book" style={{ backgroundColor: book.color }}>
              <section className="bg"></section>
              <section className="content">
                <aside></aside>
                <section>
                  <h2>{book.title}</h2>
                  <h3>{book.author}</h3>
                </section>
              </section>
            </article>
          </section>
          <section className="info">
            <h1>{book.title}</h1>
            <h3>{book.author}</h3>
            <p>{book.plot}</p>
            <footer>
              <p>
                <b>Audience:</b> {book.audience}
              </p>
              <p>
                <b>First Published:</b> {book.year}
              </p>
              <p>
                <b>Pages:</b> {book.pages || '-'}
              </p>
              <p>
                <b>Publisher:</b> {book.publisher}
              </p>
            </footer>
          </section>
        </div>
      ) : (
        <h2>Ingen bok är vald</h2>
      )}
    </section>
  )
}

export default BookDetails
