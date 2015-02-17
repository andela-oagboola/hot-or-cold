var hotOrCold = {

  prevGuess: 0,
  actual_number: 0,

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
    else{
      hotOrCold.compare(hotOrCold.actual_number);
    }
  },

  compare: function(number) {
    console.log(number);
    var input = $('#textbox').val();
    if(input === hotOrCold.prevGuess) {
      alert("move sluggard!");
    }

    else if(input != number) {
      if(input > hotOrCold.prevGuess) {
        if(hotOrCold.prevGuess < number) {
          console.log("getting hot");
          $('#progress_bar').html("getting hot")
        }
        else if(hotOrCold.prevGuess > number) {
          console.log("getting cold");
          $('#progress_bar').html("getting cold")
        }

      }

      else if(input < hotOrCold.prevGuess) {
        if(hotOrCold.prevGuess < number) {
          console.log("getting cold")
          $('#progress_bar').html("getting cold")
        }
        else if(hotOrCold.prevGuess > number) {
          console.log("getting hot")
          $('#progress_bar').html("getting hot")
        }
      }

      hotOrCold.prevGuess = input;
      $('#textbox').val("")
    }

    else {
      alert("yaay");
    }
  }
};
$(document).ready(hotOrCold.init);