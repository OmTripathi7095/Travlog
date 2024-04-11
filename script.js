  let hamburger = document.querySelector(".hamburger")
  let cross = document.querySelector(".cross")
  let offScreenMenu=document.querySelector(".offscreen-menu")


  hamburger.addEventListener("click",function (){
    hamburger.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
  })
  cross.addEventListener("click",function (){
    hamburger.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
  })
  
  function myFunction(x) {
    if (x.matches) { 
        let acc1 = document.querySelector(".accordion-1");
        let acc2 = document.querySelector(".accordion-2");
        let acc3 = document.querySelector(".accordion-3");
        let select1 = document.querySelector(".select-1");
        let select2 = document.querySelector(".select-2");
        let select3= document.querySelector(".select-3");
        
        
        select1.addEventListener("click", function() {
            this.classList.toggle("active");
            if (acc1.style.display === "block") {
              acc1.style.display = "none";
            } else {
              acc1.style.display = "block";
            }
          });
        select2.addEventListener("click", function() {
            this.classList.toggle("active");
            if (acc2.style.display === "block") {
              acc2.style.display = "none";
            } else {
              acc2.style.display = "block";
            }
          });
        select3.addEventListener("click", function() {
            this.classList.toggle("active");
            if (acc3.style.display === "block") {
              acc3.style.display = "none";
            } else {
              acc3.style.display = "block";
            }
          });
    } else{
        console.log("HI")
    }

  }
  
  var x = window.matchMedia("(max-width: 1200px)")
  
  myFunction(x);
  
  x.addEventListener("change", function() {
    myFunction(x);
  });

