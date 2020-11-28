function expand_work_tile(e){
  console.log(e.children[0]);
  if (e.children[0].innerHTML == '+'){
    e.children[0].innerHTML = '-';
    e.classList.remove('plus')
    body_section = e.parentNode.querySelector('.body_section');
    body_section.classList.remove('hidden');
  }else{
    e.children[0].innerHTML = '+';
    e.classList.add('plus')
    body_section = e.parentNode.querySelector('.body_section');
    body_section.classList.add('hidden');
  }

}

function body_nav_item_process(e){
  nav_items = e.parentNode.querySelectorAll('h2')
  body_items = e.parentNode.parentNode.querySelector('.body_content')
  console.log('nav_items');
  console.log(nav_items);
  for (var i = 0; i < nav_items.length; i++) {
    var body_class_name = '.body_nav_item_' + (i+1) + '_content'
    if (nav_items[i] == e){
      console.log('matched');
      console.log(e);
      nav_items[i].classList.add('active')
      body_items.querySelector(body_class_name).classList.remove('hidden')
    }else {
      console.log(e);
      nav_items[i].classList.remove('active')
      body_items.querySelector(body_class_name).classList.add('hidden')
    }
  }
}
