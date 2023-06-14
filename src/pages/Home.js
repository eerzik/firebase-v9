import { useState } from "react";
import BookList from "../components/BookList";
import BookForm from "../components/BookForm";

export default function Home() {

    const [books, setBooks] = useState([
        { title: 'kitap 1', id: 1 },
        { title: 'kitap 2', id: 2 },
        { title: 'kitap 3', id: 3 },
        { title: 'kitap 4', id: 4 }
    ])


    return (
        <div className="App" >
            {books && <BookList books={books} ></BookList>}
            <BookForm />
        </div>
    );
};

