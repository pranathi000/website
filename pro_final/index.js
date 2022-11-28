
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 40,
        autoplay:{
            delay: 2500,
            disableOnInteraction:false,

        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      }); 

// scroll to top button
// const heroSection = document.querySelector(".section-hero");
// const footerELement = document.querySelector(".section-footer");
// const scrollElement = document.createElement("div");
// scrollElement.classList.add("scrollTop-style");

// scrollElement.innerHTML = `<ion-icon name="arrow-up"></ion-icon>`;

// footerELement.after(scrollElement);


// const scrollTop = () => {
//   heroSection.scrollIntoView({behaviour: "smooth"});

// };
// scrollElement.addEventListener("click",scrollTop);




// animate number container
const counterNum = document.querySelectorAll(".counter-numbers");
const speed = 200;
counterNum.forEach((curElem) =>{
  const updateNumber = () =>{
    const targetNumber = parseInt(curElem.dataset.number);
    // console.log(targetNumber);
    const initialNum = parseInt(curElem.innerText);
    // console.log(initialNum);
    const incrementNumber = Math.trunc(targetNumber/ speed);
    // console.log(incrementNumber);
    if(initialNum<targetNumber){
      curElem.innerText =  `${initialNum + incrementNumber}+`;

      setTimeout(updateNumber, 10);
    }


  };
  updateNumber();

});

















































