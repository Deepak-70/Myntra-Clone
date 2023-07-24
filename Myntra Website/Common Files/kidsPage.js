
//<---------- HOME & LIVING SCRIPT CODES --------->//

var anchors_para = [
    [
        {h4 : 'Baby Boy'},
        {p : 'Rompers & Onesis' },
        {p : 'Clothing sets'},
        {p : 'Ethinic Collection'},
        {p : 'Coats & Cardings'},
        {p : 'Pants & Shorts'},
        {p : 'NEW'},
        {h4 : 'Baby Girl'},
        {p : 'Dresses & Frocks'},
        {p : 'Hair acccesories'},
        {p : 'Skirts & Shorts'},
        {p : 'Tees,Tops & Shirts'},
        {p : 'Clothing Sets'},
        {h4 : 'Baby Essentials'},
        {p : 'Caps, Gloves, Mittens'},
        {p : 'Baby Bedding'},
        {p : 'Baby Diapering'},
    ],
    [
        {h4 : 'Girls'},
        {p : 'Dresses & Frocks'},
        {p : 'Skirts & Shorts'},
        {p : 'Pants & Leggings'},
        {p : 'Tops & Tees'},
        {p : 'Jumpsuit'},
        {p : 'Unicorn Dresses'},
        {p : 'Unicorn Dresses'},
        {p : 'Coats &Cardings'},
    ],
    [
        {h4 : 'BOYS'},
        {p : 'Clothing & Sets'},
        {p : 'Tees'},
        {p : 'Shorts & Jeans'},
        {p : 'SwimWear'},
        {p : 'Party Waer'},
        {p : 'Summer Spring'},
    ],
    [
        {h4 : 'PREMIUM BOUTIQUE'},
        {p : 'Aakriti Creations'},
        {p : 'Aww Hunnie'},
        {p : 'Pink cow'},
        {p : 'Swanky me'},
        {p : 'Little pixie'},
        {p : 'Rose Couture'},
    ],
    [
        {h4 : 'ACCESORIES'},
        {p : 'Kids Furnishing'},
        {p : 'Leggings'},
        {p : 'Photo Props'},
        {p : 'Socks & Tights'},
        {p : 'Party supplies'},
        {p : 'School Supplies'}
    ],
    
    [
        {h4 : 'Storage & Organisers'},
        {p : 'Organisers'},
        {p : 'Hooks & Holders'},
    ],
  
    ]
    var n = null; 
  
    //script for media queries
    var value = window.matchMedia("(max-width: 850px)") //FOR TABLET VIEW
      mFunction(value) 
      value.addListener(mFunction) 
      function mFunction(value) {
        if (value.matches) { 
          n = anchors_para.length-3;
        } 
        else {
          n = anchors_para.length; 
        }
    }
  
    for(let i=0; i<n; i++){
        var asideDiv = document.createElement('div'); //container div for each part 
        asideDiv.setAttribute('class', 'aside_content'); 
    
        anchors_para[i].map(function(element){
            if(element.h4 != undefined){
                var heading = document.createElement('h4')
                heading.setAttribute = ('class', 'heading')
                heading.innerText = element.h4
                asideDiv.append(heading)
    
            }
            if(element.p != undefined){    
                var para = document.createElement('p');
                para.setAttribute = ('class', 'text')
                para.innerText = element.p
                asideDiv.append(para)
            }
        })
  
        document.querySelector('aside').append(asideDiv);
    }
  
  //<--------- PRODUCT PAGE HYPERLINK ---------->//
  var z = document.querySelectorAll('img');
  for(let i=0; i<z.length; i++){
      z[i].addEventListener('click', function(){
          window.location.href = "../Homepages/kidsPage.html"
      })
  }
  
  // LANDING PAGE
  document.getElementById('landingPage').addEventListener('click', function(){
      window.location.href = "/LandingPage/index.html"
  })