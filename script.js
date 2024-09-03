let mm = gsap.matchMedia();

mm.add("(min-width: 1250px)",()=>{

 


var timeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
        // markers: true,
    }
})

timeline.to("#or-btl",{
top:"115%",
left:"9%"
},'alo-frut')

timeline.to("#orange-cut",{
    top:"150%",
    left:"25%"
},'alo-frut')

timeline.to("#orange-full",{
    top:"150%",
    left:"80%"
},'alo-frut')

timeline.to("#leaf-pic", {
    top: "130%",
    left: "40%",
    rotate: 30 // Rotates the element by -30 degrees
}, 'alo-frut');

var timeline2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "0% 95%",
        end: "50% 50%",
        scrub: true,
        // markers: true,
    }
})

timeline2.to("#orange-cut",{  
    left:"35%",
    top:"210%"
},'alo-frut1')

timeline2.to("#or-btl",{
    top:"217%",
    left:"36.5%",
    width:"27%"
},'alo-frut1')

timeline2.from("#kiwi-frt",{
    rotate: "-90deg",
    left:"-400%",
    top:"100%"
},'alo-frut1')

timeline2.from("#kiwi-btl",{
    rotate: "-60deg",
    bottom:"30%",
    left:"-50%" 
},'alo-frut1')

timeline2.from("#kiwi2",{ 
    rotate:"-30deg",
     left:"40%",
     top:"60%"
},'alo-frut1')

timeline2.from("#berri-btl",{
    rotate:"60deg",
    bottom:"30%",
    left:"50%"
},'alo-frut1')

timeline2.from("#mix-berri",{ 
     left:"-6%",
     top:"-6%"
},'alo-frut1');



timeline.to("#or-btl",{
    top:"115%",
    left:"9%",
    width:"30%"
    },'alo-frut');

    document.getElementById("main").style.display = "block";
    document.getElementById("desktop-warning").style.display = "none";
        
}).add("(max-width: 1249px)", () => {

    // Show the desktop warning message for screen widths < 1250px
    document.getElementById("desktop-warning").style.display = "block";
    document.getElementById("main").style.display = "none";

});












