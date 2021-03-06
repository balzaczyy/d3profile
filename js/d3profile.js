(function($) {
  "use strict"; // jshint
  $.fn.d3profile = function() { // define jQuery plugin
    return this.each(function() { // maintain chain
      var $this = $(this) // keep current node
        , bnid = $this.attr('data-bnid').replace('#', '-'); // obtain battle net ID
      // HTTP Get career API - http://blizzard.github.com/d3-api-docs/
      $.getJSON('http://us.battle.net/api/d3/profile/' + bnid + '/?callback=?', function(profile) {
        var hero;
        // obtain the hero
        $.each(profile.heroes, function(index, value) {
          if (value.id === profile.lastHeroPlayed) {
            hero = value;
            return false;
          }
        });
        // display hero data
        $this.append('<span>Hero: </span><span>' + hero.name + '</span><br>'
          + '<span>Level: </span><span>' + hero.level + '</span><br>'
          + '<span>Class: </span><span>' + hero.class + '</span>');
      });
    });
  };
})(window.jQuery);