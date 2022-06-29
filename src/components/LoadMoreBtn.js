import loadImg from "../img/load-more-arrow.svg"

const LoadMoreBtn = ({ books, getMoreBooks, viewBook }) => {
  if (books[1]) {
    if (!viewBook) {
      return <img class="LoadMoreBtn" onClick={getMoreBooks} src={loadImg}></img>;
    } else return null;
  } else return null;
};

export default LoadMoreBtn;

