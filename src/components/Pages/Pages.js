import React, { useState } from 'react';
import Page from '../Page/Page';
import Page1 from '../../assets/images/page1.png';
import Page2 from '../../assets/images/page2.png';
import Page3 from '../../assets/images/page3.png';
import Page4 from '../../assets/images/page4.png';
// import Page5 from '../../assets/images/page5.png';
// import Page6 from '../../assets/images/page6.png';
// import Page7 from '../../assets/images/page7.png';
// import Page8 from '../../assets/images/page8.png';

const Pages = () => {

    const [pagesImages, setPagesImages] = useState(
        [Page1, Page2, Page3, Page4]
    );
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(4);
    const [pages, setPages] = useState(16);
    const [currentPageImage, setCurrentPageImage] = useState(pagesImages[0]);

//         , Page5, Page6,Page7, Page8, Page9,Page10, Page11, Page12,Page13, Page14, Page15,Page16]
// )

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
        />
    </div>
);
};

export default Pages;