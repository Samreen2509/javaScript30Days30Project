var t1=gsap.timeline()
t1.from("h1",{
    x:-100,
    duration:1,
    delay:.5,
    stagger:0.2,

  })
t1.from("h5",{
    y:-100,
    duration:1,
    delay:.5,
    stagger:0.2,
    
  })
  t1.from(".aboutRight",{
    x:100,
    duration:1,
    delay:.5,
    stagger:0.2,

  })
