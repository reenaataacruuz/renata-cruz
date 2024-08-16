function scrollToNextSection() {
    const sections = document.querySelectorAll('section');
    const currentScroll = window.scrollY;
    const nextSection = Array.from(sections).find(section => {
        const sectionTop = section.offsetTop;
        return sectionTop > currentScroll + window.innerHeight / 2;
    });
    
    if (nextSection) {
        window.scrollTo({
            top: nextSection.offsetTop,
            behavior: 'smooth'
        });
    }
}
