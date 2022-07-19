import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"
// import { setCategoriesMap } from "../../store/categories/categories.action"
import { setCategories } from "../../store/categories/categories.action"

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";


import "./shop.style.scss";

const Shop = () => {
  const dispatch = useDispatch();//jakmile toto zavedu, obalim do dispatch i setCategoriesMap(categoryMap);
  useEffect(() => {
    const getCategoriesMap = async () => {
      // const categoryMap = await getCategoriesAndDocuments();//zmena od videa 157
      const categoriesArray = await getCategoriesAndDocuments('categories');
      // console.log(categoriesArray)
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
