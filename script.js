//skor arttırma
function IncreaseScore(team) {
  const scoreId = `score${team}`;
  const scoreElement = document.getElementById(scoreId);
  let score = parseInt(scoreElement.textContent);
  scoreElement.textContent = ++score;
}

//skor azaltma
function decreaseScore(team) {
  const scoreElement = document.getElementById("score" + team);
  let currentScore = parseInt(scoreElement.innerText);
  if (currentScore > 0) {
    currentScore--;
    scoreElement.innerText = currentScore;
  } else {
    alert("Skor 0'dan küçük olamaz!");
  }
}

//resetleme
document.getElementById("resetButtonA").addEventListener("click", function () {
  document.getElementById("scoreA").innerText = "0";
});

document.getElementById("resetButtonB").addEventListener("click", function () {
  document.getElementById("scoreB").innerText = "0";
});

//istenilen skoru yazma (skor ayarlama)
function setScorePrompt(team) {
  const score = prompt("Yeni gol sayısı giriniz:");
  if (score !== null && !isNaN(score)) {
    const scoreNum = parseInt(score);
    document.getElementById(`score${team}`).textContent = scoreNum;
  } else {
    alert("Giriş iptal edildi veya geçersiz bir değer girildi.");
  }
}

function setNamePrompt(team) {
  const name = prompt("Takımın adını giriniz:");
  if (name !== null && name.trim() !== "") {
    document.querySelector(`#team${team} h2`).innerText = name;
  } else {
    alert("Giriş iptal edildi veya geçersiz bir değer girildi.");
  }
}
