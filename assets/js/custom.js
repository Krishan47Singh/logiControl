

  const toggler = document.querySelector('.toggler-icon');
  const sidebar = document.querySelector('.slide-navbar');
  const closeBtn = document.querySelector('.close');

  
  toggler.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.style.transform = 'translateX(0)';
  });


  closeBtn.addEventListener('click', () => {
    sidebar.style.transform = 'translateX(650px)';
  });

  document.addEventListener('click', (e) => {
    const isClickInsideSidebar = sidebar.contains(e.target);
    const isClickOnToggler = toggler.contains(e.target);
    if (!isClickInsideSidebar && !isClickOnToggler) {
      sidebar.style.transform = 'translateX(650px)';
    }
  });

 
function add(a,b){
  while(b>0){
    a++;
    b--;
  }
  return a;
}
const result=add(5,6);
console.log(result)
