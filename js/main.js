/* ===================================================
   Moohan Martial Arts Sandy Springs — Main JavaScript
   Handles navigation, scroll effects, animations, forms
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile Hamburger Menu ---
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      }
    });
  }

  // --- Navbar scroll effect ---
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = document.getElementById('navbar')?.offsetHeight || 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // --- Scroll-triggered animations ---
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  if (animateElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    animateElements.forEach(el => observer.observe(el));
  }

  // --- Dynamic CMS Image Hydration ---
  const isSubfolder = window.location.pathname.includes('/programs/');
  const rootRel = isSubfolder ? '../' : './';
  const fixImgUrl = (url) => url ? rootRel + url.replace(/^\/+/, '') : '';
  const path = window.location.pathname;

  if (path.includes('kid-tiger.html')) {
    fetch(rootRel + 'content/kid_tiger_page.json').then(r => r.json()).then(data => {
      const hero = document.querySelector('.page-hero');
      if (hero && data.hero_image) hero.style.backgroundImage = `url('${fixImgUrl(data.hero_image)}')`;
      const overviewImg = document.querySelector('.about-image img');
      if (overviewImg && data.overview_image) overviewImg.src = fixImgUrl(data.overview_image);
      const benefitsImg = document.querySelector('.benefits-image img');
      if (benefitsImg && data.benefits_image) benefitsImg.src = fixImgUrl(data.benefits_image);
    }).catch(() => {});
  } else if (path.includes('junior-tkd.html')) {
    fetch(rootRel + 'content/junior_tkd_page.json').then(r => r.json()).then(data => {
      const hero = document.querySelector('.page-hero');
      if (hero && data.hero_image) hero.style.backgroundImage = `url('${fixImgUrl(data.hero_image)}')`;
      const overviewImg = document.querySelector('.about-image img');
      if (overviewImg && data.overview_image) overviewImg.src = fixImgUrl(data.overview_image);
      const benefitsImg = document.querySelector('.benefits-image img');
      if (benefitsImg && data.benefits_image) benefitsImg.src = fixImgUrl(data.benefits_image);
    }).catch(() => {});
  } else if (path.includes('adult-family.html')) {
    fetch(rootRel + 'content/adult_family_page.json').then(r => r.json()).then(data => {
      const hero = document.querySelector('.page-hero');
      if (hero && data.hero_image) hero.style.backgroundImage = `url('${fixImgUrl(data.hero_image)}')`;
      const overviewImg = document.querySelector('.about-image img');
      if (overviewImg && data.overview_image) overviewImg.src = fixImgUrl(data.overview_image);
      const benefitsImg = document.querySelector('.benefits-image img');
      if (benefitsImg && data.benefits_image) benefitsImg.src = fixImgUrl(data.benefits_image);
    }).catch(() => {});
  } else if (path.includes('summer-camp.html')) {
    fetch(rootRel + 'content/summer_camp_page.json').then(r => r.json()).then(data => {
      const hero = document.querySelector('.page-hero');
      if (hero && data.hero_image) hero.style.backgroundImage = `url('${fixImgUrl(data.hero_image)}')`;
      const bodyImg = document.querySelector('.about-image img');
      if (bodyImg && data.body_image) bodyImg.src = fixImgUrl(data.body_image);
      const galImgs = document.querySelectorAll('#camp-gallery .gallery-item-flush img');
      if (galImgs[0] && data.gallery_1) galImgs[0].src = fixImgUrl(data.gallery_1);
      if (galImgs[1] && data.gallery_2) galImgs[1].src = fixImgUrl(data.gallery_2);
      if (galImgs[2] && data.gallery_3) galImgs[2].src = fixImgUrl(data.gallery_3);
    }).catch(() => {});
  } else {
    fetch(rootRel + 'content/site_info.json').then(r => r.json()).then(data => {
      const hero = document.getElementById('hero');
      if (hero && data.hero_background) hero.style.backgroundImage = `url('${fixImgUrl(data.hero_background)}')`;
      const aboutImg = document.querySelector('.about-image img');
      if (aboutImg && data.about_image) aboutImg.src = fixImgUrl(data.about_image);
      const whyChooseImg = document.querySelector('.why-choose-image img');
      if (whyChooseImg && data.why_choose_image) whyChooseImg.src = fixImgUrl(data.why_choose_image);
      const gal1Imgs = document.querySelectorAll('#gallery-1 .gallery-item-flush img');
      if (gal1Imgs[0] && data.gallery_1) gal1Imgs[0].src = fixImgUrl(data.gallery_1);
      if (gal1Imgs[1] && data.gallery_2) gal1Imgs[1].src = fixImgUrl(data.gallery_2);
      if (gal1Imgs[2] && data.gallery_3) gal1Imgs[2].src = fixImgUrl(data.gallery_3);
      const progCardImgs = document.querySelectorAll('.program-card-image img');
      if (progCardImgs[0] && data.program_card_1) progCardImgs[0].src = fixImgUrl(data.program_card_1);
      if (progCardImgs[1] && data.program_card_2) progCardImgs[1].src = fixImgUrl(data.program_card_2);
      if (progCardImgs[2] && data.program_card_3) progCardImgs[2].src = fixImgUrl(data.program_card_3);
      const gal2Imgs = document.querySelectorAll('#gallery-2 .gallery-item-flush img');
      if (gal2Imgs[0] && data.gallery_4) gal2Imgs[0].src = fixImgUrl(data.gallery_4);
      if (gal2Imgs[1] && data.gallery_5) gal2Imgs[1].src = fixImgUrl(data.gallery_5);
      if (gal2Imgs[2] && data.gallery_6) gal2Imgs[2].src = fixImgUrl(data.gallery_6);
      const tkdSection = document.getElementById('taekwondo');
      if (tkdSection && data.taekwondo_background) tkdSection.style.backgroundImage = `url('${fixImgUrl(data.taekwondo_background)}')`;
    }).catch(() => {});
  }


});


// --- Form submission handler ---
async function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const btn = form.querySelector('button[type="submit"]');
  const successEl = form.querySelector('.form-success');
  
  const originalBtnText = btn ? btn.textContent : 'Submit';
  if (btn) {
    btn.disabled = true;
    btn.textContent = 'Sending...';
  }

  const formData = new FormData(form);
  
  // Ensure Reply-To is set to user's email and Subject is tailored per form type
  const userEmail = formData.get('email');
  const userName = formData.get('name') || 'Visitor';
  const program = formData.get('program');

  if (userEmail) {
    formData.set('_replyto', userEmail);
  }

  if (program) {
    formData.set('_subject', `FREE Trial Class Request: ${program} — ${userName}`);
  } else {
    formData.set('_subject', `Website Contact Inquiry — ${userName}`);
  }
  
  try {
    const response = await fetch('https://formsubmit.co/ajax/moohansandysprings@gmail.com', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      if (successEl) {
        successEl.style.display = 'block';
        successEl.classList.add('show');
        form.reset();
        setTimeout(() => {
          successEl.classList.remove('show');
          successEl.style.display = 'none';
        }, 6000);
      }
    } else {
      alert('Thank you! Your submission has been received. If urgent, please call us at (404) 477-5599.');
      if (successEl) {
        successEl.style.display = 'block';
        successEl.classList.add('show');
        form.reset();
      }
    }
  } catch (err) {
    if (successEl) {
      successEl.style.display = 'block';
      successEl.classList.add('show');
      form.reset();
    }
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = originalBtnText;
    }
  }

  return false;
}
