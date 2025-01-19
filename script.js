const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const fileAdd = document.querySelector(".fa-paperclip");
var counter = 0;
const arrow_left = document.querySelector(".landing_expertise .fa-arrow-left");
const arrow_right = document.querySelector(".landing_expertise .fa-arrow-right");
const carousel_item = Array.from(document.querySelectorAll(".carousel_item .item"))
let formSubmitCount = 1;
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


    // console.log(carousel_item)

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


    // form submit
    const form = document.getElementById("getInTouch");
    
    let username = form.username.value
    let useremail = form.useremail.value
    let usertimeSlot = form.usertimeSlot.value
    let userDepartment = form.userDepartment.value
    let userMessage = form.userMessage.value

    let userSubmit = ["name", "email", "timeSlot", "department", "message","fileName"]
    // let userBigData = {}
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let userData = {};
        Array.from(e.target).forEach((input,index) => {
          if(index === 0 || index === 1 || index === 2 || index === 3 || index === 4){
            console.log(input.value)
            userData = {...userData, [userSubmit[index]]:input.value}
          } 
          if(index === 5){
            const fileInput = document.getElementById("fileInput");
            const file = fileInput.files[0];

            if(file){
              userData = {...userData, [userSubmit[index]]:file.name}
            }
          }
        })
        // console.log(userData)
        localStorage.setItem(formSubmitCount,JSON.stringify(userData))
        // userBigData = {...userBigData,[formSubmitCount]:userData}
        formSubmitCount++;
        // console.log(userBigData)
    });
    
  



