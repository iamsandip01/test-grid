import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./projectDetails.css";

const folderMap = {
  hsb_mayapur: "1NiA9Tb6L7wPqT0Eq4F_203VsULuHeT1d",
  hsb_taki: "1fcxXS-l5FaTEuU-Ca8H7HNigknBCY_Ol",
  // Add more projects and their corresponding folder IDs as needed
};

function ProjectDetail() {
  const { projectName } = useParams();
  const [galleryImages, setGalleryImages] = useState([]);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  // const imagesPerPage = 9; // Adjust this value as needed

  useEffect(() => {
    const loadGalleryImages = async () => {
      const folderId = folderMap[projectName.toLowerCase()];
      if (!folderId) {
        setError("Invalid project folder.");
        return;
      }
      
      console.log("Folder ID:", folderId);
      const apiKey = "AIzaSyBpwub0vsI0dlqLf_Q0RHpuCfkvpe1Ta7s"; // Your Google API Key
      
      let allFiles = [];
      let nextPageToken = null;

      // Build your query with proper URL encoding:
      const query = encodeURIComponent(`'${folderId}' in parents`);
      console.log("Encoded query:", query);

      try {
        do {
          const pageTokenParam = nextPageToken ? `&pageToken=${nextPageToken}` : "";
          const url = `https://www.googleapis.com/drive/v3/files?q=${query}&key=${apiKey}&pageSize=1000${pageTokenParam}&fields=files(createdTime,id,name),nextPageToken&supportsAllDrives=true`;
          console.log("Fetching URL:", url);

          const response = await fetch(url);
          console.log("API Response Status:", response.status);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          console.log("Fetched Data:", data);

          if (data.files && data.files.length > 0) {
            allFiles = allFiles.concat(data.files);
            console.log(`Fetched ${data.files.length} files in this batch. Total so far: ${allFiles.length}`);
          } else {
            console.warn("No files found in this response.");
            break;
          }
          
          nextPageToken = data.nextPageToken;
          if (nextPageToken) {
            console.log("Next page token found:", nextPageToken);
          } else {
            console.log("No next page token. Finished fetching all pages.");
          }
        } while (nextPageToken);

        // Process images if any were returned
        if (allFiles.length > 0) {
          const images = allFiles.map((file) => ({
            src: `https://drive.google.com/thumbnail?id=${file.id}&sz=s800`,
            alt: file.name,
          }));
          console.log("Processed Images:", images);
          setGalleryImages(images);
          setCurrentPage(1); // Reset current page when loading new images
        } else {
          setError("No images found in the Google Drive folder.");
        }
      } catch (err) {
        console.error("Error loading images from Google Drive:", err);
        setError("Failed to load images from Google Drive. Please try again later.");
      }
    };

    loadGalleryImages();
  }, [projectName]);

  // Pagination calculations on the loaded images
  // const indexOfLastImage = currentPage * imagesPerPage;
  // const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = galleryImages;
  // .slice(indexOfFirstImage, indexOfLastImage);
  // const totalPages = Math.ceil(galleryImages.length / imagesPerPage);

  // const handlePreviousPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage((prevPage) => prevPage - 1);
  //   }
  // };

  // const handleNextPage = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage((prevPage) => prevPage + 1);
  //   }
  // };

  return (
    <div className="project-details">
      <div className="container">
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/huf0X5vD6k8?autoplay=1&mute=1&loop=1&playlist=huf0X5vD6k8`}
            title={`${projectName} Video`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="text-content">
          <h1>Welcome to {projectName}</h1>
          <h3>Discover the elegance of {projectName}</h3>
          <hr />
          <h5>A blend of innovation and design excellence.</h5>
          <hr />
          <b>
            <p>
              Explore the beauty and craftsmanship of {projectName}'s architecture.
              From conception to execution, every detail embodies creativity and functionality.
            </p>
          </b>
        </div>
      </div>

      <div className="gallery-container">
        {error && <p className="error">{error}</p>}
        {galleryImages.length > 0 ? (
          currentImages.map((image, index) => (
            <div className="gallery-item col-md-4" key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="gallery-img"
                onError={(e) => {
                  e.target.src = "https://www.udacity.com/blog/wp-content/uploads/2021/02/img8.png";
                  e.target.style.objectFit = "contain";
                }}
              />
            </div>
          ))
        ) : (
          !error && <p>Loading images...</p>
        )}
      </div>

      {/* Pagination controls */}
      {/* {galleryImages.length > imagesPerPage && (
        <div className="pagination-controls">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )} */}
    </div>
  );
}

export default ProjectDetail;
