$(".tv-hero__slick").slick({
  infinite: false,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});


// header starts
const header = document.querySelector(".tv-header-wrap");

if (header) {
  window.addEventListener('scroll', (e) => {
    if (window.scrollY > 20) {
      header.classList.add("tv-header--sticky");
    }
    else {
      header.classList.remove("tv-header--sticky");
    }
  })
}
// header starts