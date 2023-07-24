
// <!-- CATEGORIES DISPALY 1 -->
var categoryBag = [
    {image_url :'https://images-static.nykaa.com/uploads/5deb3803-c6a1-4602-bf6c-c2b167b2b6c4.jpg?tr=w-400,cm-pad_resize'},
    {image_url :'https://images-static.nykaa.com/uploads/e24b1e0a-939c-4095-9334-df475e422650.jpg?tr=w-400,cm-pad_resize'},
    {image_url :'https://images-static.nykaa.com/uploads/d3a5ae5f-5e20-47d0-9032-92f9d261a796.jpg?tr=w-400,cm-pad_resize'},
    {image_url :'https://images-static.nykaa.com/uploads/3bb90102-d38e-4ef9-9187-b022d79f1348.jpg?tr=w-400,cm-pad_resize'},
    {image_url :'https://images-static.nykaa.com/uploads/ac05c581-1183-403f-831c-86accc009135.jpg?tr=w-400,cm-pad_resize'},
    {image_url :'https://images-static.nykaa.com/uploads/0b2c169b-a7e5-4827-98c1-211f4452df0e.jpg?tr=w-400,cm-pad_resize'},
  ]
  categoryBag.map(function(element){
    var box = document.createElement('div');
    var img =  document.createElement('img');
    img.setAttribute('src', element.image_url)
    box.append(img); 
    document.getElementById('categoryBag_women').append(box)
  })
  
  // <!-- BRAND DISPLAY 2 -->
  var brandsBag = [
    {image_url :'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2Fparent1stcard_1_7aa4b700-2b5f-4212-8b56-86889ab8a390.jpg%3Fv%3D1689262362&w=384&q=75'},
    {image_url :'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FBaseOfGloryPoreMinimizingPrimerPDPimages1copy.jpg%3Fv%3D1682956017&w=384&q=75'},
    {image_url :'https://bit.ly/3uGBVTh'},
    {image_url :'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F07_6fa35950-4830-4e97-80ea-d40f2fb42801.jpg%3Fv%3D1680622820&w=384&q=75'},
    {image_url :'https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_2d186f9b-9024-4e23-a0d2-a55b7671e89c.jpg%3Fv%3D1657123108&w=384&q=75'},
  ]
  brandsBag.map(function(element){
    var box = document.createElement('div');
    var img =  document.createElement('img');
    img.setAttribute('src', element.image_url)
    box.append(img); 
    document.getElementById('explore_more_women').append(box)
  })
  
  
  // <------- SLIDER IMAGES -------> //
  var slideImages = [
    //FOR TABLET & DEKSTOP VIEW
    [{img_url : "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F27d6a0fe-e220-4e5f-a3bb-801a1b0e61bc.gif&w=2048&q=75"},
    {img_url : "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F04b7183d-60b7-4e5a-9c21-0cbdd51093a7.jpg&w=2048&q=75"},
    {img_url : "https://images-static.nykaa.com/uploads/6ebd957e-ac28-45f7-aa27-245552501fc4.gif?tr=w-2400,cm-pad_resize"},
    {img_url : "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fa45021ac-2df4-4635-b464-58edf6530791.gif&w=2048&q=75"},
    ],
  
    //FOR MOBILE VIEW
    [{img_url : "https://bit.ly/36X3qjg"},
    {img_url: "https://bit.ly/3DnFd1L"},
    {img_url: "https://bit.ly/3tVztt3"},
    {img_url: "https://bit.ly/3iR1aN6"},
    ]
  ]
  
  var z = null; 
  
    //script for media queries
    var value = window.matchMedia("(max-width: 550px)") //FOR TABLET VIEW
      mFunction(value) 
      value.addListener(mFunction) 
      function mFunction(value) {
        if (value.matches) { 
          z = slideImages[1];
        } 
        else {
          z = slideImages[0]
        }
    }
  
  z.map(function(ele, index){
    var slideDiv = document.createElement('div');
    switch(index){
      case 0 :
        slideDiv.setAttribute('class', 'slide first');
        break;
      default :
      slideDiv.setAttribute('class', 'slide')
    }
   
    var images = document.createElement('img');
    images.src = ele.img_url;
    
    slideDiv.append(images); 
    document.getElementById('slides').append(slideDiv)
  })
  
  var images = document.querySelectorAll('img')
  for(let i=0; i<images.length; i++){
    images[i].addEventListener('click', function(){
      window.location.href = "../Homepages/beautyPage.html"
    })
  }
  // LANDING PAGE
  document.getElementById('landingPage').addEventListener('click', function(){
    window.location.href = "../Landingpage/index.html"
  })