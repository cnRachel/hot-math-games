let menuBtn = document.querySelector('#menu-btn');
let searchBtn = document.querySelector('#search-btn');
let themeBtn = document.querySelector('#theme-btn');

let navbar = document.querySelector('.navbar');

menuBtn.onclick = () =>{
  navbar.classList.toggle('active');
}


window.onscroll = () =>{
  navbar.classList.remove('active');
}

themeBtn.onclick = () => {
  themeBtn.classList.toggle('fa-sun');
  if(themeBtn.classList.contains('fa-sun')){
    document.body.classList.add('active');
  }else{
    document.body.classList.remove('active');
  }
}

/////////////////////////////////////////////////////////////////////

let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.box-container .box').forEach(box =>{
  box.onclick = () =>{
    previewContainer.style.display = 'flex';
    let name = box.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    previewContainer.style.display = 'none';
    location.reload();
  };
});

////////////////////////////////////////////////////////////////////
