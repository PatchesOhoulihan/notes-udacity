(() => {
  let canvas = document.querySelector('#canvas');
  let canvasContext = canvas.getContext('2d');

  let image = new Image();

  image.onload = function(){
    //Is executed when the Image is completely loaded. Image loading works asynchronesly;
    console.log('Loaded image');
    canvasContext.drawImage(image, 200, 200);
    var savedImage = canvas.toDataURL();
    window.open(savedImage);
  }

  image.src = "img/va2.jpg"

  canvasContext.fillRect(100,100,100,100);
  canvasContext.strokeRect(50,50,50,50);

  canvasContext.beginPath();
  canvasContext.moveTo(10,10);
  canvasContext.lineTo(50,50);
  canvasContext.lineTo(50,10);
  canvasContext.lineTo(10,10);

  canvasContext.fill();

  canvasContext.strokeRect(5,5,55,55);



})();
