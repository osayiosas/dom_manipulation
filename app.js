var btns = document.querySelectorAll('#girl-list .delete');

Array.from(btns).forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const li = e.target.parentElement;

    li.parentNode.removeChild(li);
  });
});


//const link = document.querySelector('#page-banner a')

//link.addEventListener('click', function(e){
    //e.preventDefault();
   //console.log('navigation to Facebook', e.target.textContent, 'was prevented')
//})


