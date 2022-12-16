import { Link } from "react-router-dom"

const Item = ({ product }) => {
    return (
        <div>
            <img src={product.img} alt={product.name} style={{ width: 200}}/>
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <p>$ {product.price}</p>
            <Link to={`/detail/${product.id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item