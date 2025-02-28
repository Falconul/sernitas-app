import React from 'react';
import '../styles/Vize.css';  // CSS dosyasını import ediyoruz

const Vize = () => {
  return (
    <div className="vize-container">
      <h1>Almanya'ya Vize ve Oturum Başvurusu</h1>
      <p>
        Almanya'ya seyahat etmek için vize başvurusu yapmanız gerekmektedir. Oturum izni almak için ise belirli belgeleri tamamlamanız ve başvuru sürecine uygun şekilde hareket etmeniz önemlidir.
      </p>
      
      <h2>Vize Başvuru Süreci</h2>
      <ul>
        <li><strong>Adım 1:</strong> Vize başvuru formunun doldurulması.</li>
        <li><strong>Adım 2:</strong> Gerekli belgelerin toplanması (pasaport, fotoğraf, seyahat sağlık sigortası, seyahat planı vb.).</li>
        <li><strong>Adım 3:</strong> Başvuru merkezine belgelerin teslim edilmesi ve başvuru ücretinin ödenmesi.</li>
        <li><strong>Adım 4:</strong> Vize başvurunuzun sonuçlanması ve pasaportunuzun teslim alınması.</li>
      </ul>

      <h2>Oturum Başvuru Süreci</h2>
      <p>
        Almanya'da uzun süreli ikamet etmek isteyen yabancı uyruklu kişiler için oturum izni başvurusu gereklidir. Başvuru süreci şu şekilde işlemektedir:
      </p>
      <ul>
        <li><strong>Adım 1:</strong> Almanya'da ikamet edeceğiniz şehirdeki Yabancılar Dairesi'ne başvuru yapın.</li>
        <li><strong>Adım 2:</strong> Gerekli belgeleri hazırlayın (pasaport, başvuru formu, sağlık sigortası, gelir belgesi vb.).</li>
        <li><strong>Adım 3:</strong> Oturum izni için başvurunuzu online ya da ofisten yapın.</li>
        <li><strong>Adım 4:</strong> Başvurunuz değerlendirilir ve oturum izninizin onaylanması beklenir.</li>
      </ul>

      <h2>Gerekli Belgeler</h2>
      <p>Vize ve oturum başvuruları için gerekli belgeler genel olarak şunlardır:</p>
      <ul>
        <li>Geçerli pasaport</li>
        <li>2 adet biyometrik fotoğraf</li>
        <li>Seyahat sağlık sigortası</li>
        <li>Vize başvuru formu</li>
        <li>Seyahat planı ve konaklama bilgileri</li>
        <li>Gelir belgesi (oturum başvurusu için)</li>
      </ul>

      <h2>Başvuru Yapmak İçin</h2>
      <p>
        Başvuru yapmadan önce, başvurunuzun türüne göre gerekli tüm belgeleri tamamlamayı unutmayın. Başvuru merkezi veya konsolosluk web sitelerinden güncel bilgilere ulaşabilirsiniz.
      </p>
    </div>
  );
}

export default Vize;
