function checkImageColor(imageSrc) {
    var img = new Image();
    img.onload = function() {
      var canvas = document.createElement('canvas');
      canvas.width = img.width *4;
      canvas.height = img.height;
  
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
  
      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imageData.data;
  
      var numReddishPixels = 0;
      var numGreenishPixels = 0;
      var numBlueishPixels = 0;
  
      for(var i = 0; i < data.length; i += 4) {
        var r = data[i];
        var g = data[i + 1];
        var b = data[i + 2];
  
        if(r > g + b) {
          numReddishPixels++;
        }
        else if(g > r + b) {
          numGreenishPixels++;
        }
        else if(b > r + g) {
          numBlueishPixels++;
        }
      }
  
      var numPixels = canvas.width * canvas.height;
  
      if(numReddishPixels / numPixels > 0.5) {
        alert('Image is reddish');
      }
      else if(numGreenishPixels / numPixels > 0.5) {
        alert('Image is greenish');
      }
      else if(numBlueishPixels / numPixels > 0.5) {
        alert('Image is blueish');
      }
      else if(numReddishPixels>(numBlueishPixels+numGreenishPixels)){
        alert('Image is reddish');
      }
      else if(numBlueishPixels>(numReddishPixels+numGreenishPixels)){
        alert('Image is Blueish');
      }
      else if(numGreenishPixels>(numReddishPixels+numBlueishPixels)){
        alert('Image is Greenish');
      }
      else{
        alert('Image doesnot belong to reddish/blueish/greenish');
      }
      
    };
  
    img.src = imageSrc;
  }
  