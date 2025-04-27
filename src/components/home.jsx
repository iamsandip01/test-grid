import React, { useEffect, useRef, useState } from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';


const slidesData = [
  {
    img: "https://iamsandip01.github.io/test-grid/assets/slider1.jpg",
    alt: "Slide 1",
    text: "WE CREATE SPACE FOR MANUFACTURING",
    projectNumber: "PROJECT 1",
    projectType: "Industrial",
    link: "project1.html"
  },
  {
    img: "https://iamsandip01.github.io/test-grid/assets/slider2.jpg",
    alt: "Slide 2",
    text: "INNOVATION MEETS DESIGN",
    projectNumber: "PROJECT 2",
    projectType: "Creative",
    link: "project2.html"
  },
  {
    img: "https://iamsandip01.github.io/test-grid/assets/slider3.jpg",
    alt: "Slide 3",
    text: "BUILDING THE FUTURE",
    projectNumber: "PROJECT 3",
    projectType: "Modern",
    link: "project3.html"
  },
  {
    img: "https://iamsandip01.github.io/test-grid/assets/slider4.jpg",
    alt: "Slide 4",
    text: "ARCHITECTURE REDEFINED",
    projectNumber: "PROJECT 4",
    projectType: "Sustainable",
    link: "project4.html"
  },
  {
    img: "https://iamsandip01.github.io/test-grid/assets/slider5.jpg",
    alt: "Slide 5",
    text: "EXPERIENCE EXCELLENCE",
    projectNumber: "PROJECT 5",
    projectType: "Luxury",
    link: "project5.html"
  },
  {
    img: "https://iamsandip01.github.io/test-grid/assets/slider2.jpg",
    alt: "Slide 6",
    text: "INNOVATION MEETS DESIGN",
    projectNumber: "PROJECT 6",
    projectType: "Creative",
    link: "project2.html"
  },
  {
    img: "https://iamsandip01.github.io/test-grid/assets/slider2.jpg",
    alt: "Slide 7",
    text: "INNOVATION MEETS DESIGN",
    projectNumber: "PROJECT 7",
    projectType: "Creative",
    link: "project2.html"
  },
  {
    img: "https://iamsandip01.github.io/test-grid/assets/slider2.jpg",
    alt: "Slide 8",
    text: "INNOVATION MEETS DESIGN",
    projectNumber: "PROJECT 8",
    projectType: "Creative",
    link: "project2.html"
  },
  {
    img: "https://iamsandip01.github.io/test-grid/assets/slider2.jpg",
    alt: "Slide 9",
    text: "INNOVATION MEETS DESIGN",
    projectNumber: "PROJECT 9",
    projectType: "Creative",
    link: "project2.html"
  },
  {
    img: "https://iamsandip01.github.io/test-grid/assets/slider2.jpg",
    alt: "Slide 10",
    text: "INNOVATION MEETS DESIGN",
    projectNumber: "PROJECT 10",
    projectType: "Creative",
    link: "project2.html"
  }
];

