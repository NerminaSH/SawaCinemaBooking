// login

let search = document.getElementById("search");
let search_icon = document.getElementById("search_icon");

search_icon.addEventListener("click", () => {
  search.classList.toggle("search_input");
});

// year and a-z box start
let year = document.getElementById("year");
let a_z = document.getElementById("a_z");

year.addEventListener("click", () => {
  year.classList.toggle("show_year1");
});
a_z.addEventListener("click", () => {
  a_z.classList.toggle("show_year1");
});

// header slider start

let header_dur = document.getElementById("header_dur");
let header_gen = document.getElementById("header_gen");
let header_title = document.getElementById("header_title");
let header_pra = document.getElementById("header_pra");
let header = document.getElementsByTagName("header")[0];
let slider_btn = document.getElementsByClassName("slider");

const slider_load = () => {
  setTimeout(() => {
    header.style.background =
      "url('./image/barbie.jpg') no-repeat center center/cover";
    header_dur.innerText = "1h 47min";
    header_gen.innerHTML = `<i class="fas fa-star"></i>6.5
        <span>Action / Adventure / Sci-Fi</span>`;
    header_title.innerText = "Barbie";
    header_pra.innerText =
      "From Wikipedia, the free encyclopedia Rampage is a series of video games released by Midway (1986–2009) and Warner Bros. Interactive Entertainment (2009–present) for the arcade and various consoles. The basic premise of the games is that, due to experiment-related accidents, the player controls a human transformed into a giant monster.";
    slider_btn[0].style.background = "#fff";
    slider_btn[1].style.background = "rgb(184, 184, 184, .1)";
    slider_btn[2].style.background = "rgb(184, 184, 184, .1)";
    slider_btn[3].style.background = "rgb(184, 184, 184, .1)";
    slider_btn[4].style.background = "rgb(184, 184, 184, .1)";
  }, 0000);
  setTimeout(() => {
    header.style.background =
      "url('./image/cobweb.jpg') no-repeat center center/cover";
    header_dur.innerText = "1h 57min";
    header_gen.innerHTML = `<i class="fas fa-star"></i>8.5
        <span>Comady / Action / Sci-Fi</span>`;
    header_title.innerText = "Cobweb";
    header_pra.innerText =
      "Ant-Man is a 2015 American superhero film based on the Marvel Comics characters of the same name: Scott Lang and Hank Pym. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 12th film in the Marvel Cinematic Universe (MCU). The film was directed by Peyton Reed from a screenplay by the writing teams of Edgar Wright and Joe Cornish, and Adam McKay";
    slider_btn[0].style.background = "rgb(184, 184, 184, .1)";
    slider_btn[1].style.background = "#fff";
    slider_btn[2].style.background = "rgb(184, 184, 184, .1)";
    slider_btn[3].style.background = "rgb(184, 184, 184, .1)";
    slider_btn[4].style.background = "rgb(184, 184, 184, .1)";
  }, 5000);
  setTimeout(() => {
    header.style.background =
      "url('./image/elemental.jpg') no-repeat center center/cover";
    header_dur.innerText = "2h 10min";
    header_gen.innerHTML = `<i class="fas fa-star"></i>9.2
        <span>Comady / Action / Drama</span>`;
    header_title.innerText = "Elemental";
    header_pra.innerText =
      "Pirates of the Caribbean is a series of fantasy swashbuckler films produced by Jerry Bruckheimer and based on Walt Disney's theme park attraction of the same name. The film series serves as a major component of the eponymous media franchise.";
    slider_btn[0].style.background = "rgb(184, 184, 184, .1)";
    slider_btn[1].style.background = "rgb(184, 184, 184, .1)";
    slider_btn[2].style.background = "#fff";
    slider_btn[3].style.background = "rgb(184, 184, 184, .1)";
    slider_btn[4].style.background = "rgb(184, 184, 184, .1)";
  }, 10000);
  setTimeout(() => {
    header.style.background =
      "url('./image/البعبع.jpg') no-repeat center center/cover";
    header_dur.innerText = "2h 10min";
    header_gen.innerHTML = `<i class="fas fa-star"></i>9.2
        <span>Comady / Action / Drama</span>`;
    header_title.innerText = "البعبع";
    header_pra.innerText =
      "Pirates of the Caribbean is a series of fantasy swashbuckler films produced by Jerry Bruckheimer and based on Walt Disney's theme park attraction of the same name. The film series serves as a major component of the eponymous media franchise.";
    slider_btn[0].style.background = "rgb(184, 184, 184, .1)";
    slider_btn[1].style.background = "rgb(184, 184, 184, .1)";
    slider_btn[2].style.background = "rgb(184, 184, 184, .1)";
    slider_btn[3].style.background = "#fff";
    slider_btn[4].style.background = "rgb(184, 184, 184, .1)";
  }, 15000);
  setTimeout(() => {
    header.style.background =
      "url('./image/بيت الروبي.jpg') no-repeat center center/cover";
    header_dur.innerText = "2h 10min";
    header_gen.innerHTML = `<i class="fas fa-star"></i>9.2
        <span>Comady / Action / Drama</span>`;
    header_title.innerText = "بيت الروبي";
    header_pra.innerText =
      "Pirates of the Caribbean is a series of fantasy swashbuckler films produced by Jerry Bruckheimer and based on Walt Disney's theme park attraction of the same name. The film series serves as a major component of the eponymous media franchise.";
    slider_btn[0].style.background = "rgb(184, 184, 184, .1)";
    slider_btn[1].style.background = "rgb(184, 184, 184, .1)";
    slider_btn[2].style.background = "rgb(184, 184, 184, .1)";
    slider_btn[3].style.background = "rgb(184, 184, 184, .1)";
    slider_btn[4].style.background = "#fff";
  }, 20000);
};

