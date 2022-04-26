import "./category-item.style.scss";

const CategoryItem = ({ category }) => {
  return (
    <div className="category-container">
      <div
        style={{ backgroundImage: `url(${category.imageUrl}` }}
        className="background-image"
      ></div>
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
