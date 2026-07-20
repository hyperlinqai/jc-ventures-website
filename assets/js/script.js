$(document).ready(function(){
    
    $('.slick-testimonial-home').slick({
        slidesToShow:1,
        arrows:false,
        dots:true,
    });
    
    
    const containerSection = gsap.utils.toArray('.container-fluid')
      // eslint-disable-next-line arrow-parens
      containerSection.forEach(section => {
        gsap.fromTo(section,{
            y:100,
            opacity:0,
        },{
          y: 0,
          opacity: 1,
          duration:1,
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            toggleActions: 'play none none none',
            markers: false
          }
        })
    })

    
})