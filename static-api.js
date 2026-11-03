// 9Crabs – chế độ TĨNH cho GitHub Pages (không có server): chặn fetch('/api/…') và trả dữ liệu từ data/*.json.
// Kích hoạt khi chạy trên *.github.io hoặc <html data-static>. Nạp TRƯỚC i18n.js và app.js.
(() => {
  const laTinh = /\.github\.io$/.test(location.hostname) || document.documentElement.hasAttribute('data-static');
  if (!laTinh) return;
  window.NINECRABS_STATIC = true;
  const goc = window.fetch.bind(window);
  const bo = {};
  const nap = async (ten) => (bo[ten] ??= goc(`data/${ten}.json`, { cache: 'no-cache' }).then((r) => r.json()));
  const json = (obj, status = 200) => new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json; charset=utf-8' } });
  const lang = () => (window.NineCrabs?.lang?.() || 'vi');
  const MSG = {
    demo: { vi: 'Đây là bản demo tĩnh. Để đặt hàng hoặc đăng ký thành viên, vui lòng nhắn Zalo 0909 999 999.', en: 'This is a static demo. To order or join membership, please message us on Zalo 0909 999 999.', ko: '정적 데모 버전입니다. 주문 또는 멤버십 가입은 Zalo 0909 999 999로 문의해 주세요.' },
    khongThay: { vi: 'Không tìm thấy bài viết', en: 'Article not found', ko: '글을 찾을 수 없습니다' },
  };
  const msg = (k) => MSG[k][lang()] || MSG[k].vi;

  // Tính tiền giỏ hàng phía máy khách – cùng quy tắc với server (phí giao, ngưỡng miễn phí, giảm % từ 2 cua)
  async function baoGia(items) {
    const [sp, ch] = await Promise.all([nap('products'), nap('settings')]);
    const so = (k) => Number(ch[k]) || 0;
    const chiTiet = []; let soCua = 0;
    for (const it of items || []) {
      const s = sp.find((x) => x.id === Number(it.id)); if (!s) continue;
      const sl = Math.max(1, Math.min(99, Number(it.so_luong) || 1)); const gia = s.gia_khuyen_mai ?? s.gia;
      chiTiet.push({ san_pham_id: s.id, ten: s.ten, gia, so_luong: sl, loai: s.loai });
      if (s.loai === 'cua') soCua += s.ten.includes('2 cua') ? 2 * sl : sl;
    }
    const tamTinh = chiTiet.reduce((a, b) => a + b.gia * b.so_luong, 0);
    const giamGiaMoTa = []; let pt = 0;
    if (soCua >= 2 && so('giam_2_cua_phan_tram') > 0) { pt += so('giam_2_cua_phan_tram'); giamGiaMoTa.push(`Ưu đãi từ 2 cua: -${so('giam_2_cua_phan_tram')}%`); }
    const giamGia = Math.round(tamTinh * pt / 100); const sauGiam = tamTinh - giamGia;
    const phiGiao = tamTinh === 0 ? 0 : sauGiam >= so('nguong_mien_phi') ? 0 : so('phi_giao');
    return { chi_tiet: chiTiet, tam_tinh: tamTinh, giam_gia: giamGia, giam_gia_mo_ta: giamGiaMoTa, phi_giao: phiGiao, tong: sauGiam + phiGiao, so_cua: soCua, hang_khach: null };
  }

  window.fetch = async (input, init = {}) => {
    const url = typeof input === 'string' ? input : input.url;
    if (!/^\/api\//.test(url)) return goc(input, init);
    const u = new URL(url, location.origin); const p = u.pathname.replace(/^\/api/, ''); const q = u.searchParams;
    const method = (init.method || 'GET').toUpperCase();
    let body = {}; try { body = init.body ? JSON.parse(init.body) : {}; } catch {}
    try {
      if (p === '/health') return json({ ok: true, static: true });
      if (p === '/settings/public') return json(await nap('settings'));
      if (p === '/products') return json(await nap('products'));
      if (p === '/articles') {
        let ds = await nap('articles');
        if (q.get('type')) ds = ds.filter((b) => b.loai === q.get('type'));
        if (q.get('featured')) ds = ds.filter((b) => b.noi_bat);
        return json(ds.slice(0, Number(q.get('limit')) || ds.length));
      }
      const m = p.match(/^\/articles\/slug\/(.+)$/);
      if (m) { const b = (await nap('articles-full')).find((x) => x.slug === decodeURIComponent(m[1])); return b ? json(b) : json({ loi: msg('khongThay') }, 404); }
      if (p === '/quote' && method === 'POST') return json(await baoGia(body.items));
      if (p === '/orders' && method === 'POST') return json({ loi: msg('demo') }, 400);
      if (p.startsWith('/membership/')) return json({ loi: msg('demo') }, 400);
      if (p.startsWith('/orders/track/')) return json({ loi: msg('demo') }, 404);
      return json({ loi: msg('demo') }, 404);
    } catch (e) { return json({ loi: String(e.message || e) }, 500); }
  };

  // Dải thông báo demo trên cùng trang
  document.addEventListener('DOMContentLoaded', () => {
    const b = document.createElement('div');
    b.className = 'demo-banner';
    b.style.cssText = 'background:#FFBD59;color:#012850;font:600 .8rem/1.4 "Be Vietnam Pro",Arial,sans-serif;text-align:center;padding:.45rem 1rem;letter-spacing:.02em';
    const ve = () => { b.innerHTML = `🧪 ${msg('demo')} <a href="https://zalo.me/0909999999" style="text-decoration:underline;font-weight:800">Zalo →</a>`; };
    ve(); document.body.prepend(b);
    document.addEventListener('9crabs:lang', ve);
    // Ẩn liên kết quản trị (không có server) – dùng CSS vì chân trang được vẽ sau bằng JS
    const st = document.createElement('style'); st.textContent = 'a[href="admin/"]{display:none!important}'; document.head.appendChild(st);
  });
})();
