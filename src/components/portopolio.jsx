import { useState } from 'react';
import styles from './portopolio.module.css';

function Portofolio() {
  // 1. Bikin state buat nyimpen kategori yang lagi aktif
  const [filterAktif, setFilterAktif] = useState('Semua');

  // 2. Data Dummy Portofolio lu
  const dataKarya = [
    { id: 1, judul: "Toko Online Sepatu Lokal", kategori: "E-Commerce", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 2, judul: "Web Klinik Gigi", kategori: "Company Profile", img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 3, judul: "Landing Page Startup AI", kategori: "Landing Page", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 4, judul: "Portal Berita Olahraga", kategori: "Blog/Media", img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 5, judul: "Web Arsitektur & Interior", kategori: "Company Profile", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 6, judul: "Marketplace Sayur Organik", kategori: "E-Commerce", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  ];

  // 3. Daftar tombol filternya
  const kategoriList = ['Semua', 'E-Commerce', 'Company Profile', 'Landing Page', 'Blog/Media'];

  // 4. Logika Filter (Nampilin data sesuai tombol yang diklik)
  const karyaTampil = filterAktif === 'Semua' 
    ? dataKarya 
    : dataKarya.filter(item => item.kategori === filterAktif);

  return (
    <main className={styles.pageWrapper}>
      
      {/* HEADER SECTION */}
      <section className={styles.headerPorto}>
        <div className={styles.container}>
        <div className={styles.headingContent}>
          <h1>Karya Terbaik Kami</h1>
          <p>Jelajahi berbagai proyek digital yang telah kami bangun dengan penuh semangat dan dedikasi tinggi untuk kesuksesan klien kami.</p> 
          </div>
        </div>
        
      </section>

      {/* FILTER SECTION */}
      <section className={styles.filterSection}>
        <div className={styles.btnContainer}>
          {kategoriList.map((kat, index) => (
            <button 
              key={index}
              // Kalo tombol ini sama dengan filterAktif, kasih class 'aktif'
              className={`${styles.btnFilter} ${filterAktif === kat ? styles.aktif : ''}`}
              onClick={() => setFilterAktif(kat)}
            >
              {kat}
            </button>
          ))}
        </div>
      </section>

      {/* GRID KARYA SECTION */}
      <section className={styles.gridSection}>
        <div className={styles.karyaGrid}>
          {karyaTampil.map((karya) => (
            <div key={karya.id} className={styles.karyaCard}>
              
              <img src={karya.img} alt={karya.judul} className={styles.karyaImg} />
              
              {/* Ini rahasia efek hovernya (Overlay) */}
              <div className={styles.karyaOverlay}>
                <span className={styles.karyaKategori}>{karya.kategori}</span>
                <h3>{karya.judul}</h3>
                <button className={styles.btnDetail}>Lihat Detail</button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className={styles.ctaFooter}>
        <h2>Siap Membangun Website Impian Anda?</h2>
        <p>Mari diskusikan ide Anda dan ubah menjadi kenyataan digital bersama BarWB.</p>
        <button className={styles.btnMulai}>Mulai Proyek</button>
      </section>

    </main>
  );
}

export default Portofolio;