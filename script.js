const volume = document.getElementById("volume");
const iconPage = document.querySelector(".change-volume");


function iconVolume(volume){
    const icons = {
        none: "volume_off",
        medium: "volume_down",
        max: "volume_up"
    }
    iconPage.innerHTML = icons[volume];
}


// use 'change' instead to see the difference in response
volume.addEventListener('input', function () {

  if(volume.value == 0){
      iconVolume('none');
  }

  else if(volume.value <= 5){
      iconVolume('medium');
  }

  else if(volume.value >= 6 || volume.value <= 10){
      iconVolume("max");
  }
});