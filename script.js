document.addEventListener("keydown", (event) => {
  playSond(event.code.toLocaleLowerCase());
});

document.querySelector(".composer button").addEventListener("click", () => {
  let song = document.querySelector("#input").value;

  if (song !== "") {
    let songArry = song.split("");

    playcomposion(songArry);
  }
});

function playSond(sound) {
  let adioEl = document.querySelector(`#s_${sound}`);
  let keyEl = document.querySelector(`div[data-key="${sound}"]`);

  if (adioEl) {
    adioEl.currentTime = 0;
    adioEl.play();
  }

  if (keyEl) {
    keyEl.classList.add("active");

    setTimeout(() => {
      keyEl.classList.remove("active");
    }, 300);
  }
}

function playcomposion(songArry) {
  let weit = 0;
  for (let i in songArry) {
    setTimeout(() => {
      playSond(`key${songArry[i]}`);
    }, weit);

    weit += 250;
  }
}
