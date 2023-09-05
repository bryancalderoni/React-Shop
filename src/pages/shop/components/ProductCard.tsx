import { Product } from "@/model/product";

interface ProductCardProps {
  product: Partial<Product>;
  onAddToCart: ( product: Partial<Product>) => void;
}

export function ProductCard(props: ProductCardProps) {
  const { product } = props;
  return (
    <div
      className="bg-white text-black rounded-xl shadow-xl overflow-hidden"
      key={product.id}
    >
      {product.img && (
        <img
          src={product.img}
          alt={product.name}
          className="h-64 w-full object-cover"
        />
      )}
      <div className="flex justify-between items-center text-xl p-3 font-medium">
        <div>{product.name}</div>
        <div>€{product.cost}</div>
      </div>
      <p className="p-3">{product.description}</p>

      <button className="bg-sky-600 hover:bg-sky-800 text-white transition w-full text-center font-medium p-2"
      onClick={() => props.onAddToCart(product)}
      >
        ADD TO CART
      </button>
    </div>
  );
}
export default ProductCard;
