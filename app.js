// 9Crabs – giao diện người dùng: header/footer dùng chung, giỏ hàng, thực đơn từ API, đa ngôn ngữ (cần i18n.js trước)
(() => {
  const vnd = (n) => (Number(n) || 0).toLocaleString('vi-VN') + 'đ';
  const thoat = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const C9 = (window.NineCrabs = window.NineCrabs || {});
  Object.assign(C9, { vnd, thoat, sanPham: [], cauHinh: {} });
  const t = C9.t || ((k, d) => d);
  C9.TEN_LOAI = { cua: 'Cua Cà Mau', cualot: 'Cua lột', combo: 'Hải sản thố & Combo', haisan: 'Hải sản khác', com: 'Cơm gia đình', tiec: 'Tiệc & Catering', kem: 'Món kèm' };
  C9.THU_TU_LOAI = ['cua', 'cualot', 'combo', 'haisan', 'com', 'tiec', 'kem'];
  C9.MO_TA_LOAI = {
    cua: 'Cua biển Cà Mau đánh bắt tự nhiên, 6 vị sốt đặc trưng, nấu ngay khi bạn đặt.',
    cualot: 'Cua lột ăn nguyên con, chiên giòn và xóc sốt kiểu Singapore – trứng muối, sốt ớt, tiêu đen, ngũ cốc.',
    combo: 'Thố hải sản xóc sốt, bún riêu và combo tiệc gia đình – đủ cho cả bàn.',
    haisan: 'Tôm hùm, cá chẽm, sò điệp, nghêu – tươi sống mỗi ngày.',
    com: 'Mâm cơm nhà đủ món mặn, canh, rau – từ 90.000đ/người.',
    tiec: 'Tiệc mini và catering tận nơi, có nhân viên bày biện.',
    kem: 'Món kèm không thể thiếu bên mâm cua.',
  };
  const tenLoai = (l) => t('loai.' + l, C9.TEN_LOAI[l] || l);
  const moTaLoai = (l) => t('mota.' + l, C9.MO_TA_LOAI[l] || '');
  const truong = C9.truong || ((sp, k) => sp[k]);
  const tag = C9.tag || ((x) => x);

  /* ---------- Header & footer dùng chung ---------- */
  function veHeader() {
    const h = document.querySelector('header.dau-trang[data-trang]'); if (!h) return;
    const trang = h.dataset.trang;
    const a = (href, vi, key, k2) => `<li><a href="${href}" ${trang === k2 ? 'class="hien-tai"' : ''}>${t(key, vi)}</a></li>`;
    h.innerHTML = `<div class="khung">
      <a class="logo" href="index.html"><img src="img/logo.png" alt="9Crabs"></a>
      <nav class="menu-chinh"><ul>
        ${a('index.html', 'Trang chủ', 'nav.home', 'home')}${a('menu.html', 'Thực đơn', 'nav.menu', 'menu')}${a('cooking.html', 'Góc bếp', 'nav.cooking', 'cooking')}
        ${a('news.html', 'Tin tức', 'nav.news', 'news')}${a('membership.html', 'Thành viên', 'nav.member', 'member')}${a('index.html#khuyen-mai', 'Khuyến mãi', 'nav.promo', '')}${a('contact.html', 'Đặt bàn', 'nav.reserve', 'contact')}
      </ul></nav>
      <div class="dau-phai">
        ${C9.boChonNgonNgu ? C9.boChonNgonNgu() : ''}
        <div class="hotline">${t('hotline', 'Hotline 24/7')}<b class="so-hotline">${C9.cauHinh.hotline || '0909 999 999'}</b></div>
        <a class="gio-hang" href="checkout.html">${t('gio-hang', 'Giỏ hàng')} <span class="tong">0đ</span><span class="so">0</span></a>
        <button class="mo-menu" aria-label="Menu">☰</button>
      </div></div>`;
    h.querySelector('.mo-menu').addEventListener('click', () => h.querySelector('nav.menu-chinh').classList.toggle('mo'));
  }
  function veFooter() {
    const f = document.querySelector('footer.chan-trang[data-tu-dong]'); if (!f) return;
    const ch = C9.cauHinh; const gio = ch.gio_giao_bat_dau ? `${ch.gio_giao_bat_dau} – ${ch.gio_giao_ket_thuc}` : '11:00 – 22:00';
    f.innerHTML = `<div class="khung">
      <div class="cot-chan">
        <div><h4>${t('chan.lien-he', 'Liên hệ')}</h4><ul><li>123 Nguyễn Văn Linh, Quận 7, TP.HCM</li><li>45 Lê Lợi, Quận 1 · 88 Võ Văn Ngân, Thủ Đức</li><li>${t('chan.hotline', 'Hotline')}: <a href="tel:0909999999" class="so-hotline">${ch.hotline || '0909 999 999'}</a></li><li>Email: hello@9crabs.com</li></ul><ul style="margin-top:.8rem"><li><a href="cooking.html">${t('nav.cooking', 'Góc bếp')}</a> · <a href="news.html">${t('nav.news', 'Tin tức')}</a> · <a href="membership.html">${t('nav.member', 'Thành viên')}</a></li></ul></div>
        <div><div class="logo-chan"><img src="img/logo.png" alt="9Crabs"></div><p class="slogan">${t('chan.slogan', 'Cua ngon giao tận nhà')}</p><p style="font-size:.82rem;max-width:280px;margin:.5rem auto 0">${t('chan.gioi-thieu', 'Sinh ra từ tình yêu với cua Cà Mau, 9Crabs mang bữa tiệc hải sản nóng hổi đến bàn ăn gia đình bạn.')}</p>
          <div class="mang-xa-hoi"><a href="#" title="Facebook">f</a><a href="#" title="Instagram">◎</a><a href="#" title="TikTok">♪</a><a href="https://zalo.me/0909999999" title="Zalo">Z</a></div></div>
        <div><h4>${t('chan.gio', 'Giờ phục vụ')}</h4><ul><li>${t('chan.nha-hang', 'Nhà hàng: 10:00 – 22:30 mỗi ngày')}</li><li>${t('chan.giao', 'Giao hàng:')} <span class="gio-giao">${gio}</span></li><li>${t('chan.tu-van', 'Tư vấn Zalo: 24/7')}</li></ul>
          <h4 style="margin-top:1.4rem">${t('chan.thanh-toan', 'Thanh toán')}</h4><div class="thanh-toan"><span>VISA</span><span>Master</span><span>MoMo</span><span>ZaloPay</span><span>COD</span></div></div>
      </div>
      <div class="ban-quyen"><b>9Crabs</b>${t('chan.ban-quyen', '© 2026 9crabs.com. Bảo lưu mọi quyền.')} · <a href="admin/">${t('chan.quan-tri', 'Quản trị')}</a></div>
    </div>`;
  }

  /* ---------- Giỏ hàng: [{id, so_luong}] ---------- */
  function docGio() { try { const g = JSON.parse(localStorage.getItem('9crabs-cart') || '[]'); return Array.isArray(g) ? g.filter((x) => x && x.id) : []; } catch { return []; } }
  function luuGio(g) { try { localStorage.setItem('9crabs-cart', JSON.stringify(g)); } catch {} capNhatGioHeader(); }
  C9.docGio = docGio; C9.luuGio = luuGio;
  C9.themGio = (id, sl = 1) => { const g = docGio(); const it = g.find((x) => x.id === id); if (it) it.so_luong = Math.min(99, it.so_luong + sl); else g.push({ id, so_luong: sl }); luuGio(g); };
  C9.giaCua = (id) => { const s = C9.sanPham.find((x) => x.id === id); return s ? (s.gia_khuyen_mai ?? s.gia) : 0; };
  function capNhatGioHeader() {
    const g = docGio();
    document.querySelectorAll('.gio-hang .so').forEach((e) => (e.textContent = g.reduce((a, b) => a + b.so_luong, 0)));
    document.querySelectorAll('.gio-hang .tong').forEach((e) => (e.textContent = vnd(g.reduce((a, b) => a + C9.giaCua(b.id) * b.so_luong, 0))));
  }
  C9.capNhatGioHeader = capNhatGioHeader;
  C9.toast = (msg) => { let el = document.getElementById('toast'); if (!el) { el = document.createElement('div'); el.id = 'toast'; document.body.appendChild(el); } el.textContent = msg; el.classList.add('hien'); clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove('hien'), 1800); };

  /* ---------- Tải sản phẩm & cấu hình ---------- */
  C9.san = Promise.all([
    fetch('/api/products').then((r) => r.json()).catch(() => []),
    fetch('/api/settings/public').then((r) => r.json()).catch(() => ({})),
  ]).then(([sp, ch]) => {
    C9.sanPham = sp; C9.cauHinh = ch;
    const tb = document.querySelector('.thanh-tren .khung > span'); if (tb && ch.thong_bao_dau_trang) { tb.dataset.vi = ch.thong_bao_dau_trang; tb.textContent = t(tb.dataset.i18n, ch.thong_bao_dau_trang); }
    if (ch.hotline) document.querySelectorAll('.so-hotline').forEach((e) => (e.textContent = ch.hotline));
    if (ch.gio_giao_bat_dau) document.querySelectorAll('.gio-giao').forEach((e) => (e.textContent = `${ch.gio_giao_bat_dau} – ${ch.gio_giao_ket_thuc}`));
    capNhatGioHeader();
    document.dispatchEvent(new CustomEvent('9crabs:ready'));
    return C9;
  });

  /* ---------- Dòng món kiểu bảng in ---------- */
  C9.anhMon = (s) => s.hinh ? `<img src="${thoat(s.hinh)}" alt="${thoat(truong(s, 'ten'))}" loading="lazy">` : `<div class="anh-thay">${s.icon}</div>`;
  C9.dongMon = (s) => `<div class="dong-mon" data-loai="${s.loai}" data-id="${s.id}">
    <div class="ten">${thoat(truong(s, 'ten'))}${s.tag ? ` <span class="tag">${thoat(tag(s.tag))}</span>` : ''}</div>
    <div class="gia">${s.gia_khuyen_mai ? `<s>${vnd(s.gia)}</s>` : ''}${vnd(s.gia_khuyen_mai ?? s.gia)}</div>
    <button class="them" data-id="${s.id}" title="${t('them-gio', 'Thêm vào giỏ')}" aria-label="${t('them-gio', 'Thêm vào giỏ')}">+</button>
    <p class="mo">${thoat(truong(s, 'mo_ta'))} ${truong(s, 'don_vi') ? `<small>${thoat(truong(s, 'don_vi'))}</small>` : ''}</p></div>`;

  /** Vẽ thực đơn theo nhóm: ảnh đại diện nhóm (món đầu tiên có ảnh) + danh sách dòng */
  C9.veThucDon = (khung, { nhom = C9.THU_TU_LOAI, gioiHanMoiNhom = 0, tuKhoa = '' } = {}) => {
    const tk = tuKhoa.trim().toLowerCase();
    const khop = (s) => !tk || [s.ten, s.mo_ta, truong(s, 'ten'), truong(s, 'mo_ta')].some((x) => (x || '').toLowerCase().includes(tk));
    const html = nhom.map((loai, i) => {
      let ds = C9.sanPham.filter((s) => s.loai === loai && khop(s));
      if (!ds.length) return '';
      const anh = ds.find((s) => s.hinh) || ds[0];
      if (gioiHanMoiNhom) ds = ds.slice(0, gioiHanMoiNhom);
      return `<article class="menu-hang" id="${loai}">
        <div class="menu-anh">${C9.anhMon(anh)}<span class="chu-anh">${tenLoai(loai)}</span></div>
        <div class="menu-ds"><div class="ornament"><span>${String(i + 1).padStart(2, '0')}</span></div><h3 class="tieu-de-nhom">${tenLoai(loai)}</h3>
          <p class="mo-ta" style="margin:-.8rem auto 1.4rem;font-size:.85rem">${moTaLoai(loai)}</p>${ds.map(C9.dongMon).join('')}</div></article>`;
    }).join('');
    khung.innerHTML = html || `<p class="mo-ta">${t('td.khong-thay', 'Không tìm thấy món nào phù hợp.')}</p>`;
  };

  /* ---------- Bài viết (Góc bếp / Tin tức) ---------- */
  C9.truongBai = truong;
  const DO_KHO = { de: ['Dễ', 'Easy', '쉬움'], vua: ['Vừa', 'Medium', '보통'], kho: ['Khó', 'Hard', '어려움'] };
  const ngayDep = (x) => { const d = new Date(x); return isNaN(d) ? (x || '') : d.toLocaleDateString({ vi: 'vi-VN', en: 'en-GB', ko: 'ko-KR' }[C9.lang?.() || 'vi'], { day: 'numeric', month: 'short', year: 'numeric' }); };
  C9.theBai = (b) => {
    const laCooking = b.loai === 'cooking'; const i = { vi: 0, en: 1, ko: 2 }[C9.lang?.() || 'vi'] || 0;
    const meta = laCooking ? `⏱ ${b.thoi_gian} ${t('bv.phut', 'phút')} · ${(DO_KHO[b.do_kho] || [b.do_kho])[i] || ''}${b.khau_phan ? ' · 👥 ' + thoat(b.khau_phan) : ''}` : `📅 ${ngayDep(b.ngay)}`;
    return `<a class="the-bai" href="article.html?bai=${encodeURIComponent(b.slug)}">
      <div class="the-bai-anh">${b.hinh ? `<img src="${thoat(b.hinh)}" alt="" loading="lazy">` : ''}<span class="the-bai-loai">${laCooking ? t('nav.cooking', 'Góc bếp') : t('nav.news', 'Tin tức')}</span></div>
      <div class="than"><div class="nho">${meta}</div><h3>${thoat(truong(b, 'tieu_de'))}</h3><p>${thoat(truong(b, 'tom_tat'))}</p><span class="doc-tiep">${t('bv.doc-tiep', 'Đọc tiếp')} →</span></div></a>`;
  };
  const khungBai = [...document.querySelectorAll('[data-bai-viet]')];
  const duLieuBai = new Map();
  async function veBaiViet() {
    for (const k of khungBai) {
      const loai = k.dataset.baiViet; const gh = k.dataset.gioiHan || 0;
      if (!duLieuBai.has(k)) duLieuBai.set(k, await fetch(`/api/articles?${loai ? 'type=' + loai + '&' : ''}${gh ? 'limit=' + gh : ''}`).then((r) => r.json()).catch(() => []));
      const ds = duLieuBai.get(k);
      k.innerHTML = ds.length ? ds.map(C9.theBai).join('') : `<p class="mo-ta">${t('bv.chua-co', 'Chưa có bài viết nào.')}</p>`;
    }
  }

  let veThucDonTrang = null;
  document.addEventListener('DOMContentLoaded', () => {
    veHeader(); veFooter(); capNhatGioHeader(); C9.apDungNgonNgu?.();
    C9.san.then(() => { veHeader(); veFooter(); C9.apDungNgonNgu?.(); });
    if (khungBai.length) veBaiViet();

    // Nút thêm vào giỏ (uỷ quyền sự kiện)
    document.addEventListener('click', (e) => {
      const b = e.target.closest('button[data-id]'); if (!b) return;
      const id = +b.dataset.id; C9.themGio(id);
      const s = C9.sanPham.find((x) => x.id === id);
      C9.toast(t('toast.them', 'Đã thêm {ten} vào giỏ', { ten: s ? truong(s, 'ten') : t('toast.mon', 'món') }));
      const cu = b.innerHTML; b.innerHTML = '✓'; b.disabled = true; setTimeout(() => { b.innerHTML = cu; b.disabled = false; }, 900);
    });

    // Thực đơn tự động
    const khungTD = document.querySelector('[data-thuc-don]');
    if (khungTD) {
      const gioiHan = +khungTD.dataset.thucDon || 0;
      const nhom = khungTD.dataset.nhom ? khungTD.dataset.nhom.split(',') : undefined;
      veThucDonTrang = () => C9.veThucDon(khungTD, { nhom, gioiHanMoiNhom: gioiHan, tuKhoa: document.querySelector('.tim-mon')?.value || '' });
      C9.san.then(() => { veThucDonTrang(); const h = location.hash.slice(1); if (h && document.getElementById(h)) document.getElementById(h).scrollIntoView(); });
      document.querySelector('.tim-mon')?.addEventListener('input', veThucDonTrang);
      document.querySelectorAll('.loc [data-loai]').forEach((b) => b.addEventListener('click', () => {
        document.querySelectorAll('.loc [data-loai]').forEach((n) => n.classList.remove('hien')); b.classList.add('hien');
        const l = b.dataset.loai;
        if (l === 'tat-ca') window.scrollTo({ top: khungTD.offsetTop - 140, behavior: 'smooth' });
        else document.getElementById(l)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }));
      const loai = new URLSearchParams(location.search).get('loai');
      if (loai) C9.san.then(() => setTimeout(() => document.querySelector(`.loc [data-loai="${loai}"]`)?.click(), 100));
    }

    // Form liên hệ (chỉ hiển thị xác nhận)
    document.querySelector('form.form:not([data-thanh-toan])')?.addEventListener('submit', (e) => {
      e.preventDefault(); const tb = e.target.querySelector('.thong-bao'); tb.style.display = 'block';
      tb.textContent = t('lh.thong-bao', 'Cảm ơn bạn! 9Crabs đã nhận thông tin và sẽ liên hệ trong vòng 15 phút.'); e.target.reset();
    });

    // Đổi ngôn ngữ → vẽ lại phần sinh bằng JS
    document.addEventListener('9crabs:lang', () => { veHeader(); veFooter(); capNhatGioHeader(); veThucDonTrang?.(); if (khungBai.length) veBaiViet(); C9.apDungNgonNgu?.(); });
  });
})();
