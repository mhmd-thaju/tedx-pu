$(function() {

  function countdown() {
    var $counter = $('.counter'),
      $sheets = $counter.find('.sheet');

    function getDate() {
      var today = new Date();
      var dd = today.getDate();

      if (dd < 10) {
        dd = '0' + dd
      }

      var digits = dd.toString().split('');
      return digits;
    }

    function setMonth() {
      var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];

      var d = new Date();
      $('.month').text(monthNames[d.getMonth()]);
    }
    
    setMonth();

    function countInit() {
      $sheets.each(function(i) {
        $(this).find('.up span').text(9);
        $(this).find('.down span').text(9);
      });
    }

    countInit();

    function countStart() {
      countReset();
      $sheets.each(function(i) {
        var $this = $(this),
          countFrom = 9,
          countTo = getDate()[i];

        $this.find('.up span').text(countTo);
        $this.find('.down span').text(countFrom);

        for (countFrom; countFrom >= countTo; countFrom--) {
          var $up = $('<div></div>');
          $up.addClass('helper helper-up');
          $up.css({
            animation: 'upflip 500ms linear ' + ((10 - countFrom) * 100) + 'ms 1 normal forwards',
            'z-index': countFrom + 1,
          });
          $up.append('<span>' + countFrom + '</span>');

          var $down = $('<div></div>');
          $down.addClass('helper helper-down');
          $down.css({
            animation: 'downflip 500ms linear ' + ((10 - countFrom) * 100 + 500) + 'ms 1 normal forwards',
            'z-index': 11 - countFrom,
          });
          $down.append('<span>' + countFrom + '</span>');

          $this.append($up);
          $this.append($down);
        }

      });
    }

    function countReset() {
      $sheets.children('.helper').remove();
      countInit();
    }

    countStart();

    $('#start').on('click', function() {
      countStart();
    });

  }

  countdown();
})