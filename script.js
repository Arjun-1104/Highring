const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const fileAdd = document.querySelector(".fa-paperclip");

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Remove 'active' class from all links
        navLinks.forEach(nav => nav.classList.remove('active'));
        // Add 'active' class to the clicked link
        link.classList.add('active');
      });
    });

    fileAdd.addEventListener('click',()=> {
        
    })
