// $('.p2').addClass('hide');
// $('.p3').addClass('hide');

// $('.p1').on('click', function())

$('section').on('click', function(){
  $('section').removeClass('home');
  $(this).addClass('home');
});

//Page opens with the first section loaded in full by default;
//We target the <section> with $('section')
// on the event 'click', section removes the Class element attributed in css as 'home'
// and replaces it with the default css for the section as attributed in css or if section
// is already loaded swaps for 'home' stling.
