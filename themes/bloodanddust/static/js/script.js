jQuery(function($) {
  $(document).ready(function() {

    // SLIDER

    $('.slider').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      centerMode: true,
      dots: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // audio player
    let audioPlayer = document.getElementById('audio-player');
    let playPause = document.getElementById('play-pause-button');
    let progressBar = document.getElementById('progress-bar');

    const togglePlayPause = () => {
      if(playPause.classList.contains("play")) {
        playPause.classList.toggle("play");
        playPause.innerHTML = "Pause"
        audioPlayer.play()
      } else {
        playPause.classList.toggle("play");
        audioPlayer.pause();
        playPause.innerHTML = "Play"
      }
    }

    const showProgress = () => {
      progressBar.style.width = parseFloat(((audioPlayer.currentTime / audioPlayer.duration) * 100)) + "%";
    }

    playPause.addEventListener("click", togglePlayPause)
    audioPlayer.addEventListener('timeupdate', showProgress);

  });
});
