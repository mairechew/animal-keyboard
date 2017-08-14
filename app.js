var colors = ['#FF0099','#F3F315','#83F52C','#FF6600','#6E0DD0','#7BFFFF','#0505FF'];



$(document).keydown(function (event){
  var random = colors[Math.floor(Math.random() * colors.length)];
  if(event.keyCode == 49){
    $('.one').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#one-audio')[0].play();
    console.log("1");
  } else if(event.keyCode == 50){
    $('.two').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#two-audio')[0].play();
    console.log("2");
  } else if(event.keyCode == 51){
    $('.three').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#three-audio')[0].play();
    console.log("3");
  }else if(event.keyCode == 52){
    $('.four').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#four-audio')[0].play();
    console.log("4");
  } else if(event.keyCode == 53){
    $('.five').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#five-audio')[0].play();
    console.log("5");
  } else if(event.keyCode == 54){
    $('.six').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#six-audio')[0].play();
    console.log("6");
  } else if(event.keyCode == 55){
    $('.seven').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#seven-audio')[0].play();
    console.log("7");
  } else if(event.keyCode == 56){
    $('.eight').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#eight-audio')[0].play();
    console.log("8");
  } else if(event.keyCode == 57){
    $('.nine').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#nine-audio')[0].play();
    console.log("9");
  } else if(event.keyCode == 48){
    $('.zero').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#zero-audio')[0].play();
    console.log("0");
  } else if(event.keyCode == 189){
    $('.dash').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#dash-audio')[0].play();
    console.log("-");
  } else if(event.keyCode == 187){
    $('.plus').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#plus-audio')[0].play();
    console.log("=");
  } else if(event.keyCode == 81){
    $('.q').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#q-audio')[0].play();
    console.log("q");
  } else if(event.keyCode == 87){
    $('.w').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#w-audio')[0].play();
    console.log("w");
  } else if(event.keyCode == 69){
    $('.e').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#e-audio')[0].play();
    console.log("e");
  } else if(event.keyCode == 82){
    $('.r').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#r-audio')[0].play();
    console.log("r");
  } else if(event.keyCode == 84){
    $('.t').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#t-audio')[0].play();
    console.log("t");
  } else if(event.keyCode == 89){
    $('.y').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#y-audio')[0].play();
    console.log("y");
  } else if(event.keyCode == 85){
    $('.u').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#u-audio')[0].play();
    console.log("u");
  } else if(event.keyCode == 73){
    $('.i').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#i-audio')[0].play();
    console.log("i");
  } else if(event.keyCode == 79){
    $('.o').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#o-audio')[0].play();
    console.log("o");
  } else if(event.keyCode == 80){
    $('.p').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#p-audio')[0].play();
    console.log("p");
  } else if(event.keyCode == 219){
    $('.left-curly').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#left-curly-audio')[0].play();
    console.log("[");
  } else if(event.keyCode == 65){
    $('.a').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#a-audio')[0].play();
    console.log("a");
  }else if (event.keyCode == 83){
    $('.s').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#s-audio')[0].play();
    console.log("s");
  }else if (event.keyCode == 68){
    $('.d').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#d-audio')[0].play();
    console.log("d");
  }else if (event.keyCode == 70){
    $('.f').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#f-audio')[0].play();
    console.log("f");
  }else if (event.keyCode == 71){
    $('.g').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#g-audio')[0].play();
    console.log("g");
  }else if (event.keyCode == 72){
    $('.h').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#h-audio')[0].play();
    console.log("h");
  }else if (event.keyCode == 74){
    $('.j').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#j-audio')[0].play();
    console.log("j");
  }else if (event.keyCode == 75){
    $('.k').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#k-audio')[0].play();
    console.log("k");
  }else if (event.keyCode == 76){
    $('.l').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#l-audio')[0].play();
    console.log("l");
  }else if (event.keyCode == 186){
    $('.semi').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#semi-audio')[0].play();
    console.log("semi");
  }else if(event.keyCode == 90){
    $('.z').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#z-audio')[0].play();
    console.log("z");
  } else if(event.keyCode == 88){
    $('.x').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#x-audio')[0].play();
    console.log("x");
  } else if(event.keyCode == 67){
    $('.c').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#c-audio')[0].play();
    console.log("c");
  } else if(event.keyCode == 86){
    $('.v').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#v-audio')[0].play();
    console.log("v");
  } else if(event.keyCode == 66){
    $('.b').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#b-audio')[0].play();
    console.log("b");
  } else if(event.keyCode == 78){
    $('.n').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#n-audio')[0].play();
    console.log("n");
  } else if(event.keyCode == 77){
    $('.m').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#m-audio')[0].play();
    console.log("m");
  } else if(event.keyCode == 188){
    $('.comma').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#comma-audio')[0].play();
    console.log(",");
  } else if(event.keyCode == 190){
    $('.period').animate({backgroundColor: random},500, function(){
      $(this).animate({backgroundColor: 'white'}, 500);
    });
    $('#period-audio')[0].play();
    console.log(".");
  }
});
