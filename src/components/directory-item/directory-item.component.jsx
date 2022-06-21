import { Body, BackgroundImage, DirectoryItemContainer } from "./directory-item.style.jsx";

import { useNavigate } from "react-router-dom";//toto je dalsi moznost pro routovani vedle Link

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route)

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage
        // style={{
        //   backgroundImage: `url(${imageUrl})`,
        // }} //po zavedeni styled components toto nahradime za:
        imageUrl={imageUrl}//nazev jsme dali sami
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
