/* Rakyat Kecil — teks dua bahasa, menu mobile, tahun footer.
   Tanpa dependency. Animasi reveal memakai IntersectionObserver. */
(function () {
  'use strict';

  var EN = {
    'skip': 'Skip to content',
    'nav.layanan': 'Services',
    'nav.karya': 'Work',
    'nav.proses': 'Process',
    'nav.harga': 'Pricing',
    'nav.faq': 'FAQ',
    'cta.chat': 'Chat on WhatsApp',
    'cta.mulai': 'Start a chat, ask first',
    'cta.lihat': 'See my work',
    'cta.pilih': 'Choose this package',
    'cta.bahas': 'Discuss my needs',
    'foot.kontak': 'Contact',
    'foot.rights': 'All rights reserved.',

    'hero.kicker': 'Website builder · done personally, no middlemen',
    'hero.w1': 'A website',
    'hero.w2': 'for anything',
    'hero.w3': 'and small business.',
    'hero.lead': 'Landing pages, sites with an admin panel, all the way to web apps and marketplaces. From a shop just starting out to a company that needs a real system. Prices are on the table from the start — from Rp 500,000.',

    'fact.1k': 'Starting at',
    'fact.2k': 'Web + backend',
    'fact.3k': 'Web app',
    'fact.fast': 'Landing ready',
    'fact.hari': 'days',
    'unit.rb': 'k',
    'unit.jt': 'm',
    'unit.jtp': 'm+',
    'amt.12': 'Rp 1.2',

    'mq.1': 'Online store',
    'mq.2': 'Company profile',
    'mq.3': 'Ad landing page',
    'mq.4': 'Product catalogue',
    'mq.5': 'Attendance system',
    'mq.6': 'Tutoring site',
    'mq.7': 'Marketplace',
    'mq.8': 'Admin dashboard',

    'lay.eyebrow': 'Services',
    'lay.title': 'The four things people ask for most',
    'lay.lead': 'If you need something else, just write it on WhatsApp. No request is too small or too big.',
    'lay.1t': 'Landing page & business profile',
    'lay.1d': 'One page with who you are, what you sell, your prices, and a chat button. Good for small shops, services, and paid ads. Done in 2–4 days.',
    'lay.2t': 'Website + admin panel',
    'lay.2d': 'Many pages, a database, and a panel so you can add products, articles, or galleries yourself. No need to call me every time a price changes.',
    'lay.3t': 'Web app & marketplace',
    'lay.3d': 'User accounts, admin–seller–buyer roles, cart, transactions, dashboard, reports. For those ready to move to a real system.',
    'lay.3p': 'from Rp 2,000,000',
    'lay.4t': 'Maintenance & repair',
    'lay.4d': 'Change text and images, fix pages that break on phones, add a section, or continue an old site abandoned by its previous maker.',
    'lay.4p': 'quoted per job',

    'karya.eyebrow': 'Work',
    'karya.title': 'Things I have built',
    'karya.lead': 'Some projects were built from scratch, some were rescued from a half-finished site. Message me on WhatsApp if you want the demo links.',
    'karya.noimg': 'Screenshot coming soon',
    'karya.more': 'Got a different idea?',
    'karya.more2': 'Just tell me on WhatsApp.',
    'karya.more3': 'I will reply with a rough price and timeline, no pressure.',
    'k.1tag': 'Education site',
    'k.1d': 'Enrolment page: class packages, schedule, activity gallery, and a sign-up button through WhatsApp.',
    'k.2tag': 'Small shop landing',
    'k.2d': 'Menu, prices, opening hours, and location on one page. Kept light so it opens fast on a phone.',
    'k.3tag': 'Personal portfolio',
    'k.3d': 'A collection of work, a short story per project, and contact details. No login page, no fuss.',
    'k.4tag': 'Company profile',
    'k.4d': 'Company profile: services, track record, and quote requests straight from the page.',
    'k.5tag': 'Web application',
    'k.5n': 'Dashboard & data',
    'k.5d': 'Sign in as a user, manage records from a panel, and pull reports. Data is stored in a database.',
    'k.bms.tag': 'Community app',
    'k.bms.d': 'A Karang Taruna community app: cash dashboard, file archive, footage, and member data in one place. The demo beside this plays the moves between app sections.',
    'k.bms.hint': 'The demo screen loops on its own — not a video, just CSS.',


    'pros.eyebrow': 'How it works',
    'pros.title': 'Four steps, no surprises halfway',
    'pros.lead': 'I spell everything out up front: what gets built, how long it takes, and what it costs. You will not be billed for something we never discussed.',
    'pros.1t': 'Tell me on WhatsApp',
    'pros.1d': 'Tell me about your business, sites you like, and your rough budget. I will ask back if anything is unclear.',
    'pros.2t': 'I send a written quote',
    'pros.2d': 'It lists the pages, features, the fixed price, and the delivery date. Work starts only after you agree.',
    'pros.3t': '50% deposit, then I build',
    'pros.3d': 'Half up front, the rest once you have seen the result. Throughout the build you can peek through a preview link.',
    'pros.4t': 'Revisions, then handover',
    'pros.4d': 'You give notes, I fix them, then the site goes live on your domain. The code and access are fully yours.',

    'harga.eyebrow': 'Pricing',
    'harga.title': 'Numbers I do not hide',
    'harga.lead': 'The three levels people pick most. If your needs sit between them, I can adjust the price once I know the details.',
    't1.name': 'Landing Page',
    't1.for': 'For small shops and services that need to be online fast',
    't1.a': '1 page, tidy on phone, tablet, and desktop',
    't1.b': 'WhatsApp button straight to your chat',
    't1.c': 'I help write the copy, you just correct it',
    't1.d': 'One round of revisions included',
    't1.e': 'Ready in 2–4 working days',
    't2.flag': 'Most chosen',
    't2.name': 'Web + Backend',
    't2.for': 'For businesses that want to manage their own content',
    't2.a': 'Everything in the Landing Page package',
    't2.b': 'Many pages: home, products, services, contact',
    't2.c': 'Admin panel to add your own content',
    't2.d': 'Database, so your data is stored safely',
    't2.e': 'Contact form lands in your email or WhatsApp',
    't2.f': 'Ready in 1–2 weeks',
    't3.name': 'Web App / Marketplace',
    't3.price': 'from Rp 2',
    't3.for': 'For businesses that need a system, not just a page',
    't3.a': 'Everything in the Web + Backend package',
    't3.b': 'User accounts: admin, seller, buyer',
    't3.c': 'Cart and transaction flow',
    't3.d': 'Dashboard, reports, and data search',
    't3.e': 'Final price depends on the number of features',
    'harga.fine': 'Prices above do not include domain and hosting. Those cost around Rp 150,000–Rp 400,000 per year, and I can help arrange them.',

    'kna.eyebrow': 'Why Rakyat Kecil',
    'kna.title': 'Three things I hold to',
    'kna.1t': 'Done personally, not passed to someone else',
    'kna.1d': 'The person answering your chat is the same one writing the code. No marketing staff, nobody dropping out halfway.',
    'kna.2t': 'The price is written on this page',
    'kna.2d': 'You do not need to make contact just to learn the range. If your budget is below that number, say so — sometimes there is still a way.',
    'kna.3t': 'Revisions until the page feels right',
    'kna.3d': 'Not "done, goodbye". After handover you can still ask questions, and the code is handed over whole so you are not locked to me.',

    'faq.eyebrow': 'FAQ',
    'faq.title': 'What people usually ask first',
    'faq.1q': 'How do I pay? Everything up front?',
    'faq.1a': 'No. A 50% deposit to start, the rest after you see the result. For small jobs like fixing a page, you pay once at the end.',
    'faq.2q': 'How many revisions do I get?',
    'faq.2a': 'One round of changes is included in every package — usually a batch of notes at once. Typos or broken links are always fixed without counting.',
    'faq.3q': 'Do I have to sort out domain and hosting myself?',
    'faq.3a': 'I can arrange them for you, or you can buy them yourself so the accounts are truly yours. Yearly cost is around Rp 150,000–Rp 400,000 depending on the domain name and hosting plan.',
    'faq.4q': 'How long until the site is usable?',
    'faq.4a': 'A landing page takes 2–4 working days once text and images are ready. A site with an admin panel takes 1–2 weeks. Web apps and marketplaces depend on the stages we agree on.',
    'faq.5q': 'I have no logo or product photos. Can we still start?',
    'faq.5a': 'Yes. Many clients start with just their business name in text and whatever photos their phone has. It still looks tidy, and can be updated any time better assets appear.',
    'faq.6q': 'Once it is done, whose code is it?',
    'faq.6a': 'Yours. Code, hosting access, and domain are all handed over. You are free to use, move, or continue with another developer.',

    'cta.title': 'Got a business with no website yet?',
    'cta.lead': 'Send one WhatsApp message. Describe your business in two or three sentences, and I will reply with the next step and a rough cost.',
    'cta.note': 'Replies are usually quick between 08:00 and 21:00 WIB.',

    'foot.tag': 'Website building service. Done by one person, prices open from the start.',
    'foot.lang': 'This page is available in Bahasa Indonesia and English.'
  };
var SRC = {};
  var root = document.documentElement;
  var nodes = document.querySelectorAll('[data-i18n]');

  for (var i = 0; i < nodes.length; i++) {
    var k = nodes[i].getAttribute('data-i18n');
    if (!(k in SRC)) SRC[k] = nodes[i].textContent;
  }

  function apply(lang) {
    var dict = lang === 'en' ? EN : SRC;
    for (var j = 0; j < nodes.length; j++) {
      var key = nodes[j].getAttribute('data-i18n');
      if (dict[key] != null) nodes[j].textContent = dict[key];
    }
    root.lang = lang;
    document.title = lang === 'en'
      ? 'Rakyat Kecil — Websites Built for Anything | From Rp 500,000'
      : 'Rakyat Kecil — Jasa Bikin Website Apa Saja | Mulai Rp 500.000';
    var btn = document.getElementById('lang');
    if (btn) {
      btn.setAttribute('data-lang', lang);
      btn.setAttribute('aria-label', lang === 'en'
        ? 'Switch language, currently English'
        : 'Ganti bahasa, sekarang Indonesia');
    }
    try { localStorage.setItem('rk-lang', lang); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem('rk-lang'); } catch (e) {}
  apply(saved === 'en' ? 'en' : 'id');

  var langBtn = document.getElementById('lang');
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      apply(root.lang === 'en' ? 'id' : 'en');
    });
  }

  /* Menu mobile */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      burger.setAttribute('aria-label', open ? 'Buka menu' : 'Tutup menu');
      nav.classList.toggle('is-open', !open);
    });
    nav.addEventListener('click', function (ev) {
      if (ev.target.tagName === 'A') {
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Buka menu');
        nav.classList.remove('is-open');
      }
    });
  }

  /* Header bergaris saat halaman digulir */
  var top = document.querySelector('.top');
  if (top) {
    var onScroll = function () {
      top.classList.toggle('is-stuck', window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* Reveal kecil untuk daftar editorial: observer berhenti setelah elemen masuk. */
  var revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealItems.forEach(function (item, index) {
      item.style.setProperty('--reveal-delay', Math.min(index % 4, 3) * 70 + 'ms');
      revealObserver.observe(item);
    });
  } else {
    revealItems.forEach(function (item) { item.classList.add('is-visible'); });
  }

  /* Gambar karya belum tersedia: sembunyikan, jangan tampilkan ikon rusak */
  var figs = document.querySelectorAll('.work__fig');
  for (var f = 0; f < figs.length; f++) {
    var img = figs[f].querySelector('img');
    if (!img) continue;
    (function (figure, image) {
      var ok = function () { figure.classList.add('has-img'); };
      if (image.complete && image.naturalWidth > 0) ok();
      image.addEventListener('load', ok);
      image.addEventListener('error', function () {
        image.classList.add('is-broken');
        figure.classList.remove('has-img');
      });
    })(figs[f], img);
  }

  /* Nav menandai section yang sedang dilihat */
  var secs = document.querySelectorAll('main section[id]');
  if (secs.length && 'IntersectionObserver' in window) {
    var links = {};
    document.querySelectorAll('.nav a').forEach(function (a) {
      links[a.getAttribute('href').slice(1)] = a;
    });
    var seen = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var a = links[en.target.id];
        if (a) a.classList.toggle('is-active', en.isIntersecting);
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    secs.forEach(function (s) { seen.observe(s); });
  }

  /* Showcase BMS: nav kaca asli (port initGlassNav dari app-baru/app.js).
     Bubble meluncur antartab sambil mengukir lekukan pada bilah kaca
     lewat clip-path: path(), memantul busur, ikon menukar di tengah gerak.
     Berhenti saat di luar layar & saat pengguna minta gerak minimal. */
  var show = document.querySelector('.work--show');
  if (show) {
    var nav = show.querySelector('.bottomNav');
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (nav) {
      var _bar = nav.querySelector('.bnBar'), _bubble = nav.querySelector('.bnBubble');
      var _icons = Array.prototype.slice.call(_bubble.children);
      var items = Array.prototype.slice.call(nav.querySelectorAll('.bnItem'));
      var N = items.length, H = 72, HW = 36, K = 20, D = 30, DUR = 520;
      var W = nav.clientWidth || 360;
      var cur = items.findIndex(function (el) { return el.classList.contains('active'); });
      var busy = false, _timer = null;

      var cx = function (i) { return W / (N * 2) * (2 * i + 1); };
      var clamp = function (v) { return Math.min(1, Math.max(0, v)); };
      var seg = function (p, a, b) { return clamp((p - a) / (b - a)); };
      var sine = function (t) { return -(Math.cos(Math.PI * t) - 1) / 2; };
      var ease = function (t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
      var lerp = function (a, b, t) { return a + (b - a) * t; };
      var path = function (x, d) {
        var l = x - HW, r = x + HW;
        return 'M0,0 H' + l + ' C' + (l + K) + ',0 ' + (x - K) + ',' + d + ' ' + x + ',' + d +
               ' C' + (x + K) + ',' + d + ' ' + (r - K) + ',0 ' + r + ',0 H' + W + ' V' + H + ' H0 Z';
      };
      var draw = function (x, d, y) {
        _bar.style.clipPath = "path('" + path(x, d) + "')";
        _bubble.style.transform = 'translate(' + (x - 24) + 'px,' + y + 'px)';
      };
      var showIcon = function (i) {
        _icons.forEach(function (el, j) { el.style.opacity = j === i ? 1 : 0; });
      };
      var rest = function () {
        W = nav.clientWidth || 360;
        if (cur < 0) { _bar.style.clipPath = "path('M0,0 H" + W + " V" + H + " H0 Z')"; _bubble.style.opacity = 0; return; }
        _bubble.style.opacity = 1; showIcon(cur); draw(cx(cur), D, D - 34);
      };
      function go(to, onDone) {
        if (busy || to === cur || to < 0 || to >= N) { if (onDone) onDone(); return; }
        busy = true; W = nav.clientWidth || 360;
        var from = cur, x1 = cx(to), x0 = from < 0 ? x1 : cx(from), D0 = from < 0 ? 0 : D, t0 = performance.now();
        var swapped = false;
        items.forEach(function (el) { el.classList.remove('active'); });
        _bubble.style.opacity = 1; if (from >= 0) showIcon(from);
        (function step(now) {
          var p = Math.min(1, (now - t0) / DUR);
          var close = sine(seg(p, 0, .36)), move = ease(seg(p, .18, .82)), open = sine(seg(p, .64, 1));
          var d = p < .5 ? D0 * (1 - close) : D * open;
          var arc = Math.sin(move * Math.PI) * 18;
          draw(lerp(x0, x1, move), d, d - 34 - (1 - d / D) * 20 - arc);
          if (move > .5 && !swapped) { swapped = true; showIcon(to); }
          if (p < 1) return requestAnimationFrame(step);
          cur = to; items[to].classList.add('active'); rest(); busy = false;
          if (onDone) onDone();
        })(t0);
      }
      window.addEventListener('resize', function () { if (!busy) rest(); });
      rest();

      /* Auto-cycle: tampilkan perpindahan dengan sendirinya. */
      var autoGo = function () { go((cur + 1) % N); };
      var play = function () { if (!_timer) _timer = setInterval(autoGo, 2400); };
      var stop = function () { if (_timer) { clearInterval(_timer); _timer = null; } };

      if (!reduce.matches && 'requestAnimationFrame' in window && 'IntersectionObserver' in window) {
        new IntersectionObserver(function (entries) {
          entries.forEach(function (en) { en.isIntersecting ? play() : stop(); });
        }, { threshold: 0.35 }).observe(show);
        if (reduce.addEventListener) reduce.addEventListener('change', function (e) { e.matches ? stop() : play(); });
      }
    }
  }

  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();