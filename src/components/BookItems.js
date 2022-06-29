import { useState } from "react";
import BookImg from "./BookImg";
import "../css/BookItems.css"
import exitImg  from '../img/exit.svg'

export default function BookItems ({ books, categorie, setView, allResults})  {
  const [viewBook, setViewBook] = useState("");
  const allRes = allResults>0 ? `All results : ${allResults}` : null;

  function viewBtnClick(id) {
    setViewBook(id);
    setView(id);
  }

  function viewBtnBackClick(id) {
    setViewBook("");
    setView("");
  }

  if (!books) return null 

  if (viewBook) {
    let item = books.find((item) => item.id === viewBook);

    const book = item.volumeInfo;
    let src = null;
    let category = book.categories ? "[" + book.categories + "]" : null;
    let description = typeof book.description == 'undefined' 
      ? "Sorry, this book has no description" 
      : book.description;
    src = book?.imageLinks?.smallThumbnail || book?.imageLinks?.Thumbnail
    console.log(book);
    return (
      <div className="view-book">
        <div className="view-book__img-conteiner">
          <div className="view-book__img-item">
            <BookImg src={src} title={book.title} />
          </div>
          <div className="view-book__text-item">
            <p className="title">{book.title}</p>
            <p className="authors">{book.authors}</p>
          </div>
         
        </div>
        <div className="view-book__text-conteiner">
          <span className="categories">{category}</span>
          <p className="view-book__description">{description}</p>
          <img class="view-book__exit" src={exitImg}  onClick={viewBtnBackClick}></img>
        </div>
      </div>
    );
  }
  
  return (
    <>
      {allRes}
        <ul className="books-list">
          {books.map((item, i) => {
            const book = item.volumeInfo;
            
            let src = null;
            let category = book.categories ? "[" + book.categories + "]" : null;
            let id = item.id;

            src = book?.imageLinks?.smallThumbnail || book?.imageLinks?.Thumbnail

            return (
              <li className="books-list__item" key={item.etag}>
                <button
                  onClick={() => viewBtnClick(id)}
                  className="bookViuweBtn"
                  type="button"
                >
                  <div>
                    <BookImg src={src} title={book.title} />
                    <p className="categories">{category}</p>
                    <p className="title">{book.title}</p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>

      
    </>
  );
}; 
