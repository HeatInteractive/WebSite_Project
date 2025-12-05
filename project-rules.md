# Heat Interactive Web Project - Proje Kuralları ve Detaylı Özet

## 📋 Proje Genel Bakış

**Proje Adı:** Heat Interactive Website  
**Proje Türü:** Kurumsal VR/AR Şirketi Web Sitesi  
**Dil:** Türkçe  
**Teknoloji Stack:** HTML, CSS, JavaScript, Tailwind CSS, Supabase  
**Lokasyon:** `d:\Antigravity-Projects\HeatInteractive-Web`

## 🎯 Proje Amacı

Heat Interactive, sanal gerçeklik (VR) ve artırılmış gerçeklik (AR) çözümleri sunan bir teknoloji şirketinin kurumsal web sitesidir. Site, şirketin hizmetlerini, projelerini ve iş ortaklarını modern ve etkileyici bir tasarımla sunmaktadır.

---

## 📁 Dosya Yapısı

```
HeatInteractive-Web/
├── index.html          # Ana sayfa (17.8 KB)
├── projects.html       # Projeler sayfası (14.2 KB)
├── hallhunter_strawberry_project.html # Ağır Sanayi İSG Proje Detayı
├── aboutus.html        # Hakkımızda sayfası (10.2 KB)
├── contact.html        # İletişim sayfası (9.4 KB)
├── style.css           # Birleştirilmiş CSS dosyası (1.8 KB)
└── js/
    ├── companies.js    # Supabase şirketler entegrasyonu
    └── projects.js     # Supabase projeler entegrasyonu
```

---

## 🎨 Tasarım Sistemi

### Renk Paleti

```css
/* Marka Renkleri */
--brand-bg: #020410         /* Derin Uzay Siyahı - Ana arkaplan */
--brand-card: rgba(255, 255, 255, 0.03)  /* Ultra hafif cam efekti */
--brand-border: rgba(255, 255, 255, 0.08) /* Hafif kenarlık */
--brand-primary: #6366f1    /* Indigo - Birincil vurgu */
--brand-secondary: #ec4899  /* Pink - İkincil vurgu */

/* Metin Renkleri */
--text-white: #ffffff
--text-gray: #e2e8f0
--text-gray-dark: #94a3b8
```

### Tipografi

**Font Ailesi:** Outfit (Google Fonts)  
**Ağırlıklar:** 300, 400, 500, 700, 800

**Kullanım:**
- Başlıklar: `font-extrabold` (800)
- Alt başlıklar: `font-bold` (700)
- Gövde metni: `font-medium` (500)
- İnce metinler: `font-light` (300)

### Tasarım Özellikleri

1. **Glassmorphism (Cam Efekti)**
   - `backdrop-filter: blur(10px)`
   - Yarı saydam arka planlar
   - İnce kenarlıklar

2. **Gradient Efektleri**
   - İndigo → Pink gradyanları
   - Metin gradyanları (gradient-text-accent)
   - Arkaplan glow efektleri

3. **Animasyonlar**
   - Scroll reveal (opacity + translateY)
   - Hover scale efektleri
   - Blob animasyonları (7s infinite)
   - Transition delays (100ms, 200ms, 300ms)

---

## 🔧 Teknik Detaylar

### CSS Mimarisi

**Dosya:** `style.css`

**Bölümler:**
1. **Base Styles** - Body ve genel stiller
2. **Background Glow Effects** - Arkaplan animasyonları
3. **Glassmorphism Cards** - Cam efektli kartlar
4. **Scroll Reveal Animations** - Kaydırma animasyonları
5. **Gradient Text Effects** - Metin gradyanları
6. **Transition Delays** - Gecikme sınıfları
7. **Form Input Styles** - Form elemanları

**ÖNEMLİ:** Tüm inline CSS'ler kaldırıldı ve `style.css`'e taşındı. Artık tüm sayfalar bu tek dosyayı kullanıyor.

### Tailwind CSS Konfigürasyonu

```javascript
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'sans-serif']
            },
            colors: {
                brand: { /* ... */ }
            },
            animation: {
                'blob': 'blob 7s infinite',
                'float': 'float 6s ease-in-out infinite'
            },
            keyframes: {
                blob: { /* ... */ },
                float: { /* ... */ }
            }
        }
    }
}
```

### JavaScript Fonksiyonları

**index.html içinde:**
1. **Scroll Reveal** - `.reveal` sınıfına sahip elementleri görünür yapar
2. **Counter Animation** - Sayaç animasyonu (50 projeye kadar)
3. **Hero Mouse Parallax** - Mouse hareketine göre parallax efekti

**js/companies.js:**
- Supabase'den şirket verilerini çeker
- Dinamik HTML oluşturur
- Hata yönetimi ve debug logging

---

## 🗄️ Supabase Entegrasyonu

### Bağlantı Bilgileri

```javascript
SUPABASE_URL: 'https://zbifnmzafevagllhzibk.supabase.co'
SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
```

### Tablo Yapısı: Companies

| Kolon | Tip | Açıklama |
|-------|-----|----------|
| Name | text | Şirket adı |
| Logo | text | Logo URL'si |

