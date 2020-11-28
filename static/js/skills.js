percent = [];
offset = [];
skill_tiles = [];

window.addEventListener('load', function(){
  skill_tiles = Array.from(document.getElementsByClassName('skills_tile_container'));
  console.log(skill_tiles);

  for (var i = 0; i < skill_tiles.length; i++) {
    //selecting the progress bar within the skill tile
    progress_bar = skill_tiles[i].querySelector('#inner_progress_bar');

    //storing the width value to be used later for animation
    percent[i] = progress_bar.getAttribute('data-value');

    //storing offset of tile component to compare onscroll function
    offset[i] = progress_bar.offsetTop;
  }
  console.log(offset);

}, false)

window.addEventListener('scroll', () => {

  // on scroll event loop through all the tile offsets
  for (var i = 0; i < offset.length; i++) {

    // check if any of the offset are greater than the page scroll
    if (window.pageYOffset >= offset[i]) {
      // set the width of the inner bar; start animation
      skill_tiles[i].querySelector('#inner_progress_bar').style.width = percent[i] + '%';

      //remove tile from queryset so it is not constantly being checked
      percent.splice(i,1);
      skill_tiles.splice(i,1);
      offset.splice(i, 1);
    }
  }
}, false)
