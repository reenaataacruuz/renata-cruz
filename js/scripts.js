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



document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", function () {
        let content = this.nextElementSibling
        
        document.querySelectorAll(".accordion-content").forEach(item => {
            if (item !== content) {
                item.style.display = "none"
                item.previousElementSibling.classList.remove("active")
            }
        })
        let isOpen = content.style.display === "block"
        content.style.display = isOpen ? "none" : "block"
        this.classList.toggle("active", !isOpen)
    })
})
