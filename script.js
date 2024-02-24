let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 6000); 
}

window.addEventListener('scroll', function() {
    var stickyDiv = document.querySelector('.head');
    var scrollPosition = window.scrollY;

    if (scrollPosition >= 1) {
        stickyDiv.style.position = 'fixed';
        stickyDiv.style.top = '0';
    } else {
        stickyDiv.style.position = 'relative';
        stickyDiv.style.top = '1px';
    }
});


document.addEventListener("DOMContentLoaded", function () {
    openPopup();
});

function openPopup() {
    document.getElementById('popup').style.display = 'flex';
    
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    
}
document.getElementById("button1").addEventListener("click", function() {
    // Replace the content inside the section with HTML content for Button 1
    document.getElementById("content").innerHTML = `
    <div class="products">
            <div class="bhet">
                <a href=""><img src="2PED-removebg.png"class="het"></a>
                <p class="pump">Eco Portable Submersible Drainage Pump “2PED” Series</p>
                <a href="2PED.html"><button class="hetbut">Learn More</button></a>
               
            </div>
    
            <div class="bhet">
                <a href=""><img src="DEWL-removebg.png" class="DEWL"></a>
                <p class="pump">Eco Submersible Dewatering Pump “DEWL” Series</p>
                <br>
                <a href=""><button class="hetbut">Learn More</button></a>
            </div>
    
            <div class="bhet">
                <a href=""><img src="2PEDSEW-removebg.png" class="het"></a>
                <p class="pump">Portable Submersible Drainage Pump “2PDSEW” Series</p>
                <br>
                <a href=""><button class="hetbut">Learn More</button></a>
            </div>

        </div>
        <br>
        <div class="products">
            <div class="bhet">
                <a href=""><img src="2PEDSEW-removebg.png" class="het"></a>
                <p class="pump">Eco Submersible Dewatering Pump “DEW” Series</p>
                <br>
                <a href=""><button class="hetbut">Learn More</button></a>
            </div>
    
            <div class="bhet">
                <a href=""><img src="ALDEW-removebg.png" class="het"></a>
                <p class="pump">Flange End Non-Clog Submersible Dewatering Pump “ALDEW” Series</p>
                <br>
                <a href=""><button class="hetbut">Learn More</button></a>
            </div>
    
            <div class="bhet">
                <a href=""><img src="sew-removebg.png" class="SEW"></a>
                <p class="pump">Non-Clog Submersible Sewage Pump "SEW" Series</p>
                <br>
                <a href=""><button class="hetbut">Learn More</button></a>
            </div>
        </div>
        <br>
        <div class="products">
            <div class="bhet">
                <a href=""><img src="SSEW-removebg.png" class="SSEW"></a>
                <p class="pump">Heavy Slurry Lift Submersible Pump "SSEW" Series</p>
                <br>
                <a href=""><button class="hetbut">Learn More</button></a>
            </div>
    
            <div class="bhet">
                <a href=""><img src="HDSEW-removebg.png" class="HDSEW"></a>
                <p class="pump">Non-Clog Sewage Submersible High-Discharge Pump “HDSEW” Series</p>
                <br>
                <a href=""><button class="hetbut">Learn More</button></a>
            </div>
    
            <div class="bhet">
                <a href=""><img src="HSEW-removebg.png" class="HSEW"></a>
                <p class="pump">Non-Clog Sewage Submersible High-Head Pump “HSEW” Series</p>
                <br>
                <a href=""><button class="hetbut">Learn More</button></a>
            </div>
        </div>
        <br>
        <div class="products">
            <div class="bM">
                <a href=""><img src="MSEW-removebg.png" class="MSEW"></a>
                <p class="pump">Non Clog Sewage Submersible Manhole Pump “MSEW” Series</p>
                <br>
                <a href=""><button class="hetbut">Learn More</button></a>
            </div>
        </div>
        <br>
    `;
  });

