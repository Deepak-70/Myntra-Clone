
// <!-- CATEGORIES DISPALY 1 -->
var categoryBag = [
    {image_url :'https://bit.ly/3wMvK2N'},
    {image_url :'https://bit.ly/3wY0TA6'},
    {image_url :'https://bit.ly/3IWRXxk'},
    {image_url :'https://bit.ly/36I2HCP'},
    {image_url :'https://bit.ly/3LtKeIK'},
    {image_url :'https://bit.ly/3uEEhC2'},
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
    {image_url :'https://bit.ly/3qOmNSH'},
    {image_url :'https://bit.ly/3Dx4Lth'},
    {image_url :'https://bit.ly/3uGBVTh'},
    {image_url :'https://bit.ly/3DxPVCY'},
    {image_url :'https://bit.ly/3iQbIfq'},
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
  [
    { img_url: "https://blog.myntra.com/wp-content/uploads/2021/02/M-studio.jpg" },
    { img_url: "https://assets.myntassets.com/assets/images/2023/7/6/6d1c6ddf-9f51-415a-879f-91415b4e73b71688666300851-Sign-up-card-720x240-----4.jpg" },
    { img_url: "https://assets.myntassets.com/assets/images/2023/5/9/d77fcb5b-d64a-4603-853e-1d1d03b3e91c1683656233236-Sign-up-card-720x240-----2.jpg" },
    { img_url: "https://assets.myntassets.com/assets/images/retaillabs/2022/11/23/937f7fc5-340a-45fd-a0b4-e5d09eb4148e1669221288268-sne-sharable-banner-adapt-640x335.jpg" },
    
  ],

  //FOR MOBILE VIEW
  [
    { img_url: "https://bit.ly/36X3qjg" },
    { img_url: "https://bit.ly/3DnFd1L" },
    { img_url: "https://bit.ly/3tVztt3" },
    { img_url: "https://bit.ly/3iR1aN6" },
  ],
];

// Rest of the code remains unchanged.

  
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
      window.location.href = "../Homepages/studioPage.html"
    })
  }
  // LANDING PAGE
  document.getElementById('landingPage').addEventListener('click', function(){
    window.location.href = "../Landingpage/index.html"
  })