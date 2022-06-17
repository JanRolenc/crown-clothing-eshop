import "./directory-item.style.scss";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default DirectoryItem;
=======
export default DirectoryItem;
>>>>>>> f0fcc28b73226af633c2b3d0ba9ca29be052ae5f
