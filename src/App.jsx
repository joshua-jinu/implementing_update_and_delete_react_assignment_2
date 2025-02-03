import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";
import axios from "axios";

// use the following link to get the data
// `/doors` will give you all the doors.
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  // Get the existing item from the server
  const [items, setItems] = useState(null);
  // pass the item to UpdateItem as a prop

  useEffect(()=>{
    const fetchItems = async () =>{
      try {
        const res = await axios.get(API_URI);
        console.log(res);
        setItems(res.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchItems();
  }, [])

  return (
    <>
      {
        items && <ItemList items={items} setItems = {setItems}/>
      }
    </>
  );
}

export default App;
