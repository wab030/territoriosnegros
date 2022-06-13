import React, { useEffect, useState } from 'react';
import ReactTouchEvents from "react-touch-events";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './Page.css';

const Page = ({ image, nextPage, previousPage, currentPage, lastPage }) => {
  const [styleImage, setStyleImage] = useState();

  useEffect(() => {
    // window.addEventListener("resize", this.updateDimensions.bind(this));
    console.log(window);

    const widthGreater = {
      height: '100vh',
      backgroundColor: 'black'
    };

    const heightGreater = {
      width: '100%',
      backgroundColor: 'red'
    }

    if (window.innerWidth > window.innerHeight) {
      setStyleImage(widthGreater);
      console.log('Comprimento é maior');
    } else {
      setStyleImage(heightGreater);
      console.log('Altura é maior');
    }


  }, []);

  console.log('Windows Width', window.innerWidth);
  console.log('Windows Height', window.innerHeight);

  return (
    <div className='Page'>

      {currentPage !== 1
        ?
        < div className='Arrow-Left-Container' onClick={previousPage}>

          <FontAwesomeIcon className='ArrowLeft' icon={faAngleLeft} onClick={previousPage} size="2x" color='#BD3D21' />
        </div>
        : null
      }
      <div className='Image-Container'>
        <img style={styleImage} src={image} alt='' />
      </div>
      {currentPage < lastPage
        ?
        <div className='Arrow-Right-Container' onClick={nextPage}>

          <FontAwesomeIcon className='ArrowRight' icon={faAngleRight} onClick={nextPage} size="2x" color='#BD3D21' />
        </div>
        : null
      }
    </div>
  );
};

export default Page;