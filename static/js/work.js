window.addEventListener('load', function() {
  work_tiles = document.getElementsByClassName('work_tile');
  show_button = document.getElementById('show-more-button');

  // min number of tiles we want to show at all times; Any excess is hidden
  max_num_of_tiles = 3;

  //adding hidden class so we dont run into an error trying to remove class tht doesnt exists
  show_button.classList.add('hidden');
  console.log(show_button.classList);

  if (work_tiles.length >= max_num_of_tiles) {
    // showing the show more button
    show_button.classList.remove('hidden');

    // hidding the extra tiles
    for (var i = 0; i < work_tiles.length; i++) {
      if (i >= max_num_of_tiles) {
        work_tiles[i].classList.toggle('hidden')
      }
    }
  }else{
    // hidding show more button as there are less than the max_num_of_tiles
    show_button.classList.add('hidden');

  }

  // listen to read more button onclick
  show_button.addEventListener('click', (e)=>{
    for (var i = 0; i < work_tiles.length; i++) {

      // only toggling the extra tiles; either hiding or showing
      if (i >= max_num_of_tiles) {

        // toggling the extra tiles and storing a boolean, true if hidden added and false of hidden removed
        toggled = work_tiles[i].classList.toggle('hidden');

        if (toggled) {
          // changing the button to say show more when the tiles are collapsed
          show_button.innerHTML = 'Show More'
        }else {
          // changing the button to say show less when the tiles are extended
          show_button.innerHTML = 'Show Less'
        }


      }
    }
  })



}, false)
