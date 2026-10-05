import { useState } from "react";

export default function RegistrationForm({ onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    tempatLahir: "",
    tanggalLahir: "",
    asalSekolah: "",
    prodi: "Teknik Informatika",
    gender: "Laki-laki",
    agama: "Islam",
    pasFoto: "",
    hobiMinat: [],
    agreed: false,
  });

  const [lainnya, setLainnya] = useState("");

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "hobiMinat") {
      setFormData((prev) => ({
        ...prev,
        hobiMinat: checked
          ? [...prev.hobiMinat, value]
          : prev.hobiMinat.filter((hobi) => hobi !== value),
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setError("Nama lengkap wajib diisi!");
      return;
    }
    if (!formData.email.includes("@")) {
      setError("Format email tidak valid!");
      return;
    }
    if (!formData.phone.trim()) {
      setError("Nomor telepon wajib diisi!");
      return;
    }
    if (!formData.tempatLahir.trim()) {
      setError("Tempat lahir wajib diisi!");
      return;
    }
    if (!formData.tanggalLahir.trim()) {
      setError("Tanggal lahir wajib diisi!");
      return;
    }
    if (!formData.asalSekolah.trim()) {
      setError("Asal sekolah wajib diisi!");
      return;
    }
    if (!formData.agreed) {
      setError("Anda harus menyetujui pernyataan keabsahan data!");
      return;
    }

    const generatedExamId =
      "PMB-2026-" + Math.floor(100000 + Math.random() * 900000);
    setError("");
    onSubmitSuccess(formData, generatedExamId);
  };

  const formContainer = {
    maxWidth: "600px",
    margin: "30px auto",
    padding: "30px",
    border: "1px solid #cbd5e1",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
  };

  const inputGroup = { marginBottom: "15px" };
  const labelStyle = {
    display: "block",
    fontWeight: "bold",
    marginBottom: "5px",
  };
  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #cbd5e1",
    boxSizing: "border-box",
  };

 return (
  <div style={formContainer}>
   <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Formulir Pendaftaran Ujian PMB</h2>

   {error && (
    <div style={{ backgroundColor: '#fef2f2', color: '#dc2626', padding: '10px', borderRadius: '6px', marginBottom: '15px' }}>
     {error}
    </div>
   )}

   <form onSubmit={handleSubmit}>
    <div style={inputGroup}>
     <label style={labelStyle}>Nama Lengkap:</label>
     <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} style={inputStyle} placeholder="Contoh: Budi Santoso" />
    </div>

    <div style={inputGroup}>
     <label style={labelStyle}>Email Aktif:</label>
     <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} placeholder="contoh@domain.com" />
    </div>

    <div style={inputGroup}>
     <label style={labelStyle}>Nomor Telepon / WhatsApp:</label>
     <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={inputStyle} placeholder="08123456789" />
    </div>

    <div style={inputGroup}>
     <label style={labelStyle}>Tempat Lahir:</label>
     <input type="text" name="tempatLahir" value={formData.tempatLahir} onChange={handleChange} style={inputStyle} placeholder="Contoh: Budi Santoso" />
    </div>

    <div style={inputGroup}>
     <label style={labelStyle}>Tanggal Lahir:</label>
     <input type="date" name="tanggalLahir" value={formData.tanggalLahir} onChange={handleChange} style={inputStyle} />
    </div>

    <div style={inputGroup}>
     <label style={labelStyle}>Asal Sekolah:</label>
     <input type="text" name="asalSekolah" value={formData.asalSekolah} onChange={handleChange} style={inputStyle} placeholder="Contoh: SMA Negeri 1 Jakarta" />
    </div>

    <div style={inputGroup}>
     <label style={labelStyle}>Pilihan Program Studi:</label>
     <select name="prodi" value={formData.prodi} onChange={handleChange} style={inputStyle}>
      <option value="Teknik Informatika">S1 - Teknik Informatika</option>
      <option value="Sistem Informasi">S1 - Sistem Informasi</option>
      <option value="Teknik Komputer">S1 - Teknik Komputer</option>
      <option value="Bisnis Digital">S1 - Bisnis Digital</option>
     </select>
    </div>

    <div style={inputGroup}>
     <label style={labelStyle}>Pilihan Agama:</label>
     <select name="agama" value={formData.agama} onChange={handleChange} style={inputStyle}>
      <option value="Islam">Islam</option>
      <option value="Kristen">Kristen</option>
      <option value="Katolik">Katolik</option>
      <option value="Hindu">Hindu</option>
      <option value="Budha">Budha</option>
     </select>
    </div>

    <div style={inputGroup}>
     <label style={labelStyle}>Pilihan Hobi/Minat:</label>
      <label><input type="checkBox" name="hobiMinat" value="Baca Buku" checked={formData.hobiMinat.includes("Baca Buku")} onChange={handleChange} />Baca Buku</label>
      <label><input type="checkBox" name="hobiMinat" value="Olahraga" checked={formData.hobiMinat.includes("Olahraga")} onChange={handleChange} />Olahraga</label>
      <label><input type="checkBox" name="hobiMinat" value="Musik" checked={formData.hobiMinat.includes("Musik")} onChange={handleChange} />Musik</label>
      <label><input type="checkBox" name="hobiMinat" value="Traveling" checked={formData.hobiMinat.includes("Traveling")} onChange={handleChange} />Traveling</label>
      <label><input type="checkBox" name="hobiMinat" value={lainnya} checked={formData.hobiMinat.includes(lainnya)} onChange={handleChange} />lainnya: <input type="text" onChange={(e) => setLainnya(e.target.value)} /></label>
    </div>

    <div style={inputGroup}>
     <label style={labelStyle}>Jenis Kelamin:</label>
     <label style={{ marginRight: '15px' }}>
      <input type="radio" name="gender" value="Laki-laki" checked={formData.gender === 'Laki-laki'} onChange={handleChange} /> Laki-laki
     </label>
     <label>
      <input type="radio" name="gender" value="Perempuan" checked={formData.gender === 'Perempuan'} onChange={handleChange} /> Perempuan
     </label>
    </div>

    <div style={inputGroup}>
      <label style={labelStyle}>Pas Foto:</label>
      <input type="file" name="pasFoto" onChange={handleChange} style={inputStyle} />
    </div>

    <div style={{ ...inputGroup, marginTop: '20px' }}>
     <label style={{ fontWeight: 'normal' }}>
      <input type="checkbox" name="agreed" checked={formData.agreed} onChange={handleChange} /> Saya menyatakan bahwa seluruh data yang diisikan adalah benar.
     </label>
    </div>

    <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#16a34a', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>
     Kirim & Dapatkan Kartu Ujian
    </button>
   </form>
  </div>
 );

}
