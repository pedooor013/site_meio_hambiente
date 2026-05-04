// ===========================
// LAGO VIVO CABRINHA — JS
// ===========================

// --- Navbar scroll effect ---
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (nav) {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
});

// --- Smooth scroll para âncoras internas ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// --- Formulário de inscrição (ajudar.html) ---
function handleForm(e) {
  e.preventDefault();
  const form = document.getElementById('inscricaoForm');
  const success = document.getElementById('formSuccess');
  if (form && success) {
    form.classList.add('d-none');
    success.classList.remove('d-none');
    // Aqui você pode adicionar integração com um backend ou serviço de e-mail
    console.log('Inscrição recebida:', {
      nome: document.getElementById('nome')?.value,
      email: document.getElementById('email')?.value,
      interesse: document.getElementById('interesse')?.value
    });
  }
}

// --- CTA de inscrição (home) ---
function handleSubscribe(e) {
  e.preventDefault();
  const email = document.getElementById('ctaEmail')?.value;
  if (email) {
    const btn = e.target.querySelector('button[type="submit"]');
    if (btn) {
      btn.textContent = '✅ Inscrito!';
      btn.disabled = true;
      btn.style.background = '#4a7c59';
      btn.style.color = 'white';
    }
    console.log('E-mail inscrito:', email);
  }
}

// --- Filtro de notícias (noticias.html) ---
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('#filterBtns .btn-filter');
  const newsItems = document.querySelectorAll('.news-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Atualiza botão ativo
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      newsItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = '';
          item.style.animation = 'fadeUp 0.4s forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});

// --- Scroll reveal leve para cards ---
const revealOnScroll = () => {
  const cards = document.querySelectorAll(
    '.feature-card, .problem-card, .action-card, .news-card, .team-card, .importance-card, .law-card'
  );
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
  });
};

document.addEventListener('DOMContentLoaded', revealOnScroll);