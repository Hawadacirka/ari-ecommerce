/* ==== MENU SHOW ==== */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
            nav  = document.getElementById(navId)

    if (toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/* ===REMOVE MENU MOBILE ===== */
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')

    
}
    navLink.forEach(n => n.addEventListener('click', linkAction))


    const actionButton = document.getElementById(".section-all");
    const itemList = document.querySelector(".new_container");
    
    const toggleShowList = () => {
      const isHidden = itemList.style.display === "none";
      if (isHidden) {
        // Display hidden element
        itemList.style.display = "block";
        actionButton.innerHTML = "Hide List";
      } else {
        // Hide element
        itemList.style.display = "none";
        actionButton.innerHTML = "Show List";
      }
    };