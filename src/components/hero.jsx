// src/components/AboutUs.j
import styles from './hero.module.css';

function Hero() {
  return (
    <>
    <section className={styles.OpeningPage}>
      <div className={styles.openingContainer}>
        <div className={styles.openContent}>
          <h2>Cari jasa website design dan </h2>
          <h2>responsif di Bar<span className={styles.logoAccent}>WB</span>.com</h2>
          </div>
        </div>
    </section>

    <section id="/home" className={`${styles.homePage} ${styles.homeContainer}`}>
         <div className={styles.headerCard}>
              <h2 className={styles.headingWeb}>Visi misi kami dalam membangun website</h2>
          </div>
          <div className={styles.visiMision}>
            <div className={styles.misiContent}>
              <h3>Misi Kami</h3>
              <p>Menciptakan solusi web inovatif yang meningkatkan jangkauan bisnis Anda, memberikan pengalaman pengguna yang luar biasa, dan memperkuat citra merek digital Anda.</p>
            </div>
            <div className={styles.misiContent}>
              <h3>Visi Kami</h3>
              <p>Tim ahli kami berdedikasi untuk mendengarkan kebutuhan unik Anda, memberikan desain yang disesuaikan, dan memastikan website Anda tidak hanya bagus, tapi memberikan hasil nyata.</p>
            </div>
          </div>

          <div className={styles.headerCard}>
              <h2 className={styles.headingWeb}>Keuntungan menggunakan Website Kami</h2>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h4>Desain Kustom</h4>
              <p>Website yang unik dan dirancang khusus untuk mewakili merek Anda secara akurat.</p>
            </div>
            <div className={styles.card}>
              <h4>Pengembangan Website</h4>
              <p>Solusi teknis yang solid untuk website yang cepat dan aman.</p>
            </div>
            <div className={styles.card}>
              <h4>E-Commerce Solusi</h4>
              <p>Bangun toko online Anda sendiri dan mulailah menjual produk secara global.</p>
            </div>
            <div className={styles.card}>
              <h4>SEO Optimasi</h4>
              <p>Pastikan website Anda menonjol di hasil pencarian Google dan menarik audiens yang tepat.</p>
            </div>
          </div>
      
    </section>
    </>
  );
}

export default Hero;