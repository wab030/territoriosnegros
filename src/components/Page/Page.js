import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './Page.css';

const Page = ({ image, nextPage, previousPage, currentPage }) => {
    return (
        <div className='Page'>
            {currentPage != 1
                ? <FontAwesomeIcon className='ArrowLeft' icon={faAngleLeft} onClick={previousPage} />
                : null
            }
            <img src={image} />
            {currentPage <= 4
                ? <FontAwesomeIcon className='ArrowRight' icon={faAngleRight} onClick={nextPage} />
                : null
            }
        </div>
    );
};

export default Page;