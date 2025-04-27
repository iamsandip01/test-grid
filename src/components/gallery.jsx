import React, { useState } from 'react';
import './gallery.css'; // Add your CSS for styling.
// Pagination Component
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePageClick = (evt, pageIndex) => {
    evt.preventDefault();
    onPageChange(pageIndex);
  };

  const handleNavigation = (evt, direction) => {
    evt.preventDefault();
    if (direction === 'previous' && currentPage > 0) {
      onPageChange(currentPage - 1);
    } else if (direction === 'next' && currentPage < totalPages - 1) {
      onPageChange(currentPage + 1);
    }
  };

  const pageNumbers = Array.from({ length: totalPages }, (_v, i) => i);
  return (
    <nav className="pagination">
      <ul className="pages">
        <li>
          <a
            href="#previous"
            className="previous"
            onClick={(evt) => handleNavigation(evt, 'previous')}
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className={`page ${currentPage === number ? 'current' : ''}`}>
            <a
              href={`#page-${number + 1}`}
              onClick={(evt) => handlePageClick(evt, number)}
              aria-current={currentPage === number ? 'page' : undefined}
            >
              {number + 1}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#next"
            className="next"
            onClick={(evt) => handleNavigation(evt, 'next')}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

// GalleryWithPagination Component
const Gallery = () => {
  const imagesPerPage = 9;
  const [currentPage, setCurrentPage] = useState(0);
  const startIndex = currentPage * imagesPerPage;

  return (
    <>
  <article className="collapsible-gallery">
    <figure className="collapsible-gallery__header">
      <figcaption className="collapsible-gallery__caption">
        <h1 className="collapsible-gallery__title">Collapsible Gallery</h1>
        <p className="collapsible-gallery__description">
          Welcome to 9GRID DESIGN! Dive into a world of creativity and
          innovation where every piece tells a story. Our gallery is a vibrant
          showcase of our finest work—crafted with passion and precision to
          inspire and captivate.
          <br /> Use the button <span>to the right</span> <span>below</span>
        </p>
      </figcaption>
      <button className="collapsible-gallery__button">
        <label htmlFor="init">
          <span>Expand</span>
          <span>Collapse</span>
        </label>
        <input type="checkbox" name="init" id="init" />
      </button>
    </figure>
    <section className="collapsible-gallery__grid">
      <div className="collapsible-gallery__item" />
      <div className="collapsible-gallery__item" />
      <div className="collapsible-gallery__item" />
      <div className="collapsible-gallery__item" />
      <div className="collapsible-gallery__item" />
      <div className="collapsible-gallery__item" />
      <div className="collapsible-gallery__item" />
      <div className="collapsible-gallery__item" />
      <div className="collapsible-gallery__item" />
      <div className="collapsible-gallery__item" />
      {/* <div class="collapsible-gallery__item"></div> */}
    </section>
  </article>
  {/* partial */}
  <div className="gallery">
  <div className="image-container">
    <img src="https://iamsandip01.github.io/test-grid/assets/sh_gly_1.jpg" />
  </div>
  <div className="image-container">
    <img src="https://iamsandip01.github.io/test-grid/assets/sh_gly_2.jpg" />
  </div>
  <div className="image-container tall">
    <img src="https://iamsandip01.github.io/test-grid/assets/sh_gly_3.jpg" />
  </div>
  <div className="image-container">
    <img src="https://iamsandip01.github.io/test-grid/assets/sh_gly_4.jpg" />
  </div>
  <div className="image-container">
    <img src="https://iamsandip01.github.io/test-grid/assets/sh_gly_5.jpg" />
  </div>
  <div className="image-container tall">
    <img src="https://iamsandip01.github.io/test-grid/assets/sh_gly_6.jpg" />
  </div>
  <div className="image-container">
    <img src="https://iamsandip01.github.io/test-grid/assets/sh_gly_7.jpg" />
  </div>
  <div className="image-container">
    <img src="https://iamsandip01.github.io/test-grid/assets/sh_gly_8.jpg" />
  </div>
  <div className="image-container">
    <img src="https://iamsandip01.github.io/test-grid/assets/sh_gly_9.jpg" />
  </div>
  <div className="image-container">
    <img src="https://iamsandip01.github.io/test-grid/assets/sh_gly_10.jpg" />
  </div>
  <div className="image-container tall">
    <img src="https://iamsandip01.github.io/test-grid/assets/sh_gly_11.jpg" />
  </div>
  <div className="image-container tall">
    <img src="https://iamsandip01.github.io/test-grid/assets/sh_gly_12.jpg" />
  </div>
  <div className="image-container">
    <img src="https://iamsandip01.github.io/test-grid/assets/sh_gly_13.jpg" />
  </div>
  <div className="image-container">
    <img src="https://iamsandip01.github.io/test-grid/assets/sh_gly_14.jpg" />
  </div>
  <div className="image-container tall">
    <img src="https://iamsandip01.github.io/test-grid/assets/sh_gly_15.jpg" />
  </div>
  <div className="image-container tall">
    <img src="https://iamsandip01.github.io/test-grid/assets/sh_gly_16.jpg" />
  </div>
  <div className="grid-item">
    <img src="https://iamsandip01.github.io/test-grid/assets/sh_gly_17.jpg" />
  </div>
  <div className="image-container tall">
    <img src="https://iamsandip01.github.io/test-grid/assets/sh_gly_18.jpg" />
  </div>
  <div className="image-container tall">
    <img src="https://iamsandip01.github.io/test-grid/assets/sh_gly_19.jpg" />
  </div>
  <div className="image-container tall">
    <img src="https://iamsandip01.github.io/test-grid/assets/sh_gly_20.jpg" />
  </div>
  <div className="image-container">
    <img src="https://iamsandip01.github.io/test-grid/assets/sh_gly_21.jpg" />
  </div>
  <div className="image-container tall">
    <img src="https://iamsandip01.github.io/test-grid/assets/sh_gly_22.jpg" />
  </div>
  <div className="image-container">
    <img src="https://iamsandip01.github.io/test-grid/assets/sh_gly_23.jpg" />
  </div>
  <div className="image-container">
    <img src="https://iamsandip01.github.io/test-grid/assets/sh_gly_24.jpg" />
  </div>
  <div className="image-container">
    <img src="https://iamsandip01.github.io/test-grid/assets/sh_gly_25.jpg" />
  </div>
</div>

  {/* GALLERY PAGINATION BUTTON */}
  <main>
    <nav className="pagination">
      <a href="#" className="previous">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z"
            clipRule="evenodd"
          />
        </svg>{" "}
        Previous
      </a>
      <ul className="pages">
        <li className="page">
          <a href="#" className="current" aria-current="page">
            1
          </a>
        </li>
        <li className="page">
          <a href="#">2</a>
        </li>
        <li className="page">
          <a href="#">3</a>
        </li>
        <li className="dots">…</li>
        <li className="page">
          <a href="#">8</a>
        </li>
        <li className="page">
          <a href="#">9</a>
        </li>
        <li className="page">
          <a href="#">10</a>
        </li>
      </ul>
      <a href="#" className="next">
        Next{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </nav>
  </main>
</>
  );
};

export default Gallery;
