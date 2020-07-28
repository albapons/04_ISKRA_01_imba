import React, { useEffect, useState } from "react";
import "./joinUsSlider.css";
import "../App.css";

export default function JoinUsSlider() {
  let slideIndex = 0;
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Jonhatan Barrios",
      profession: "Basketball Coach",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris portaac odio sed dapibus. Pellentesque vitae mauris leo. Donec tristiquefermentum erat in sodales. Vestibulum ut dictum eros, quis euismodest.",
      img:
        "https://www.jnjphotography.com.au/wp-content/uploads/2019/11/Passport-116.jpg",
    },
    {
      id: 2,
      author: "Maria Camps",
      profession: "Basketball Player",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris portaac odio sed dapibus. Pellentesque vitae mauris leo. Donec tristiquefermentum erat in sodales. Vestibulum ut dictum eros, quis euismodest.",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRP7sInAFfJRbT-YhbSdP1rP22vCQ-tGS9Dww&usqp=CAU",
    },
    {
      id: 3,
      author: "Jordi Bernadich",
      profession: "Professor",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris portaac odio sed dapibus. Pellentesque vitae mauris leo. Donec tristiquefermentum erat in sodales. Vestibulum ut dictum eros, quis euismodest.",
      img:
        "https://images.ctfassets.net/1wryd5vd9xez/4DxzhQY7WFsbtTkoYntq23/a4a04701649e92a929010a6a860b66bf/https___cdn-images-1.medium.com_max_2000_1_Y6l_FDhxOI1AhjL56dHh8g.jpeg",
    },
    {
      id: 4,
      author: "Marta Rubí",
      profession: "Alumn",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris portaac odio sed dapibus. Pellentesque vitae mauris leo. Donec tristiquefermentum erat in sodales. Vestibulum ut dictum eros, quis euismodest.",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe9QnL8dzzq69sGwxwdfBCfnhanIFGfYumy0IqQq02_OlxgJ73&s",
    },
  ]);

  useEffect(() => {
    showSlides();
  }, []);

  const showSlides = () => {
    console.log("I'm here");
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  };

  return (
    <div className="joinUsSlider">
      {comments.length && (
        <div className="slideshow-container">
          {comments.map((comment) => (
            <div className="mySlides fade">
              <i className="fas fa-quote-right fa-3x text-dark fa-rotate-180" />
              <div className="quotes">{comment.comment}</div>
              <div className="">
                <div
                  className="authorImg"
                  style={{
                    backgroundImage: `url(${comment.img})`,
                  }}
                ></div>
                <div className="title3 text-center">{comment.author}</div>
                <div className="text text-dark text-center">
                  {comment.profession}
                </div>
              </div>
            </div>
          ))}

          {/* <!-- The dots/circles --> */}
          <div className="text-center bg-orange">
            {comments.map((comment) => (
              <span className="dot" onClick="currentSlide(1)"></span>
            ))}
          </div>
        </div>
      )}
      {/* <!-- Slideshow container --> */}
    </div>
  );
}
