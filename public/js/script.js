const controller = new ScrollMagic.Controller();

const about = new ScrollMagic.Scene({
    triggerElement: '.about-header'
})
.setClassToggle('.about-main', 'show')
.addTo(controller)

const aboutContent = new ScrollMagic.Scene({
    triggerElement: '.about-text'
})
.setClassToggle('.about-container', 'show')
.addTo(controller)



const project = new ScrollMagic.Scene({
    triggerElement: '.scroll-show'
})
.setClassToggle('.work-main', 'show')
.addTo(controller)

const grannyContent = new ScrollMagic.Scene({
    triggerElement: '.work-header'
})
.setClassToggle('.work-container', 'show')
.addTo(controller)



const otherProjects = new ScrollMagic.Scene({
    triggerElement: '.granny-button'
})
.setClassToggle('.projects-main', 'show')
.addTo(controller)

const projectsContent = new ScrollMagic.Scene({
    triggerElement: '.card-img-top'
})
.setClassToggle('.projects-container', 'show')
.addTo(controller)




const contact = new ScrollMagic.Scene({
    triggerElement: '.project-btn'
})
.setClassToggle('.contact-main', 'show')
.addTo(controller)

const contactContent = new ScrollMagic.Scene({
    triggerElement: '.contact-content'
})
.setClassToggle('.contact-container', 'show')
.addTo(controller)