### Tablo Yapısı: Projects

| Kolon | Tip | Açıklama |
|-------|-----|----------|
| id | bigint | Benzersiz ID |
| project_name | text | Proje Adı |
| project_description | text | Proje Açıklaması |
| project_thumbnail | text | Kapak Görseli URL'si |

### Kullanım

```javascript
// Veri çekme
const { data, error } = await supabase
    .from('Companies')
    .select('*')
    .order('Name', { ascending: true });

// Dinamik HTML oluşturma
companies.forEach(company => {
    // Logo + İsim gösterimi
});
```

### Debug Logging

Console'da şu mesajları göreceksiniz:
- 🔍 Fetching companies from Supabase...
- 📍 Supabase URL: ...
- ✅ Successfully fetched companies: [...]
- 📊 Number of companies: X
- ⚠️ No companies found, showing empty state

---

## 📄 Sayfa Detayları

### 1. index.html (Ana Sayfa)

**Bölümler:**
1. **Hero Section**
   - Başlık: "Sınırların Ötesini Keşfedin"
   - Hero image: Supabase'den (`HeroImage.png`)
   - CTA butonları: "Projeleri Gör", "Bize Ulaşın"
   - Floating stats: 50 Proje, 4.9 Rating

2. **Logo Cloud (İş Ortakları)**
   - Dinamik olarak Supabase'den yüklenir
   - Container ID: `companies-container`
   - Grayscale + hover efekti

3. **Bento Grid Hizmetler**
   - Kurumsal VR Eğitim
   - Mimari Vizyon
   - Oyunlaştırma
   - Metaverse Entegrasyonu

4. **Footer**
   - Logo + Copyright
   - Sosyal medya linkleri

### 2. projects.html (Projeler)

