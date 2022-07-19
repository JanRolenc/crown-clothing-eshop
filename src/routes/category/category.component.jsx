import { useContext, useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"; //zpristupni variable category z shop.component

import ProductCard from "../../components/product-card/product-card.component";

// import { CategoriesContext } from "../../contexts/categories.context";//po zavedeni reduxu rusime
import { selectCategoriesMap } from "../../store/categories/categories.selector";

import "./category.style.scss";

const Category = () => {
  const { category } = useParams();
  // const { categoriesMap } = useContext(CategoriesContext);//po zavedeni reduxu rusime
  const categoriesMap = useSelector(selectCategoriesMap)

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

// import { useState, useEffect, Fragment } from 'react';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';

// import ProductCard from '../../components/product-card/product-card.component';

// import { selectCategoriesMap } from '../../store/categories/category.selector';

// import { CategoryContainer, Title } from './category.style';

// const Category = () => {
//   const { category } = useParams();
//   const categoriesMap = useSelector(selectCategoriesMap);
//   const [products, setProducts] = useState(categoriesMap[category]);

//   useEffect(() => {
//     setProducts(categoriesMap[category]);
//   }, [category, categoriesMap]);

//   return (
//     <Fragment>
//       <Title>{category.toUpperCase()}</Title>
//       <CategoryContainer>
//         {products &&
//           products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//       </CategoryContainer>
//     </Fragment>
//   );
// };

// export default Category;