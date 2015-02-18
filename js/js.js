var hotOrCold = {

  prevGuess: 0,
  actual_number: 0,
  userInput: $('#textbox'),
  max_width: 500,

  init: function() {
    hotOrCold.generateNumber();
  },

  generateNumber: function() {
    hotOrCold.actual_number = Math.floor(Math.random()*100);
    $('#submit').click(function() {      
      hotOrCold.validate();
    })
  },

  validate: function() {
    if($('#textbox').val() === "" || isNaN(Number($('#textbox').val()))) {
      alert("you have to put in a number");
    }
    else if($('#textbox').val() > 100) {
      alert("number is out of range");
    }
    else{
      hotOrCold.compare(hotOrCold.actual_number);
    }
  },

  compare: function(number) {
    console.log(number);
    var input = $('#textbox').val();
    var percent = hotOrCold.max_width - hotOrCold.actual_number;
    var progress = Math.floor(Math.abs(input - hotOrCold.prevGuess) / percent * 100);
    //var progress = Math.floor((Math.abs(input - hotOrCold.prevGuess) / hotOrCold.max_width) * 100);
    console.log(progress);
    if(input === hotOrCold.prevGuess) {
      alert("move sluggard!");
    }

    else if(input != number) {
      if(input > hotOrCold.prevGuess) {
        if(hotOrCold.prevGuess < number) {
          console.log("getting hot");
          $('#progress_bar').html("getting hot");
          $('#progress_bar').animate({ "width": "+=50px" }, "slow");
        }
        else if(hotOrCold.prevGuess > number) {
          console.log("getting cold");
          $('#progress_bar').html("getting cold");
          $('#progress_bar').animate({ "width": "-="+progress}, "slow");
        }

      }

      else if(input < hotOrCold.prevGuess) {
        if(hotOrCold.prevGuess < number) {
          console.log("getting cold");
          $('#progress_bar').html("getting cold");
          $('#progress_bar').animate({ "width": "-="+progress }, "slow");
        }
        else if(hotOrCold.prevGuess > number) {
          console.log("getting hot");
          $('#progress_bar').html("getting hot");
          $('#progress_bar').animate({ "width": "+="+progress }, "slow");
        }
      }

      hotOrCold.prevGuess = input;
      $('#textbox').val("");
    }

    else {
      $('#progress_bar').css("width","+="+progress).animate({ "width": "+="+progress }, "slow");
      alert("yaay");
    }
  }
};
$(document).ready(hotOrCold.init);