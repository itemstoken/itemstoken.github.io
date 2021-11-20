var seconds = 5;
var madlibs = {
  'a': [ 'CS:GO', 'Dota 2', 'LoL', 'WoT','AnyWay','Don`t Starve','PayDay 2','PUBG','Rust','TF2','WoW'],

};
var madlibA = document.getElementById('a');
var madlibB = document.getElementById('b');

function rand(x) {
  return Math.floor(Math.random() * x);
}

function change() {
  var txtA = madlibs['a'][rand(madlibs['a'].length)];

  madlibA.innerHTML = txtA;

  madlibA.classList.remove('flip');

}

function reveal() {
  madlibA.classList.add('flip');

  setTimeout(change, 800); // half-second like in CSS
}
setInterval(reveal, seconds * 500);