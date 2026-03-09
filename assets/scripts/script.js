 // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });

    // Flame particles
    const container = document.getElementById('particles');
    const colors = ['#f5a623', '#e8460a', '#ff9944', '#ffcc55'];
    for (let i = 0; i < 22; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.setProperty('--dur', (3 + Math.random() * 4) + 's');
      p.style.setProperty('--delay', (Math.random() * 5) + 's');
      p.style.setProperty('--left', (10 + Math.random() * 80) + '%');
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.width = p.style.height = (3 + Math.random() * 6) + 'px';
      container.appendChild(p);
    }

    // Scroll fade-in
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));