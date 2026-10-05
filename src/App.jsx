import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import RegistrationForm from "./components/RegistrationForm";
import ExamCard from "./components/ExamCard";
import Mahasiswa from "./components/Mahasiswa";

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [submittedData, setSubmittedData] = useState(null);
  const [examId, setExamId] = useState("");
  const [studentArray, setStudentArray] = useState(
    () => JSON.parse(localStorage.getItem("students") ?? "[]")
  );

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(studentArray));
  }, [studentArray]);

  const handleFormSubmit = (data, id) => {
    setSubmittedData(data);
    setExamId(id);
    setActivePage("card");
    setStudentArray((current) => [...current, data] );
  };

  const handleReset = () => {
    setSubmittedData(null);
    setExamId("");
    setActivePage("register");
  };

 return (
  <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f1f5f9', minHeight: '100vh', paddingBottom: '40px' }}>
   <Navbar activePage={activePage} setActivePage={setActivePage} />

   {activePage === 'home' && (
    <LandingPage onStartRegister={() => setActivePage('register')} />
   )}

   {activePage === 'register' && (
    <RegistrationForm onSubmitSuccess={handleFormSubmit} />
   )}

   {activePage === 'card' && submittedData && (
    <ExamCard studentData={submittedData} examId={examId} onReset={handleReset} />
   )}

   {activePage === 'mahasiswa' && (
    <Mahasiswa studentArray={studentArray} />
   )}
  </div>
 );

}
