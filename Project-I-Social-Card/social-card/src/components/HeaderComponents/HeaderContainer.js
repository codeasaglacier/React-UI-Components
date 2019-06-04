import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from"./HeaderTitle";
import HeaderContent from "./HeaderContent";
import CardBanner from "../CardComponents/CardBanner";

const HeaderContainer = () => {
    return (
      <div>
          <ImageThumbnail />
          <HeaderTitle />
          <HeaderContent />
          <CardBanner />
      </div>
    );
  };
  
  export default HeaderContainer;
  