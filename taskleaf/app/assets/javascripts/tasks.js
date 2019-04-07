// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

// window.onload = function() {
//   document.querySelectorAll('td').forEach(function(td){
//     td.addEventListener('mouseover', function(e){
//       e.currentTarget.style.backgroundColor = '#eff';
//     });

//     td.addEventListener('mouseout', function(e){
//       e.currentTarget.style.backgroundColor = '';
//     });
//   });
// };

document.addEventListener('turbolinks:load', function(){
  document.querySelectorAll('td').forEach(function(td){
    td.addEventListener('mouseover', function(e){
      e.currentTarget.style.backgroundColor = '#eff';
    });

    td.addEventListener('mouseout', function(e){
      e.currentTarget.style.backgroundColor = '';
    });
  });
})