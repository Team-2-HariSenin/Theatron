//Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};
//Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//Click outside the hamburger menu
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Array berisi daftar gambar
const images = [
  "oppenheimer.jpg",
  "kungfupanda4.jpg",
  "dune2.jpg",
  "demonslayer.jpg",
]; // Path relatif dari folder /src/poster/

// Mendapatkan elemen container gambar
const imageContainer = document.getElementById("imageContainer");

// Fungsi untuk menambahkan gambar ke dalam container
function renderImages() {
  imageContainer.innerHTML = ""; // Kosongkan kontainer gambar
  images.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = `/src/images/movie-poster/${image}`; // Menambahkan path lengkap ke gambar
    imgElement.alt = "Image";
    imgElement.className = "w-full"; // Menambahkan kelas Tailwind CSS untuk gambar
    imageContainer.appendChild(imgElement);
  });
}

// Panggil fungsi untuk pertama kali
renderImages();

// Event listener untuk tombol Next
document.getElementById("nextBtn").addEventListener("click", function () {
  const firstImage = images.shift(); // Pindahkan gambar pertama ke akhir array
  images.push(firstImage);
  renderImages(); // Render ulang gambar
});

// Event listener untuk tombol Previous
document.getElementById("prevBtn").addEventListener("click", function () {
  const lastImage = images.pop(); // Pindahkan gambar terakhir ke awal array
  images.unshift(lastImage);
  renderImages(); // Render ulang gambar
});

// Event listener untuk tombol Play
document.getElementById("playBtn").addEventListener("click", function () {
  // Ganti URL !
  window.location.href = "#";
});
