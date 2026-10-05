export default function ExamCard({ studentData, examId, onReset }) {
  const cardContainer = {
    maxWidth: "650px",
    margin: "30px auto",
    padding: "25px",
    border: "2px solid #2563eb",
    borderRadius: "12px",
    backgroundColor: "#f8fafc",
    fontFamily: "sans-serif",
  };

  const headerStyle = {
    textAlign: "center",
    borderBottom: "2px dashed #2563eb",
    paddingBottom: "15px",
    marginBottom: "20px",
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 0",
    borderBottom: "1px solid #e2e8f0",
  };

 return (
  <div>
   <div style={cardContainer} id="printable-card">
    <div style={headerStyle}>
     <h2 style={{ margin: 0, color: '#1e3a8a' }}>KARTU TANDA PESERTA UJIAN MASUK</h2>
     <p style={{ margin: '5px 0 0', color: '#64748b' }}>UNIVERSITAS PMB — T.A 2026/2027</p>
    </div>

    <div style={{ textAlign: 'center', marginBottom: '20px', backgroundColor: '#dbeafe', padding: '10px', borderRadius: '8px' }}>
     <span style={{ fontSize: '0.9rem', color: '#1e40af' }}>NOMOR PESERTA UJIAN:</span>
     <h3 style={{ margin: 0, fontSize: '1.6rem', color: '#1e3a8a' }}>{examId}</h3>
    </div>

    <div style={rowStyle}>
     <strong>Nama Lengkap:</strong>
     <span>{studentData.fullName}</span>
    </div>
    <div style={rowStyle}>
     <strong>Email:</strong>
     <span>{studentData.email}</span>
    </div>
    <div style={rowStyle}>
     <strong>No. Telepon:</strong>
     <span>{studentData.phone}</span>
    </div>
    <div style={rowStyle}>
     <strong>Tempat Lahir:</strong>
     <span>{studentData.tempatLahir}</span>
    </div>
    <div style={rowStyle}>
     <strong>Tanggal Lahir:</strong>
     <span>{studentData.tanggalLahir}</span>
    </div>
    <div style={rowStyle}>
     <strong>Asal Sekolah:</strong>
     <span>{studentData.asalSekolah}</span>
    </div>
    <div style={rowStyle}>
     <strong>Program Studi Pilihan:</strong>
     <span>{studentData.prodi}</span>
    </div>
    <div style={rowStyle}>
     <strong>Agama:</strong>
     <span>{studentData.agama}</span>
    </div>
    <div style={rowStyle}>
     <strong>Hobi/Minat:</strong>
     <span>{studentData.hobiMinat.join(', ')}</span>
    </div>
    <div style={rowStyle}>
     <strong>Jenis Kelamin:</strong>
     <span>{studentData.gender}</span>
    </div>
    <div style={rowStyle}>
     <strong>Lokasi Ujian:</strong>
     <span>Gedung Utama Lab Komputer - Kampus A</span>
    </div>
   </div>

   <div className="no-print" style={{ textAlign: 'center', marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
    <button
     onClick={() => window.print()}
     style={{ padding: '10px 24px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
    >
     🖨️ Cetak / Print Kartu
    </button>
    <button
     onClick={onReset}
     style={{ padding: '10px 24px', backgroundColor: '#64748b', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
    >
     🔄 Daftar Peserta Lain
    </button>
   </div>
  </div>
 );

}
