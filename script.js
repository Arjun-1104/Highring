const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const fileAdd = document.querySelector(".fa-paperclip");
var counter = 0;
const arrow_left = document.querySelector(".landing_expertise .fa-arrow-left");
const arrow_right = document.querySelector(".landing_expertise .fa-arrow-right");

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Remove 'active' class from all links
        navLinks.forEach(nav => nav.classList.remove('active'));
        // Add 'active' class to the clicked link
        link.classList.add('active');
      });
    });

    // fileAdd.addEventListener('click',()=> {
        
    // })


    const carousel_item = Array.from(document.querySelectorAll(".carousel_item .item"))
    console.log(carousel_item)

    carousel_item.forEach((item,index)=>{
      item.style.left = `${index*33}%`
    })

    const prev = () =>{
      counter--;
      if(counter<0){
        counter = carousel_item.length-3;
      }
      arrow_left.style.color = 'rgba(247, 118, 31, 1)';
      arrow_right.style.color = 'rgba(17, 19, 30, 0.2)';
      slidebox();
    }

    const next = () =>{
      counter++;
      if(counter>carousel_item.length-3){
        counter = 0;
      }
      arrow_right.style.color = 'rgba(247, 118, 31, 1)';
      arrow_left.style.color = 'rgba(17, 19, 30, 0.2)';

      slidebox();
    }

    const slidebox = () => {
      carousel_item.forEach((item)=>{
        item.style.transform = `translateX(-${counter*100}%)`
      })
    }