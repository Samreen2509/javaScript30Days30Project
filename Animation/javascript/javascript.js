var t1=gsap.timeline()
t1.from("h1",{
    y:-100,
    duration:2,
    delay:1.5,
    color:"orange",
    
    scale:.8,
   
  
  })
t1.to(".box",{
  x:1300,
  duration:2,
  delay:2.5,
  backgroundColor:"blue",
  rotate:360,
  scale:.3,
  repeat:-1,
  stagger:1,
  yoyo:true

})
t1.to("button",{
    y:50,
    duration:.5,
    repeat:-1,
  stagger:1,
  yoyo:true
})