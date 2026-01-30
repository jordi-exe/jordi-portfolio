import Book from "../Book/Book";
import styles from "./BookCover.module.css";

function BookCover() {
  return (
    <div className={styles.bookCover}>
      <Book />
    </div>
  );
}

export default BookCover;
