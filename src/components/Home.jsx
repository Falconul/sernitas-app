import React from "react";
import "../styles/Home.css";  

function Home() {
  return (
    <div className="home-page">
      <header>
        <h1>Hoş Geldiniz</h1>
      </header>
      <p className="baslik">
        Sernitas HR olarak hedefimiz, Almanya'daki sağlık sektörünün ihtiyaç duyduğu nitelikli sağlık çalışanlarını Türkiye’den getirerek, işe alım sürecini hem adaylar hem de işverenler için kolaylaştırmaktır.
      </p>

      <div className="mission-section">
        <h2>Amacımız</h2>
        <p>
          Almanya’da sağlık sektöründe büyük bir iş gücü açığı var ve biz, bu açığı kapatmaya yardımcı olmayı hedefliyoruz. Türkiye’deki nitelikli sağlık çalışanlarını Almanya’daki iş fırsatlarıyla buluşturuyoruz. 
          Amacımız, bu süreci modern dijital çözümlerle kolaylaştırmak ve her iki taraf için de en iyi deneyimi sunmaktır.
        </p>
        <ul className="baslik2">
          <li><strong>Türkiye’den Almanya’ya Sağlık Göçü:</strong> Hemşire, doktor, sağlık teknikerleri gibi profesyonelleri Almanya’daki hastaneler ve sağlık kurumlarıyla buluşturuyoruz.</li>
          <li><strong>İşe Alım Sürecini Dijitalleştirme:</strong> Yapay zeka ve veri analitiği kullanarak işe alım süreçlerini daha hızlı ve verimli hale getiriyoruz.</li>
          <li><strong>Vize ve İşlemler İçin Destek:</strong> Adayların vize, denklik ve oturum süreçlerinde rehberlik ediyoruz.</li>
          <li><strong>Almanya’ya Entegrasyon:</strong> Yeni iş hayatına adapte olmaları için dil kursları, kültürel rehberlik ve eğitim programları sunuyoruz.</li>
          <li><strong>Sağlık Kurumları İçin En İyi Adayları Seçmek:</strong> Almanya’daki hastanelere ve kliniklere en uygun adayları sunarak, iş gücü ihtiyacını karşılıyoruz.</li>
          <li><strong>CRM ve Aday Takip Sistemi:</strong> Adayların işe alım sürecindeki ilerlemelerini takip edebilecekleri özel bir platform geliştiriyoruz.</li>
          <li><strong>Agile Proje Yönetimi:</strong> İşe alım süreçlerini hızlı, esnek ve verimli yöneterek en iyi sonuçları alıyoruz.</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
