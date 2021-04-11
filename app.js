// 클로즈버튼
const Gijangclose = document.querySelector(".Gijangclose");
const Geumjeongclose = document.querySelector(".Geumjeongclose");
const Dongnaeclose = document.querySelector(".Dongnaeclose");
const Haeundaeclose = document.querySelector(".Haeundaeclose");
const Suyeongclose = document.querySelector(".Suyeongclose");
const Namguclose = document.querySelector(".Namguclose");
const Yeonjeclose = document.querySelector(".Yeonjeclose");
const Jinguclose = document.querySelector(".Jinguclose");
const Dongguclose = document.querySelector(".Dongguclose");
const Yeongdoclose = document.querySelector(".Yeongdoclose");
const Jungguclose = document.querySelector(".Jungguclose");
const Seoguclose = document.querySelector(".Seoguclose");
const Sahaclose = document.querySelector(".Sahaclose");
const Sasangclose = document.querySelector(".Sasangclose");
const Bukclose = document.querySelector(".Bukclose");
const Ganseoclose = document.querySelector(".Ganseoclose");

//팝업
const GijangPopup = document.querySelector(".busanGijang");
const GeumjeongPopup = document.querySelector(".busanGeumjeong");
const DongnaePopup = document.querySelector(".busanDongnae");
const HaeundaePopup = document.querySelector(".busanHaeundae");
const SuyeongPopup = document.querySelector(".busanSuyeong");
const NamguPopup = document.querySelector(".busanNamgu");
const YeonjePopup = document.querySelector(".busanYeonje");
const JinguPopup = document.querySelector(".busanJingu");
const DongguPopup = document.querySelector(".busanDonggu");
const YeongdoPopup = document.querySelector(".busanYeongdo");
const JungguPopup = document.querySelector(".busanJunggu");
const SeoguPopup = document.querySelector(".busanSeogu");
const SahaPopup = document.querySelector(".busanSaha");
const SasangPopup = document.querySelector(".busanSasang");
const BukPopup = document.querySelector(".busanBuk");
const GanseoPopup = document.querySelector(".busanGanseo");

//아이디
const Gijang = document.getElementById("Gijang");
const Geumjeong = document.getElementById("Geumjeong");
const Dongnae = document.getElementById("Dongnae");
const Haeundae = document.getElementById("Haeundae");
const Suyeong = document.getElementById("Suyeong");
const Namgu = document.getElementById("Namgu");
const Yeonje = document.getElementById("Yeonje");
const Jingu = document.getElementById("Jingu");
const Donggu = document.getElementById("Donggu");
const Yeongdo = document.getElementById("Yeongdo");
const Junggu = document.getElementById("Junggu");
const Seogu = document.getElementById("Seogu");
const Saha = document.getElementById("Saha");
const Sasang = document.getElementById("Sasang");
const Buk = document.getElementById("Buk");
const Ganseo = document.getElementById("Ganseo");

//기장

Gijangclose.addEventListener("click", () => {
  GijangPopup.classList.remove("active");
});

Gijang.addEventListener("click", () => {
  GijangPopup.classList.add("active");
});
//금정구

Geumjeong.addEventListener("click", () => {
  GeumjeongPopup.classList.add("active");
});

Geumjeongclose.addEventListener("click", () => {
  GeumjeongPopup.classList.remove("active");
});
//동래구

Dongnae.addEventListener("click", () => {
  DongnaePopup.classList.add("active");
});

Dongnaeclose.addEventListener("click", () => {
  DongnaePopup.classList.remove("active");
});
//해운대구

Haeundae.addEventListener("click", () => {
  HaeundaePopup.classList.add("active");
});

Haeundaeclose.addEventListener("click", () => {
  HaeundaePopup.classList.remove("active");
});
//수영구

Suyeong.addEventListener("click", () => {
  SuyeongPopup.classList.add("active");
});

Suyeongclose.addEventListener("click", () => {
  SuyeongPopup.classList.remove("active");
});
//남구

Namgu.addEventListener("click", () => {
  NamguPopup.classList.add("active");
});

Namguclose.addEventListener("click", () => {
  NamguPopup.classList.remove("active");
});
//연제구

Yeonje.addEventListener("click", () => {
  YeonjePopup.classList.add("active");
});

Yeonjeclose.addEventListener("click", () => {
  YeonjePopup.classList.remove("active");
});
//진구

Jingu.addEventListener("click", () => {
  JinguPopup.classList.add("active");
});

Jinguclose.addEventListener("click", () => {
  JinguPopup.classList.remove("active");
});
//동구

Donggu.addEventListener("click", () => {
  DongguPopup.classList.add("active");
});

Dongguclose.addEventListener("click", () => {
  DongguPopup.classList.remove("active");
});
//영도구

Yeongdo.addEventListener("click", () => {
  YeongdoPopup.classList.add("active");
});

Yeongdoclose.addEventListener("click", () => {
  YeongdoPopup.classList.remove("active");
});
//중구

Junggu.addEventListener("click", () => {
  JungguPopup.classList.add("active");
});

Jungguclose.addEventListener("click", () => {
  JungguPopup.classList.remove("active");
});
//서구

Seogu.addEventListener("click", () => {
  SeoguPopup.classList.add("active");
});

Seoguclose.addEventListener("click", () => {
  SeoguPopup.classList.remove("active");
});
//사하구

Saha.addEventListener("click", () => {
  SahaPopup.classList.add("active");
});

Sahaclose.addEventListener("click", () => {
  SahaPopup.classList.remove("active");
});
//사상구

Sasang.addEventListener("click", () => {
  SasangPopup.classList.add("active");
});

Sasangclose.addEventListener("click", () => {
  SasangPopup.classList.remove("active");
});
//북구

Buk.addEventListener("click", () => {
  BukPopup.classList.add("active");
});

Bukclose.addEventListener("click", () => {
  BukPopup.classList.remove("active");
});
//강서구

Ganseo.addEventListener("click", () => {
  GanseoPopup.classList.add("active");
});

Ganseoclose.addEventListener("click", () => {
  GanseoPopup.classList.remove("active");
});

// 벚꽃
createFlowers();

setInterval(createFlowers, 200);

function createFlowers() {
  const flowers = document.createElement("i");
  flowers.classList.add("fas");
  flowers.classList.add("fa-egg");
  flowers.style.left = Math.random() * window.innerWidth + "px";
  flowers.style.animationDuration = Math.random() * 20 + 10 + "s";
  flowers.style.opacity = Math.random();
  flowers.style.fontSize = Math.random() * 2 + 5 + "px";

  document.body.appendChild(flowers);

  setTimeout(() => {
    flowers.remove();
  }, 10000);
}
