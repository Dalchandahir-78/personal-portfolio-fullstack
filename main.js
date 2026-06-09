document.addEventListener('DOMContentLoaded', () => {
    
    // 1. VIP Typewriter Animation (Dynamic text changing effect)
    const words = ["Creative Full-Stack Developer", "UI/UX Architecture Designer", "Expert Tech Problem Solver"];
    let i = 0;
    let timer;

    function typingEffect() {
        let word = words[i].split("");
        var loopTyping = function() {
            if (word.length > 0) {
                document.querySelector('.typewriter').innerHTML += word.shift();
            } else {
                setTimeout(deletingEffect, 2000);
                return false;
            }
            timer = setTimeout(loopTyping, 80);
        };
        loopTyping();
    }

    function deletingEffect() {
        let word = words[i].split("");
        var loopDeleting = function() {
            if (word.length > 0) {
                word.pop();
                document.querySelector('.typewriter').innerHTML = word.join("");
            } else {
                if (words.length > (i + 1)) i++;
                else i = 0;
                setTimeout(typingEffect, 500);
                return false;
            }
            timer = setTimeout(loopDeleting, 40);
        };
        loopDeleting();
    }
    typingEffect();

    // 2. High-End Scroll Reveal Animations (Bina crash/lag ke)
    ScrollReveal({
        reset: false,
        distance: '60px',
        duration: 1200,
        delay: 200
    });

    ScrollReveal().reveal('.hero-text, .section-title', { delay: 100, origin: 'top' });
    ScrollReveal().reveal('.skill-card, .timeline-item, .intern-card', { delay: 200, origin: 'bottom', interval: 100 });
    ScrollReveal().reveal('.reveal-left', { delay: 150, origin: 'left' });
    ScrollReveal().reveal('.reveal-right', { delay: 150, origin: 'right' });

    // 3. Dynamic Form Success Dynamic Interception
    const form = document.getElementById('vip-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            btn.innerHTML = 'Sending Encrypted Data... <i class="fa-solid fa-spinner fa-spin"></i>';
            btn.style.pointerEvents = 'none';

            setTimeout(() => {
                alert('Success! Your secure message has reached the dashboard.');
                form.reset();
                btn.innerHTML = 'Send Message <i class="fa-solid fa-paper-plane"></i>';
                btn.style.pointerEvents = 'auto';
            }, 1500);
        });
    }
});




ScrollReveal().reveal('.skill-card, .skill-card-vip', { delay: 200, origin: 'bottom', interval: 100 });

ScrollReveal().reveal('.intern-corporate-card, .task-card-vip', { delay: 200, origin: 'bottom', interval: 100 });
