import { useSelector } from 'react-redux';
import Book from './OneBook.js';

const List = () => {
    let arr=useSelector(st=>st.book.arr)
    return (<>
    <h1>רשימת ספרים</h1>
        <ul>
        {arr.map(item => <li key={item.id}><Book one={item} /></li>)}
        </ul>
        
   </> );
}
 
export default List;