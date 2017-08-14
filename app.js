// document.addEventListener('keydown', function(a) {
//   if(a.keyCode == 65){
//   document.getElementById('a-audio').play();
//   console.log("a")
//   }
// });
$(document).keydown(function (event){
  if(event.keyCode == 65){
    $('#a-audio')[0].play();
    console.log("a");
  }else if (event.keyCode == 83){
    $('#s-audio')[0].play();
    console.log("s");
  }else if (event.keyCode == 68){
    $('#d-audio')[0].play();
    console.log("d");
  }else if (event.keyCode == 70){
    $('#f-audio')[0].play();
    console.log("f");
  }else if (event.keyCode == 71){
    $('#g-audio')[0].play();
    console.log("g");
  }else if (event.keyCode == 72){
    $('#h-audio')[0].play();
    console.log("h");
  }else if (event.keyCode == 74){
    $('#j-audio')[0].play();
    console.log("j");
  }else if (event.keyCode == 75){
    $('#k-audio')[0].play();
    console.log("k");
  }else if (event.keyCode == 76){
    $('#l-audio')[0].play();
    console.log("l");
  }else if (event.keyCode == 186){
    $('#semi-audio')[0].play();
    console.log("semi");
  }
});
