        // Enhanced animations
        document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('.section, header');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });

            sections.forEach((section, index) => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(50px)';
                section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                section.style.transitionDelay = `${index * 0.1}s`;
                observer.observe(section);
            });
        });

        // Interactive skill tags
        document.querySelectorAll('.skill-tag').forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.05)';
            });
            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Smooth scrolling for contact items
        document.querySelectorAll('.contact-item').forEach(item => {
            item.addEventListener('click', function() {
                const text = this.querySelector('span:last-child').textContent;
                if (text.includes('@')) {
                    window.open(`mailto:${text}`, '_blank');
                } else if (text.includes('linkedin')) {
                    window.open(`https://${text}`, '_blank');
                } else if (text.match(/^\+?\d/)) {
                    window.open(`tel:${text}`, '_blank');
                }
            });
        });

        // Project click handlers
        document.querySelectorAll('.clickable-project').forEach(project => {
            project.addEventListener('click', function(e) {
                // Don't trigger if clicking on a button
                if (e.target.classList.contains('project-btn')) return;
                
                const link = this.getAttribute('data-link');
                if (link) {
                    window.open(link, '_blank');
                }
            });
        });

        // Project button handlers
        document.querySelectorAll('.project-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const projectDiv = this.closest('.clickable-project');
                const link = projectDiv.getAttribute('data-link');
                if (link) {
                    window.open(link, '_blank');
                }
            });
        });

        // Navigation smooth scrolling
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add resume download functionality
        document.querySelector('.cta-button').addEventListener('click', function(e) {
            e.preventDefault();
            // You can replace this with your actual resume link
            const resumeLink = 'https://drive.google.com/file/d/YOUR_RESUME_FILE_ID/view';
            window.open(resumeLink, '_blank');
        });