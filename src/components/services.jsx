import styles from './services.module.css';
import project1 from '../assets/project-1.png'
import project2 from '../assets/project-2.png'
import project3 from '../assets/project-3.png'
import project4 from '../assets/project-4.png'
import project5 from '../assets/project-5.png'
import project6 from  '../assets/project-6.png'
import about from '../assets/about.png'

function Services() {
  // Data dummy buat galeri portofolio (yang gede-gede)
  const portofolio = [
    project1,
    project2,
    project3,
    project4,
    project5,
    project6
  ];
  
  // Data dummy buat cerita klien / blog (yang kecil-kecil di bawah)
  const ceritaKlien = [
    { 
      judul: "Redesain Web E-Commerce Lokal", 
      tgl: "12 Ags 2024" , 
      img: project1
    },

    { 
      
      judul: "Optimasi SEO Portal Berita", 
      tgl: "05 Ags 2024" ,
      img: project2
    },
    { 
      judul: "Bikin Landing Page Startup Apps", 
      tgl: "28 Jul 2024" ,
      img: project3
    },
    { 
      judul: "Sistem Kasir Berbasis Web", 
      tgl: "15 Jul 2024",
      img: project4
    },
    { 
      judul: "profile Perusahaan Tambang", 
      tgl: "01 Jul 2024" ,
      img: project5
    },
    { 
      judul: "UI/UX Aplikasi Kesehatan", 
      tgl: "20 Jun 2024" ,
      img : project6
    }
  ];

  return (
    <main className={styles.pageWrapper}>
      
      
      <section className={styles.heroGelap}>
        <div className={styles.heroContent}>
          <h1>Layanan Web Design Kami</h1>
          <p>
            Di BarWB, kami tidak sekadar membuat website. Kami merancang mesin pertumbuhan digital yang interaktif, responsif, dan siap meroketkan bisnis Anda di dunia maya.
          </p>
        </div>
      </section>

      {/* ==============================================
          MAIN CONTENT (Background Putih, Numpuk ke atas)
          ============================================== */}
      <section className={styles.kontenPutihLengkung}>
        
        {/* KOTAK VIDEO / SHOWCASE */}
        <div className={styles.videoCardUtama}>
          <div className={styles.videoPlaceholder}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/_VargYXLZHo?si=7poBCPAQ-ZBas7OJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className={styles.videoText}>
            <h3>Di Balik Layar UI/UX Kreatif BarWB</h3>
            <p>
              Setiap baris kode yang kami tulis dan setiap piksel yang kami desain memiliki satu tujuan: Menciptakan pengalaman pengguna (UI/UX) terbaik yang mengkonversi pengunjung menjadi pelanggan setia.
            </p>
            <button className={styles.btnOutline}> Lihat Proses Kami</button>
          </div>
        </div>

        {/* ==============================================
            GALERI DRAG / HORIZONTAL SCROLL (Portofolio)
            ============================================== */}
        <div className={styles.galeriSection}>
          <h3 className={styles.sectionTitle}>Intip Hasil Karya Kami</h3>
          
          <div className={styles.horizontalScrollWrapper}>
            {portofolio.map((imgUrl, idx) => (
              <div key={idx} className={styles.galeriItemBesar}>
                <img src={imgUrl} alt={`Portofolio ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>

      
        <div className={styles.ceritaKlienSection}>
          <h3 className={styles.sectionTitle}>Baca Kisah Sukses Klien Kami!</h3>
          
          <div className={styles.horizontalScrollWrapper}>
            {ceritaKlien.map((item, idx) => (
              <div key={idx} className={styles.klienCardKecil}>
                
                <img className={styles.klienThumbnail} src={item.img} alt="foto si klien" />

                <div className={styles.klienInfo}>
                  <span className={styles.tglText}>{item.tgl}</span>
                  <h4>{item.judul}</h4>
                  <p>Membantu klien mencapai target pasar melalui pendekatan desain yang berpusat pada pengguna...</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

    </main>
  );
}

export default Services;