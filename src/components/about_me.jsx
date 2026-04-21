import styles from './about_me.module.css';
import office from '../assets/office.png'
import ceo from '../assets/ceo.png'
import ceo2 from '../assets/otot.jpg'
function Aboutme() {
    const appreciation = [
    { tahun: "2023", gelar: "Best UI/UX Agency Award", desc: "Penghargaan desain antarmuka terbaik." },
    { tahun: "2023", gelar: "Top 100 Web Dev Asia", desc: "Masuk jajaran developer elit Asia." },
    { tahun: "2022", gelar: "Fastest E-Commerce Build", desc: "Rekor pembuatan sistem toko online." },
    { tahun: "2022", gelar: "Google Partner Tech", desc: "Sertifikasi resmi standar web Google." },
    { tahun: "2021", gelar: "Awwwards Nominee", desc: "Nominasi website paling interaktif." },
    { tahun: "2021", gelar: "Startup Choice Award", desc: "Agensi pilihan startup lokal." },
  ];
  
    return (
    <main>
        <section className={styles.aboutPage1}>
            <div className={styles.container}>
            <div className={styles.opening}>
                <h1>about me</h1>
                <p>Aku sering dipandang sebagai coders yang sudah ada privillagenya. Namun, aku selalu menganggap diriku sebagai jasa website yang penuh energi dan semakin kuat berjuang melewati berbagai tantangan sulit setiap hari.</p>
            </div>
            </div>
        </section>

        <section className={styles.aboutPage2} id="aboutMe">

        <div className={styles.content}>
            <div className={styles.imageContent}>      
                <img src={ceo} alt="foto ceo" />
            </div>
                <div className={styles.textContent}>
                    <h2>Bagaimana BarWb terbangun</h2>
                     <p>BarWb didirikan oleh Sami Akbar
                        Saat itu, aku menghadapi pengalaman hidup dan tantangan yang di mana untuk menghentikan masalah tersebut,
                        Aku harus melakukan sesuatu untuk menghilangkan jurang pemisah antara kota besar dan kota kecil
                        Pada 12 juli 2025, mereka meluncurkan BarWb dengan misi membuat web lebih cepat, responsif dan aman</p>
                </div>
        </div>
        </section> 

        <section className={styles.aboutPage2}>

        <div className={`${styles.content} ${styles.reserve}`}>
            <div className= {styles.imageContent}>      
                <img src={ceo2} alt="" />
            </div>
                <div className={styles.textContent}>
                    <h2>Membangun jasa murah meriah</h2>
                    <p>BarWb menyediakan jasa web dengan harga yang sangat murah, namun tidak mengurangi kualitas
                        pembuatan web yang relative stabil, aman, dan design yang simple, elegan, dam rapih.
                    </p>
                </div>
        </div>
        </section> 

        <section className={`${styles.historySection} ${styles.containerUtama}`}>
        <div className={styles.historyColumn}>
          <div className={styles.historyImage}>
            <img 
              src={office}
              alt="Kantor BarWB" 
            />
          </div>
          <div className={styles.historyText}>
            <h2>Tahun-tahun pertama BarWB</h2>
            <p>
              Dalam beberapa tahun terakhir, kami mendorong digitalisasi UMKM dengan memotivasi pengusaha lokal untuk mulai berjualan secara online. Inisiatif ini dilakukan dengan membangun website responsif yang memungkinkan setiap klien dapat menjangkau pelanggan di mana pun.
            </p>
          </div>
        </div>
      </section>

      {/* ==============================================
          SECTION: TIMELINE GELAP (Rounded Container)
          ============================================== */}
      <section className={styles.containerUtama}>
        <div className={styles.darkTimelineCard}>
          <div className={styles.timelineHeader}>
            <h2>Setiap baris kode menandai perjalanan yang penuh makna dan cerita</h2>
            <p>Membangun fondasi infrastruktur digital yang kuat untuk melangkah lebih jauh ke masa depan yang menjanjikan bersama klien kami.</p>
          </div>
          
          <div className={styles.timelineImages}>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Team 1" />
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Team 2" />
            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Team 3" />
          </div>
        </div>
      </section>

      {/* ==============================================
          SECTION: GRID PENGHARGAAN
          ============================================== */}
      <section className={`${styles.awardsSection} ${styles.containerUtama}`}>
        <h2 className={styles.awardsTitle}>
          Pencapaian dan dedikasi kami mewarnai industri web development selama bertahun-tahun
        </h2>
        
        <div className={styles.awardsGrid}>
          {appreciation.map((item, index) => (
            <div key={index} className={styles.awardCard}>
              <div className={styles.awardIcon}>🏆</div>
              <div className={styles.awardInfo}>
                <span className={styles.awardYear}>{item.tahun}</span>
                <h4>{item.gelar}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==============================================
          SECTION: CALL TO ACTION & FOOTER 
          (PERHATIKAN: Ini Full-Bleed 3 Lapis!)
          ============================================== */}
      {/* Lapis 1: Pembungkus Lebar 100% Background Gelap */}
      <section className={styles.fullBleedFooter}>
        
        {/* Lapis 2: Penahan Lebar di Tengah */}
        <div className={styles.containerUtama}>
          
          {/* Lapis 3: Konten */}
          <div className={styles.ctaContent}>
            <h2>Ingin tahu lebih banyak tentang BarWB?</h2>
            <p>Dapatkan wawasan lebih mendalam tentang layanan kami, portofolio, dan bagaimana kami bisa mendigitalkan bisnis Anda.</p>
            <button className={styles.btnCta}>Konsultasi Gratis</button>
          </div>

          <hr className={styles.footerDivider} />

          <div className={styles.footerLinks}>
            <div className={styles.brandFooter}>
              <h2>Bar<span>WB</span></h2>
              <p>© 2024 - 2026 PT BarWB Digital, seluruh hak dilindungi.</p>
            </div>
            <div className={styles.linkKolom}>
              <h4>Tentang Kami</h4>
              <ul>
                <li>Kisah Kami</li>
                <li>Tempat Kerja Kami</li>
              </ul>
            </div>
            <div className={styles.linkKolom}>
              <h4>Layanan</h4>
              <ul>
                <li>Web Company Profile</li>
                <li>Toko Online / E-Commerce</li>
                <li>Web Aplikasi Custom</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </main>
    )
}

export default Aboutme