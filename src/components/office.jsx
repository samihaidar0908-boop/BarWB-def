import styles from './office.module.css';

function Office() {
  // Data dummy foto-foto suasana kantor/kerja tim lu
  const galeriFoto = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <div className={styles.pageWrapper}>
      
      {/* ==============================================
          HERO SECTION (Gelap Gulita)
          ============================================== */}
      <section className={styles.heroGelap}>
        <div className={styles.heroText}>
          <h1>Markas Kreatif BarWB</h1>
          <p>
            Tempat di mana baris kode diubah menjadi karya digital. Dengan budaya kerja yang kolaboratif dan inovatif, tim kami terus bertumbuh untuk menciptakan solusi website terbaik untuk Anda.
          </p>
        </div>
      </section>

      {/* ==============================================
          KONTEN PUTIH (Melengkung & Numpuk)
          ============================================== */}
      <section className={styles.kontenPutih}>
        
        {/* KOTAK VIDEO (Yang numpuk di tengah) */}
        <div className={styles.videoWadah}>
          <div className={styles.videoPlaceholder}>
            <iframe width="560px" height="315px" border-radius="55px" src="https://www.youtube.com/embed/_VargYXLZHo?si=gi8QnofEdUZpHX1T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className={styles.videoInfo}>
            <h3>Di Balik Layar Keluarga BarWB</h3>
            <p>
              Kami percaya bahwa website yang luar biasa lahir dari tim yang solid. Intip bagaimana keseharian desainer dan developer kami berkolaborasi, dari sesi brainstorming hingga begadang mengejar deadline, demi menciptakan pengalaman digital yang memukau.
            </p>
            <button className={styles.btnPutih}>Putar Video</button>
          </div>
        </div>

        {/* ==============================================
            GALERI DRAG / HORIZONTAL SCROLL (Foto Kantor)
            ============================================== */}
        <div className={styles.galeriSection}>
          <h3 className={styles.galeriTitle}>DNA Kreatif yang Memastikan Layanan Terbaik</h3>
          
          <div className={styles.horizontalScroll}>
            {galeriFoto.map((foto, index) => (
              <div key={index} className={styles.fotoItem}>
                <img src={foto} alt={`Suasana Kantor BarWB ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
}

export default Office;