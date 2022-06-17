import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom"; //zpristupni variable category z shop.component

import ProductCard from "../../components/product-card/product-card.component";

import { CategoriesContext } from "../../contexts/categories.context";

import "./category.style.scss";

const Category = () => {
<<<<<<< HEAD
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            <div className="category-container">
                {products && //toto musime nastavit, protoze categoriesMap je po prvnim mount/useEffectu prazdny objekt;
                    //a to proto, ze v categories.context je getCategoriesAndDocuments() asynchronni, ale tady Category
                    //synchronni;
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>
        </Fragment>
    );
};

export default Category;
=======
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products && //toto musime nastavit, protoze categoriesMap je po prvnim mount/useEffectu prazdny objekt;
          //a to proto, ze v categories.context je getCategoriesAndDocuments() asynchronni, ale tady Category
          //synchronni;
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
>>>>>>> f0fcc28b73226af633c2b3d0ba9ca29be052ae5f