**Özellikler:**
- Dinamik proje listeleme (Supabase'den)
- Dikey kart tasarımı (Görsel üstte, içerik altta)
- Hover efektleri ve "İNCELE" butonu
- Yükleniyor ve boş durum yönetimi

**JavaScript Entegrasyonu:**
```javascript
// js/projects.js üzerinden çalışır
// Supabase'den 'Projects' tablosunu çeker
// Dikey kart yapısında render eder
```

### 3. hallhunter_strawberry_project.html (Ağır Sanayi İSG)

**Özellikler:**
- Sinematik Hero Section (Video arkaplan)
- Proje detayları (Müşteri, Platform, Teknolojiler)
- Zorluk ve Çözüm bölümleri
- Galeri ve Video gösterimi
- "Sıradaki Proje" navigasyonu

### 3. aboutus.html (Hakkımızda)

**Bölümler:**
1. Vizyon/Misyon kartları
2. Kurucu ortaklar (Emre Yılmaz - CTO, Zeynep Kaya - CEO)
3. Hikaye bölümü ("Garajdan Metaverse'e")

### 4. contact.html (İletişim)

**Özellikler:**
- İletişim bilgileri (Teknopark İstanbul)
- Google Maps embed
- İletişim formu (Ad, E-posta, Konu, Mesaj)
- Form input focus efektleri

---

## 🔗 Navigasyon Sistemi

### Dosya İsimleri

**ÖNEMLİ:** Navigasyon linkleri şu dosya isimlerini kullanır:
- `index.html` - Ana Sayfa
- `projects.html` - Projeler (NOT: projeler.html DEĞİL!)
- `aboutus.html` - Hakkımızda (NOT: hakkimizda.html DEĞİL!)
- `contact.html` - İletişim (NOT: iletisim.html DEĞİL!)

### Navbar Yapısı

**Desktop:**
- Floating navbar (fixed top-6)
- Glass-card efekti
- Logo: "Heat Interactive" (text-xl font-bold)
- 4 navigasyon linki

**Mobile:**
- Hamburger menü
- Fullscreen overlay
- Close butonu (X)

---

## 🎬 Animasyon ve Etkileşimler

### Scroll Reveal

```javascript
const revealOnScroll = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((reveal) => {
        if (reveal.getBoundingClientRect().top < windowHeight - 100) {
            reveal.classList.add('active');
        }
    });
}
```

**Kullanım:**
- `.reveal` - Temel sınıf
- `.delay-100`, `.delay-200`, `.delay-300` - Gecikme ekler

### Hover Efektleri

- **Kartlar:** `hover:border-indigo-500/30`
- **Butonlar:** `hover:scale-105`
- **Linkler:** `hover:text-indigo-400`
- **Resimler:** `group-hover:scale-110`

---

## 🖼️ Medya Kaynakları

### Supabase Storage

**Bucket:** TestBucket  
**Base URL:** `https://zbifnmzafevagllhzibk.supabase.co/storage/v1/object/public/TestBucket/`

**Kullanılan Dosyalar:**
- `Logo.png` - Şirket logosu
- `HeroImage.png` - Ana sayfa hero görseli

### Harici Kaynaklar

- **Font Awesome:** 6.4.0 (CDN)
- **Google Fonts:** Outfit ailesi
- **Unsplash:** Yer tutucu görseller (bazı sayfalarda)

---

## ⚠️ Önemli Notlar ve Hatırlatmalar

### CSS Konsolidasyonu

✅ **YAPILDI:** Tüm inline CSS'ler `style.css`'e taşındı  
❌ **YAPMA:** Artık HTML dosyalarına `<style>` tagı ekleme  
✅ **YAP:** Yeni stiller için `style.css`'i güncelle

### Supabase RLS (Row Level Security)

**Sorun:** Eğer Companies tablosundan veri gelmiyor ise:

1. **Tablo boş mu kontrol et**
2. **RLS politikalarını kontrol et:**
   ```sql
   -- Herkese okuma izni ver
   CREATE POLICY "Allow public read access"
   ON "Companies"
   FOR SELECT
   TO anon
   USING (true);
   ```

### Hero Image Sorunu

**Çözüldü:** `animate-float` ve `reveal` sınıfları kaldırıldı  
**Neden:** CSS'de tanımlı değildi, resim görünmüyordu  
**Şimdi:** Resim direkt görünür, animasyon yok

### Logo Değişikliği

**Önceki:** Logo image + "Heat" text  
**Şimdi:** Sadece "Heat Interactive" text (text-xl font-bold)  
**Neden:** Kullanıcı talebi - daha okunabilir olması için

---

## 🔍 Debug ve Sorun Giderme

### Console Logging

**companies.js** detaylı logging içerir:
- Her adımda emoji ile işaretlenmiş mesajlar
- Hata detayları JSON formatında
- Veri sayısı ve içeriği

### Yaygın Sorunlar

1. **Şirketler görünmüyor**
   - Console'u kontrol et (F12)
   - Supabase tablosunu kontrol et
   - RLS politikalarını kontrol et

2. **Resim görünmüyor**
   - URL'yi kontrol et
   - Supabase storage'ı kontrol et
   - Browser console'da 404 hatası var mı?

3. **Animasyon çalışmıyor**
   - JavaScript yüklendi mi?
   - Console'da hata var mı?
   - CSS sınıfları doğru mu?

---

## 📦 Bağımlılıklar

### CDN Kaynakları

```html
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;800&display=swap" rel="stylesheet">

<!-- Supabase JS SDK -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
```

### Yerel Dosyalar

```html
<!-- CSS -->
<link rel="stylesheet" href="style.css">

<!-- JavaScript -->
<script src="js/companies.js"></script>
```

---

## 🚀 Gelecek Geliştirmeler (Potansiyel)

1. **Proje Detay Sayfaları** - Her proje için ayrı sayfa
2. **Blog Bölümü** - Şirket haberleri ve makaleler
3. **Çoklu Dil Desteği** - İngilizce versiyonu
4. **Admin Panel** - Supabase ile içerik yönetimi
5. **Form Backend** - İletişim formu için backend entegrasyonu
6. **Analytics** - Google Analytics entegrasyonu

---

## 📝 Kod Standartları

### HTML

- Türkçe karakterler için UTF-8 encoding
- Semantic HTML5 tagları kullan
- Accessibility için alt text ekle
- ID'ler kebab-case (`companies-container`)

### CSS

- BEM benzeri isimlendirme
- Mobile-first yaklaşım
- Tailwind utility classes tercih et
- Custom CSS sadece gerektiğinde

### JavaScript

- Modern ES6+ syntax
- Async/await kullan
- Console logging ile debug
- Error handling her zaman ekle

---

## 🎓 Öğrenilen Dersler

1. **CSS Konsolidasyonu:** Inline CSS'ler performans ve bakım açısından kötü
2. **Supabase RLS:** Public access için politika gerekli
3. **Debug Logging:** Emoji'li console.log'lar çok yardımcı
4. **Animasyon Sorunları:** Tanımsız CSS sınıfları elementleri gizleyebilir
5. **Dosya İsimlendirme:** Türkçe karakter içermeyen dosya isimleri tercih edilmeli

---

## 📞 İletişim ve Destek

**Proje Sahibi:** Heat Interactive  
**Lokasyon:** Teknopark İstanbul, Pendik / İstanbul  
**E-posta:** info@heatinteractive.com  
**Telefon:** +90 (216) 555 01 23

---

## 📅 Versiyon Geçmişi

**v1.1** - Proje Yönetimi Güncellemesi
- `projects.html` dinamik hale getirildi (Supabase entegrasyonu)
- `js/projects.js` eklendi
- `hallhunter_strawberry_project.html` detay sayfası eklendi
- Proje kartları dikey tasarıma geçirildi

**v1.0** - İlk versiyon
- 4 sayfa (Ana, Projeler, Hakkımızda, İletişim)
- CSS konsolidasyonu
- Supabase entegrasyonu
- Responsive tasarım

---

## 🔐 Güvenlik Notları

- **Supabase Anon Key:** Public key, güvenli
- **RLS Politikaları:** Veri güvenliği için aktif tutulmalı
- **Form Validation:** Frontend validation mevcut, backend gerekli
- **CORS:** Supabase otomatik handle ediyor

---

**Son Güncelleme:** 2025-12-05  
**Proje Durumu:** Aktif Geliştirme  
**Bakım:** Düzenli güncellemeler yapılıyor
