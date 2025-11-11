document.addEventListener('DOMContentLoaded', () => {

  const IMAGE_CDN_BASE = 'https://cdn.jsdelivr.net/gh/jinjyweb/jinjyweb.github.io@main/';
  const isAbsolute = (url) => /^https?:\/\//i.test(url);
  const fixExternalUrl = (url) => url ? url.replace(/^https?:\/\/imgur\.com\//i, 'https://i.imgur.com/') : url;
  const toCdnUrl = (path) => {
    if (!path) return path;
    const fixed = fixExternalUrl(path);
    if (isAbsolute(fixed)) return fixed;
    if (!IMAGE_CDN_BASE) return fixed;
    return IMAGE_CDN_BASE.replace(/\/$/, '/') + fixed.replace(/^\//, '');
  };
  const feed = document.getElementById('feed');
  if (!feed) return;

  const posts = [
    {
      id: 'p1',
      img: 'gallery/corsica.JPG',
      alt: 'Corsica 2022',
      date: '2022-08-06',
      location: 'Corsica, France',
      caption: 'summer might be my favorite season after all'
    },
    {
      id: 'p2',
      img: 'https://i.imgur.com/p1ssCsz.jpeg',
      alt: 'Tulipes',
      date: '2023-04-16',
      location: 'Paris 2ᵉ',
      caption: 'tulips will always brighten up my day'
    },
    {
      id: 'p3',
      img: 'https://i.imgur.com/dwVX3Nf.jpeg',
      alt: 'GEMINI',
      date: '2025-10-31',
      location: 'Paris, 11ᵉ',
      caption: 'Made me want to go to the moon 🌙'
    },
    {
      id: 'p4',
      img: 'https://i.imgur.com/WKhwWpl.jpeg',
      alt: 'pH mètre',
      date: '2024-04-25',
      location: 'Paris',
      caption: 'First time programming a pH meter with Arduino. Fun!'
    },
    {
      id: 'p5',
      img: 'https://i.imgur.com/a4y5DB6.jpeg',
      alt: 'Katsu Curry',
      date: '2025-08-08',
      location: 'Paris, 3ᵉ',
      caption: 'I love japanese curry and chicken katsu.'
    },
    {
      id: 'p6',
      img: 'https://i.imgur.com/tp93pxu.jpeg',
      alt: 'balance',
      date: '2023-06-30',
      location: 'Beijing, China',
      caption: 'not one gram more, not one gram less'
    },
    {
      id: 'p7',
      img: 'https://i.imgur.com/c7p3SsM.jpeg',
      alt: 'Izumi Ramen',
      date: '2025-05-20',
      location: 'Izumi Ramen, Strasbourg',
      caption: 'yuzu ramen?'
    },
    {
      id: 'p8',
      img: 'https://i.imgur.com/vepXj4a.jpeg',
      alt: 'Jaune Citron',
      date: '2025-06-07',
      location: 'Jaune Citron, Strasbourg',
      caption: 'best pastry shop in town!'
    },
    {
      id: 'p9',
      img: 'https://i.imgur.com/EuGoaDM.jpeg',
      alt: 'Tarbouche',
      date: '2025-06-01',
      location: 'Tarbouche, Strasbourg',
      caption: 'delish'
    },
    {
      id: 'p10',
      img: 'https://i.imgur.com/5Vt5XPn.jpeg',
      alt: 'Kebs Baba',
      date: '2024-06-14',
      location: 'Kebs Baba, Strasbourg',
      caption: 'Kebs Baba never disappoints'
    },
    {
      id: 'p11',
      img: 'https://i.imgur.com/9DfS9aT.jpeg',
      alt: 'Al Diwan',
      date: '2025-06-20',
      location: 'Paris, 3ᵉ',
      caption: 'lebanese food at its finest'
    },
    {
      id: 'p12',
      img: 'https://i.imgur.com/an3gqUE.jpeg',
      alt: 'pho soup',
      date: '2025-06-29',
      location: 'Paris 13ᵉ',
      caption: 'what\'s better than eat a hot bowl of pho in summer?'
    },
    {
      id: 'p13',
      img: 'https://i.imgur.com/n0fkMyN.jpeg',
      alt: 'Nanaumi',
      date: '2025-07-12',
      location: 'Nanaumi, Paris 2ᵉ',
      caption: 'sushi cravings satisfied'
    },
    {
      id: 'p14',
      img: 'https://i.imgur.com/uBuqAie.jpeg',
      alt: 'tonkatsu',
      date: '2025-07-19',
      location: 'Tonkatsu Tombo, Paris 15ᵉ',
      caption: 'my love for japanese food knows no bounds'
    },
    {
      id: 'p15',
      img: 'https://i.imgur.com/rs5sTLt.jpeg',
      alt: 'brownie cookies',
      date: '2025-07-26',
      location: 'at home',
      caption: 'they were SO good, I loved baking these'
    },
    {
      id: 'p16',
      img: 'https://i.imgur.com/IvS7xKz.jpeg',
      alt: 'Noodles',
      date: '2025-08-21',
      location: 'Chez Haki, Paris 3ᵉ',
      caption: 'Chinese noodles soup to warm the soul'
    },
    {
      id: 'p17',
      img: 'https://i.imgur.com/cFMehQb.jpeg',
      alt: 'Meet Fresh',
      date: '2025-08-21',
      location: 'Meet Fresh, Paris 9ᵉ',
      caption: 'they finally opened in France??'
    },
    {
      id: 'p18',
      img: 'https://i.imgur.com/ns0fkhA.jpeg',
      alt: 'Colmar',
      date: '2025-06-30',
      location: 'Colmar, France',
      caption: 'might be a food influencer one day...'
    },
    {
      id: 'p19',
      img: 'https://i.imgur.com/njr7qg9.jpeg',
      alt: 'Maharaja',
      date: '2025-09-10',
      location: 'Maharaja, Strasbourg',
      caption: 'hands down the best indian food in town'
    },
    {
      id: 'p20',
      img: 'https://i.imgur.com/VTxiOiD.jpeg',
      alt: 'kayak',
      date: '2025-09-13',
      location: 'Strasbourg, France',
      caption: 'kayaking on the Ill river??'
    },
    {
      id: 'p21',
      img: 'https://i.imgur.com/4IiNry1.jpeg',
      alt: 'Tzatzi',
      date: '2025-09-14',
      location: 'Tzatzi, Strasbourg',
      caption: 'feta cheese with honey combo is delicious'
    },
    {
      id: 'p22',
      img: 'https://i.imgur.com/JnlzrjS.jpeg',
      alt: 'Elodie & Jimmy',
      date: '2025-09-15',
      location: 'Elodie & Jimmy, Strasbourg',
      caption: 'the goyave meringue was excellent'
    },
    {
      id: 'p23',
      img: 'https://i.imgur.com/l3oAPhv.jpeg',
      alt: 'Schatzi',
      date: '2025-09-27',
      location: 'Schatzi, Strasbourg',
      caption: 'eating flammekueche in Strasbourg is a must'
    },
    {
      id: 'p24',
      img: 'https://i.imgur.com/h2BIKft.jpeg',
      alt: 'Puré candy',
      date: '2025-10-14',
      location: 'at home',
      caption: 'A Star shaped candy in the pack?? might be my lucky day (no)'
    },
    {
      id: 'p25',
      img: 'https://i.imgur.com/9YhmEtx.jpeg',
      alt: 'La Taverne de Zhao',
      date: '2025-10-31',
      location: 'La Taverne de Zhao, Paris 1ᵉ',
      caption: 'they do sesame ice cream with chili oil here, and I like it'
    },
    {
      id: 'p26',
      img: 'https://i.imgur.com/Ae2fqm1.jpeg',
      alt: 'Aki Pâtisserie',
      date: '2025-10-31',
      location: 'Aki, Paris 1ᵉ',
      caption: 'love me some matcha desserts'
    },
    {
      id: 'p27',
      img: 'https://i.imgur.com/FVP7rNi.jpeg',
      alt: 'Matsumotoya',
      date: '2025-11-03',
      location: 'Matsumotoya, Strasbourg',
      caption: 'was told it was the best japanese in Strasbourg...'
    },
    {
      id: 'p28',
      img: 'https://i.imgur.com/Au0MUNn.jpeg',
      alt: "Sweetea's",
      date: '2025-10-29',
      location: 'Sweetea\'s, Paris 13ᵉ',
      caption: 'korean food goes best with bubble tea'
    }
  ];

  function relativeTime(iso) {
    const d = new Date(iso);
    if (isNaN(d)) return iso;
    const diff = Date.now() - d.getTime();
    const sec = diff / 1000;
    const min = sec / 60;
    const hr = min / 60;
    const day = hr / 24;
    const mon = day / 30;
    const yr = day / 365;
    if (sec < 60) return `${Math.floor(sec)}s ago`;
    if (min < 60) return `${Math.floor(min)}m ago`;
    if (hr < 24) return `${Math.floor(hr)}h ago`;
    if (day < 30) return `${Math.floor(day)}d ago`;
    if (mon < 12) return `${Math.floor(mon)}mo ago`;
    return `${Math.floor(yr)}y ago`;
  }

  function renderPost(p) {
    const card = document.createElement('article');
    card.className = 'feed-card';
    const timeStr = relativeTime(p.date);
    const locStr = p.location ? ` · ${p.location}` : '';
    const imgUrl = toCdnUrl(p.img);
    card.innerHTML = `
      <header class="feed-card__head">
        <img class="feed-card__avatar" src="ProfilePic.jpg" alt="ccjinjy profile" width="40" height="40" loading="lazy" decoding="async" />
        <div class="feed-card__meta">
          <div class="feed-card__user">ccjinjy</div>
          <div class="feed-card__sub">${timeStr}${locStr}</div>
        </div>
      </header>
      <div class="feed-card__media">
        <img src="${imgUrl}" alt="${p.alt || ''}" loading="lazy" decoding="async" width="640" height="640" sizes="(max-width: 640px) 100vw, 640px">
      </div>
      <div class="feed-card__caption">
        <span class="user">ccjinjy</span>
        <span class="text">${p.caption || ''}</span>
      </div>`;
    return card;
  }

  posts
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .forEach(p => feed.appendChild(renderPost(p)));
});