setInterval(slider_load, 25000);
slider_load();

// video controal start

let plays = document.getElementById("play");
let videos = document.getElementById("video");
let play_btn = document.getElementById("play_btn");

play_btn.addEventListener("click", () => {
  videos.play();
  plays.classList.add("bi-pause-fill");
  plays.classList.remove("bi-play-fill");
});

plays.addEventListener("click", () => {
  if (videos.paused || videos.currentTime <= 0) {
    plays.classList.add("bi-pause-fill");
    plays.classList.remove("bi-play-fill");
    videos.play();
  } else {
    plays.classList.remove("bi-pause-fill");
    plays.classList.add("bi-play-fill");
    videos.pause();
  }
});

// video time update

videos.addEventListener("timeupdate", () => {
  let start_time = document.getElementById("start_time");
  let end_time = document.getElementById("end_time");
  let video_duration = videos.duration;
  let min = Math.floor(video_duration / 60);
  let hour = Math.floor(min / 60);
  let sec = Math.floor(video_duration % 60);
  let video_current_time = videos.currentTime;

  let start_min = Math.floor(video_current_time / 60);
  let start_sec = Math.floor(video_current_time % 60);
  let start_hour = Math.floor(start_min / 60);

  if (start_min < 10) {
    start_min = "0" + start_min;
  }
  if (start_sec < 10) {
    start_sec = "0" + start_sec;
  }
  start_time.innerText = start_min + ":" + start_sec;

  if (start_hour < 10) {
    start_hour = "0" + start_hour;
  }

  if (start_min == 60 || start_min > 60) {
    start_time.innerText = start_hour + ":" + start_min + ":" + start_sec;
  }

  // end
  let end_min = min - start_min;
  let end_sec = video_duration - start_sec;
  let end_hour = hour - start_hour;

  let end_mins = Math.floor(end_min % 60);
  if (end_mins < 10) {
    end_mins = "0" + end_mins;
  }
  let end_secs = Math.floor(end_sec % 60);
  if (end_secs < 10) {
    end_secs = "0" + end_secs;
  }
  let end_hours = Math.floor(end_min / 60);
  if (end_hours < 10) {
    end_hours = "0" + end_hours;
  }

  end_time.innerText = "-" + end_mins + ":" + end_secs;

  if (end_min == 60 || end_min > 60) {
    end_time.innerText = "-" + end_hours + ":" + end_mins + ":" + end_secs;
  }

  // seek bar start

  let seek = document.getElementById("seek");
  let seek_2 = document.getElementById("seek_2");
  let seek_dot = document.getElementById("seek_dot");

  let progressbar = parseInt((videos.currentTime / videos.duration) * 100);

  seek.value = progressbar;
  let seekbar = seek.value;
  seek_2.style.width = `${seekbar}%`;
  seek_dot.style.left = `${seekbar}%`;

  // seekbar value change
  let sec_30 = document.getElementById("sec_30");
  seek.addEventListener("change", () => {
    videos.currentTime = (seek.value * videos.duration) / 100;
    sec_30.addEventListener("click", () => {
      videos.currentTime = seek.value * ((videos.duration - 30) / 100);
    });
  });
  // video end event
  videos.addEventListener("ended", () => {
    plays.classList.remove("bi-pause-fill");
    plays.classList.add("bi-play-fill");
  });
});

// volume change

let start_seekbar_end = document.querySelector(".start_seekbar_end");
let cc_vol_screen = document.querySelector(".cc_vol_screen");
let vol = document.getElementById("vol");
let vol_icon = document.getElementById("vol_icon");

vol_icon.addEventListener("click", () => {
  cc_vol_screen.classList.toggle("cc_vol");
  start_seekbar_end.classList.toggle("start_seekbar");
  vol.classList.toggle("input_vol");
});

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-off-fill");
  }
  if (vol.value > 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }
  if (vol.value > 50) {
    vol_icon.classList.add("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }

  let vol_a = vol.value;
  videos.volume = vol_a / 100;
});

// VEDIO TRIAL start
let full_screen = document.getElementById("full_screen");
full_screen.addEventListener("click", () => {
  videos.requestFullscreen();
});

// video box start
let title_video = document.getElementsByClassName("title_video");
let video_1 = document.getElementsByClassName("video_1");
video_1[0].addEventListener("click", () => {
  videos.src = "./video/Beit El Ruby Trailer - 2023 بيت الروبي.mp4";
  videos.play();
  title_video[0].innerText = "بيت الروبي (2023)";
  plays.classList.add("bi-pause-fill");
  plays.classList.remove("bi-play-fill");
});
video_1[1].addEventListener("click", () => {
  videos.src = "./video/Barbie _ Main Trailer.mp4";
  videos.play();
  title_video[0].innerText = "Barbie (2023)";
  plays.classList.add("bi-pause-fill");
  plays.classList.remove("bi-play-fill");
});
video_1[2].addEventListener("click", () => {
  videos.src = "./video/Elemental _ Official Trailer.mp4";
  videos.play();
  title_video[0].innerText = "Elemental (2023)";
  plays.classList.add("bi-pause-fill");
  plays.classList.remove("bi-play-fill");
});
video_1[3].addEventListener("click", () => {
  videos.src = "./video/Elbo3bo3.mp4";
  videos.play();
  title_video[0].innerText = "البعبع (2023)";
  plays.classList.add("bi-pause-fill");
  plays.classList.remove("bi-play-fill");
});

// END VEDIO TRIAL
// mode dark
const darkModeButton = document.getElementById("dark-mode-button");
const body = document.body;

darkModeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
// end

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

const infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
};

const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
};
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

// login
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
