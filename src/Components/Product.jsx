import { useParams } from "react-router-dom";

const Product = ({ productData }) => {
  const { productId } = useParams();
  const product = productData.find((p) => p.id === Number(productId));
  return (
    <>
      {productId ? (
        <div>
          <h3> {product.name} </h3>
          <p>{product.description}</p>
          <hr />
          <h4>{product.status}</h4>
        </div>
      ) : (
        <div>
          <h2>Sorry. Product doesn't exist.</h2>
        </div>
      )}
    </>
  );
};

export default Product;
