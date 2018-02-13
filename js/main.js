anime.timeline({loop: false})
  .add({
    targets: '.message .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 1000
  }).add({
    targets: '.message .line',
    duration: 1000,
    easing: "easeOutExpo",
    translateY: function(e, i, l) {
      var offset = -0.625 + 0.625*2*i;
      return offset + "em";
    }
  }).add({
    targets: '.message .ampersand',
    opacity: [0,1],
    scaleY: ["0.5em", 1],
    easing: "easeOutExpo",
    duration: 1000,
    offset: '-=1000'
  }).add({
    targets: '.message .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 1000,
    offset: '-=300'
  }).add({
    targets: '.message .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 1000,
    offset: '-=1000'
  }).add({
    targets: '.message .line',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 0
  });

$(window).scroll(function() {
	const locTop = $('#location').offset().top;
	const locHeight = $('#location').outerHeight();
	const windowHeight = $(window).height();
	let scrollpos = $(this).scrollTop();

	console.log(scrollpos);
	console.log("Location top:" + locTop);

	if(scrollpos >= locTop) {
		// $('#mandir, #jericho').fadeIn(1000);
		var cssSelector = anime({
			targets: '#mandir',
			translateX: 250
		});
	}
});