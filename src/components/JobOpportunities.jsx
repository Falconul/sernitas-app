import React from "react";
import { Link } from "react-router-dom"; // Link importu
import "../styles/JobOpportunities.css";

function JobOpportunities() {
  return (
    <div className="job-opportunities-page">
      <header className="page-header">
        <h1>İş İmkanları</h1>
      </header>

      <section className="job-listings">
        <h2>Almanya'daki Mevcut İş Fırsatları</h2>
        <p>
          Sağlık sektöründe Almanya’daki en güncel iş fırsatlarını burada bulabilirsiniz. Hemşire, doktor, sağlık teknikerleri ve diğer sağlık profesyonelleri için 
          uygun pozisyonlar sürekli olarak güncellenmektedir. Aşağıda mevcut iş ilanlarına göz atabilirsiniz.
        </p>

        <div className="job-item">
          <h3>Hemşire</h3>
          <p>Yer: Berlin, Almanya</p>
          <p>
            Almanya'nın Berlin şehrinde bir hastane için deneyimli hemşire arıyoruz. Hemşireler, hasta bakımını sağlamak ve tıbbi ekiplerle koordinasyon içerisinde çalışacaktır.
          </p>
          <Link to="/job/1" className="apply-btn">Detay</Link> {/* Link ekledik */}
        </div>

        <div className="job-item">
          <h3>Doktor (Genel Cerrahi)</h3>
          <p>Yer: Münih, Almanya</p>
          <p>
            Münih şehrinde bir özel klinikte genel cerrahi uzmanı olarak görev alacak bir doktor arıyoruz. Başvuru sahiplerinin cerrahi operasyonlarda deneyimli olmaları gerekmektedir.
          </p>
          <Link to="/job/2" className="apply-btn">Detay</Link> {/* Link ekledik */}
        </div>

        <div className="job-item">
          <h3>Sağlık Teknikeri</h3>
          <p>Yer: Hamburg, Almanya</p>
          <p>
            Hamburg’daki bir hastanede sağlık teknikerleri aranmaktadır. Adaylardan, çeşitli tıbbi ekipmanlarla çalışabilme ve hasta bakımında destek sağlama becerisi beklenmektedir.
          </p>
          <Link to="/job/3" className="apply-btn">Detay</Link> {/* Link ekledik */}
        </div>

        <div className="job-item">
          <h3>Hemşire (Yoğun Bakım)</h3>
          <p>Yer: Frankfurt, Almanya</p>
          <p>
            Yoğun bakım hemşiresi arıyoruz. Adaylar, kritik hasta bakımında deneyimli olmalı ve stresli ortamlarda çalışabilmelidir. Hemşirelerin yoğun bakım ünitesinde çalışmaları gerekmektedir.
          </p>
          <Link to="/job/4" className="apply-btn">Detay</Link> {/* Link ekledik */}
        </div>

        <p>
          Yukarıdaki pozisyonlara başvuru yapmak için her ilana tıklayarak detaylara ulaşabilir ve başvuru formunu doldurabilirsiniz.
        </p>
      </section>
    </div>
  );
}

export default JobOpportunities;
