import axios from "axios";
import Item from "./Item";

const ItemList = ({ items, setItems }) => {
    // your code here

    const handleDelete = async (id) =>{
        try{
            await axios.delete(`http://${import.meta.env.VITE_API_URI}/doors/${id}`);
            const updated = items.filter((ele)=>{
                return ele.id != id;
            })
            setItems(updated);       
        } catch (error) {
            console.log("error in deletion", error.message);
            alert('error in delting the item')
        }
    }

    return (
        <>
            {items.map((item) => (
                <Item key={item.id} item={item} handleDelete={handleDelete}/>
            ))}
        </>
    );
};

export default ItemList;
