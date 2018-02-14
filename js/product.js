//$(document).ready(function() {
//  $('.collapse.in').prev('.panel-heading').addClass('active');
//  $('#accordion, #bs-collapse')
//    .on('show.bs.collapse', function(a) {
//      $(a.target).prev('.panel-heading').addClass('active');
//    })
//    .on('hide.bs.collapse', function(a) {
//      $(a.target).prev('.panel-heading').removeClass('active');
//    });
//});

$( document ).ready(function() {
                  $(".button-collapse").sideNav({
                      edge:"right"
                  });
                    $(".dropdown-button").dropdown({
                          inDuration: 300,
                          outDuration: 225,
                          constrain_width: true, // Does not change width of dropdown to that of the activator
                          hover: false, // Activate on hover
                          gutter: 0, // Spacing from edge
                          belowOrigin: true, // Displays dropdown below the button
                          alignment: 'left' // Displays dropdown with edge aligned to the left of button
                    });
                });