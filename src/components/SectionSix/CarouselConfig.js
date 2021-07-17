import React, { useState, useCallback } from "react";
import Carousel from "nuka-carousel";

// CONFIG DO NOT REMOVE
const colors = ["#fffff", "#ffffff", "#ffffff"];
// eslint-disable-next-line complexity
const CarouselConfig = () => {
  const [animation, setAnimation] = useState(undefined);
  const [autoplay, setAutoplay] = useState(false);
  const [cellAlign, setCellAlign] = useState("left");
  const [heightMode, setHeightMode] = useState("max");
  const [length, setLength] = useState(colors.length);
  const [scrollMode, setScrollMode] = useState("remainder");
  const [slideIndex, setSlideIndex] = useState(0);
  const [slidesToScroll, setSlidesToScroll] = useState(1);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [transitionMode, setTransitionMode] = useState("scroll");
  const [underlineHeader, setUnderlineHeader] = useState(false);
  const [withoutControls, setWithoutControls] = useState(false);
  const [wrapAround, setWrapAround] = useState(false);
  const [zoomScale, setZoomScale] = useState(0.5);

  const handleImageClick = useCallback(() => {
    setUnderlineHeader((prevUnderlineHeader) => !prevUnderlineHeader);
  }, []);

  const renderTopControls = (currentSlide) => {
    return (
      <div
        style={{
          fontFamily: "Helvetica",
          color: "purple",
          textDecoration: underlineHeader ? "underline" : "none",
        }}
      >
        Jane Doe: {Math.ceil(currentSlide) + 1}
      </div>
    );
  };

  const slides = colors.slice(0, length).map((color, index) => (
    <img
      src={`https://via.placeholder.com/400/${color}/ffffff/&text=slide${
        index + 1
      }`}
      alt={`Slide ${index + 1}`}
      key={color}
      onClick={() => handleImageClick()}
      style={{
        height: heightMode === "current" ? 100 * (index + 1) : 400,
      }}
    />
  ));

  return (
    <>
      <div style={{ width: "100%", margin: "auto", color: "grey" }}>
        <Carousel
          renderCenterLeftControls={({ previousSlide }) => (
            <div
              style={{ background: "none", color: "purple" }}
              onClick={previousSlide}
            >
              <i className="fa fa-angle-left fa-2x" />
            </div>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <div
              style={{ background: "none", color: "purple" }}
              onClick={nextSlide}
            >
              <i className="fa fa-angle-right fa-2x" />
            </div>
          )}
          animation={animation}
          autoplay={autoplay}
          cellAlign={cellAlign}
          heightMode={heightMode}
          scrollMode={scrollMode}
          slideIndex={slideIndex}
          slideListMargin={0}
          slidesToScroll={slidesToScroll}
          slidesToShow={slidesToShow}
          transitionMode={transitionMode}
          withoutControls={withoutControls}
          wrapAround={wrapAround}
          zoomScale={Number(zoomScale || 0)}
          renderAnnounceSlideMessage={({ currentSlide, slideCount }) => {
            return `Showing slide ${currentSlide + 1} of ${slideCount}`;
          }}
          renderTopCenterControls={({ currentSlide }) =>
            renderTopControls(currentSlide)
          }
        >
          {slides}
        </Carousel>
      </div>
    </>
  );
};

export default CarouselConfig;
