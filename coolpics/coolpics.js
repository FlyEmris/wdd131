function toggleDropdown() {
    var submenu = document.getElementById("submenu");
    if (submenu.style.display === "block") {
        submenu.style.display = "none";
    } else {
        submenu.style.display = "block";
    }
}


function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  }
  
  handleResize();
  window.addEventListener("resize", handleResize);

  function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }

  function toggleModal(event) {
    var modal = document.querySelector('.viewer');
    var image = event.target.closest('figure').querySelector('img');

    if (image) {
        modal.innerHTML = viewerTemplate(image.src, image.alt);
        modal.style.display = 'block';
    }
}