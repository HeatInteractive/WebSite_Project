# Heat Interactive Web Project - Proje Kuralları ve Detaylı Özet

## 📋 Proje Genel Bakış

**Proje Adı:** Heat Interactive Website  
**Proje Türü:** Kurumsal VR/AR Şirketi Web Sitesi  
**Diller:** İngilizce (English-Only)  
**Teknoloji Stack:** HTML, CSS, JavaScript, Tailwind CSS (CDN), Local JSON Data  
**Lokasyon:** `d:\Git\WebSite_Project`

## 🎯 Proje Amacı

Heat Interactive, sanal gerçeklik (VR) ve artırılmış gerçeklik (AR) çözümleri sunan bir teknoloji şirketinin kurumsal web sitesidir. Site, modern ve aydınlık (Light Theme) bir tasarımla şirketin hizmetlerini, projelerini ve iş ortaklarını sunmaktadır. Basit, hızlı ve etkileyici bir kullanıcı deneyimi hedeflenmiştir.

---

## 📁 Dosya Yapısı

```
WebSite_Project/
├── index.html          # Ana sayfa
├── projects.html       # Projeler listesi
├── agriculture_collecting_simulation.html # Proje detay sayfası
├── aboutus.html        # Hakkımızda sayfası
├── contact.html        # İletişim sayfası
├── style.css           # Global stiller (Tailwind harici özelleştirmeler)
├── images/             # Tüm görsel varlıklar
└── js/
    ├── companies.js    # Şirket/Partner logolarını render eder
    ├── company-data.js # Partner veri kaynağı (JSON)
    ├── projects.js     # Projeleri render eder
    ├── projects-data.js # Proje veri kaynağı (JSON)
    └── navbar.js       # Dinamik navigasyon menüsü
```

---

## 🎨 Tasarım Sistemi

### Renk Paleti (Light Theme)

Site genelinde aydınlık, kurumsal ve ferah bir görünüm hakimdir.

```css
/* Ana Renkler */
--bg-white: #FFFFFF          /* Temel arka plan */
--bg-light-gray: #ECECEC     /* Bölüm arka planları / Kartlar için standart gri */
--bg-accent-gray: #EBEBEB    /* Alternatif açık gri */

/* Vurgu ve Metin */
--accent-red: #FA3624        /* Heat Interactive Kırmızısı (Butonlar, İkon Hover, Başlıklar) */
--text-black: #000000        /* Ana başlıklar */
--text-dark-gray: #333333    /* Alt başlıklar */
--text-body: #4B5563         /* Gövde metinleri (Gray-600/700) */

/* Kenarlıklar */
--border-gray: #D1D5DB       /* Kart ve input kenarlıkları */
```

### Tipografi
**Font Ailesi:** Outfit (Google Fonts)  
**Stil:** Modern, temiz, yüksek okunabilirlik.
**Başlıklar:** Genellikle BÜYÜK HARF (Uppercase), Bold/Extrabold.

---

## 🔧 Teknik Detaylar

### Veri Yönetimi (Local JSON)
Veri tabanı veya backend bağımlılığı yoktur. Tüm dinamik içerikler (projeler, logolar) yerel JavaScript dosyalarından (`js/projects-data.js`, `js/company-data.js`) okunur. Bu sayede site statik hosting üzerinde sorunsuz çalışır.

### CSS Mimarisi
*   **Framework:** Tailwind CSS (CDN)
*   **Özel Stiller:** `style.css` dosyasında Tailwind ile yapılamayan özel animasyonlar (`scroll-reveal`, vb.) ve cam efektleri (`glass-card` - güncel kullanımı sınırlı) bulunur.
*   **Responsive:** Mobil öncelikli (Mobile-First) yaklaşım. `lg:` ve `md:` breakpointleri ile masaüstü düzenleri kurgulanır.

---

## � Sayfa Detayları

### 1. index.html (Ana Sayfa)
*   **Hero:** Sağ tarafta konumlanmış, responsive 3D/Modern arka plan görseli (`hero-bg-modern.png`).
*   **Platforms We Work On:** Unity, WebGL, iOS, Android ikonlarını içeren, hover efektli (`text-black` -> `text-[#FA3624]`) özel bölüm.
*   **Our Services:** `heattitle-bg.png` arka planı üzerinde, yatay flex kartlar. Görsel ve metin ayrık, birbirinin üzerine binmez.

### 2. projects.html
*   Yerel veriden çekilen proje listesi.
*   Kategori filtreleme (All, VR, AR, Mobile).
*   Temiz grid yapısı.

### 3. agriculture_collecting_simulation.html
*   Örnek proje detay sayfası.
*   Video arka planlı hero.
*   Özelleştirilmiş grid düzeni ve "Frame" stilli görseller.

---

## 📅 Versiyon Geçmişi / Log

**v2.1 - 15 Aralık 2025 (Son Güncelleme)**
*   **Hero Revizyonu:** CSS gradient yerine özel 3D render görsel kullanıldı. Görsel boyutlandırması `height` yerine `width` bazlı yapılarak responsive hale getirildi.
*   **Platforms Bölümü:** Yeni "Platforms We Work On" bölümü eklendi. İkonlar siyah renkten kırmızıya dönen hover efektine sahip.
*   **Services Düzeni:** "Our Services" kartları görsel ve metin çakışmasını önlemek için Flex-Row yapısına geçirildi (`object-fill` ile görsel yerleşimi optimize edildi).
*   **Arka Plan Entegrasyonu:** "Platforms" ve "Services" bölümleri, ortak bir `heattitle-bg.png` arka plan görseli kapsayıcısı içine alındı.
*   **Temizlik:** Kullanılmayan Supabase, Çoklu Dil ve eski Dark Theme kodları/kuralları temizlendi.

**v2.0 - 13 Aralık 2025**
*   **Light Theme Geçişi:** Karanlık temadan aydınlık (`bg-white`, `bg-[#ECECEC]`) yapıya tam geçiş.
*   **Renk Güncellemesi:** `#FA3624` (Kırmızı) ana vurgu rengi oldu.

**v1.5 - 10 Aralık 2025**
*   **English-Only:** Türkçe desteği kaldırıldı.
*   **Data Migration:** Supabase kaldırıldı, yerel JSON'a geçildi.

---

## 📞 İletişim

**E-posta:** hello@heatinteractive.com
**Adres:** Maslak Mah. Büyükdere Cad. Spine Tower No: 243 Sarıyer / İstanbul