document.getElementById("button2").addEventListener("click", function() {
    // Replace the content inside the section with content for Button 2
    document.getElementById("content").innerHTML = `
      <div class="products">
          <div class="b1">
              <a href="dewateringpumps.html"><img src="dewateringpump.png"class="pimg"></a>
              <p class="pump">Dewatering Pumps</p>
              <p class="ptext">Dewatering pumps are centrifugal pumps installed in a building that is situated below the groundwater level.</p>
              <br>
              <a href="dewateringpumps.html"><button class="but">VIEW PRODUCTS</button></a>
          </div>
  
          <div class="b1">
              <a href="sewagepumps.html"><img src="sewagepumps.png" class="pimg"></a>
              <p class="pump">Sewage Pumps</p>
              <p class="ptext">Sewage pumps transport sewage and untreated waste water (e. g. raw waste water).</p>
              <br>
              <a href="sewagepumps.html"><button class="but">VIEW PRODUCTS</button></a>
          </div>
  
          <div class="b1">
              <a href="nonclog.html"><img src="nonclogpumps.png" class="pimg"></a>
              <p class="pump">Non Clog Pumps</p>
              <p class="ptext">A non-clog pump generally refers to pumps with a 100% recessed impeller or specially designed open rotor.</p>
              <br>
              <a href="nonclog.html"><button class="but">VIEW PRODUCTS</button></a>
          </div>
      </div>
      <br>
      <div class="products">
          <div class="b1">
              <a href="slurrypump.html"><img src="slurrypumps.png"class="pimg"></a>
              <p class="pump">Slurry Pumps</p>
              <p class="ptext">A slurry pump is a type of pump designed for pumping liquid containing solid particles.</p>
              <br>
              <a href="slurrypump.html"><button class="but">VIEW PRODUCTS</button></a>
          </div>
  
          <div class="b1">
              <a href="dieseldrivenpumps.html"><img src="dieseldrivenpumps.png" class="pimg"></a>
              <p class="pump">Diesel Driven Pumps</p>
              <p class="ptext">Diesel Driven Pumps for Flood Control, Sewage, Large Dewatering Jobs in Municipal, Infrastructure, Mining & Remote Area without Electricity Access Projects.</p>
              
              <a href="dieseldrivenpumps.html"><button class="but">VIEW PRODUCTS</button></a>
          </div>
  
          <div class="b1">
              <a href="controlpanel.html"><img src="controlpanel.png" class="pimg"></a>
              <p class="pump">Control Panel</p>
              <p class="ptext">A pump control panel manages the power components that control the pump motor.</p>
              <br>
              <a href="controlpanel.html"><button class="but">VIEW PRODUCTS</button></a>
          </div>
      </div>
      <br>
      <p class="pr">Spares and Accessories</p>
    <br>
    <div class="products">
        <div class="b2">
            <img src="rotoe.png"class="pimg">
            <p class="pump">Rotor</p>
            <p class="ptext">Rotor is a mechanical part which transfer electrical energy to mechanical energy in continues rotation form.</p>
            <br>
           
        </div>

        <div class="b2">
            <img src="mechanicalseal.png" class="pimg">
            <p class="pump">Mechanical Seal</p>
            <p class="ptext">Mechanical seal is a heart of pumps, which protect motor winding from insertion of water into motor body.</p>
            <br>
        </div>

        <div class="b2">
            <img src="wearplate.png" class="pimg">
            <p class="pump">Wear Plate / Pressure Plate</p>
            <p class="ptext">Wear Plate / Pressure Plate Wear plate helps in protecting the oil bag and oil chamber from entry of any foreign particles.</p>
            <br>

        </div>
    </div>
    <br>
    <div class="products">
        <div class="b2">
            <img src="upperbracket.png"class="pimg">
            <p class="pump">Upper Bracket</p>
            <p class="ptext">Upper Bracket is integral part of pump which has water dam area for power cable joints / connections chamber and discharge outlet.</p>
            <br>
           
        </div>

        <div class="b2">
            <img src="innerbody.png" class="pimg">
            <p class="pump">Inner Body</p>
            <p class="ptext">Inner body is an integral part of the pump which holds motor winding.</p>
            <br>
        </div>

        <div class="b2">
            <img src="outerbody.png" class="pimg">
            <p class="pump">Outer Body</p>
            <p class="ptext">Outer Body acts as a Jacket in dissipating and guide the water from the pump.</p>
            <br>
        </div>
    </div>

    <div class="products">
        <div class="b2">
            <img src="oilbag.png"class="pimg">
            <p class="pump">Oil Bag</p>
            <p class="ptext">This is a pressure tight oil container for mechanical seal to increase the life of mechanical seal and also provide continues oil for lubrication to mechanical seals.</p>
            <br>
           
        </div>

        <div class="b2">
            <img src="impeller.png" class="pimg">
            <p class="pump">Impeller</p>
            <p class="ptext">Impeller is a rotating part of pump, it transfers energy from the motor that drives the pump to pump the fluid by accelerating the fluid radially outwards from the center of rotation.</p>
            <br>
        </div>

        <div class="b2">
            <img src="cableassembly.png" class="pimg">
            <p class="pump">Cable Assembly</p>
            <p class="ptext">A pump control panel manages the power components that control the pump motor.</p>
            <br>
        </div>
    </div>
    <br>
    `;
  });
  
  








