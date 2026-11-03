// 9Crabs – đa ngôn ngữ (vi / en / ko). Nạp TRƯỚC app.js.
// Cách dùng trong HTML: data-i18n="khoa" (text), data-i18n-html="khoa" (HTML), data-i18n-ph="khoa" (placeholder).
// Tiếng Việt là nội dung gốc trong HTML nên từ điển chỉ cần en & ko; thiếu khoá → giữ tiếng Việt.
(() => {
  const NGON_NGU = { vi: 'Tiếng Việt', en: 'English', ko: '한국어' };
  const T = {
    /* ===== tiêu đề trang ===== */
    'title.home': { en: '9Crabs | Premium Ca Mau Crab – Delivered in 1 Hour', ko: '9Crabs | 프리미엄 까마우 게 – 1시간 배달' },
    'title.menu': { en: 'Menu | 9Crabs – Ca Mau Crab, Seafood, Rice Sets, Catering', ko: '메뉴 | 9Crabs – 까마우 게, 해산물, 밥상, 케이터링' },
    'title.cart': { en: 'Cart & Checkout | 9Crabs', ko: '장바구니 & 결제 | 9Crabs' },
    'title.contact': { en: 'Contact & Reservations | 9Crabs', ko: '연락 & 예약 | 9Crabs' },
    'title.cooking': { en: 'Cooking – How we prepare our crab | 9Crabs', ko: '요리 – 게 조리법 | 9Crabs' },
    'title.news': { en: 'News & Promotions | 9Crabs', ko: '뉴스 & 프로모션 | 9Crabs' },
    'title.member': { en: '9Crabs Membership – Points, tiers, free crab', ko: '9Crabs 멤버십 – 포인트, 등급, 게 증정' },
    'nav.cooking': { en: 'Cooking', ko: '요리법' }, 'nav.news': { en: 'News', ko: '뉴스' }, 'nav.member': { en: 'Membership', ko: '멤버십' },
    'loai.cualot': { en: 'Soft-Shell Crab', ko: '소프트쉘 크랩' }, 'loc.cualot': { en: 'Soft-shell', ko: '소프트쉘' },
    'mota.cualot': { en: 'Whole-eaten soft-shell crab, fried crisp and tossed Singapore-style – salted egg, chilli, black pepper, cereal.', ko: '통째로 먹는 소프트쉘 크랩을 바삭하게 튀겨 싱가포르식으로 버무렸습니다 – 솔티드 에그, 칠리, 블랙페퍼, 시리얼.' },
    'tag.Ăn chơi': { en: 'Snack', ko: '간식' }, 'tag.Singapore': { en: 'Singapore', ko: '싱가포르' },
    'gb.xem-cb': { en: 'Visit the Cooking page', ko: '요리법 보기' }, 'gb.xem-tt': { en: 'All news', ko: '뉴스 전체' }, 'cta.tv': { en: 'Membership card', ko: '멤버십 카드' },
    /* Góc bếp */
    'cb.orn': { en: '9Crabs kitchen', ko: '9Crabs 주방' }, 'cb.h1': { en: 'How we cook,<br>ingredients & secrets', ko: '조리법,<br>재료 & 비결' },
    'cb.p': { en: 'Every 9Crabs crab dish has its own story. See what we choose, how we cook it – and try it at home.', ko: '9Crabs의 모든 게 요리에는 이야기가 있습니다. 어떤 재료를 고르고 어떻게 조리하는지 보고 집에서도 시도해 보세요.' },
    'cb.cta-h2': { en: 'Love cooking, hate prepping?', ko: '요리는 좋지만 손질은 귀찮다면?' }, 'cb.cta-nho': { en: 'Cleaned live crab · Ready-made sauce · 1-hour delivery', ko: '손질된 활게 · 완성 소스 · 1시간 배달' },
    'cb.cta-p': { en: 'Order cleaned crab with 9Crabs sauce ready to go – 5 minutes in the wok and you have restaurant crab in your own kitchen.', ko: '손질된 게와 9Crabs 완성 소스를 주문하세요 – 웍에서 5분이면 집에서 레스토랑 게 요리가 완성됩니다.' },
    'cb.cta-nut': { en: 'View menu', ko: '메뉴 보기' },
    /* Tin tức */
    'tt2.orn': { en: 'News', ko: '뉴스' }, 'tt2.h1': { en: 'Latest news & programmes<br>from 9Crabs', ko: '9Crabs의<br>최신 소식 & 프로그램' },
    'tt2.p': { en: 'Openings, crab season, member deals and stories from behind the kitchen.', ko: '오픈 소식, 게 시즌, 회원 혜택, 주방 뒷이야기.' },
    'tt2.cta-h2': { en: 'Get deals first', ko: '혜택을 가장 먼저' }, 'tt2.cta-nho': { en: 'Members hear about every programme 24 hours early', ko: '회원은 모든 프로그램을 24시간 먼저 안내받습니다' },
    'tt2.cta-p': { en: 'Register for a free membership card to get promotions on Zalo and earn points on every order.', ko: '무료 멤버십 카드에 가입하고 Zalo로 프로모션을 받고 모든 주문에 포인트를 적립하세요.' },
    'tt2.cta-nut': { en: 'Join membership', ko: '멤버십 가입' },
    /* Chi tiết bài */
    'bv.dang-tai': { en: 'Loading article…', ko: '불러오는 중…' }, 'bv.khong-thay': { en: 'Article not found.', ko: '글을 찾을 수 없습니다.' }, 'bv.chua-co': { en: 'No articles yet.', ko: '아직 글이 없습니다.' },
    'bv.lien-quan': { en: 'Related', ko: '관련 글' }, 'bv.lien-quan-h2': { en: 'Keep reading', ko: '계속 읽기' }, 'bv.doc-tiep': { en: 'Read more', ko: '더 보기' },
    'bv.phut': { en: 'min', ko: '분' }, 'bv.nguyen-lieu': { en: 'Ingredients', ko: '재료' }, 'bv.cac-buoc': { en: 'Method', ko: '만드는 법' }, 'bv.meo': { en: 'Head chef’s tip', ko: '셰프의 팁' },
    'bv.luoi-nau': { en: 'Rather not cook? Order it', ko: '요리가 귀찮다면? 주문하기' }, 'bv.ve-goc-bep': { en: 'Back to Cooking', ko: '요리법으로' }, 'bv.ve-tin-tuc': { en: 'Back to News', ko: '뉴스로' },
    /* Thành viên */
    'tv.nho': { en: 'Membership programme', ko: '멤버십 프로그램' }, 'tv.h1': { en: 'The more crab you eat,<br>the <em>bigger the perks</em>', ko: '게를 많이 드실수록<br><em>혜택은 더 커집니다</em>' },
    'tv.p': { en: 'Free sign-up with your phone number. Earn points on every order, move up tiers automatically, get discounts at checkout and a free crab on your birthday.', ko: '전화번호로 무료 가입. 모든 주문에 포인트 적립, 자동 등급 승급, 결제 시 즉시 할인, 생일에 게 증정.' },
    'tv.dang-ky-ngay': { en: 'Sign up now', ko: '지금 가입' }, 'tv.tra-cuu': { en: 'Check points', ko: '포인트 조회' }, 'tv.hang-vang': { en: 'Gold tier', ko: '골드 등급' }, 'tv.the-ten': { en: 'NGUYEN VAN A', ko: 'NGUYEN VAN A' },
    'tv.hang-orn': { en: '3 member tiers', ko: '3개 회원 등급' }, 'tv.hang-h2': { en: 'Benefits by tier', ko: '등급별 혜택' },
    'tv.hang-p': { en: 'Tiers are based on total spend on completed orders and upgrade automatically. Discounts apply as soon as you enter your phone number at checkout.', ko: '등급은 완료된 주문의 누적 금액으로 산정되며 자동 승급됩니다. 결제 시 전화번호를 입력하면 할인이 즉시 적용됩니다.' },
    'tv.moc-thuong': { en: 'Just sign up', ko: '가입만 하면' }, 'tv.moc': { en: 'Spend from {s}', ko: '누적 {s} 이상' }, 'tv.giam-moi-don': { en: 'off every order', ko: '매 주문 할인' },
    'tv.ql-diem': { en: 'Earn {d} point per 100,000₫', ko: '100,000₫당 {d}포인트 적립' }, 'tv.ql-tang': { en: '{d} welcome points', ko: '웰컴 포인트 {d}점' }, 'tv.ql-tin': { en: 'Deals 24 hours early', ko: '혜택 24시간 먼저 안내' },
    'tv.ql-giam': { en: '{g}% off every order', ko: '매 주문 {g}% 할인' }, 'tv.ql-voucher': { en: '100,000₫ birthday voucher', ko: '생일 달 100,000₫ 바우처' }, 'tv.ql-freeship': { en: 'Free delivery from 1,000,000₫', ko: '1,000,000₫ 이상 무료 배송' },
    'tv.ql-cua': { en: 'Free large crab in your birthday month', ko: '생일 달 대게 1마리 증정' }, 'tv.ql-uu-tien': { en: 'Priority weekend & private-room booking', ko: '주말 및 룸 우선 예약' },
    'tv.diem-orn': { en: 'Earning points', ko: '포인트 적립' }, 'tv.diem-h2': { en: 'As simple as counting claws', ko: '집게 세는 것만큼 쉽게' },
    'tv.d1h': { en: 'Buy – earn', ko: '구매 – 적립' }, 'tv.d1p': { en: 'Every 100,000₫ on a completed order earns 1 point, added automatically to your phone number.', ko: '완료된 주문 100,000₫마다 1포인트, 전화번호 계정에 자동 적립됩니다.' },
    'tv.d2h': { en: 'Redeem', ko: '교환' }, 'tv.d2p': { en: '20 points = a set of fried mantou, 60 = prawn-paste chicken, 150 = a large crab.', ko: '20포인트 = 튀긴 만터우 세트, 60 = 새우장 치킨, 150 = 대게 1마리.' },
    'tv.d3h': { en: 'Birthday gift', ko: '생일 선물' }, 'tv.d3p': { en: 'A large crab in your birthday month for Gold; a 100,000₫ voucher for Silver.', ko: '골드는 생일 달에 대게 1마리, 실버는 100,000₫ 바우처.' },
    'tv.mien-phi': { en: 'Free', ko: '무료' }, 'tv.form-h2': { en: 'Register for a membership card', ko: '멤버십 카드 가입' }, 'tv.ho-ten': { en: 'Full name *', ko: '성함 *' }, 'tv.sdt': { en: 'Phone number *', ko: '전화번호 *' },
    'tv.email': { en: 'Email', ko: '이메일' }, 'tv.ngay-sinh': { en: 'Date of birth (for birthday gift)', ko: '생년월일 (생일 선물용)' }, 'tv.dia-chi': { en: 'Usual delivery address', ko: '자주 쓰는 배달 주소' },
    'tv.gui': { en: 'Create my card', ko: '카드 만들기' }, 'tv.dieu-khoan': { en: 'Your card is linked to your phone number. 9Crabs uses this information only for points and offers and never shares it with third parties.', ko: '카드는 전화번호에 연결됩니다. 9Crabs는 포인트와 혜택 안내에만 정보를 사용하며 제3자와 공유하지 않습니다.' },
    'tv.tra-cuu-h2': { en: 'Check points & tier', ko: '포인트 & 등급 조회' }, 'tv.xem': { en: 'Show my info', ko: '내 정보 보기' },
    'tv.q1': { en: 'Is there a fee?', ko: '비용이 있나요?' }, 'tv.a1': { en: 'Completely free, no physical card. Just give your phone number when ordering or paying in store.', ko: '완전 무료이며 실물 카드가 없습니다. 주문하거나 매장 결제 시 전화번호만 말씀하세요.' },
    'tv.q2': { en: 'Do points expire?', ko: '포인트가 만료되나요?' }, 'tv.a2': { en: 'Points are valid 12 months from your last purchase. Tiers are kept for 12 months after reaching them.', ko: '포인트는 마지막 구매일로부터 12개월간 유효합니다. 등급은 달성 후 12개월간 유지됩니다.' },
    'tv.q3': { en: 'I’ve ordered before – does it count?', ko: '이전 주문도 인정되나요?' }, 'tv.a3': { en: 'Yes. Register with the same phone number you ordered with and your spending history is kept for tier calculation.', ko: '네. 주문했던 전화번호로 가입하면 누적 구매 이력이 등급 산정에 그대로 반영됩니다.' },
    'tv.ok-moi': { en: 'Welcome {ten}! Your card number:', ko: '{ten}님 환영합니다! 카드 번호:' }, 'tv.ok-diem': { en: '{d} welcome points added.', ko: '웰컴 포인트 {d}점이 적립되었습니다.' },
    'tv.ok-cu': { en: 'This number is already a member. Card:', ko: '이미 가입된 번호입니다. 카드:' }, 'tv.diem': { en: 'points', ko: '포인트' },
    'tv.so-don': { en: 'Completed orders', ko: '완료 주문' }, 'tv.tong-chi': { en: 'Total spend', ko: '누적 금액' }, 'tv.con-thieu': { en: '{s} more to reach {h}', ko: '{h}까지 {s} 남음' }, 'tv.cao-nhat': { en: 'You’re at the top tier!', ko: '최고 등급입니다!' },
    /* Đồ nghề ăn cua */
    'dn.nhan': { en: 'Hands-on, the right way', ko: '손으로 먹는 제대로 된 방법' }, 'dn.orn': { en: 'Feast mode', ko: '피스트 모드' },
    'dn.h2': { en: 'Roll up your sleeves,<br>bib on, crack away', ko: '소매 걷고<br>앞치마 두르고 게를 까요' },
    'dn.p': { en: 'Crab is meant to be eaten by hand. Every 9Crabs order comes with the full kit so you can dig in and keep your shirt clean – pour the whole bag on the table if you like.', ko: '게는 손으로 먹어야 제맛. 모든 9Crabs 주문에는 옷을 더럽히지 않고 마음껏 먹을 수 있는 풀 키트가 함께 옵니다 – 봉지째 식탁에 쏟아도 괜찮아요.' },
    'dn.1h': { en: 'Logo plastic bibs', ko: '로고 비닐 앞치마' }, 'dn.1p': { en: 'One per person, kids’ size available – shirts stay spotless.', ko: '1인 1개, 어린이용도 있어 옷이 깨끗하게 유지됩니다.' },
    'dn.2h': { en: 'Disposable gloves', ko: '일회용 장갑' }, 'dn.2p': { en: 'Grab, crack and dip freely – no mid-meal hand washing.', ko: '집고 까고 찍어 먹기 자유롭게 – 식사 중 손 씻을 필요 없음.' },
    'dn.3h': { en: 'Crackers, wet wipes, table paper', ko: '게 집게, 물티슈, 테이블 페이퍼' }, 'dn.3p': { en: 'Line the table, pour out the seafood, roll it up when done – clean in seconds.', ko: '종이를 깔고 해산물을 쏟고, 다 먹으면 돌돌 말면 끝 – 몇 초면 깨끗.' },
    'dn.s1n': { en: 'Step 1', ko: '1단계' }, 'dn.s1h': { en: 'Pick your catch', ko: '해산물 선택' }, 'dn.s1p': { en: 'Ca Mau crab, soft-shell crab, tiger prawns, lobster, clams, seasonal crawfish.', ko: '까마우 게, 소프트쉘 크랩, 타이거새우, 랍스터, 조개, 제철 크로피시.' },
    'dn.s2n': { en: 'Step 2', ko: '2단계' }, 'dn.s2h': { en: 'Pick your sauce', ko: '소스 선택' }, 'dn.s2p': { en: 'Tamarind, Singapore chilli, salted egg, black pepper, garlic butter, Cajun, Tom Yum.', ko: '타마린드, 싱가포르 칠리, 솔티드 에그, 블랙페퍼, 갈릭버터, 케이준, 똠얌.' },
    'dn.s3n': { en: 'Step 3', ko: '3단계' }, 'dn.s3h': { en: 'Pick your spice', ko: '맵기 선택' }, 'dn.s3p': { en: 'Non-spicy · Mild · Medium · XXX – the kitchen seasons it your way.', ko: '안 매움 · 약간 · 중간 · 아주 매움 – 주방이 입맛대로 맞춰 드립니다.' },
    /* ===== dùng chung ===== */
    'thanh.mien-phi': { en: '🦀 Free delivery on orders from 1,500,000₫', ko: '🦀 1,500,000₫ 이상 주문 시 무료 배송' },
    'thanh.dat-mon': { en: 'Order online', ko: '온라인 주문' },
    'thanh.dat-ban': { en: 'Reserve a table', ko: '테이블 예약' },
    'thanh.zalo': { en: 'Zalo 24/7', ko: 'Zalo 24/7' },
    'thanh.gio-hang': { en: 'Cart', ko: '장바구니' },
    'nav.home': { en: 'Home', ko: '홈' }, 'nav.menu': { en: 'Menu', ko: '메뉴' }, 'nav.promo': { en: 'Promotions', ko: '프로모션' },
    'nav.tiec': { en: 'Parties & Catering', ko: '파티 & 케이터링' }, 'nav.about': { en: 'About 9Crabs', ko: '9Crabs 소개' }, 'nav.reserve': { en: 'Reserve', ko: '예약' },
    'hotline': { en: 'Hotline 24/7', ko: '핫라인 24/7' }, 'gio-hang': { en: 'Cart', ko: '장바구니' },
    'chan.lien-he': { en: 'Contact', ko: '연락처' }, 'chan.hotline': { en: 'Hotline', ko: '핫라인' },
    'chan.slogan': { en: 'Great crab, delivered home', ko: '맛있는 게, 집까지 배달' },
    'chan.gioi-thieu': { en: 'Born from a love for Ca Mau crab, 9Crabs brings a piping-hot seafood feast to your family table.', ko: '까마우 게에 대한 사랑에서 태어난 9Crabs는 뜨끈한 해산물 잔치를 가족의 식탁으로 배달합니다.' },
    'chan.gio': { en: 'Opening hours', ko: '영업시간' }, 'chan.nha-hang': { en: 'Restaurant: 10:00 – 22:30 daily', ko: '레스토랑: 매일 10:00 – 22:30' },
    'chan.giao': { en: 'Delivery:', ko: '배달:' }, 'chan.tu-van': { en: 'Zalo support: 24/7', ko: 'Zalo 상담: 24/7' }, 'chan.thanh-toan': { en: 'Payment', ko: '결제' },
    'chan.ban-quyen': { en: '© 2026 9crabs.com. All rights reserved.', ko: '© 2026 9crabs.com. 모든 권리 보유.' }, 'chan.quan-tri': { en: 'Admin', ko: '관리자' },
    'zalo.chat': { en: '💬 Chat on Zalo', ko: '💬 Zalo 채팅' }, 'zalo.gio': { en: '🧺 View cart', ko: '🧺 장바구니 보기' },
    'toast.them': { en: 'Added {ten} to cart', ko: '{ten}을(를) 장바구니에 담았습니다' }, 'toast.mon': { en: 'item', ko: '메뉴' },
    'them-gio': { en: 'Add to cart', ko: '담기' },
    /* nhóm món */
    'loai.cua': { en: 'Ca Mau Crabs', ko: '까마우 게' }, 'loai.combo': { en: 'Seafood Bags & Combos', ko: '해산물 백 & 콤보' }, 'loai.haisan': { en: 'Other Seafood', ko: '기타 해산물' },
    'loai.com': { en: 'Family Rice Sets', ko: '패밀리 밥상' }, 'loai.tiec': { en: 'Parties & Catering', ko: '파티 & 케이터링' }, 'loai.kem': { en: 'Side Dishes', ko: '사이드 메뉴' },
    'mota.cua': { en: 'Wild-caught Ca Mau mud crab, six signature sauces, cooked the moment you order.', ko: '자연산 까마우 머드크랩, 6가지 시그니처 소스, 주문 즉시 조리.' },
    'mota.combo': { en: 'Seafood bags tossed in sauce, crab noodle soup and family feast combos – enough for the whole table.', ko: '소스에 버무린 해산물 백, 게 국수, 가족 잔치 콤보 – 온 식탁이 넉넉하게.' },
    'mota.haisan': { en: 'Lobster, barramundi, scallops, clams – fresh every day.', ko: '랍스터, 바라문디, 가리비, 조개 – 매일 신선하게.' },
    'mota.com': { en: 'Home-style sets with mains, soup and greens – from 90,000₫ per person.', ko: '메인·국·채소가 갖춰진 집밥 세트 – 1인 90,000₫부터.' },
    'mota.tiec': { en: 'Mini buffets and on-site catering with set-up staff.', ko: '미니 뷔페와 세팅 직원이 함께하는 출장 케이터링.' },
    'mota.kem': { en: 'Sides you can’t have a crab feast without.', ko: '게 잔치에 빠질 수 없는 사이드 메뉴.' },
    'td.khong-thay': { en: 'No dishes match your search.', ko: '검색 결과가 없습니다.' },
    /* nhãn món */
    'tag.Signature': { en: 'Signature', ko: '시그니처' }, 'tag.Bán chạy': { en: 'Best seller', ko: '베스트' }, 'tag.Ưu đãi': { en: 'Deal', ko: '할인' }, 'tag.Combo': { en: 'Combo', ko: '콤보' },
    'tag.Tiệc gia đình': { en: 'Family feast', ko: '패밀리' }, 'tag.Mới': { en: 'New', ko: '신메뉴' }, 'tag.Đặc sản': { en: 'Specialty', ko: '특선' }, 'tag.Từ 90k/người': { en: 'From 90k/pax', ko: '1인 90k부터' },
    'tag.10+ người': { en: '10+ pax', ko: '10인 이상' }, 'tag.25+ người': { en: '25+ pax', ko: '25인 이상' }, 'tag.Mùa lễ': { en: 'Festive', ko: '시즌' }, 'tag.Tráng miệng': { en: 'Dessert', ko: '디저트' },

    /* ===== trang chủ ===== */
    'hero.nho': { en: 'Ca Mau crab · Cooked to order', ko: '까마우 게 · 주문 즉시 조리' },
    'hero.h1': { en: 'Premium sea crab<br>from the mangroves of <em>Ca Mau</em>', ko: '까마우 맹그로브에서 온<br>프리미엄 <em>바다 게</em>' },
    'hero.p': { en: 'We love crab – and we know you do too. 9Crabs hand-picks every wild-caught, roe-rich crab, cooks it the moment you order and delivers it hot within the hour.', ko: '우리는 게를 사랑합니다 – 당신도 그렇죠. 9Crabs는 알이 꽉 찬 자연산 게를 하나하나 골라 주문 즉시 조리해 1시간 안에 뜨겁게 배달합니다.' },
    'hero.xem': { en: 'Explore menu', ko: '메뉴 보기' }, 'hero.dat-ban': { en: 'Reserve', ko: '예약하기' },
    'hero.nhan': { en: '2 large crabs combo only', ko: '대게 2마리 콤보 단' },
    'hero.ve': { en: 'About us', ko: '회사 소개' }, 'hero.menu': { en: 'Menu', ko: '메뉴' }, 'hero.catering': { en: 'Catering', ko: '케이터링' },
    'gt.orn': { en: 'Since 2016', ko: '2016년부터' },
    'gt.h2': { en: 'Welcome to 9Crabs<br>Saigon’s crab kitchen', ko: '9Crabs에 오신 것을 환영합니다<br>사이공의 게 주방' },
    'gt.1h': { en: 'Born from a love for crab', ko: '게 사랑에서 태어나다' },
    'gt.1p': { en: 'We travelled across Nam Can and Ngoc Hien to find the best crab boats – and learned to cook from the locals themselves.', ko: '남깐과 응옥히엔을 누비며 최고의 게잡이 배를 찾고, 현지 주민들에게 직접 요리를 배웠습니다.' },
    'gt.2h': { en: 'Learning from the best', ko: '최고에게 배우다' },
    'gt.2p': { en: '9Crabs chefs bring over 10 years in five-star hotels, blending Mekong recipes with modern Asian technique.', ko: '9Crabs 셰프들은 5성급 호텔 10년 이상 경력으로 메콩 레시피와 현대 아시아 조리법을 결합합니다.' },
    'gt.3h': { en: 'Saigon deserves better', ko: '사이공은 더 좋은 맛을 누릴 자격이 있다' },
    'gt.3p': { en: 'Tired of travelling far for fresh crab, we bring Ca Mau crab, cooked to order, to your table within the hour.', ko: '신선한 게를 먹으러 멀리 가는 대신, 주문 즉시 조리한 까마우 게를 1시간 안에 식탁까지 배달합니다.' },
    'kb.orn': { en: 'The 9Crabs difference', ko: '9Crabs의 차별점' }, 'kb.h2': { en: 'Quality at every step', ko: '모든 과정의 품질' },
    'kb.1h': { en: 'Wild-caught', ko: '자연산' }, 'kb.1p': { en: 'Only AAA-grade Ca Mau sea crab, hand-picked by experienced graders – no empty shells.', ko: '숙련된 선별사가 직접 고른 AAA 등급 까마우 바다 게만 사용 – 빈 껍데기는 없습니다.' },
    'kb.2h': { en: 'Sea to table in 12 hours', ko: '바다에서 식탁까지 12시간' }, 'kb.2p': { en: 'Crab lands in the morning, cooks in the afternoon. Never frozen, never reheated – cleaned and cooked when you order.', ko: '아침에 들어온 게를 오후에 조리합니다. 냉동도 재가열도 없이 주문 시 손질해 바로 조리합니다.' },
    'kb.3h': { en: 'A flavour of our own', ko: '우리만의 맛' }, 'kb.3p': { en: 'Six signature sauces from Mekong tamarind to salted egg and Phu Quoc black pepper – bold and unforgettable.', ko: '메콩 타마린드부터 솔티드 에그, 푸꾸옥 흑후추까지 6가지 시그니처 소스 – 진하고 잊을 수 없는 맛.' },
    'kb.nut': { en: 'Explore the menu', ko: '메뉴 둘러보기' },
    'km.orn': { en: 'Today’s deals', ko: '오늘의 혜택' }, 'km.h2': { en: 'Most-loved combos', ko: '가장 사랑받는 콤보' },
    'km.1n': { en: 'Price drop', ko: '가격 인하' }, 'km.1h': { en: '2 large crabs combo', ko: '대게 2마리 콤보' }, 'km.1p': { en: 'Two ~700 g crabs, pick 2 flavours. Free 6 fried mantou.', ko: '약 700g 게 2마리, 2가지 맛 선택. 튀긴 만터우 6개 증정.' },
    'km.2n': { en: 'Family feast', ko: '패밀리 피스트' }, 'km.2h': { en: 'Feast 1,690k', ko: '피스트 1,690k' }, 'km.2p': { en: '2 large crabs + seafood bag + prawn-paste chicken + 9 mantou.', ko: '대게 2마리 + 해산물 백 + 새우장 치킨 + 만터우 9개.' },
    'km.3n': { en: '1-for-1', ko: '1+1' }, 'km.3h': { en: 'Boston lobster', ko: '보스턴 랍스터' }, 'km.3p': { en: 'Two fresh lobsters, cheese-baked or garlic-butter steamed.', ko: '신선한 랍스터 2마리, 치즈 구이 또는 갈릭버터 찜.' },
    'tdnb.orn': { en: 'Menu', ko: '메뉴' }, 'tdnb.h2': { en: 'Crab, seafood & sides,<br>perfectly seasoned', ko: '게, 해산물 & 사이드,<br>완벽한 간' },
    'tdnb.p': { en: 'Market-based pricing, cooking included. Every crab combo comes with fried mantou and crab crackers.', ko: '시세 기준 가격, 조리비 포함. 모든 게 콤보에 튀긴 만터우와 게 집게가 함께 제공됩니다.' },
    'tdnb.nut': { en: 'View full menu', ko: '전체 메뉴 보기' },
    'ck.orn': { en: 'Our promise', ko: '약속' }, 'ck.h2': { en: 'Trusted by 30,000+ families', ko: '30,000+ 가족의 신뢰' },
    'ck.1h': { en: '1-for-1 swap', ko: '1:1 교환' }, 'ck.1p': { en: 'Watery crab, little roe, wrong size – swapped at once', ko: '살이 없거나 알이 적거나 사이즈가 다르면 즉시 교환' },
    'ck.2h': { en: 'Wild-caught', ko: '자연산' }, 'ck.2p': { en: 'Ca Mau crab from the sea, never farmed', ko: '양식이 아닌 바다에서 잡은 까마우 게' },
    'ck.3h': { en: 'Cooked fresh', ko: '갓 조리' }, 'ck.3p': { en: 'Cooked when you order, never reheated', ko: '주문 시 조리, 재가열 없음' },
    'ck.4h': { en: '1-hour delivery', ko: '1시간 배달' }, 'ck.4p': { en: 'Delivery fee refunded if late', ko: '늦으면 배달비 환불' },
    'ck.5h': { en: 'Award-winning', ko: '수상 경력' }, 'ck.5p': { en: 'Top crab in Saigon 2024, 2025', ko: '사이공 베스트 크랩 2024, 2025' },
    'dg.orn': { en: 'What customers say', ko: '고객의 목소리' }, 'dg.h2': { en: 'Real reviews from Google', ko: 'Google 실제 리뷰' },
    'dg.1': { en: 'The feast was great value and every dish was delicious. So glad we added a crab – meaty and full of roe!', ko: '피스트는 가성비가 훌륭하고 모든 요리가 맛있었어요. 게를 추가하길 잘했어요 – 살이 꽉 차고 알이 가득!' },
    'dg.2': { en: 'Ordered at 6, hot crab on the table by 6:45. The tamarind crab tastes just like the Mekong – the whole family raved.', ko: '6시에 주문해 6시 45분에 뜨거운 게가 식탁에. 타마린드 게는 메콩 그 맛 – 온 가족이 극찬했어요.' },
    'dg.3': { en: 'Salted egg crab is the one. Friendly staff, clean packaging, even crab crackers included.', ko: '솔티드 에그 크랩이 최고예요. 친절한 직원, 깔끔한 포장, 게 집게까지 들어 있었어요.' },
    'dg.1t': { en: 'District 7 · 7 months ago', ko: '7군 · 7개월 전' }, 'dg.2t': { en: 'Thu Duc · 2 months ago', ko: '투득 · 2개월 전' }, 'dg.3t': { en: 'Binh Thanh · 3 weeks ago', ko: '빈탄 · 3주 전' },
    'dg.tong': { en: '4.9 / 5 · 31,799 reviews', ko: '4.9 / 5 · 31,799개 리뷰' }, 'dg.tongp': { en: 'Ho Chi Minh City’s favourite crab delivery', ko: '호찌민시에서 가장 사랑받는 게 배달' },
    'hd.orn': { en: 'FAQ', ko: '자주 묻는 질문' }, 'hd.h2': { en: 'Frequently asked questions', ko: '자주 묻는 질문' },
    'hd.1q': { en: 'Does 9Crabs deliver?', ko: '9Crabs는 배달하나요?' }, 'hd.1a': { en: 'Yes – it’s our speciality. Crab is cleaned, cooked fresh and delivered hot within 1 hour across Ho Chi Minh City, 11:00–22:00 daily.', ko: '네, 저희의 강점입니다. 게를 손질해 갓 조리하고 호찌민시 전역에 매일 11:00~22:00, 1시간 안에 뜨겁게 배달합니다.' },
    'hd.2q': { en: 'How much is delivery?', ko: '배달비는 얼마인가요?' }, 'hd.2a': { en: 'Free on orders from 1,500,000₫. Below that it’s 49,000₫. Choose a time slot or ASAP delivery.', ko: '1,500,000₫ 이상 무료. 그 미만은 49,000₫. 시간대 지정 또는 최대한 빠른 배달 선택 가능.' },
    'hd.3q': { en: 'Why is 9Crabs crab better?', ko: '9Crabs 게가 더 맛있는 이유는?' }, 'hd.3a': { en: 'We only use wild-caught Ca Mau crab from Nam Can – Ngoc Hien, far bigger and meatier than farmed crab. Our chefs have 10+ years in five-star hotels.', ko: '남깐–응옥히엔의 자연산 까마우 게만 사용해 양식보다 훨씬 크고 살이 많습니다. 셰프들은 5성급 호텔 10년 이상 경력입니다.' },
    'hd.4q': { en: 'I forgot to add an item – what now?', ko: '메뉴를 빠뜨렸어요. 어떻게 하나요?' }, 'hd.4a': { en: 'Message us on Zalo with your order code and the item; our team will merge it with no extra delivery fee.', ko: '주문 코드와 메뉴를 Zalo로 보내 주세요. 추가 배달비 없이 합쳐 드립니다.' },
    'hd.5q': { en: 'What if I’m not happy?', ko: '만족스럽지 않으면요?' }, 'hd.5a': { en: 'In the rare case it happens, tell us right away – 9Crabs swaps 1-for-1 or refunds to your points wallet, no questions asked.', ko: '드물게 그런 일이 있다면 바로 알려 주세요 – 묻지 않고 1:1 교환 또는 포인트 지갑으로 환불해 드립니다.' },
    'gb.orn': { en: 'From the kitchen', ko: '주방 이야기' }, 'gb.h2': { en: 'Crab stories & Mekong cuisine', ko: '게 이야기 & 메콩 요리' },
    'gb.1d': { en: '13 May · Buying tips', ko: '5월 13일 · 고르는 팁' }, 'gb.1h': { en: 'How to tell if cooked crab is fresh', ko: '조리된 게의 신선도 확인법' }, 'gb.1p': { en: 'Shell colour, smell, claw firmness – three simple checks to avoid stale crab.', ko: '껍질 색, 냄새, 집게 단단함 – 오래된 게를 피하는 세 가지 간단한 체크.' },
    'gb.2d': { en: '2 Aug · Recipe', ko: '8월 2일 · 레시피' }, 'gb.2h': { en: 'Sea crab bún riêu in 5 steps', ko: '5단계로 만드는 바다게 분리에우' }, 'gb.2p': { en: 'A sweet, clean broth from crab paste – the secret is roe fried with shallots and ripe tomatoes.', ko: '게살로 낸 달큰하고 맑은 육수 – 비결은 샬롯에 볶은 게알과 잘 익은 토마토.' },
    'gb.3d': { en: '11 Feb · Pairing', ko: '2월 11일 · 페어링' }, 'gb.3h': { en: 'Which wine goes with seafood?', ko: '해산물에 어울리는 와인은?' }, 'gb.3p': { en: 'Sauvignon Blanc for steamed crab, Riesling for chilli crab – pairings from the 9Crabs sommelier.', ko: '찜 게에는 소비뇽 블랑, 칠리크랩에는 리슬링 – 9Crabs 소믈리에의 추천.' },
    'cta.h2': { en: 'Catering made easy for any occasion', ko: '어떤 자리든 쉬운 케이터링' },
    'cta.nho': { en: 'Birthdays · Family gatherings · Year-end · Corporate events', ko: '생일 · 가족 모임 · 연말 · 기업 행사' },
    'cta.p': { en: '9Crabs brings fresh crab, sides and set-up staff to you, so all you do is enjoy the feast with the people you love.', ko: '9Crabs가 신선한 게와 사이드, 세팅 직원까지 보내 드리니 사랑하는 사람들과 잔치를 즐기기만 하세요.' },
    'cta.nut': { en: 'Request catering', ko: '케이터링 문의' },

    /* ===== thực đơn ===== */
    'td.orn': { en: '9Crabs menu', ko: '9Crabs 메뉴' }, 'td.h1': { en: 'Crab, seafood & sides<br>perfectly seasoned', ko: '게, 해산물 & 사이드<br>완벽한 간' },
    'td.p': { en: 'Cooked to order · 1-hour delivery · 1-for-1 swap if unhappy', ko: '주문 즉시 조리 · 1시간 배달 · 불만족 시 1:1 교환' },
    'td.gia-h': { en: 'Market-based pricing', ko: '시세 기준 가격' }, 'td.gia-p': { en: 'Crab prices follow season and supply, updated daily. Cooking included.', ko: '게 가격은 계절과 공급에 따라 매일 업데이트됩니다. 조리비 포함.' },
    'td.do-h': { en: 'Every combo comes with the gear', ko: '모든 콤보에 도구 포함' }, 'td.do-p': { en: 'Fried mantou, crab crackers, wet towels and dipping sauce always included – no extra charge.', ko: '튀긴 만터우, 게 집게, 물티슈, 디핑 소스가 항상 포함 – 추가 요금 없음.' },
    'loc.tat-ca': { en: 'All', ko: '전체' }, 'loc.cua': { en: 'Ca Mau crabs', ko: '까마우 게' }, 'loc.combo': { en: 'Bags & combos', ko: '백 & 콤보' }, 'loc.haisan': { en: 'Seafood', ko: '해산물' },
    'loc.com': { en: 'Rice sets', ko: '밥상' }, 'loc.tiec': { en: 'Parties & catering', ko: '파티 & 케이터링' }, 'loc.kem': { en: 'Sides', ko: '사이드' },
    'td.tim': { en: 'Search dishes… (e.g. salted egg)', ko: '메뉴 검색… (예: 솔티드 에그)' },
    'td.cta-h2': { en: 'Need help choosing a crab size?', ko: '게 사이즈 고르기가 어려우신가요?' }, 'td.cta-nho': { en: 'Zalo 24/7 · Portion advice by headcount', ko: 'Zalo 24/7 · 인원별 양 안내' },
    'td.cta-p': { en: 'Tell 9Crabs your headcount and budget and we’ll suggest the combo that fits – nothing wasted, nothing missing.', ko: '인원과 예산을 알려 주시면 딱 맞는 콤보를 추천해 드립니다 – 남지도 모자라지도 않게.' },
    'td.cta-nut': { en: 'Chat on Zalo', ko: 'Zalo로 상담' },

    /* ===== giỏ hàng & thanh toán ===== */
    'tt.orn': { en: '9Crabs', ko: '9Crabs' }, 'tt.h1': { en: 'Cart & checkout', ko: '장바구니 & 결제' }, 'tt.p': { en: 'Cooked to order · 1-hour delivery · 1-for-1 swap if unhappy', ko: '주문 즉시 조리 · 1시간 배달 · 불만족 시 1:1 교환' },
    'tt.mon-da-chon': { en: 'Your items', ko: '선택한 메뉴' }, 'tt.mon': { en: 'Item', ko: '메뉴' }, 'tt.sl': { en: 'Qty', ko: '수량' }, 'tt.don-gia': { en: 'Unit price', ko: '단가' }, 'tt.thanh-tien': { en: 'Total', ko: '금액' },
    'tt.chon-them': { en: '← Add more dishes', ko: '← 메뉴 더 담기' }, 'tt.trong': { en: 'Your cart is empty.', ko: '장바구니가 비어 있습니다.' }, 'tt.xem-td': { en: 'View menu →', ko: '메뉴 보기 →' },
    'tt.giao-h2': { en: 'Delivery details', ko: '배달 정보' }, 'tt.ho-ten': { en: 'Full name *', ko: '성함 *' }, 'tt.sdt': { en: 'Phone number *', ko: '전화번호 *' }, 'tt.email': { en: 'Email (for receipt)', ko: '이메일 (영수증)' },
    'tt.dia-chi': { en: 'Delivery address *', ko: '배달 주소 *' }, 'tt.khung-gio': { en: 'Delivery slot', ko: '배달 시간대' }, 'tt.som-nhat': { en: 'ASAP (within 1 hour)', ko: '최대한 빨리 (1시간 이내)' },
    'tt.pt': { en: 'Payment method', ko: '결제 수단' }, 'tt.cod': { en: '💵 Cash on delivery', ko: '💵 배달 시 현금' }, 'tt.ck': { en: '🏦 Bank transfer', ko: '🏦 계좌이체' },
    'tt.ghi-chu': { en: 'Notes', ko: '요청사항' }, 'tt.ghi-chu-ph': { en: 'E.g. less spicy, call before delivery, no mantou…', ko: '예: 덜 맵게, 배달 전 전화, 만터우 제외…' },
    'tt.tom-tat': { en: 'Order summary', ko: '주문 요약' }, 'tt.tam-tinh': { en: 'Subtotal', ko: '소계' }, 'tt.phi': { en: 'Delivery fee', ko: '배달비' }, 'tt.tong': { en: 'Total', ko: '합계' },
    'tt.dat': { en: 'Place order', ko: '주문하기' }, 'tt.dang-gui': { en: 'Sending…', ko: '전송 중…' },
    'tt.dieu-khoan': { en: 'By ordering you agree to 9Crabs’s terms. We’ll call to confirm within 5 minutes.', ko: '주문 시 9Crabs 약관에 동의하게 됩니다. 5분 내 확인 전화를 드립니다.' },
    'tt.mien-phi': { en: 'Free', ko: '무료' },
    'tt.goi-y-ship': { en: 'Add {so} more for free delivery.', ko: '{so} 더 담으면 무료 배송입니다.' }, 'tt.goi-y-cua': { en: 'Add one more crab for {pt}% off the whole order!', ko: '게 한 마리만 더 담으면 전체 {pt}% 할인!' },
    'tt.thanh-cong': { en: 'Order placed!', ko: '주문 완료!' }, 'tt.cam-on': { en: 'Thank you for trusting 9Crabs. Our team will call to confirm shortly. Total:', ko: '9Crabs를 믿어 주셔서 감사합니다. 곧 확인 전화를 드립니다. 합계:' },
    'tt.tiep': { en: 'Keep ordering', ko: '계속 주문' }, 'tt.ve': { en: 'Back to home', ko: '홈으로' },
    'tt.loi-mac-dinh': { en: 'Could not place the order', ko: '주문을 완료하지 못했습니다' },

    /* ===== liên hệ ===== */
    'lh.h1': { en: 'Contact & reservations', ko: '연락 & 예약' }, 'lh.p': { en: 'Party of 6 with a bill from 1,880,000₫ – get 1 large crab free', ko: '6인 이상 1,880,000₫ 이상 결제 시 대게 1마리 증정' },
    'lh.form-h2': { en: 'Reserve / send a request', ko: '예약 / 문의하기' }, 'lh.ho-ten': { en: 'Full name', ko: '성함' }, 'lh.sdt': { en: 'Phone number', ko: '전화번호' }, 'lh.loai': { en: 'Request type', ko: '문의 유형' },
    'lh.loai1': { en: 'Table reservation', ko: '테이블 예약' }, 'lh.loai2': { en: 'Party / catering', ko: '파티 / 케이터링' }, 'lh.loai3': { en: 'Order support', ko: '주문 지원' }, 'lh.loai4': { en: 'Complaint', ko: '불만 접수' }, 'lh.loai5': { en: 'Partnership', ko: '제휴' },
    'lh.chi-nhanh': { en: 'Branch', ko: '지점' }, 'lh.ngay-gio': { en: 'Date & time', ko: '날짜 & 시간' }, 'lh.so-khach': { en: 'Guests', ko: '인원' }, 'lh.ghi-chu': { en: 'Notes', ko: '요청사항' },
    'lh.ghi-chu-ph': { en: 'E.g. private room, kids, seafood allergy…', ko: '예: 룸 필요, 아이 동반, 해산물 알레르기…' }, 'lh.gui': { en: 'Send request', ko: '문의 보내기' },
    'lh.thong-tin': { en: 'Contact details', ko: '연락처 안내' }, 'lh.cn-chinh': { en: 'Main branch', ko: '본점' }, 'lh.cn-q1': { en: 'District 1 branch', ko: '1군 지점' }, 'lh.cn-td': { en: 'Thu Duc branch', ko: '투득 지점' },
    'lh.hotline': { en: 'Hotline', ko: '핫라인' }, 'lh.email': { en: 'Email', ko: '이메일' }, 'lh.gio': { en: 'Opening hours', ko: '영업시간' },
    'lh.gio-p': { en: 'Restaurant: 10:00 – 22:30 · Delivery: 11:00 – 22:00 daily', ko: '레스토랑: 10:00 – 22:30 · 배달: 매일 11:00 – 22:00' },
    'lh.ban-do': { en: '🗺️ 9Crabs branch map', ko: '🗺️ 9Crabs 지점 지도' }, 'lh.ban-do-p': { en: 'Embed Google Maps here when 9crabs.com goes live', ko: '9crabs.com 오픈 시 Google 지도 삽입' },
    'lh.cam-ket-orn': { en: 'Our promise', ko: '약속' }, 'lh.cam-ket-h2': { en: 'Total satisfaction policy', ko: '완전 만족 정책' },
    'lh.cam-ket-p': { en: 'In the rare case you’re unhappy with your order, tell 9Crabs and we’ll fix it right away: 1-for-1 swap or refund to your points wallet.', ko: '드물게 주문이 만족스럽지 않다면 9Crabs에 알려 주세요. 즉시 1:1 교환 또는 포인트 지갑 환불로 해결해 드립니다.' },
    'lh.ck1h': { en: '1-for-1 swap', ko: '1:1 교환' }, 'lh.ck1p': { en: 'Watery crab, little roe, wrong size', ko: '살 없음, 알 적음, 사이즈 오류' },
    'lh.ck2h': { en: 'Late delivery', ko: '배달 지연' }, 'lh.ck2p': { en: '100% delivery fee back to your points wallet', ko: '배달비 100% 포인트 지갑으로 환불' },
    'lh.ck3h': { en: 'Points', ko: '포인트' }, 'lh.ck3p': { en: 'Every 100,000₫ = 1 point, 20 points = a set of fried mantou', ko: '100,000₫마다 1포인트, 20포인트 = 튀긴 만터우 세트' },
    'lh.thong-bao': { en: 'Thank you! 9Crabs has received your request and will get back to you within 15 minutes.', ko: '감사합니다! 9Crabs가 문의를 접수했으며 15분 내 연락드리겠습니다.' },
  };

  const C9 = (window.NineCrabs = window.NineCrabs || {});
  let lang = 'vi';
  try { lang = localStorage.getItem('9crabs-lang') || (navigator.language || '').slice(0, 2) || 'vi'; } catch {}
  if (!NGON_NGU[lang]) lang = 'vi';
  C9.NGON_NGU = NGON_NGU;
  C9.lang = () => lang;
  /** Dịch khoá; thiếu → chuỗi dự phòng (tiếng Việt). Hỗ trợ {bien}. */
  C9.t = (khoa, duPhong = '', bien = {}) => {
    let s = lang === 'vi' ? duPhong : (T[khoa]?.[lang] ?? duPhong);
    for (const [k, v] of Object.entries(bien)) s = s.replaceAll(`{${k}}`, v);
    return s;
  };
  /** Trường của sản phẩm theo ngôn ngữ (ten, mo_ta, don_vi) với dự phòng tiếng Việt */
  C9.truong = (sp, ten) => (lang !== 'vi' && sp[`${ten}_${lang}`]) ? sp[`${ten}_${lang}`] : sp[ten];
  C9.tag = (tag) => C9.t('tag.' + tag, tag);
  C9.loai = (l) => C9.t('loai.' + l, (C9.TEN_LOAI || {})[l] || l);

  /** Áp dụng ngôn ngữ cho toàn trang: lưu bản gốc tiếng Việt lần đầu, rồi thay */
  C9.apDungNgonNgu = (root = document) => {
    document.documentElement.lang = lang;
    root.querySelectorAll('[data-i18n]').forEach((e) => { if (e.dataset.vi === undefined) e.dataset.vi = e.textContent; e.textContent = C9.t(e.dataset.i18n, e.dataset.vi); });
    root.querySelectorAll('[data-i18n-html]').forEach((e) => { if (e.dataset.vi === undefined) e.dataset.vi = e.innerHTML; e.innerHTML = C9.t(e.dataset.i18nHtml, e.dataset.vi); });
    root.querySelectorAll('[data-i18n-ph]').forEach((e) => { if (e.dataset.vi === undefined) e.dataset.vi = e.placeholder; e.placeholder = C9.t(e.dataset.i18nPh, e.dataset.vi); });
    document.querySelectorAll('.ngon-ngu button').forEach((b) => b.classList.toggle('hien', b.dataset.lang === lang));
  };
  C9.doiNgonNgu = (l) => {
    if (!NGON_NGU[l]) return; lang = l;
    try { localStorage.setItem('9crabs-lang', l); } catch {}
    C9.apDungNgonNgu();
    document.dispatchEvent(new CustomEvent('9crabs:lang', { detail: l }));
  };
  /** HTML bộ chọn ngôn ngữ (chèn vào header) */
  C9.boChonNgonNgu = () => `<div class="ngon-ngu" role="group" aria-label="Ngôn ngữ">${Object.keys(NGON_NGU).map((l) => `<button type="button" data-lang="${l}" class="${l === lang ? 'hien' : ''}" title="${NGON_NGU[l]}">${l.toUpperCase()}</button>`).join('')}</div>`;
  document.addEventListener('click', (e) => { const b = e.target.closest('.ngon-ngu button[data-lang]'); if (b) C9.doiNgonNgu(b.dataset.lang); });
})();
