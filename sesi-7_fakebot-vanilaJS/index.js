let init = 0;
const answer = document.getElementById("answer");
const quiz = document.getElementById("quiz");

const botAnswer = (data) => {
  return [
    "halo,saya bot, siapa nama anda",
    `salam kenal ${data?.nama} ,berapa usia mu?`,
    `oh ${data?.umur} tahun, ohh ya sekarang kamu lagi kerja apa nganggur bro..`,
    `ohh di ${data?.kerja} moga cepat naik pangkat bro...
    btw, lagi hobi apa sekarang bro`,
    `oh lagi senang main ${data?.hobi} sama dong kita....`,
  ];
};

answer.innerHTML = botAnswer()[0];
let userData = [];
function botStart() {
  init++;
  if (init === 1) {
    botDelay({ nama: quiz.value });
  } else if (init === 2) {
    botDelay({ umur: quiz.value });
  } else if (init === 3) {
    botDelay({ kerja: quiz.value });
  } else if (init === 4) {
    botDelay({ hobi: quiz.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}
function botDelay(userAnswer) {
  setTimeout(() => {
    answer.innerHTML = botAnswer(userAnswer)[init];
  }, 1500);
  userData.push(quiz.value);
  quiz.value = "";
}

function finishing() {
  answer.innerHTML = `udah dulu broo ${userData[0]}.....
  moga - moga dapat pekerjaan yang lebih baik dari ${userData[2]} dan lain kali ayo kita ${userData[3]} sama sama ya....`;
  quiz.value = "";
}
function botEnd() {
  location.reload();
}
