import DirectoryItem from "../directory-item/directory-item.component";

import "./directory.style.scss";

const Directory = ({ categories }) => {
<<<<<<< HEAD
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </div>
    );
=======
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
>>>>>>> f0fcc28b73226af633c2b3d0ba9ca29be052ae5f
};

export default Directory;