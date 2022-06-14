import React, { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import BeatLoader from "react-spinners/BeatLoader";
import Page from '../Page/Page';
import Page01 from '../../assets/images/page01.jpeg';
import Page02 from '../../assets/images/page02.jpeg';
import Page03 from '../../assets/images/page03.jpeg';
import Page04 from '../../assets/images/page04.jpeg';
import Page05 from '../../assets/images/page05.jpeg';
import Page06 from '../../assets/images/page06.jpeg';
import Page07 from '../../assets/images/page07.jpeg';
import Page08 from '../../assets/images/page08.jpeg';
import Page09 from '../../assets/images/page09.jpeg';
import Page10 from '../../assets/images/page10.jpeg';
import Page11 from '../../assets/images/page11.jpeg';
import Page12 from '../../assets/images/page12.jpeg';
import Page13 from '../../assets/images/page13.jpeg';
import Page14 from '../../assets/images/page14.jpeg';
import Page15 from '../../assets/images/page15.jpeg';
import Page16 from '../../assets/images/page16.jpeg';

const Pages = () => {

  const [pagesImages, setPagesImages] = useState(
    [Page01, Page02, Page03, Page04, Page05, Page06, Page07, Page08, Page09, Page10, Page11, Page12, Page13, Page14, Page15, Page16]
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState();
  const [currentPageImage, setCurrentPageImage] = useState(pagesImages[0]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPages(16);
  })

  const previousPage = () => {
    setLoading(true);
    let newCurrentPage = currentPage - 1;
    setCurrentPage(newCurrentPage);
    setCurrentPageImage(pagesImages[newCurrentPage - 1]);
    setLoading(false);
  };

  const nextPage = () => {
    setLoading(true);
    let newCurrentPage = currentPage + 1;
    setCurrentPage(newCurrentPage);
    setCurrentPageImage(pagesImages[currentPage]);
    setLoading(false);
  }

  console.log('Renderizei');

  return (
    <div className='Pages'>
      <ClipLoader loading={loading} size={150} />
      <Page
        image={currentPageImage}
        nextPage={nextPage}
        previousPage={previousPage}
        currentPage={currentPage}
        lastPage={pages}
      />
    </div>
  );
};

export default Pages;