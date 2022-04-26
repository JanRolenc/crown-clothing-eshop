const App = () => {
  const categories = [
    {
      id: 1,
      img: "http://",
      title: "Hats",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div className="category-container">
          <img src={category.img} alt={category.title.toLowerCase()} />
          <div className="category-body-container">
            <h2>{category.title}</h2>
            <p>Shop Now</p>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
