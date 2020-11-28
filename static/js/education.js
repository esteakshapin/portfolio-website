window.addEventListener('load', function(){
  var school_tiles = document.getElementsByClassName('education_left_container');

  console.log(school_tiles);
  for (var i = 0; i < school_tiles.length; i++) {
    if (i==0) {
      line_top = school_tiles[i].querySelector('.education_line_top');
      line_top.classList.add('line_hidden');
      console.log(line_top.classList);
    }else if (i == school_tiles.length - 1) {
      line_bottom = school_tiles[i].querySelector('.education_line_bottom');
      line_bottom.classList.add('line_hidden');
      console.log(line_bottom);
    }

  }
})
