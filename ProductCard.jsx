import AddToCart from "../AddToCart/AddToCart";
import "./ProductCard.css"

function ProductCard({item}) {
  return (
    <div className="p-card">
      <div>
        {item.title}
      </div>
      <div>
        { item.price}
      </div>
      <AddToCart item={item} />
    </div>
  )
}

export default ProductCard;