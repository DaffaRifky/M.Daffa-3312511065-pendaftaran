export default function Navbar({ activePage, setActivePage }) {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#1e293b",
    color: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  };

  const btnStyle = (page) => ({
    background: activePage === page ? "#3b82f6" : "transparent",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    marginLeft: "10px",
    fontWeight: "bold",
    transition: "background 0.3s",
  });

  return (
    <nav className="no-print" style={navStyle}>
      <h2 style={{ margin: 0, fontSize: "1.4rem" }}>🎓 PMB Universitas PMB</h2>
      <div>
        <button style={btnStyle("home")} onClick={() => setActivePage("home")}>
          Beranda
        </button>
        <button
          style={btnStyle("register")}
          onClick={() => setActivePage("register")}
        >
          Pendaftaran
        </button>
        <button
          style={btnStyle("mahasiswa")}
          onClick={() => setActivePage("mahasiswa")}
        >
          Daftar Mahasiswa
        </button>
      </div>
    </nav>
  );
}
