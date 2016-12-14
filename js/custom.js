  $(document).ready(function($) {
    /*** Show menu on hamburger click ***/
    $("#mbl #toggle").click(function() {
      $(this).parent().parent().toggleClass("on");
    });
    /*** Close menu on link click ***/
    $("#mbl a").click( function(){
      $( "#mbl .menu_wrapper" ).removeClass("on");
    }
    );
  });
  /*** Conference countdown ***/
  $('#clock').countdown('2017/6/8', function(event) {
   var $this = $(this).html(event.strftime(''
     + '<ul><li><span>%w</span><br /><label>weeks</label></li>'
     + '<li><span>%d</span><br /><label>days</label></li> '
     + '<li><span>%H</span><br /><label>hour</label></li> '
     + '<li><span>%M</span><br /><label>min</label></li> '
     + '<li><span>%S</span><br />sec</li></ul>'));
 });
  /*** Important dates counter ***/
  $(document).ready(function($) {
    $('.circle').counterUp({
      delay: 10,
      time: 800
    });
  });
  /*** Modal with custom header and body ***/
  $('#myModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var naslov = button.data('naslov');
    var telo = button.data('telo');
    var modal = $(this);
    modal.find('.modal-title').text(naslov);
    modal.find('.modal-body').html(telo);



$('#thanks .fee').on('change', function(){
  var a = $(this).find('option:selected').attr('value');
  b = a.split('|');
  $('#thanks .value').text(b[0]);
});

    $("#submit").click(function(){
      $.ajax({
        type: "POST",
          url: "/process.php", //
          data: $('form.registration-form').serialize(),
          success: function(msg){
            $("#thanks").html(msg);
            /*$("#form-content").modal('hide'); */
          },
          error: function(){
            alert("failure");
          }
        });
    });
  });
  /*** One page menu ***/
  $(function() {
    $('a[href*="#"]:not([href="#"]):not("#accordion a")').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  /*** Google MAP ***/
  window.onload = function () {
    var styles = [
    {
        featureType: 'water', // set the water color
        elementType: 'geometry.fill', // apply the color only to the fill
        stylers: [
        { color: '#33a4f6;' }
        ]
      }
      ];
      var options = {
        mapTypeControlOptions: {
          mapTypeIds: ['Zinc']
        },
        center: new google.maps.LatLng(45.2471352, 19.853549599),
        zoom: 14,
        disableDefaultUI: false,
        scrollwheel: false,
        mapTypeId: 'Zinc'
      };
      var div = document.getElementById('novisad');
      var map = new google.maps.Map(div, options);
      var styledMapType = new google.maps.StyledMapType(styles, { name: 'Zinc' });
      map.mapTypes.set('Zinc', styledMapType);
      var contentString1 = '<div id="content"><div id="siteNotice"></div>'+
      '<h1 id="firstHeading" class="firstHeading">RT-RK</h1>'+
      '<div id="bodyContent">'+
      '<p>Narodnog fronta 23a, <br />21000 Novi Sad, Serbia<br />Phone: +381 (0)21 4801 200<br />Fax: +381 (0)21 4801 116<br /><a href="http://www.rt-rk.com">www.rt-rk.com</a></p>'+
      '</div>'+
      '</div>';
      var contentString2 = '<div id="content"><div id="siteNotice"></div>'+
      '<h1 id="firstHeading" class="firstHeading">Zinc</h1>'+
      '<div id="bodyContent">'+
      '<p>CONSUMER ELECTRONICS WORKSHOP,<br /> 25-26 MAY 2016,<br />NOVI SAD, SERBIA</p>'+
      '</div>'+
      '</div>';
      var contentString3 = '<div id="content"><div id="siteNotice"></div>'+
      '<h1 id="firstHeading" class="firstHeading">Zinc</h1>'+
      '<div id="bodyContent">'+
      '<p>University of Novi Sad - Rectorate<br />Dr Zorana Đinđića 1<br />21000 Novi Sad<br />Serbia</p>'+
      '</div>'+
      '</div>';
      /*var infowindow1 = new google.maps.InfoWindow({
        content: contentString1
      });*/
     /* var infowindow2 = new google.maps.InfoWindow({
        content: contentString2
      });*/
       var infowindow3 = new google.maps.InfoWindow({
        content: contentString3
      });
     /* var marker1 = new google.maps.Marker({
        position: {lat: 45.2397, lng: 19.836797},
        map: map,
        title: 'RT-RK'
      });
      marker1.addListener('click', function() {
        infowindow1.open(map, marker1);
      });
*/
      /*var marker2 = new google.maps.Marker({
        position: {lat: 45.252595, lng: 19.862031},
        map: map,
        title: 'GoZinc'
      });
      marker2.addListener('click', function() {
        infowindow2.open(map, marker2);
      });*/
      var marker3 = new google.maps.Marker({
        position: {lat:  45.24736, lng: 19.854050},
        map: map,
        icon: 'http://www.gozinc.org/images/map.png',
        title: 'Faculty of Technical Sciences'
      });
      marker3.addListener('click', function() {
        infowindow3.open(map, marker3);
      });
    }


    /*** SMALLER MENU ON SCROLL ***/
    window.addEventListener('scroll', function(e){
      var distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 0,
      /*shrinkOn = $('.mask').height(),*/
      header = document.querySelector("nav");
      if (distanceY > shrinkOn) {
        classie.add(header,"smaller");
      } else {
        if (classie.has(header,"smaller")) {
          classie.remove(header,"smaller");
        }
      }
    });

    /*** Rotating header. Much wow ***/
    $(document).ready(function($) {
      $("#js-rotating").Morphext({
        animation: "bounceInLeft",
        separator: ",",
        speed: 5000,
        complete: function () {
        // Called after the entrance animation is executed.
      }
    });
    });
    /*** Coming soon tooltip ***/
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    });



  $(document).ready(function($) {

 });
