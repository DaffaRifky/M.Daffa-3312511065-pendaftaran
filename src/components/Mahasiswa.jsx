
export default function Mahasiswa({ studentArray }) {
const tableStyle = {
    width: "90%",
    margin: "30px auto",
    borderCollapse: "collapse",
    fontFamily: "sans-serif",
    border: "2px solid #000000",
  };

const thStyle = {
    backgroundColor: "#2563eb",
    color: "#fff",
    padding: "10px",
    textAlign: "left",
  };

const tdStyle = {
    border: "1px solid #000000",
    padding: "8px",
  };

  return (
    <table style={tableStyle}>
        <thead style={thStyle}>
            <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Telepon</th>
                <th>Tempat Lahir</th>
                <th>Tanggal Lahir</th>
                <th>Asal Sekolah</th>
                <th>Program Studi</th>
                <th>Jenis Kelamin</th>
                <th>Agama</th>
                <th>Hobi & Minat</th>
            </tr>
        </thead>
        <tbody style={tdStyle}>
            {studentArray.length === 0 ? (
                <tr>
                    <td colSpan="11" style={{ textAlign: "center", padding: "20px" }}>
                        Belum ada data mahasiswa yang terdaftar.
                    </td>
                </tr>
            ) : (
                studentArray.map((student, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{student.fullName}</td>
                        <td>{student.email}</td>
                        <td>{student.phone}</td>
                        <td>{student.tempatLahir}</td>
                        <td>{student.tanggalLahir}</td>
                        <td>{student.asalSekolah}</td>
                        <td>{student.prodi}</td>
                        <td>{student.gender}</td>
                        <td>{student.agama}</td>
                        <td>{student.hobiMinat.join(', ')}</td>
                    </tr>
            )))}
        </tbody>
    </table>
  );
}