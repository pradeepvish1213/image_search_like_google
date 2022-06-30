import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Image = ({ item }) => {
  return (
    <>
      <div className="wrapper">
        {item ?(
          item.map((item) => {
            return (
              <TransformWrapper>
                <TransformComponent >
                  <img src={item.urls.small} height="100%" width="100%" />
                </TransformComponent>
              </TransformWrapper>
            );
          })):""}
      </div>
    </>
  );
};

export default Image;
