var catImages = ['http://i.imgur.com/2dM1vap.jpg',
                 'http://i.imgur.com/pLJGcoI.jpg',
                 'http://i.imgur.com/LVvQrHz.jpg'
                ];
var dogImages = ['http://i.imgur.com/QXqrD8d.jpg',
                  'http://i.imgur.com/XMHXERV.jpg',
                  'http://i.imgur.com/u4VK0Va.jpg',
                  'http://i.imgur.com/x5zMxAH.jpg'
                ];

var dogSize = dogImages.length
var catSize = catImages.length

$(document).ready(function() {
  $("#cat").on("click", function() {
    var x = Math.floor(catSize * Math.random())
    $("#photo").attr('src', catImages[x]);
  });

  $("#dog").on("click", function() {
    var x = Math.floor(dogSize * Math.random())
    $("#photo").attr('src', dogImages[x]);
  });

  $('form').submit(function(event) {
    event.preventDefault();
    var pet = { type: $('form input[type=radio]:checked').val(),
                age: $('#human_years').val() }
    if (pet.type === 'cat') {
      pet.age = pet.age * 5;
      $('#outcome').text(pet.age + ' years in cat');

    } else if (pet.type === 'dog') {
      pet.age = pet.age * 7;
      $('#outcome').text(pet.age + ' years in dog');
      };
  });



});