import { useState } from 'react';


export default function BookForm() {

    const [newBook, setNewBook] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newBook);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <span>Yeni Kitap Ekle</span>
                <input required type='text' onChange={(e) => setNewBook(e.target.value)} value={newBook} >
                </input>
            </label>
            <button>EKLE</button>
        </form>
    );
};

