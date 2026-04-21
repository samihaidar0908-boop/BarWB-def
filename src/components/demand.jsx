import styles from './cta.module.css';

function FloatingCTA() {
  return (
    // Tag <a> biar pas diklik langsung buka tab WhatsApp
    <a 
      href="https://wa.me/6285711107079?text=Halo%20BarWB,%20saya%20tertarik%20bikin%20website%20dan%20mau%20minta%20penawaran!" 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.floatingBtn}
    >
      {/* Icon Chat / WA */}
      <div className={styles.iconWadah}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className={styles.icon}
        >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.74.45 3.37 1.22 4.8L2 22l5.37-1.14A9.957 9.957 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        </svg>
      </div>
      
      {/* Teks yang muncul pas di-hover */}
      <span className={styles.teks}>Minta Penawaran</span>
    </a>
  );
}

export default FloatingCTA;