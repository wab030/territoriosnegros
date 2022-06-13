import React, { useEffect, useState } from 'react';
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

//         , Page5, Page6,Page7, Page8, Page9,Page10, Page11, Page12,Page13, Page14, Page15,Page16]
// )

useEffect(() => {
  setPages(16);
})

const previousPage = () => {
    let newCurrentPage = currentPage - 1;
    setCurrentPage(newCurrentPage);
    setCurrentPageImage(pagesImages[newCurrentPage-1]);
};

const nextPage = () => {
    console.log(currentPage);
    let newCurrentPage = currentPage + 1;
    setCurrentPage(newCurrentPage);
    setCurrentPageImage(pagesImages[currentPage]);
}

return (
    <div className='Pages'>
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