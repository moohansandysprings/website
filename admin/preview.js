// Decap CMS Custom Preview Templates & Styling

CMS.registerPreviewStyle('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&family=Playfair+Display:wght@400;700&display=swap');
CMS.registerPreviewStyle('../css/style.css');

CMS.registerPreviewStyle(`
  body {
    background-color: #ffffff !important;
    color: #333333 !important;
    font-family: 'Nunito', sans-serif !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  .cms-preview-wrapper {
    width: 100%;
    margin: 0 auto;
    background: #ffffff;
  }
  .cms-preview-wrapper img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`);

var h = window.h || (window.React && window.React.createElement);

// Helper to safely extract image string URL from Decap CMS getAsset
function getImgUrl(getAsset, val, fallback) {
  if (!val) return fallback || '';
  try {
    var asset = getAsset(val);
    if (asset) {
      var str = (typeof asset.toString === 'function') ? asset.toString() : (asset.url || asset);
      if (str && typeof str === 'string') return str;
    }
  } catch (e) {}
  var path = typeof val === 'string' ? val : '';
  var clean = path.replace(/^\/+/, '');
  var prefix = window.location.pathname.includes('/website/') ? '/website/' : '/';
  return prefix + clean;
}

// 1. Home Page Images Preview
function HomepagePreview(props) {
  var entry = props.entry;
  var getAsset = props.getAsset;
  var data = entry.get('data') ? entry.get('data').toJS() : {};

  var heroBg = getImgUrl(getAsset, data.hero_background, '../uploads/moohan-masters.webp');
  var aboutImg = getImgUrl(getAsset, data.about_image, '../uploads/kids-martial-arts.jpg');

  var gallery1 = getImgUrl(getAsset, data.gallery_1, '../uploads/kid-tiger-hero.jpg');
  var gallery2 = getImgUrl(getAsset, data.gallery_2, '../uploads/kids-martial-arts.jpg');
  var gallery3 = getImgUrl(getAsset, data.gallery_3, '../uploads/moohan-masters.webp');

  var progCard1 = getImgUrl(getAsset, data.program_card_1, '../uploads/kid-tiger-hero.jpg');
  var progCard2 = getImgUrl(getAsset, data.program_card_2, '../uploads/kids-martial-arts.jpg');
  var progCard3 = getImgUrl(getAsset, data.program_card_3, '../uploads/moohan-masters.webp');

  var gallery4 = getImgUrl(getAsset, data.gallery_4, '../uploads/moohan-masters.webp');
  var gallery5 = getImgUrl(getAsset, data.gallery_5, '../uploads/kid-tiger-hero.jpg');
  var gallery6 = getImgUrl(getAsset, data.gallery_6, '../uploads/kids-martial-arts.jpg');
  var taekwondoBg = getImgUrl(getAsset, data.taekwondo_background, '../uploads/moohan-masters.webp');

  return h('div', { className: 'cms-preview-wrapper' },
    h('nav', { className: 'navbar', style: { position: 'relative', background: '#1a1a2e' } },
      h('div', { className: 'container' },
        h('a', { className: 'nav-brand', href: '#' },
          h('img', { src: '../uploads/moohan-logo.png', alt: 'Logo', width: 52, height: 52 }),
          h('div', { className: 'nav-brand-text' }, h('strong', null, 'MOOHAN MARTIAL ARTS'), 'SANDY SPRINGS')
        )
      )
    ),
    h('section', { className: 'hero', style: { minHeight: '350px', backgroundImage: 'linear-gradient(135deg, rgba(15,15,35,0.85), rgba(26,26,46,0.7)), url("' + heroBg + '")', backgroundSize: 'cover', backgroundPosition: 'center' } },
      h('div', { className: 'hero-content' },
        h('h1', null, 'BEST MARTIAL ARTS IN SANDY SPRINGS'),
        h('hr', { className: 'hero-divider' })
      )
    ),
    h('section', { className: 'about-section' },
      h('div', { className: 'container' },
        h('div', { className: 'about-grid' },
          h('div', { className: 'about-text' }, h('p', { className: 'about-label' }, 'WHO ARE WE'), h('h2', null, 'Our Story'), h('p', null, data.about_text || 'Welcome to Martial Arts Sandy Springs...')),
          h('div', { className: 'about-image' }, h('img', { src: aboutImg, alt: 'Our Story' }))
        )
      )
    ),
    h('section', { className: 'why-choose-section' },
      h('div', { className: 'container' },
        h('div', { className: 'why-choose-grid' },
          h('div', { className: 'why-choose-image', style: { display: 'flex', justifyContent: 'center', alignItems: 'center' } },
            h('div', { className: 'fb-card-wrapper', style: { width: '100%', maxWidth: '480px', background: '#ffffff', borderRadius: '0', border: '1px solid rgba(0, 0, 0, 0.1)', boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)', overflow: 'hidden', padding: '0' } },
              h('div', { className: 'fb-card-header', style: { background: 'linear-gradient(135deg, #1877f2, #0d5bbd)', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#ffffff', borderRadius: '0' } },
                h('div', { style: { display: 'flex', alignItems: 'center', gap: '10px' } },
                  h('svg', { width: '22', height: '22', viewBox: '0 0 24 24', fill: '#ffffff' }, h('path', { d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' })),
                  h('span', { style: { fontWeight: '700', fontSize: '15px', letterSpacing: '0.3px', color: '#ffffff' } }, 'Live Facebook Updates')
                ),
                h('a', { href: 'https://www.facebook.com/moohansandysprings/', target: '_blank', style: { background: 'rgba(255,255,255,0.22)', color: '#ffffff', padding: '6px 14px', borderRadius: '0', fontSize: '12px', fontWeight: '700', textDecoration: 'none' } }, 'Follow Us ↗')
              ),
              h('iframe', {
                src: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmoohansandysprings%2F&tabs=timeline&width=480&height=600&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId',
                width: '100%',
                height: '600',
                style: { border: 'none', overflow: 'hidden', width: '100%', height: '600px', display: 'block', margin: '0', padding: '0' },
                scrolling: 'yes',
                frameBorder: '0',
                allowFullScreen: true,
                allow: 'autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share',
                title: 'Moohan Martial Arts Sandy Springs Facebook Feed'
              })
            )
          ),
          h('div', { className: 'why-choose-text' }, h('p', { className: 'about-label' }, 'HOW WE DO IT'), h('h2', null, 'WHY CHOOSE MARTIAL ARTS SANDY SPRINGS?'))
        )
      )
    ),
    h('section', { className: 'photo-gallery-band-flush' },
      h('div', { className: 'gallery-grid-flush' },
        h('div', { className: 'gallery-item-flush' }, h('img', { src: gallery1, alt: 'Gallery 1' })),
        h('div', { className: 'gallery-item-flush' }, h('img', { src: gallery2, alt: 'Gallery 2' })),
        h('div', { className: 'gallery-item-flush' }, h('img', { src: gallery3, alt: 'Gallery 3' }))
      )
    ),
    h('section', { className: 'programs-section' },
      h('div', { className: 'container' },
        h('p', { className: 'section-label' }, 'WHAT WE OFFER'),
        h('h2', { className: 'section-title section-title--dark' }, 'OUR PROGRAMS'),
        h('hr', { className: 'section-divider' }),
        h('div', { className: 'programs-grid' },
          h('div', { className: 'program-card' },
            h('div', { className: 'program-card-image' }, h('img', { src: progCard1, alt: 'Kid Tiger' })),
            h('div', { className: 'program-card-content' }, h('h3', null, 'Kid Tiger (Ages 4-5)'))
          ),
          h('div', { className: 'program-card' },
            h('div', { className: 'program-card-image' }, h('img', { src: progCard2, alt: 'Junior TKD' })),
            h('div', { className: 'program-card-content' }, h('h3', null, 'Junior TKD (Ages 6-12)'))
          ),
          h('div', { className: 'program-card' },
            h('div', { className: 'program-card-image' }, h('img', { src: progCard3, alt: 'Family/Adult' })),
            h('div', { className: 'program-card-content' }, h('h3', null, 'Family / Adult'))
          )
        )
      )
    ),
    h('section', { className: 'photo-gallery-band-flush' },
      h('div', { className: 'gallery-grid-flush' },
        h('div', { className: 'gallery-item-flush' }, h('img', { src: gallery4, alt: 'Gallery 4' })),
        h('div', { className: 'gallery-item-flush' }, h('img', { src: gallery5, alt: 'Gallery 5' })),
        h('div', { className: 'gallery-item-flush' }, h('img', { src: gallery6, alt: 'Gallery 6' }))
      )
    ),
    h('section', { className: 'taekwondo-section', style: { backgroundImage: 'linear-gradient(135deg, rgba(15,15,35,0.88), rgba(26,26,46,0.82)), url("' + taekwondoBg + '")', backgroundSize: 'cover', backgroundPosition: 'center' } },
      h('div', { className: 'container' },
        h('div', { className: 'taekwondo-content' },
          h('h2', { className: 'section-title section-title--light' }, 'Dedicated to Teaching Traditional Taekwondo')
        )
      )
    )
  );
}

// 2. Kid Tiger Page Preview
function KidTigerPreview(props) {
  var entry = props.entry;
  var getAsset = props.getAsset;
  var data = entry.get('data') ? entry.get('data').toJS() : {};

  var heroImg = getImgUrl(getAsset, data.hero_image, '../uploads/kid-tiger-hero.jpg');
  var overviewImg = getImgUrl(getAsset, data.overview_image || data.body_image, '../uploads/kids-martial-arts.jpg');
  var benefitsImg = getImgUrl(getAsset, data.benefits_image, '../uploads/kid-tiger-hero.jpg');

  return h('div', { className: 'cms-preview-wrapper' },
    h('section', { className: 'page-hero', style: { minHeight: '300px', backgroundImage: 'linear-gradient(135deg, rgba(15,15,35,0.85), rgba(26,26,46,0.7)), url("' + heroImg + '")', backgroundSize: 'cover', backgroundPosition: 'center' } },
      h('div', { className: 'page-hero-content' }, h('h1', null, 'MARTIAL ARTS FOR KIDS AGES 4-5 IN SANDY SPRINGS'))
    ),
    h('section', { className: 'about-section' },
      h('div', { className: 'container' },
        h('div', { className: 'about-grid' },
          h('div', { className: 'about-text' },
            h('p', { className: 'about-label' }, 'PROGRAM OVERVIEW'),
            h('h2', null, 'Kid Tiger Program (Ages 4-5)'),
            h('p', null, 'The Kids Tiger Program, designed for children aged 4 to 5, focuses on developing confidence, focus, and physical coordination through tailored Taekwondo classes.')
          ),
          h('div', { className: 'about-image' }, h('img', { src: overviewImg, alt: 'Overview Image' }))
        )
      )
    ),
    h('section', { className: 'benefits-section' },
      h('div', { className: 'container' },
        h('div', { className: 'benefits-grid' },
          h('div', { className: 'benefits-text' },
            h('h2', null, 'Taekwondo for Kids 4-5'),
            h('p', null, 'Taekwondo offers significant benefits for children aged 4-5, focusing on their physical, mental, and emotional development.')
          ),
          h('div', { className: 'benefits-image' }, h('img', { src: benefitsImg, alt: 'Benefits Image' }))
        )
      )
    )
  );
}

// 3. Junior TKD Page Preview
function JuniorTkdPreview(props) {
  var entry = props.entry;
  var getAsset = props.getAsset;
  var data = entry.get('data') ? entry.get('data').toJS() : {};

  var heroImg = getImgUrl(getAsset, data.hero_image, '../uploads/kids-martial-arts.jpg');
  var overviewImg = getImgUrl(getAsset, data.overview_image || data.body_image, '../uploads/kid-tiger-hero.jpg');
  var benefitsImg = getImgUrl(getAsset, data.benefits_image, '../uploads/kids-martial-arts.jpg');

  return h('div', { className: 'cms-preview-wrapper' },
    h('section', { className: 'page-hero', style: { minHeight: '300px', backgroundImage: 'linear-gradient(135deg, rgba(15,15,35,0.85), rgba(26,26,46,0.7)), url("' + heroImg + '")', backgroundSize: 'cover', backgroundPosition: 'center' } },
      h('div', { className: 'page-hero-content' }, h('h1', null, 'MARTIAL ARTS FOR KIDS AGES 6-12 IN SANDY SPRINGS'))
    ),
    h('section', { className: 'about-section' },
      h('div', { className: 'container' },
        h('div', { className: 'about-grid' },
          h('div', { className: 'about-text' },
            h('p', { className: 'about-label' }, 'PROGRAM OVERVIEW'),
            h('h2', null, 'Junior Taekwondo Program (Ages 6-12)'),
            h('p', null, 'Empower your child ages 6–12 with our Junior Taekwondo Program in Sandy Springs, Georgia.')
          ),
          h('div', { className: 'about-image' }, h('img', { src: overviewImg, alt: 'Overview Image' }))
        )
      )
    ),
    h('section', { className: 'benefits-section' },
      h('div', { className: 'container' },
        h('div', { className: 'benefits-grid' },
          h('div', { className: 'benefits-text' },
            h('h2', null, 'Taekwondo for Kids 6-12 years old'),
            h('p', null, 'Taekwondo offers significant benefits for children aged 6-12, focusing on their physical, mental, and emotional development.')
          ),
          h('div', { className: 'benefits-image' }, h('img', { src: benefitsImg, alt: 'Benefits Image' }))
        )
      )
    )
  );
}

// 4. Family / Adult Page Preview
function AdultFamilyPreview(props) {
  var entry = props.entry;
  var getAsset = props.getAsset;
  var data = entry.get('data') ? entry.get('data').toJS() : {};

  var heroImg = getImgUrl(getAsset, data.hero_image, '../uploads/moohan-masters.webp');
  var overviewImg = getImgUrl(getAsset, data.overview_image || data.body_image, '../uploads/why-choose-us.jpg');
  var benefitsImg = getImgUrl(getAsset, data.benefits_image, '../uploads/moohan-masters.webp');

  return h('div', { className: 'cms-preview-wrapper' },
    h('section', { className: 'page-hero', style: { minHeight: '300px', backgroundImage: 'linear-gradient(135deg, rgba(15,15,35,0.85), rgba(26,26,46,0.7)), url("' + heroImg + '")', backgroundSize: 'cover', backgroundPosition: 'center' } },
      h('div', { className: 'page-hero-content' }, h('h1', null, 'MARTIAL ARTS FOR FAMILY IN SANDY SPRINGS'))
    ),
    h('section', { className: 'about-section' },
      h('div', { className: 'container' },
        h('div', { className: 'about-grid' },
          h('div', { className: 'about-text' },
            h('p', { className: 'about-label' }, 'PROGRAM OVERVIEW'),
            h('h2', null, 'Family & Adult Taekwondo Program'),
            h('p', null, 'Experience the joy of training as a family with our Family Taekwondo Program in Sandy Springs, Georgia.')
          ),
          h('div', { className: 'about-image' }, h('img', { src: overviewImg, alt: 'Overview Image' }))
        )
      )
    ),
    h('section', { className: 'benefits-section' },
      h('div', { className: 'container' },
        h('div', { className: 'benefits-grid' },
          h('div', { className: 'benefits-text' },
            h('h2', null, 'Taekwondo for Teens & Adults'),
            h('p', null, 'Adult martial arts training provides a unique combination of physical fitness, mental discipline, and personal development.')
          ),
          h('div', { className: 'benefits-image' }, h('img', { src: benefitsImg, alt: 'Benefits Image' }))
        )
      )
    )
  );
}

// 5. Summer Camp Page Preview
function SummerCampPagePreview(props) {
  var entry = props.entry;
  var getAsset = props.getAsset;
  var data = entry.get('data') ? entry.get('data').toJS() : {};

  var heroImg = getImgUrl(getAsset, data.hero_image, '../uploads/kid-tiger-hero.jpg');
  var bodyImg = getImgUrl(getAsset, data.body_image, '../uploads/kid-tiger-hero.jpg');
  var gal1 = getImgUrl(getAsset, data.gallery_1, '../uploads/kid-tiger-hero.jpg');
  var gal2 = getImgUrl(getAsset, data.gallery_2, '../uploads/kids-martial-arts.jpg');
  var gal3 = getImgUrl(getAsset, data.gallery_3, '../uploads/moohan-masters.webp');

  return h('div', { className: 'cms-preview-wrapper' },
    h('section', { className: 'page-hero', style: { minHeight: '300px', backgroundImage: 'linear-gradient(135deg, rgba(15,15,35,0.85), rgba(26,26,46,0.7)), url("' + heroImg + '")', backgroundSize: 'cover', backgroundPosition: 'center' } },
      h('div', { className: 'page-hero-content' }, h('h1', null, 'SUMMER CAMP 2026'))
    ),
    h('section', { className: 'about-section' },
      h('div', { className: 'container' },
        h('div', { className: 'about-grid' },
          h('div', { className: 'about-text' }, h('h2', null, 'Martial Arts Summer Camp')),
          h('div', { className: 'about-image' }, h('img', { src: bodyImg, alt: 'Body Image' }))
        )
      )
    ),
    h('section', { className: 'photo-gallery-band-flush' },
      h('div', { className: 'gallery-grid-flush' },
        h('div', { className: 'gallery-item-flush' }, h('img', { src: gal1, alt: 'Gallery 1' })),
        h('div', { className: 'gallery-item-flush' }, h('img', { src: gal2, alt: 'Gallery 2' })),
        h('div', { className: 'gallery-item-flush' }, h('img', { src: gal3, alt: 'Gallery 3' }))
      )
    )
  );
}

// 6. Schedule PDF Preview
function SchedulePreview(props) {
  var entry = props.entry;
  var getAsset = props.getAsset;
  var data = entry.get('data') ? entry.get('data').toJS() : {};

  var pdfFile = getImgUrl(getAsset, data.schedule_pdf, '../uploads/schedule.pdf');

  return h('div', { className: 'cms-preview-wrapper' },
    h('section', { style: { padding: '40px 20px', textAlign: 'center', background: '#18182c', color: '#fff' } },
      h('div', { className: 'container' },
        h('h2', { className: 'section-title section-title--light' }, 'Class Schedule'),
        h('div', { style: { margin: '20px 0' } }, h('a', { className: 'btn-cta', href: pdfFile, target: '_blank' }, h('span', null, '📥 Download Schedule PDF'))),
        h('div', { style: { marginTop: '25px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden', height: '500px' } },
          h('iframe', { src: pdfFile, style: { width: '100%', height: '100%', border: 'none' } })
        )
      )
    )
  );
}

// Register CMS Preview Templates for both Collection and File keys
CMS.registerPreviewTemplate('homepage_images', HomepagePreview);
CMS.registerPreviewTemplate('site_info', HomepagePreview);

CMS.registerPreviewTemplate('kid_tiger_images', KidTigerPreview);
CMS.registerPreviewTemplate('kid_tiger_page', KidTigerPreview);

CMS.registerPreviewTemplate('junior_tkd_images', JuniorTkdPreview);
CMS.registerPreviewTemplate('junior_tkd_page', JuniorTkdPreview);

CMS.registerPreviewTemplate('adult_family_images', AdultFamilyPreview);
CMS.registerPreviewTemplate('adult_family_page', AdultFamilyPreview);

CMS.registerPreviewTemplate('summer_camp_images', SummerCampPagePreview);
CMS.registerPreviewTemplate('summer_camp_page', SummerCampPagePreview);

CMS.registerPreviewTemplate('schedule', SchedulePreview);
