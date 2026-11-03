/* 9Crabs logo kit: builds colour variants of logo-9crabs.png in the browser and applies them.
   <img data-logo="reverse">, <svg><image data-logo="icon"></svg>, <div data-logo-bg="icon">.
   Variants: primary, reverse, monoCream, monoNavy, icon, iconReverse, iconMono. */
(function () {
  var CREAM = [255, 244, 230], NAVY = [1, 40, 80];
  var WAVE_DARK_REV = [62, 142, 216], WAVE_LIGHT_REV = [140, 200, 242];

  function load(src) {
    return new Promise(function (res, rej) {
      var img = new Image();
      img.onload = function () { res(img); };
      img.onerror = rej;
      img.src = src;
    });
  }

  /* 0 transparent, 1 red, 2 navy, 3 dark wave, 4 light wave, 5 white highlight */
  function cls(r, g, b, a) {
    if (a < 8) return 0;
    if (r > 140 && g < 130 && b < 110) return 1;
    if (r > 190 && g > 190 && b > 190) return 5;
    if (b < 112) return 2;
    if (g < 100) return 3;
    return 4;
  }

  function build(img) {
    var W = img.naturalWidth, H = img.naturalHeight;
    var c = document.createElement('canvas'); c.width = W; c.height = H;
    var x = c.getContext('2d', { willReadFrequently: true });
    x.drawImage(img, 0, 0);
    var px = x.getImageData(0, 0, W, H).data;
    var K = new Uint8Array(W * H);
    var all = { x0: W, y0: H, x1: 0, y1: 0 }, redMaxX = 0, lettersTop = H;
    for (var y = 0; y < H; y++) for (var X = 0; X < W; X++) {
      var p = y * W + X, i = p * 4, k = cls(px[i], px[i + 1], px[i + 2], px[i + 3]);
      K[p] = k; if (!k) continue;
      if (X < all.x0) all.x0 = X; if (X > all.x1) all.x1 = X;
      if (y < all.y0) all.y0 = y; if (y > all.y1) all.y1 = y;
      if (k === 1 && X > redMaxX) redMaxX = X;
    }
    for (var y2 = 0; y2 < H; y2++) for (var X2 = redMaxX + 1; X2 < W; X2++) {
      if (K[y2 * W + X2] === 2) { if (y2 < lettersTop) lettersTop = y2; break; }
    }
    var keepIcon = function (k, X, y) { return k === 1 || ((k === 2 || k === 5) && y < lettersTop - 8); };
    var iconBox = { x0: W, y0: H, x1: 0, y1: 0 };
    for (var y3 = 0; y3 < H; y3++) for (var X3 = 0; X3 < W; X3++) {
      var k3 = K[y3 * W + X3]; if (!k3 || !keepIcon(k3, X3, y3)) continue;
      if (X3 < iconBox.x0) iconBox.x0 = X3; if (X3 > iconBox.x1) iconBox.x1 = X3;
      if (y3 < iconBox.y0) iconBox.y0 = y3; if (y3 > iconBox.y1) iconBox.y1 = y3;
    }
    function make(box, recolor, keep) {
      var pad = 6, w = box.x1 - box.x0 + 1 + pad * 2, h = box.y1 - box.y0 + 1 + pad * 2;
      var o = document.createElement('canvas'); o.width = w; o.height = h;
      var ox = o.getContext('2d'), od = ox.createImageData(w, h), d = od.data;
      for (var yy = box.y0; yy <= box.y1; yy++) for (var xx = box.x0; xx <= box.x1; xx++) {
        var p = yy * W + xx, k = K[p]; if (!k) continue;
        if (keep && !keep(k, xx, yy)) continue;
        var i = p * 4, j = ((yy - box.y0 + pad) * w + (xx - box.x0 + pad)) * 4;
        var col = recolor ? recolor(k) : null;
        if (col === false) continue;
        d[j] = col ? col[0] : px[i]; d[j + 1] = col ? col[1] : px[i + 1]; d[j + 2] = col ? col[2] : px[i + 2]; d[j + 3] = px[i + 3];
      }
      ox.putImageData(od, 0, 0);
      return o;
    }
    var rev = function (k) { return k === 2 ? CREAM : k === 3 ? WAVE_DARK_REV : k === 4 ? WAVE_LIGHT_REV : null; };
    var mono = function (col) { return function (k) { return k === 5 ? false : col; }; };
    return {
      primary: make(all),
      reverse: make(all, rev),
      monoCream: make(all, mono(CREAM)),
      monoNavy: make(all, mono(NAVY)),
      icon: make(iconBox, null, keepIcon),
      iconReverse: make(iconBox, function (k) { return k === 2 ? CREAM : k === 5 ? NAVY : null; }, keepIcon),
      iconMono: make(iconBox, mono(CREAM), keepIcon)
    };
  }

  function toURL(canvas) {
    return new Promise(function (res) {
      if (canvas.toBlob) canvas.toBlob(function (b) { res(b ? URL.createObjectURL(b) : canvas.toDataURL()); }, 'image/png');
      else res(canvas.toDataURL());
    });
  }

  window.LOGO9 = load('logo-9crabs.png').then(function (img) {
    var v = build(img), names = Object.keys(v);
    return Promise.all(names.map(function (n) { return toURL(v[n]); })).then(function (urls) {
      var out = { canvas: v, url: {} };
      names.forEach(function (n, i) { out.url[n] = urls[i]; });
      document.querySelectorAll('[data-logo]').forEach(function (el) {
        var u = out.url[el.getAttribute('data-logo')]; if (!u) return;
        if (el.tagName.toLowerCase() === 'img') el.src = u; else el.setAttribute('href', u);
      });
      document.querySelectorAll('[data-logo-bg]').forEach(function (el) {
        var u = out.url[el.getAttribute('data-logo-bg')]; if (u) el.style.backgroundImage = 'url("' + u + '")';
      });
      document.documentElement.classList.add('logo-ready');
      return out;
    });
  }).catch(function (e) { console.warn('9Crabs logo kit:', e); return null; });
})();
