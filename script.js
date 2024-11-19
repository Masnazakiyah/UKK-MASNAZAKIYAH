document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('cilck', function(e){
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollintoview({
            behavior: 'smooth'
        });
    });
});