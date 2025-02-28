import React from "react";
import "../styles/WhyUs.css";

function WhyUs() {
  return (
    <div className="why-us-page">
      <header className="page-header">
        <h1>Neden Bizi Tercih Etmelisiniz?</h1>
      </header>

      <section className="why-us-content">
        <h2>Firma Olarak Neler Sunuyoruz?</h2>
        <p>
          Sernitas HR, sağlık sektöründe önemli bir iş gücü açığı bulunan Almanya'ya, Türkiye'den sağlık çalışanları getirerek bu süreci dijitalleştiriyor. 
          İşte bu süreci doğru, hızlı ve güvenilir bir şekilde yöneterek neden bizleri tercih etmeniz gerektiğini anlatan 5 güçlü neden:
        </p>
        <ul>
          <li>
            <strong>Hızlı ve Etkili Süreçler:</strong> 
            Yapay zeka destekli işe alım süreçlerimiz sayesinde, adayların başvuru aşamasından, mülakat ve yerleştirme sürecine kadar her şey dijital ortamda yapılır. 
            Bu sayede zaman kaybı yaşanmadan adaylar en kısa sürede doğru pozisyona yerleştirilir.
          </li>
          <li>
            <strong>Yüksek Kaliteli Adaylar:</strong>
            Türkiye’deki sağlık alanındaki yetkin ve nitelikli profesyonelleri seçiyoruz. Hemşireler, doktorlar ve sağlık teknikerleri gibi farklı alanlarda yetenekli adaylar, 
            Almanya’daki hastaneler ve sağlık kuruluşlarıyla buluşturulur. Adaylarımız, gerekli tüm eğitimleri ve sertifikaları tamamlamış olup, uluslararası düzeyde çalışmaya hazırdır.
          </li>
          <li>
            <strong>Entegre Çözümler:</strong>
            Adayların Almanya’daki iş gücü piyasasına adapte olabilmesi için dil kursları, kültürel rehberlik ve eğitim programları sağlıyoruz. Ayrıca, 
            vize işlemleri ve denklik belgeleri gibi yasal süreçlerde adaylara rehberlik ediyoruz. Bu süreçleri, adaylarımızın mümkün olan en hızlı şekilde tamamlaması için yönetiyoruz.
          </li>
          <li>
            <strong>Şeffaf ve Güvenilir:</strong>
            Her aşamada şeffaflık ilkesine bağlı kalıyoruz. Adaylar işe alım sürecinde nelerle karşılaşacaklarını açıkça bilmektedirler. 
            İşverenler de adayların durumları ve ilerleme süreçleri hakkında detaylı bilgiye erişebilirler.
          </li>
          <li>
            <strong>Global İletişim:</strong>
            Her iki tarafı da doğru şekilde yönlendirebilmek için hem Türkçe hem de Almanca konuşabilen bir ekibimiz bulunmaktadır. 
            Bu, hem işverenlerin hem de adayların rahatça iletişim kurmalarını sağlar. İletişim engelleri ortadan kaldırılır ve her iki taraf da süreçten memnun kalır.
          </li>
        </ul>
      </section>

      <section className="how-it-works">
        <h2>Nasıl Çalışıyoruz?</h2>
        <p>
          Sağlık çalışanları için güvenli, hızlı ve verimli bir işe alım süreci sağlıyoruz. Süreç adımlarını aşağıda detaylı şekilde bulabilirsiniz:
        </p>
        <ol>
          <li>
            <strong>Aday Seçimi ve Değerlendirme:</strong>
            İlk olarak Türkiye'deki sağlık sektöründeki adaylar arasında kapsamlı bir değerlendirme yapıyoruz. Adayların eğitim, deneyim ve yetkinliklerini göz önünde bulundurarak, Almanya'daki iş ihtiyaçlarına en uygun kişileri belirliyoruz.
          </li>
          <li>
            <strong>Başvuru ve Mülakat Süreci:</strong>
            Adaylar başvurularını online sistem üzerinden yapar. Mülakatlar dijital ortamda gerçekleştirilir ve adaylar, Almanya’daki işverenlerle çevrim içi mülakatlar yaparak kendilerini tanıtma fırsatı bulurlar.
          </li>
          <li>
            <strong>Vize ve Entegrasyon Süreci:</strong>
            Başvuru ve mülakatları geçen adaylar için Almanya'da çalışma vizesi alınır. Ayrıca, adayların Almanya’ya entegre olmaları için dil eğitimi ve kültürel adaptasyon programları sunulmaktadır. 
            Adaylar, yeni iş ortamına daha kolay uyum sağlarlar.
          </li>
          <li>
            <strong>Yerleştirme ve Takip:</strong>
            Adaylar Almanya’daki hastanelere ve sağlık kurumlarına yerleştirilir. Ancak süreç burada bitmez. Biz sürekli olarak adayların uyum süreçlerini takip ederiz ve gerektiğinde destek sağlarız.
          </li>
        </ol>
      </section>
    </div>
  );
}

export default WhyUs;
