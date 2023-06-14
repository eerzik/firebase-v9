
import BookList from "../components/BookList";
import BookForm from "../components/BookForm";
import { useCollection } from "../hooks/useCollection";

export default function Home() {

    const {documents : books}= useCollection('books')

    // const [books, setBooks] = useState(null)
    // useEffect(() => {
    //     const ref = collection(db, 'books');
    //     getDocs(ref)
    //         .then((snap) => {
    //             let result=[];
    //             snap.forEach(doc=>{
    //                 //... nokta kullandığımızda içerideki tüm dataları çekmiş oluyoruz.
    //                 result.push({id:doc.id,...doc.data()})
    //             })
    //             setBooks(result);
    //         })

    // }, [])

    return (
        <div className="App" >
            {books && <BookList books={books} ></BookList>}
            <BookForm />
        </div>
    );
};