const Home = () => {
  // Refs for key DOM elements
  const sliderContainerRef = useRef(null);
  const sliderRef = useRef(null);
  // const indicatorsRef = useRef(null););
  const indicatorsContainerRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  // Setup slider animations and navigation logic inside useEffect
  useEffect(() => {
    gsap.registerPlugin(CustomEase);
    // Create custom ease (you can adjust this string if needed)
    CustomEase.create(
      "hop",
      "M0,0 C0.071,0.505 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1"
    );

    // Get all slide elements from the slider container
    const slides = sliderRef.current.querySelectorAll(".slide");
    const indicatorsContainer = indicatorsRef.current;
    const prevButton = prevButtonRef.current;
    const nextButton = nextButtonRef.current;
    let currentIndex = 0;
    const totalSlides = slides.length;
    let isAnimating = false;

    // Clear and create circular dot indicators
    indicatorsContainer.innerHTML = "";
    slides.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      indicatorsContainer.appendChild(dot);
    });
    const indicators = indicatorsContainer.querySelectorAll(".dot");

    // Helper to update which dot is active
    function updateIndicators(index) {
      indicators.forEach(dot => dot.classList.remove("active"));
      indicators[index].classList.add("active");
    }

    // Animate first slide texts into view
    const firstSlide = slides[0];
    const firstSlideText = firstSlide.querySelector(".slide-text");
    const firstProjectNumber = firstSlide.querySelector(".project-number");
    const firstProjectType = firstSlide.querySelector(".project-type");

    gsap.fromTo(
      firstSlideText,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
    );
    gsap.fromTo(
      firstProjectNumber,
      {
        x: 100,
        opacity: 0,
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
      },
      {
        x: 0,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power4.out"
      }
    );
    gsap.fromTo(
      firstProjectType,
      {
        x: 100,
        opacity: 0,
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
      },
      {
        x: 0,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power4.out"
      },
      "> -0.9"
    );

    // Function to animate to a new slide
    function goToSlide(index) {
      if (index === currentIndex) return;
      const currentSlideText = slides[currentIndex].querySelector(".slide-text");
      const nextSlideText = slides[index].querySelector(".slide-text");
      const currentProjectNumber = slides[currentIndex].querySelector(".project-number");
      const currentProjectType = slides[currentIndex].querySelector(".project-type");
      const nextProjectNumber = slides[index].querySelector(".project-number");
      const nextProjectType = slides[index].querySelector(".project-type");

      // Animate current slide texts out
      gsap.to(currentSlideText, { y: -50, opacity: 0, duration: 0.6, ease: "power4.inOut" });
      gsap.to([currentProjectNumber, currentProjectType], {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power4.inOut"
      });
      // Slide the container horizontally
      gsap.to(sliderRef.current, {
        x: `-${index * 100}vw`,
        duration: 1,
        ease: "power4.out",
        onComplete: () => {
          // Animate next slide texts into view
          gsap.fromTo(
            nextSlideText,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
          );
          gsap.fromTo(
            nextProjectNumber,
            {
              x: 100,
              opacity: 0,
              clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
            },
            {
              x: 0,
              opacity: 1,
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration: 1,
              ease: "power4.out"
            }
          );
          gsap.fromTo(
            nextProjectType,
            {
              x: 100,
              opacity: 0,
              clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
            },
            {
              x: 0,
              opacity: 1,
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration: 1,
              ease: "power4.out"
            },
            "> -0.9"
          );
          currentIndex = index;
          updateIndicators(index);
          isAnimating = false;
        }
      });
    }

    function nextSlide() {
      if (isAnimating) return;
      isAnimating = true;
      goToSlide((currentIndex + 1) % totalSlides);
    }

    function prevSlide() {
      if (isAnimating) return;
      isAnimating = true;
      goToSlide((currentIndex - 1 + totalSlides) % totalSlides);
    }

    // Attach event listeners to navigation buttons
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    // Auto-advance slides every 4000ms
    const autoSlider = setInterval(nextSlide, 4000);

    // Clean up event listeners and interval on unmount
    return () => {
      nextButton.removeEventListener("click", nextSlide);
      prevButton.removeEventListener("click", prevSlide);
      clearInterval(autoSlider);
    };
  }, []);

  // Parallax effect: update transform on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (sliderContainerRef.current) {
        let offset = window.pageYOffset;
        // Adjust speed as needed; here we use 0.3 as an example
        sliderContainerRef.current.style.transform = `translateY(${offset * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [activeCategory, setActiveCategory] = useState('all');
  const [projects] = useState([
    { name: 'Project 1', category: 'Architecture', image: 'recentproject1.jpg', link: '#' },
    { name: 'Project 2', category: 'Interior', image: 'recentproject2.jpg', link: '#' },
    { name: 'Project 3', category: 'Product', image: 'recentproject3.jpg', link: '#' },
    { name: 'Project 4', category: 'Urban-design', image: 'recentproject4.jpg', link: '#' },
    { name: 'Project 5', category: 'Exhibits', image: 'recentproject5.jpg', link: '#' },
    { name: 'Project 6', category: 'Architecture', image: 'recentproject6.jpg', link: '#' },
    { name: 'Project 7', category: 'Interior', image: 'recentproject7.jpg', link: '#' },
    { name: 'Project 8', category: 'Product', image: 'recentproject8.jpg', link: '#' },
    { name: 'Project 9', category: 'Urban-design', image: 'recentproject9.jpg', link: '#' },
    { name: 'Project 10', category: 'Exhibits', image: 'recentproject10.jpg', link: '#' },
    { name: 'Project 11', category: 'Architecture', image: 'recentproject11.jpg', link: '#' },
    { name: 'Project 12', category: 'Interior', image: 'recentproject12.jpg', link: '#' },
  ]);

  const projectsGridRef = useRef(null);
  const slidesRef = useRef([]);
  const indicatorsRef = useRef(null);
  const aboutTitleWrapperRef = useRef(null);
  const teamSectionRef = useRef(null);
  const teamTitleRef = useRef(null);
  const teamImageRef = useRef(null);
  const teamDescriptionRef = useRef(null);
  const teamBtnRef = useRef(null);
  const logoRef = useRef(null);
  const seeMoreBtnRef = useRef(null);
  
  useEffect(() => {
    const isIndexPage = window.location.pathname === '/';
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (isIndexPage) {
          window.scrollY > window.innerHeight
            ? navbar.classList.add('sticky')
            : navbar.classList.remove('sticky');
        } else {
          window.scrollY > window.innerHeight * 0.23
            ? navbar.classList.add('sticky')
            : navbar.classList.remove('sticky');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
//highlight-col h3 elements
  useEffect(() => {
    // Select all counter elements. These elements should exist in the DOM,
    // for example, inside a component that renders .highlight-col h3 elements.
    const counters = document.querySelectorAll('.highlight-col h3');

    // Function to animate a single counter element
    const animateCounter = (element, endValue) => {
      const duration = 2000; // Animation duration in milliseconds
      const startTime = performance.now();

      const updateCounter = (timestamp) => {
        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentValue = Math.floor(progress * endValue);

        element.textContent = currentValue;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
    };

    // Intersection Observer options: trigger when 40% of the element is visible
    const observerOptions = {
      threshold: 0.4
    };

    // Create an observer to trigger the animation when the element is visible
    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Get the target value from a data attribute (data-target)
          const targetValue = parseInt(entry.target.getAttribute('data-target'), 10);
          animateCounter(entry.target, targetValue);
          // Unobserve the element once the animation is triggered
          observerInstance.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe each counter element
    counters.forEach(counter => {
      observer.observe(counter);
    });

    // Cleanup: disconnect the observer when the component unmounts
    return () => observer.disconnect();

  }, []);
  useEffect(() => {
    const projectsGrid = projectsGridRef.current;
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';
    
    projects
      .filter(
        (proj) =>
          activeCategory === 'all' ||
          proj.category.toLowerCase() === activeCategory.toLowerCase()
      )
      .forEach((project, index) => {
        const projectElem = document.createElement('div');
        projectElem.classList.add('project-item');
        projectElem.innerHTML = `
          <img src="https://iamsandip01.github.io/test-grid/assets/${project.image}" alt="${project.name}">
          <a href="${project.link}" class="project-hover" title="${project.name} Details">
            <h3>${project.name}</h3>
            <p>${project.category}</p>
          </a>
        `;
        projectsGrid.appendChild(projectElem);
        setTimeout(() => projectElem.classList.add('show'), index * 100);
      });
  }, [activeCategory, projects]);

  // Scroll About Us Animation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, CustomEase);
    CustomEase.create("hop", "M0,0 C0.071,0.505 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1");

    const titleWrapper = aboutTitleWrapperRef.current;
    const teamSection = teamSectionRef.current;
    const teamTitle = teamTitleRef.current;
    const teamImage = teamImageRef.current;
    const teamDescription = teamDescriptionRef.current;
    const teamBtn = teamBtnRef.current;

    if (teamSection) gsap.set(teamSection, { opacity: 0, transform: "translateY(50px)" });
    if (teamTitle) gsap.set(teamTitle, { x: "-50px", opacity: 0 });
    if (teamDescription) gsap.set(teamDescription, { y: "50px", opacity: 0 });
    if (teamBtn) gsap.set(teamBtn, { x: "-50px", opacity: 0 });

    const animateTitle = () => {
      let timeline = gsap.timeline();
      let direction = "right";
      if (titleWrapper) {
        timeline
          .to(titleWrapper, { y: "-10%", duration: 1.2, ease: "hop" })
          .to(titleWrapper, { y: "100%", duration: 0.6, ease: "hop", delay: 0.5 })
          .set(teamSection, { opacity: 1, transform: "translateY(0px)" })
          .fromTo(
            teamImage,
            {
              clipPath: direction === "right"
                ? "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
                : "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
            },
            {
              duration: 1.5,
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              ease: "power4.out"
            }
          )
          .to(teamTitle, { x: 0, opacity: 1, duration: 1.2, ease: "power4.out" }, "-=0.8")
          .to(teamDescription, { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }, "-=0.6")
          .to(teamBtn, { x: 0, opacity: 1, duration: 1.2, ease: "power4.out" }, "-=0.5");
      }
    };

    const observerOptions = {
      threshold: 0.8
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateTitle();
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const aboutSection = document.querySelector(".about");
    if (aboutSection) {
      observer.observe(aboutSection);
    }
  }, []);

  // About Us and Recent Projects Button Functionality
  useEffect(() => {
    const logo = logoRef.current;
    const teamBtn = teamBtnRef.current;
    const seeMoreBtn = seeMoreBtnRef.current;
  
    // Define the click handler function for teamBtn
    const handleTeamClick = () => {
      const highlightCols = document.querySelectorAll('.highlight-col h3');
  
      const animateCounters = () => {
        highlightCols.forEach((col) => {
          const target = parseInt(col.getAttribute('data-target'));
          let count = 0;
          const duration = 2000; // Animation duration in milliseconds
          const increment = Math.ceil(target / (duration / 16)); // Increment per frame (approx.)
  
          const updateCounter = () => {
            if (count < target) {
              count += increment;
              col.textContent = count;
              requestAnimationFrame(updateCounter);
            } else {
              col.textContent = target;
            }
          };
          updateCounter();
        });
      };
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounters();
              // Stop observing once animated
              observer.unobserve(entry.target.parentNode);
            }
          });
        },
        { threshold: 0.5 } // Trigger when 50% of the element is visible
      );
  
      const highlightColsParent = document.querySelectorAll('.highlight-col');
      highlightColsParent.forEach((parent) => {
        observer.observe(parent);
      });
  
      // Optionally, if you plan to disconnect the observer later,
      // you can return a cleanup function here.
    };
  
    // Attach the event listener if teamBtn exists
    if (teamBtn) {
      teamBtn.addEventListener("click", handleTeamClick);
    }
    
    // Cleanup: remove the event listener when the component unmounts
    return () => {
      if (teamBtn) {
        teamBtn.removeEventListener("click", handleTeamClick);
      }
    };
  }, []); // Run once after mount
  
      return (
        <>
          <>
      {/* Image Slider */}
      <div id="parallax" className="slider-container" ref={sliderContainerRef}>
        <div className="slider" ref={sliderRef}>
          {slidesData.map((slide, index) => (
            <div className="slide" key={index}>
              <img className="slide-img" src={slide.img} alt={slide.alt} />
              <h1 className="slide-text">{slide.text}</h1>
              <div className="slide-info">
                <a href={slide.link}>
                  <p className="project-number">{slide.projectNumber}</p>
                  <p className="project-type">{slide.projectType}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Slide Navigation */}
      <div className="slider-nav">
        <button className="prev" ref={prevButtonRef}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="next" ref={nextButtonRef}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      {/* Slide Indicators */}
      <div className="indicators" ref={indicatorsRef}></div>
      {/* Slide Navigation */}
      <div className="slider-nav">
        <button className="prev"><FontAwesomeIcon icon={faChevronLeft} /></button>
        <button className="next"><FontAwesomeIcon icon={faChevronRight} /></button>
      </div>
      {/* Slide Indicators */}
      <div className="indicators" ref={indicatorsContainerRef}></div>
    
            {/* ABOUT US */}
            <div className="about">
              <div className="about-title">
                <div className="about-title-wrapper" ref={aboutTitleWrapperRef}>
                  <p>Innovating Spaces, Defining Skylines</p>
                </div>
              </div>
              {/* New Team Section */}
              <div className="team-section" ref={teamSectionRef}>
                <p className="team-title" ref={teamTitleRef}>
                  <span className="team-title-icon">●</span> ARCHITECT STUDIO
                </p>
                <div className="team-image-wrapper">
                  <img src="https://iamsandip01.github.io/test-grid/assets/team.jpg" alt="9Grid Team" className="team-image" ref={teamImageRef} />
                </div>
                <p className="team-description" ref={teamDescriptionRef}>
                  At 9Grid Design, we specialize in the design of institutional,
                  residential, recreational buildings, and health care facilities Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolor
                  neque.
                </p>
                <button className="team-btn" ref={teamBtnRef}>
                  <span>MORE ABOUT US</span>
                </button>
              </div>
            </div>
            <hr className="rule" />
            {/* OUR RECENT PROJECTS */}
            <section className="projects">
              <div className="projects-header">
                <p className="heading">Recent projects</p>
                <p>
                  We want to keep all doors open as it creates wonderful opportunities to
                  explore in the ever-changing world." 9Grid Design is a diverse group of
                  like-minded people focusing on constant development of design language.
                  Grounded in search for climate-responsive and contextually appropriate
                  solutions, we seek to identify uniqueness within each project.
                </p>
                <div className="project-categories">
                  <button data-filter="all" className={activeCategory === 'all' ? 'active' : ''} onClick={() => setActiveCategory('all')}>
                    ALL
                  </button>
                  <button data-filter="architecture" className={activeCategory === 'architecture' ? 'active' : ''} onClick={() => setActiveCategory('architecture')}>Architecture</button>
                  <button data-filter="interior" className={activeCategory === 'interior' ? 'active' : ''} onClick={() => setActiveCategory('interior')}>Interior</button>
                  <button data-filter="product" className={activeCategory === 'product' ? 'active' : ''} onClick={() => setActiveCategory('product')}>Product</button>
                  <button data-filter="urban-design" className={activeCategory === 'urban-design' ? 'active' : ''} onClick={() => setActiveCategory('urban-design')}>Urban Design</button>
                  <button data-filter="exhibits" className={activeCategory === 'exhibits' ? 'active' : ''} onClick={() => setActiveCategory('exhibits')}>Exhibits</button>
                </div>
              </div>
              <div className="projects-grid" ref={projectsGridRef}>
                {/* Project items dynamically populated */}
              </div>
              <div className="see-more-wrapper">
                <button className="see-more-btn" ref={seeMoreBtnRef}>
                  <span className="see-more-circle" aria-hidden="true">
                    <span className="see-more-icon see-more-arrow" />
                  </span>
                  <span className="see-more-text">See More</span>
                </button>
              </div>
            </section>
            {/* HIGHLIGHTS SECTION */}
            <section className="highlights">
              <h1>Our Key Highlights</h1>
              <p>Discover the achievements that set Design India apart.</p>
              <div className="row">
                <div className="highlight-col">
                  <h3 data-target={350}>0</h3>
                  <span>K+</span>
                  <p>Square feet of land surveyed</p>
                </div>
                <div className="highlight-col">
                  <h3 data-target={2800}>0</h3>
                  <span>+</span>
                  <p>Construction plans developed</p>
                </div>
                <div className="highlight-col">
                  <h3 data-target={25}>0</h3>
                  <span>+ Years</span>
                  <p>Years leading the industry</p>
                </div>
              </div>
            </section>
            {/* GALLERY SECTION */}
            <div className="insta-container">
              {/* Header */}
              <div className="insta-header">
                <a
                  href="https://www.instagram.com/9griddesign"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src="https://iamsandip01.github.io/test-grid/assets/instagram logo.png"
                    style={{ marginTop: 5 }}
                    alt="Icon"
                  />
                </a>
                <span>9Grid Design | by Alrize Nex Cell</span>
              </div>
              {/* First Grid */}
              <div className="insta-grid">
                <div className="large-image">
                  <img src="https://iamsandip01.github.io/test-grid/assets/img1.png" alt="Large Image" />
                </div>
                <div className="small-images">
                  <img src="https://iamsandip01.github.io/test-grid/assets/img2.png" alt="Small Image" />
                  <img src="https://iamsandip01.github.io/test-grid/assets/img3.png" alt="Small Image" />
                  <img src="https://iamsandip01.github.io/test-grid/assets/img4.png" alt="Small Image" />
                  <img src="https://iamsandip01.github.io/test-grid/assets/img5.png" alt="Small Image" />
                </div>
              </div>
              {/* Second Grid */}
              <div className="insta-grid">
                <div className="small-images">
                  <img src="https://iamsandip01.github.io/test-grid/assets/img6.png" alt="Small Image" />
                  <img src="https://iamsandip01.github.io/test-grid/assets/img7.png" alt="Small Image" />
                  <img src="https://iamsandip01.github.io/test-grid/assets/img8.png" alt="Small Image" />
                  <img src="https://iamsandip01.github.io/test-grid/assets/img9.png" alt="Small Image" />
                </div>
                <div className="large-image">
                  <img src="https://iamsandip01.github.io/test-grid/assets/img10.png" alt="Large Image" />
                </div>
              </div>
              {/* Third Grid (Middle Large Image) */}
              <div className="insta-grid third-layout">
                <div className="small-images vertical">
                  <img src="https://iamsandip01.github.io/test-grid/assets/img11.png" alt="Small Image" />
                  <img src="https://iamsandip01.github.io/test-grid/assets/img12.png" alt="Small Image" />
                </div>
                <div className="large-image">
                  <img src="https://iamsandip01.github.io/test-grid/assets/img1.png" alt="Large Image" />
                </div>
                <div className="small-images vertical">
                  <img src="https://iamsandip01.github.io/test-grid/assets/img2.png" alt="Small Image" />
                  <img src="https://iamsandip01.github.io/test-grid/assets/img3.png" alt="Small Image" />
                </div>
              </div>
              <button
                className="gallery-btn"
                onClick={() => window.location.href='gallery_1.html'}
              >
                See more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="15px"
                  width="15px"
                  className="gallery-icon"
                >
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeMiterlimit={10}
                    strokeWidth="1.5"
                    stroke="#292D32"
                    d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
                  />
                </svg>
              </button>
            </div>
          </>
        </>
      );
    };
    
    export default Home;