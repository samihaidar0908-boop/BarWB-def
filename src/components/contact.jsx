import { useState } from 'react';
import axios from 'axios'; // <-- 1. IMPORT AXIOS DI SINI
import styles from './contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    layanan: 'Company Profile',
    pesan: ''
  });

  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setStatus('loading')

    const apiUrl = import.meta.env.VITE_API_URL;;

    // 2. KIRIM DATA KE LARAVEL PAKE AXIOS
    axios.post(`${apiUrl}/contact`, formData)
      .then(response => {
        // Kalau sukses, munculin pesan dari Laravel
       setStatus('success')
      })
      .catch(error => {
        // Kalau gagal/error
        setStatus('error');
        console.error(error)
      });
  };

  // 1. TAMPILAN SUKSES (Warna Hijau)
  if (status === 'success') {
    return (
      <div className={styles.pageWrapper}>
         <div style={{ 
             backgroundColor: '#d4edda', 
             color: '#155724', 
             padding: '2rem', 
             borderRadius: '15px', 
             textAlign: 'center',
             border: '2px solid #c3e6cb',
             marginTop: '2rem'
         }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Data berhasil terkirim!</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
                datamu sudah terkirim ke server barWb
            </p>
            <button 
                onClick={() => setStatus('idle')}
                style={{
                    backgroundColor: '#155724',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}
            >
                Kirim Pesan Lagi
            </button>
         </div>
      </div>
    );
  }

  // 2. TAMPILAN ERROR (Warna Merah)
  if (status === 'error') {
     return (
       <div className={styles.pageWrapper}>
         <div style={{ 
             backgroundColor: '#f8d7da', 
             color: '#721c24', 
             padding: '2rem', 
             borderRadius: '15px', 
             textAlign: 'center',
             border: '2px solid #f5c6cb',
             marginTop: '2rem'
         }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Data gagal terkirim!</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
                Servernya sedang dimatikan / down
            </p>
            <button 
                onClick={() => setStatus('idle')}
                style={{
                    backgroundColor: '#721c24',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}
            >
                Coba Lagi
            </button>
         </div>
       </div>
     )
  }

  return (
    <div className={styles.pageWrapper}>
      
      {/* HEADER SECTION */}
      <section className={styles.headerKontak}>
        <h1>Mari Berkolaborasi</h1>
        <p>Punya ide brilian atau butuh solusi digital? Jangan ragu untuk menyapa kami. Tim ahli BarWB siap membantu Anda.</p>
      </section>

      {/* KONTAK SPLIT LAYOUT */}
      <section className={styles.kontenKontak}>
        <div className={styles.kontakContainer}>
          
          {/* KOLOM KIRI (Info) */}
          <div className={styles.infoKolom}>
            <h2>Hubungi Kami</h2>
            <p>Isi formulir di samping, atau hubungi kami langsung melalui kontak di bawah ini.</p>
            
            <div className={styles.listInfo}>
              <div className={styles.itemInfo}>
                <span className={styles.icon}>📧</span>
                <div>
                  <h4>Email</h4>
                  <p>hello@barwb.com</p>
                </div>
              </div>
              <div className={styles.itemInfo}>
                <span className={styles.icon}>📱</span>
                <div>
                  <h4>WhatsApp (Konsultasi Cepat)</h4>
                  <p>+62 812 3456 7890</p>
                </div>
              </div>
              <div className={styles.itemInfo}>
                <span className={styles.icon}>🏢</span>
                <div>
                  <h4>Markas Besar</h4>
                  <p>Jl. Teknologi No. 99, Jakarta Selatan<br/>Indonesia 12345</p>
                </div>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN (Formulir) */}
          <div className={styles.formKolom}>
            <form onSubmit={handleSubmit} className={styles.formElement}>
              
              <div className={styles.inputGrup}>
                <label htmlFor="nama">Nama Lengkap</label>
                <input 
                  type="text" 
                  id="nama" 
                  name="nama" 
                  value={formData.nama}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  required 
                />
              </div>

              <div className={styles.inputGrup}>
                <label htmlFor="email">Alamat Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@perusahaan.com" 
                  required 
                />
              </div>

              <div className={styles.inputGrup}>
                <label htmlFor="layanan">Layanan yang Dibutuhkan</label>
                <select 
                  id="layanan" 
                  name="layanan"
                  value={formData.layanan}
                  onChange={handleChange}
                >
                  <option value="Landing Page">Landing Page</option>
                  <option value="Company Profile">Company Profile</option>
                  <option value="E-Commerce">Toko Online (E-Commerce)</option>
                  <option value="Custom Web App">Custom Web App</option>
                  <option value="Lainnya">Lainnya / Sekadar Tanya</option>
                </select>
              </div>

              <div className={styles.inputGrup}>
                <label htmlFor="pesan">Pesan atau Detail Proyek</label>
                <textarea 
                  id="pesan" 
                  name="pesan" 
                  rows="4" 
                  value={formData.pesan}
                  onChange={handleChange}
                  placeholder="Ceritakan sedikit tentang bisnis dan kebutuhan web Anda..." 
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.btnKirim}>
                Kirim Pesan Sekarang
              </button>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Contact;