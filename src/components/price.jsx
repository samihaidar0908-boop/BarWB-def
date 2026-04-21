import styles from './price.module.css';

function Price() {
  // Data Harga Jasa Lu (Bisa diganti harganya kapan aja)
  const daftarHarga = [
    {
      id: 1,
      nama: "Landing Page",
      harga: "Rp 1.5 Juta",
      deskripsi: "Sempurna untuk kampanye iklan, promosi produk tunggal, atau event.",
      fitur: ["1 Halaman Panjang (Maks 7 Seksi)", "Desain Responsif (Mobile-Friendly)", "Formulir Kontak / Leads", "Copywriting Dasar", "Waktu Pengerjaan 3 Hari", "Gratis Hosting 1 Tahun"],
      populer: false,
      btnText: "Pilih Paket"
    },
    {
      id: 2,
      nama: "Company Profile",
      harga: "Rp 3.5 Juta",
      deskripsi: "Tingkatkan kredibilitas perusahaan Anda dengan profil digital profesional.",
      fitur: ["Maksimal 5 Halaman", "Desain UI/UX Premium", "Integrasi Google Analytics", "Optimasi Kecepatan Web", "SEO Dasar (On-Page)", "Waktu Pengerjaan 1 Minggu", "Gratis Domain & Hosting 1 Tahun"],
      populer: true,
      btnText: "Pilihan Terfavorit"
    },
    {
      id: 3,
      nama: "Toko Online (E-Commerce)",
      harga: "Rp 7.5 Juta",
      deskripsi: "Sistem toko online lengkap siap pakai untuk melipatgandakan omset.",
      fitur: ["Katalog Produk Tanpa Batas", "Keranjang & Checkout", "Integrasi Payment Gateway", "Hitung Ongkir Otomatis", "Panel Admin Produk", "Waktu Pengerjaan 2-3 Minggu", "Training Penggunaan Sistem"],
      populer: false,
      btnText: "Pilih Paket"
    },
    {
      id: 4,
      nama: "Custom Web App",
      harga: "Hubungi Kami",
      deskripsi: "Sistem kompleks berbasis web yang dirancang khusus untuk operasional bisnis Anda.",
      fitur: ["Dashboard Admin Kompleks", "Sistem Database Custom", "Integrasi API Pihak Ketiga", "Keamanan Tingkat Lanjut", "Dukungan Teknis Prioritas", "Skalabilitas Tinggi"],
      populer: false,
      btnText: "Konsultasi Gratis"
    }
  ];

  return (
    <div className={styles.pageWrapper}>
      
      {/* HEADER SECTION */}
      <section className={styles.headerHarga}>
        <h1>Investasi untuk Masa Depan Digital Anda</h1>
        <p>Transparan, tanpa biaya tersembunyi. Pilih paket yang paling sesuai dengan skala dan kebutuhan bisnis Anda.</p>
      </section>

      {/* PRICING GRID SECTION */}
      <section className={styles.pricingSection}>
        <div className={styles.pricingGrid}>
          
          {daftarHarga.map((paket) => (
            <div key={paket.id} className={`${styles.pricingCard} ${paket.populer ? styles.cardPopuler : ''}`}>
              
              {/* Badge Populer kalo nilainya true */}
              {paket.populer && <div className={styles.badgePopuler}>Paling Diminati</div>}

              <div className={styles.cardHeader}>
                <h3>{paket.nama}</h3>
                <p className={styles.deskripsiPaket}>{paket.deskripsi}</p>
                <h2 className={styles.hargaText}>{paket.harga}</h2>
                {paket.id !== 4 && <span className={styles.sekaliBayar}>/ sekali bayar</span>}
              </div>

              <div className={styles.cardBody}>
                <ul className={styles.listFitur}>
                  {paket.fitur.map((item, index) => (
                    <li key={index}>
                      <span className={styles.iconCheck}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardFooter}>
                <button className={`${styles.btnPilih} ${paket.populer ? styles.btnPopuler : ''}`}>
                  {paket.btnText}
                </button>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* FAQ SINGKAT (Biar makin minimalis dan informatif) */}
      <section className={styles.faqSection}>
        <div className={styles.faqBox}>
          <h3>Masih bingung memilih paket?</h3>
          <p>Tim ahli BarWB siap membantu menganalisis kebutuhan bisnis Anda untuk menemukan solusi yang paling tepat sasaran.</p>
          <button className={styles.btnTanya}>Hubungi Tim Sales</button>
        </div>
      </section>

    </div>
  );
}

export default Price;