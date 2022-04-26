import "./directory.style.scss";
import CategoryItem from "../category-item/category-item.component";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} /> //key se musi nechat u map
      ))}
    </div>
  );
};

export default Directory;
