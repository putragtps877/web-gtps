// Dapatkan semua elemen anchor yang mempunyai href yang dimulai dengan '#'
const anchorLinks = document.querySelectorAll('a[href^="#"]');

// Loop melalui setiap elemen dan tambahkan event listener
anchorLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // Mencegah perilaku default link
  
    const target = document.querySelector(link.getAttribute('href')); // Dapatkan target elemen
  
    // Gulir halaman ke posisi elemen target
    target.scrollIntoView({
      behavior: 'smooth', // Aktifkan efek smooth scrolling
      block: 'start' // Gulir ke bagian atas elemen target
    });
  });
});
