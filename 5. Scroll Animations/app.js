gsap.from('.b2 h2', {
  duration: 1,
  autoAlpha: 0,
  y: 100,
  scale: 0.5,
  scrollTrigger: {
    trigger: '.b2 h2',
    // markers: true,
    // Trigger Scroller
    start: 'top 80%',
    end: 'bottom 30%',
    scrub: 0.5,
    toggleActions: 'play pause reverse reset',
  },
});

ScrollTrigger.create({
  trigger: '.b2',
  pin: true,
  markers: true,
  end: 'bottom 50%',
});
