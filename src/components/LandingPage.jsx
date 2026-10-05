export default function LandingPage({ onStartRegister }) {
  const containerStyle = {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "sans-serif",
  };

  const heroStyle = {
    textAlign: "center",
    padding: "40px 20px",
    backgroundColor: "#f1f5f9",
    borderRadius: "12px",
    marginBottom: "30px",
  };

  const ctaBtnStyle = {
    backgroundColor: "#2563eb",
    color: "#fff",
    padding: "12px 28px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "15px",
    fontWeight: "bold",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  };

  const cardStyle = {
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    padding: "20px",
    backgroundColor: "#fff",
  };

  return (
  <div style={containerStyle}>
   <div style={heroStyle}>
    <h1 style={{ color: '#0f172a', marginBottom: '10px' }}>Penerimaan Mahasiswa Baru T.A 2026/2027</h1>
    <p style={{ color: '#475569', fontSize: '1.1rem' }}>
     Bergabunglah bersama kami dan wujudkan masa depan gemilang di bidang teknologi dan bisnis modern.
    </p>
    <button style={ctaBtnStyle} onClick={onStartRegister}>
     Daftar Sekarang
    </button>
   </div>

   <h2>Alur Pendaftaran Ujian</h2>
   <div style={gridStyle}>
    <div style={cardStyle}>
     <h3>1. Isi Formulir</h3>
     <p>Lengkapi data diri, email, jenis kelamin, serta pilihan program studi secara benar.</p>
    </div>
    <div style={cardStyle}>
     <h3>2. Validasi & Cetak</h3>
     <p>Sistem akan memverifikasi data dan secara otomatis menerbitkan Nomor Peserta Ujian.</p>
    </div>
    <div style={cardStyle}>
     <h3>3. Ikuti Ujian</h3>
     <p>Cetak kartu tanda peserta dan bawa saat pelaksanaan ujian masuk seleksi.</p>
    </div>
   </div>
  </div>
 );

}
