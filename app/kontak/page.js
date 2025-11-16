// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// /* ================= NAVBAR ================= */
// function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full py-3 px-20 flex items-center justify-between z-50 backdrop-blur-xl transition-all duration-500 
//       ${isScrolled ? "bg-white/30 shadow-sm" : "bg-white/80"}`}
//     >
//       {/* Logo */}
//       <img src="/assets/logo.png" className="w-20 h-20 object-contain" />

//       {/* Menu */}
//       <ul className="hidden md:flex gap-12 text-base font-medium text-gray-700 mx-auto">
//         <li><a href="/" className="hover:text-[#6FC233]">Beranda</a></li>
//         <li><a href="/jelajah" className="hover:text-[#6FC233]">Jelajah</a></li>
//         <li><a href="/kontak" className="hover:text-[#6FC233]">Kontak</a></li>
//       </ul>
//     </nav>
//   );
// }

// /* ================= PAGE KONTAK ================= */
// export default function Kontak() {
//   return (
//     <main className="min-h-screen bg-white text-gray-900">
//       <Navbar />

//       {/* BG Blur */}
//       <div className="absolute -top-20 left-0 w-[460px] h-[460px] bg-[#6FC233]/40 blur-[140px] rounded-full"></div>
//       <div className="absolute top-40 right-0 w-[460px] h-[460px] bg-[#FC9E84]/40 blur-[140px] rounded-full"></div>

//       {/* SECTION */}
//       <section className="relative max-w-5xl mx-auto px-6 pt-44 pb-20">
//         {/* TITLE */}
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-4xl font-bold text-center mb-4"
//         >
//           Hubungi Kami
//         </motion.h1>

//         <p className="text-center text-gray-600 max-w-xl mx-auto">
//           Ada pertanyaan, kerjasama, atau ingin mendaftarkan UMKM Anda?  
//           Silakan isi form di bawah ini ✨
//         </p>

//         {/* FORM CARD */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="mt-10 bg-white shadow-xl rounded-2xl p-8 border border-gray-200"
//         >
//           <form className="space-y-5">
//             <div>
//               <label className="font-semibold text-gray-700">Nama</label>
//               <input
//                 type="text"
//                 className="w-full mt-1 p-3 rounded-lg border border-gray-300 outline-none focus:border-[#6FC233]"
//                 placeholder="Masukkan nama Anda"
//               />
//             </div>

//             <div>
//               <label className="font-semibold text-gray-700">Email</label>
//               <input
//                 type="email"
//                 className="w-full mt-1 p-3 rounded-lg border border-gray-300 outline-none focus:border-[#6FC233]"
//                 placeholder="Masukkan email aktif"
//               />
//             </div>

//             <div>
//               <label className="font-semibold text-gray-700">Pesan</label>
//               <textarea
//                 rows="5"
//                 className="w-full mt-1 p-3 rounded-lg border border-gray-300 outline-none focus:border-[#6FC233]"
//                 placeholder="Tulis pesan Anda di sini..."
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-[#6FC233] text-white py-3 rounded-lg hover:bg-[#5AB028] transition font-semibold"
//             >
//               Kirim Pesan
//             </button>
//           </form>
//         </motion.div>
//       </section>

//       <Footer />
//     </main>
//   );
// }

// /* ================= FOOTER ================= */
// function Footer() {
//   return (
//     <footer className="bg-[#69325A] text-white py-12 mt-10">
//       <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-4 gap-3">
//         <div>
//           <img src="/assets/logo.png" className="w-20 mb-3" />
//           <p className="text-sm text-white/80">Platform UMKM kuliner modern dan terpercaya.</p>
//         </div>

//         <div>
//           <h4 className="font-semibold mb-2">Tentang Kami</h4>
//           <ul className="space-y-2 text-sm text-white/80">
//             <li>Cerita Kami</li>
//             <li>Berita</li>
//             <li>Kontak</li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="font-semibold mb-2">Pendukung</h4>
//           <ul className="space-y-2 text-sm text-white/80">
//             <li>Hubungi Kami</li>
//             <li>Bantuan</li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="font-semibold mb-2">Ikuti Kami</h4>
//           <div className="flex gap-4">
//             <a href="#" className="text-white/90">Instagram</a>
//             <a href="#" className="text-white/90">YouTube</a>
//           </div>
//         </div>
//       </div>

//       <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/70">
//         © 2025 Veats. Semua hak dilindungi.
//       </div>
//     </footer>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* ---------- NAVBAR (FINAL) ---------- */
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full py-3 px-20 flex items-center justify-between z-50 backdrop-blur-xl transition-all duration-500 
      ${isScrolled ? "bg-white/30 opacity-80 shadow-sm" : "bg-white/80 opacity-80"}`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src="/assets/logo.png" alt="Veats logo" className="w-20 h-20 object-contain" />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-12 text-base font-medium text-gray-700 mx-auto">
        <li>
          <a
            href="/jelajah"
            className="relative transition-all duration-300 hover:text-[#6FC233] 
            after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#6FC233] 
            after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
          >
            Jelajah
          </a>
        </li>

        <li>
          <a
            href="/#tentang"
            className="relative transition-all duration-300 hover:text-[#6FC233] 
            after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#6FC233] 
            after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
          >
            Tentang Kami
          </a>
        </li>

        <li>
          <a
            href="/kontak"
            className="relative transition-all duration-300 hover:text-[#6FC233] 
            after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#6FC233] 
            after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
          >
            Kontak
          </a>
        </li>
      </ul>
    </nav>
  );
}
/* ================= HALAMAN KONTAK ================= */
export default function Kontak() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Blur Background Circles */}
      <div className="absolute -top-40 left-0 w-[400px] h-[400px] bg-[#6FC233]/40 blur-[140px] rounded-full"></div>
      <div className="absolute top-20 right-0 w-[450px] h-[450px] bg-[#FC9E84]/40 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-10 left-1/3 w-[380px] h-[380px] bg-[#69325A]/30 blur-[140px] rounded-full"></div>

      {/* Title */}
      <div className="pt-40 pb-10 text-center relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold">Hubungi Kami</h1>
        <p className="text-gray-600 mt-2">
          Kami siap membantu dan menjawab pertanyaan Anda.
        </p>
      </div>

      {/* CONTENT GRID */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 pb-20">

        {/* BAGIAN KIRI = MAP + INFO KONTAK */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Map */}
          <div className="w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
            {/* GAMVAAARRRR */}
          </div>


        </motion.div>
        {/* FORM BAGIAN KANAN */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-xl p-8"
        >
          <h2 className="text-xl font-semibold mb-4">Kirim Pesan</h2>

          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium">Nama</label>
              <input type="text" className="w-full mt-1 px-4 py-3 border rounded-lg" placeholder="Nama lengkap" />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input type="email" className="w-full mt-1 px-4 py-3 border rounded-lg" placeholder="Email aktif" />
            </div>

            <div>
              <label className="text-sm font-medium">No. HP</label>
              <input type="text" className="w-full mt-1 px-4 py-3 border rounded-lg" placeholder="Nomor HP" />
            </div>

            <div>
              <label className="text-sm font-medium">Pesan</label>
              <textarea className="w-full mt-1 px-4 py-3 border rounded-lg h-32 resize-none" placeholder="Tulis pesan Anda..."></textarea>
            </div>

            <button className="w-full py-3 bg-[#6FC233] text-white font-semibold rounded-lg hover:bg-[#5fb328]">
              Kirim Pesan
            </button>
          </form>
        </motion.div>



      </div>
    </main>
  );
}
