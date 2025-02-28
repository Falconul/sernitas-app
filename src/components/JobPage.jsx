import React from "react";
import { useParams } from "react-router-dom"; // useParams importu
import "../styles/JobPage.css";

function JobPage() {
  const { id } = useParams(); // URL parametresini alıyoruz (örneğin /job/1)

  // İş ilanı bilgilerini burada sabit olarak verebiliriz, ya da bir API'den alabiliriz.
  const jobDetails = {
    1: {
      title: "Hemşire",
      location: "Berlin, Almanya",
      description: "Almanya'nın Berlin şehrinde bir hastane için deneyimli hemşire arıyoruz...",
      workingHours: "40 saat / hafta",
      salary: "€3,000 - €3,500 brüt / ay",
      requirements: [
        "Lisans diploması",
        "Almanca B2 seviyesinde",
        "Yoğun bakım deneyimi",
        "Ekip çalışmasına yatkınlık"
      ]
    },
    2: {
      title: "Doktor (Genel Cerrahi)",
      location: "Münih, Almanya",
      description: "Münih şehrinde bir özel klinikte genel cerrahi uzmanı olarak görev alacak bir doktor arıyoruz...",
      workingHours: "Full-time, 5 gün / hafta",
      salary: "€5,000 - €6,000 brüt / ay",
      requirements: [
        "Tıp fakültesi mezunu",
        "Almanca B2 veya üstü",
        "Genel cerrahi deneyimi",
        "Hasta ilişkileri ve yönetimi bilgisi"
      ]
    },
    3: {
      title: "Sağlık Teknikeri",
      location: "Hamburg, Almanya",
      description: "Hamburg’daki bir hastanede sağlık teknikerleri aranmaktadır...",
      workingHours: "40 saat / hafta",
      salary: "€2,500 - €3,000 brüt / ay",
      requirements: [
        "Sağlık teknikerliği mezunu",
        "Almanca A2 veya üstü",
        "Laboratuvar ve hastane deneyimi"
      ]
    },
    4: {
      title: "Hemşire (Yoğun Bakım)",
      location: "Frankfurt, Almanya",
      description: "Yoğun bakım hemşiresi arıyoruz. Adaylar, kritik hasta bakımında deneyimli olmalı...",
      workingHours: "40 saat / hafta",
      salary: "€3,500 - €4,000 brüt / ay",
      requirements: [
        "Yoğun bakım hemşireliği deneyimi",
        "Almanca B2 seviyesinde",
        "İleri düzey hasta bakım bilgisi"
      ]
    },
  };

  const job = jobDetails[id]; // URL'deki ID'ye göre iş ilanını alıyoruz

  if (!job) {
    return <div>İş ilanı bulunamadı!</div>; // Eğer iş ilanı bulunamazsa
  }

  return (
    <div className="job-page">
      <h1>{job.title}</h1>
      <p className="location">{job.location}</p>

      <div className="job-description">
        <h2>Job Description:</h2>
        <p>{job.description}</p>
      </div>

      <div className="job-requirements">
        <h2>Requirements:</h2>
        <ul>
          {job.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      <div className="job-conditions">
        <h2>Job Conditions:</h2>
        <ul>
          <li><strong>Working Hours:</strong> {job.workingHours}</li>
          <li><strong>Salary:</strong> {job.salary}</li>
        </ul>
      </div>

      <div className="apply-btn-container">
        <a href="#apply" className="apply-btn">Başvur</a>
      </div>
    </div>
  );
}

export default JobPage;
