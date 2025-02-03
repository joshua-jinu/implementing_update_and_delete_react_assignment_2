import './item.css'

const Item = ({ item, handleDelete }) => {

    // Render a single item
    // Add a Delete and Edit button
    return (
        <div className="card">
            <h2>Cart Item</h2>
            <p><strong>ID:</strong> {item.id} </p>
            <br />
            <p><strong>Name:</strong> {item.name}</p>
            <br />
            <p><strong>Status:</strong> {item.status} </p>
            <button type="button" className="delete-button" onClick={() => handleDelete(item.id)}>
                Delete Item
            </button>
        </div>
    );
};

export default Item;
