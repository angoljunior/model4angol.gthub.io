
(function (window) {
  var speakWord = "Hello";
  var helloSpeaker = {};
  helloSpeaker.speak = function(name) {

    console.log(speakWord + " " + name);

  }
  window.helloSpeaker = helloSpeaker; //making hello speaker to be exposed to the glaobla context
})(window);

