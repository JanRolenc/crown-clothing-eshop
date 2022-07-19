import { createContext, useState, useEffect } from "react";

//pouzijeme jen jednorazove pro nahrani dat do firebase
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";
import SHOP_DATA from "../shop-data";

//nasledne stahujeme nahrana data z firebase do webu
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  //pro jednorazove nahrani dat do firebase
  useEffect(() => {
    addCollectionAndDocuments("categories", SHOP_DATA);
  }, []);
  //po zavedeni redux toto prenasime do komp Shop
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
