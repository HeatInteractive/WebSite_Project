# Heat Interactive Web Project - Proje Kuralları ve Detaylı Özet

## 📋 Proje Genel Bakış

**Proje Adı:** Heat Interactive Website  
**Proje Türü:** Kurumsal VR/AR Şirketi Web Sitesi  
**Diller:** İngilizce (English-Only)  
**Teknoloji Stack:** HTML, CSS, JavaScript, Tailwind CSS (CDN), Local JSON Data  
**Lokasyon:** `d:\Git\WebSite_Project`

## 🎯 Proje-Amacı

Heat Interactive, sanal gerçeklik (VR) ve artırılmış gerçeklik (AR) çözümleri sunan bir teknoloji şirketinin kurumsal web sitesidir. Site, modern ve aydınlık (Light Theme) bir tasarımla şirketin hizmetlerini, projelerini ve iş ortaklarını sunmaktadır. Basit, hızlı ve etkileyici bir kullanıcı deneyimi hedeflenmiştir.

---

## 📁 Dosya-Yapısı

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
    ├── projects.js     # Projeleri render eder (bg-white kartlar)
    ├── projects-data.js # Proje veri kaynağı (JSON)
    └── navbar.js       # Dinamik navigasyon menüsü
```

---

## 🎨 Tasarım Sistemi

### Renk Paleti (Light Theme)

Site genelinde aydınlık, kurumsal ve ferah bir görünüm hakimdir.

```css
/* Ana Renkler */
--bg-white: #FFFFFF          /* Temel arka plan & Kartlar */
--bg-light-gray: #ECECEC     /* Bölüm arka planları */
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
*   **Özel Stiller:** `style.css` dosyasında Tailwind ile yapılamayan özel animasyonlar (`scroll-reveal`, vb.) bulunur.
*   **Responsive:** Mobil öncelikli (Mobile-First) yaklaşım. `lg:` ve `md:` breakpointleri ile masaüstü düzenleri kurgulanır.
*   **Kart Stilleri:** Proje ve iletişim kartları genelde beyaz (`bg-white`), border'lı ve hafif gölgelidir.

---

##  Sayfa Detayları

### 1. index.html (Ana Sayfa)
*   **Hero:** Sağ tarafta konumlanmış görseli içeren modern giriş.
*   **Platforms We Work On:** Unity, WebGL, iOS, Android ikonlarını içeren bölüm.
*   **Our Services:** Görsel ve metin ayrık, birbirinin üzerine binmeyen yatay kartlar.

### 2. projects.html
*   Yerel veriden çekilen proje listesi.
*   Proje kartları beyaz arka plana (`bg-white`) sahiptir.

### 3. agriculture_collecting_simulation.html
*   Örnek proje detay sayfası.
*   Video arka planlı hero.
*   Görseller, kenarları yuvarlatılmış ve çerçevelenmiş (`rounded-xl` inside `rounded-2xl` container) özel bir yapıdadır. Hover durumunda görsel taşmaz.

### 4. contact.html
*   **Office Bölümü:** Adres ve Google Maps haritasını içerir. Kart arka planı beyazdır.
*   **Contact Bölümü:** İletişim bilgilerini içerir. Kart arka planı beyazdır.
*   **Form:** İletişim formu. Arka planı beyazdır.

---

## 📅 Versiyon Geçmişi / Log

**v2.3 - 16 Aralık 2025 (Son Güncelleme)**
*   **Contact Sayfası Düzenlemesi:** Google Maps haritası "Office" kartına taşındı. İletişim ve Ofis kutularının arka planı beyaza çekildi.
*   **Project Detay İyileştirmesi:** `agriculture_collecting_simulation.html` sayfasındaki tüm görseller, sol taraftaki içerik kutularıyla uyumlu çerçeve yapısına (gri border, beyaz padding, rounded corners) kavuştu. Görsel taşma sorunu çözüldü.
*   **Projects Listesi:** Proje kartlarının arka planı gri'den beyaza dönüştürüldü.
*   **About Us:** "Max-width" kısıtlaması kaldırılarak sayfa genişliği diğer sayfalarla eşitlendi.

**v2.1 - 15 Aralık 2025**
*   **Hero Revizyonu:** 3D render görsel entegrasyonu.
*   **Platforms Bölümü:** Yeni hover efektli platform ikonları.
*   **Services Düzeni:** Görsel ve metin çakışmasını önleyen Flex-Row yapısı.

**v2.0 - 13 Aralık 2025**
*   **Light Theme Geçişi:** Tamamen aydınlık tema.
*   **Renk Güncellemesi:** `#FA3624` vurgu rengi.

---

## 📞 İletişim

**E-posta:** team@heatinteractive.com
**Adres:** Yesilbahce mah. 1485 sok. no 15 Muratpasa/Antalya
