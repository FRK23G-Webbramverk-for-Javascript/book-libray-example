import './Book.css'
import { useNavigate } from 'react-router-dom'

function Book(props) {
  const navigate = useNavigate()
  const { book } = props

  function goToBookDetails() {
    navigate(`/book/${book.id}`)
  }

  return (
    <article
      className="book"
      style={{ backgroundColor: book.color }}
      onClick={goToBookDetails}
    >
      <section className="bg"></section>
      <section className="content">
        <aside></aside>
        <section>
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
        </section>
      </section>
    </article>
  )
}

export default Book
