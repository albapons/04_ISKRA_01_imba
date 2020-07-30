import React, { useEffect, useState } from "react";
import "./joinUsSlider.css";
import "../App.css";

export default function JoinUsSlider() {
  let slideIndex = 0;
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Alberto Barrios",
      profession: "Basketball Coach",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut sapien nec dui volutpat sagittis. Mauris facilisis consequat luctus. Duis hendrerit purus sed dolor elementum laoreet.",
      img:
        "https://www.jnjphotography.com.au/wp-content/uploads/2019/11/Passport-116.jpg",
    },
    {
      id: 2,
      author: "Berta Camps",
      profession: "Basketball Player",
      comment:
        "Nam eu arcu lacinia, dictum nunc in, molestie eros. Vivamus mauris ipsum, varius blandit lorem at, ultrices tincidunt ligula. Duis tincidunt finibus arcu sed vehicula. ",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRP7sInAFfJRbT-YhbSdP1rP22vCQ-tGS9Dww&usqp=CAU",
    },
    {
      id: 3,
      author: "Carles Bagaria",
      profession: "Professor",
      comment:
        "Mauris diam nulla, blandit nec ultrices ac, ultrices et sem. Cras non varius tellus. Integer a mi in elit ullamcorper molestie accumsan in nibh.",
      img:
        "https://images.ctfassets.net/1wryd5vd9xez/4DxzhQY7WFsbtTkoYntq23/a4a04701649e92a929010a6a860b66bf/https___cdn-images-1.medium.com_max_2000_1_Y6l_FDhxOI1AhjL56dHh8g.jpeg",
    },
    {
      id: 4,
      author: "Diana Rubí",
      profession: "Alumn",
      comment:
        "Nunc facilisis ultrices interdum. Suspendisse malesuada ante augue, vehicula semper est molestie ut.",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe9QnL8dzzq69sGwxwdfBCfnhanIFGfYumy0IqQq02_OlxgJ73&s",
    },
  ]);

  useEffect(() => {
    showSlides();
  }, []);

  // const showSlides = () => {
  //   // console.log("I'm here");
  //   var i;
  //   var slides = document.getElementsByClassName("mySlides");
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   slideIndex++;
  //   if (slideIndex > slides.length) {
  //     slideIndex = 1;
  //   }
  //   slides[slideIndex - 1].style.display = "flex";
  //   setTimeout(showSlides, 2000); // Change image every 2 seconds
  // };

  const showSlides = (e) => {
    // console.log("I'm here");
    // Save all the slides in an array
    var slides = document.getElementsByClassName("mySlides");
    // All the slides must have display = none
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    // Change the index to display the next slide
    slideIndex++;
    // SlideIndex cannot be more than the slides we have
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    // Display one slide:
    if (e) {
      // console.log(`The button ${e} was pressed`);
      // If we've selected one dot, we need to display this slide
      slideIndex = e;
      slides[slideIndex - 1].style.display = "flex";
    }
    // If not, we need to display the next slide
    slides[slideIndex - 1].style.display = "flex";
    // console.log(`The slide ${slideIndex} was displayed`);

    // Change image every 3 seconds:
    setTimeout(showSlides, 3000);
  };

  const selectComment = (e) => {
    showSlides(e);
  };

  return (
    <div className="joinUsSlider">
      {comments.length && (
        <div className="slideshow-container">
          {comments.map((comment) => (
            <div className="mySlides fade py-5" key={comment.id}>
              <i className="fas fa-quote-right fa-4x text-dark fa-rotate-180" />
              <div className="quotes">{comment.comment}</div>
              <div
                className="authorImg"
                style={{
                  backgroundImage: `url(${comment.img})`,
                }}
              />
              <div className="title3">{comment.author}</div>
              <div className="text text-dark">{comment.profession}</div>
            </div>
          ))}

          {/* <!-- The dots/circles --> */}
          <div className="text-center bg-orange pb-5">
            {comments.map((comment) => (
              <span
                className="dot"
                key={comment.id}
                onClick={(e) => selectComment(comment.id)}
              ></span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
