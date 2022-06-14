import React, { useEffect, useState } from 'react';
// import ReactTouchEvents from "react-touch-events";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './Page.css';

const Page = ({ image, nextPage, previousPage, currentPage, lastPage }) => {
  const [styleImage, setStyleImage] = useState();
  const [styleArrowLeftPosition, setStyleArrowLeftPosition] = useState();
  const [styleArrowRightPosition, setStyleArrowRightPosition] = useState();

  const widthGreater = {
    height: '100vh',
    backgroundColor: 'black'
  };

  const heightGreater = {
    width: '100%',
    backgroundColor: 'red'
  }

  useEffect(() => {
    // window.addEventListener("resize", this.updateDimensions.bind(this));
    if (window.innerWidth > window.innerHeight) {
      setStyleImage(widthGreater);
    } else {
      setStyleImage(heightGreater);
    }
  }, []);

  const onImageLoad = ({ target: img }) => {
    const { offsetHeight, offsetWidth } = img;
    const positionX = (window.innerWidth - offsetWidth) / 2;
    setStyleArrowLeftPosition({
      bottom: '0%',
      left: positionX + 'px',
      transform: 'translate(0, -50 %)',
    });
    setStyleArrowRightPosition({
      bottom: '0%',
      right: positionX + 'px',
      transform: 'translate(0, -50 %)',
    })
  };

  return (
    <div className='Page'>
      {currentPage !== 1
        ?
        < div className='Arrow-Left-Container' onClick={previousPage}>
          <div className='Circle-Arrow'>
            <FontAwesomeIcon
              style={styleArrowLeftPosition}
              className='ArrowLeft'
              icon={faAngleLeft}
              onClick={previousPage}
              size="2x"
              color='#BD3D21'
            />
          </div>
        </div>
        : null
      }
      <div className='Image-Container'>
        <img onLoad={onImageLoad} style={styleImage} src={image} alt='' />
      </div>
      {currentPage < lastPage
        ?
        <div className='Arrow-Right-Container' onClick={nextPage}>
          <div className='Circle-Arrow'>
            <FontAwesomeIcon
              style={styleArrowRightPosition}
              className='ArrowRight'
              icon={faAngleRight}
              onClick={nextPage}
              size="2x"
              color='#BD3D21'
            />
          </div>
        </div>
        : null
      }
    </div>
  );
};

export default Page;