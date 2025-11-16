"use client";

import { m, motion } from "framer-motion";
import { useState, useEffect } from "react";

/* ----------------------------- NAVBAR ----------------------------- */
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full py-3 px-20 flex items-center justify-between z-50 transition-all duration-500 backdrop-blur-xl ${
        isScrolled ? "bg-white/30 shadow-sm" : "bg-white/80"
      }`}
    >
      <img src="/assets/logo.png" className="w-20 h-20 object-contain" />

      <ul className="hidden md:flex gap-12 text-base font-medium text-gray-700 mx-auto">
        <li><a href="/" className="hover:text-[#6FC233]">Beranda</a></li>
        <li><a href="/jelajah" className="hover:text-[#6FC233]">Jelajah</a></li>
        <li><a href="/#kontak" className="hover:text-[#6FC233]">Kontak</a></li>
      </ul>
    </nav>
  );
}

/* ----------------------------- DATA ----------------------------- */

const detailData = {
  nama1: "Mie Ayam & Bakso",
  nama2: "BINANGUN",
  lokasi: "Belakang UPNVJ – Pondok Labu",
  rating: "⭐ 4.9 (310+)",
  deskripsi:
    "Mie Ayam & Bakso Binangun sudah menjadi favorit mahasiswa. Kuah gurih, mie kenyal, dan topping melimpah membuat UMKM ini tidak pernah sepi pelanggan.",
  gambarHeader: "/assets/headermi.jpg",
  logoResto: "/assets/miayambinangun.png",

  menuPopuler: [
    { nama: "Mie Ayam Bakso Keju", harga: "Rp 15.000",rating: "⭐ 4.6", img: "/assets/miebaksokeju.jpg" },
    { nama: "Mie Ayam Goreng", harga: "Rp 18.000", rating: "⭐ 4.6", img: "/assets/miegoreng.jpg" },
    { nama: "Mie Ayam Yamin", harga: "Rp 20.000", rating: "⭐ 4.6", img: "/assets/mieyamin.jpg" },
  ],

  reviews: [
    { nama: "Rina", rating: "⭐ 5", komentar: "Mie ayam terenak di sekitar kampus!" },
    { nama: "Dimas", rating: "⭐ 4.7", komentar: "Baksonya gede dan enak banget." },
    { nama: "Putri", rating: "⭐ 4.8", komentar: "Selalu rame, tapi worth it!" },
  ],

  galeri: ["/assets/galeri1.jpg", "/assets/galeri2.jpg", "/assets/mieyamin.jpg", "/assets/miegoreng.jpg", "/assets/miegoreng.jpg", "/assets/miegoreng.jpg", ],

  rekomendasi: [
    { nama: "Bumbu Ndesso", rating: "⭐ 4.6", img: "/assets/bumbundeso.png" },
    { nama: "Ayam Gepuk Semeru", rating: "⭐ 4.7", img: "/assets/ayamsemeru.png" },
    { nama: "Pondok Selero", rating: "⭐ 4.5", img: "/assets/pondoksalero.png" },
  ],
};

/* ----------------------------- FOOTER ----------------------------- */
function Footer() {
  return (
    <footer id="kontak" className="bg-[#69325A] text-white py-12 mt-10">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-4 gap-3">
        <div>
          <img src="/assets/logo.png" alt="Veats" className="w-20 h-20 object-contain mb-3" />
          <p className="text-sm text-white/80">Platform yang membantu UMKM berkembang.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Tentang Kami</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Cerita Kami</li>
            <li>Berita</li>
            <li>Kontak</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Pendukung</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Kontak</li>
            <li>Hubungi Kami</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Ikuti Kami</h4>
          <div className="flex gap-4">
            <a href="#" className="text-white/90">Instagram</a>
            <a href="#" className="text-white/90">Twitter</a>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-white/60 mt-6 border-t border-white/20 pt-4">
        © {new Date().getFullYear()} Veats. Semua hak dilindungi.
      </p>
    </footer>
  );
}

/* ----------------------------- PAGE DETAIL ----------------------------- */

export default function DetailPage() {
  const [nama, setNama] = useState("");
  const [pesanan, setPesanan] = useState("");

  const nomorWA = "6281287675177"; // ← otomatis bot WA ke penjual

  const kirimWA = () => {
    const pesan = `Halo! Saya ingin pesan.%0A%0ANama: ${nama}%0APesanan: ${pesanan}%0A%0ATerima kasih 🙏`;
    window.open(`https://wa.me/${nomorWA}?text=${pesan}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* HEADER */}
      <section className="relative w-full pt-24">
        <img src={detailData.gambarHeader} className="w-full max-h-[500px] object-cover" />

        <img
          src={detailData.logoResto}
          className="absolute top-30 right-10 w-28 h-28 rounded-full shadow-xl object-cover border-4 border-white"
        />

        <h1 className="absolute bottom-10 left-10 text-white font-extrabold drop-shadow-2xl leading-tight">
          <span className="text-4xl md:text-6xl">{detailData.nama1}</span><br />
          <span className="text-5xl md:text-7xl uppercase">{detailData.nama2}</span>
        </h1>
      </section>

      <div className="max-w-6xl mx-auto px-6">

        {/* PROFIL RESTO */}
        <section className="max-w-6xl mx-auto px-6 mt-20 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full border-[10px] border-red-500 overflow-hidden shadow-lg">
              <img src="/assets/miayambinangun.png" className="w-full h-full object-cover" />
            </div>
          </div>

          <div>
            <p className="text-gray-700 leading-relaxed">
              Mie Ayam & Bakso Binangun didirikan oleh ... dan menjadi favorit mahasiswa UPN.
            </p>

            <div className="mt-6 space-y-4 text-gray-800">
              <div className="flex items-center gap-3">
                <span className="text-red-600 text-2xl">📍</span>
                <p className="font-semibold">Sejak 2019</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-red-600 text-2xl">⏰</span>
                <p className="font-semibold">10.00 – 18.00 WIB</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-red-600 text-2xl">📌</span>
                <p className="font-semibold">Pangkalan Jati, Pondok Labu</p>
              </div>
            </div>
          </div>
        </section>

        {/* MENU POPULER */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-20">Menu Paling Populer</h2>

          <div className="grid md:grid-cols-3 gap-10 mt-10">
            {detailData.menuPopuler.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="relative bg-gradient-to-b from-[#F8EBDA] to-[#D4FFB5] rounded-2xl p-6 shadow-xl mx-auto w-[260px]"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#6FC233] absolute -top-16 left-1/2 -translate-x-1/2 shadow-lg">
                  <img src={item.img} className="w-full h-full object-cover" />
                </div>

                <div className="pt-15 text-center">
                  <h3 className="font-bold text-xl text-gray-800">{item.nama}</h3>
                  <p className="text-[#FF7A00] text-xl mt-2 font-extrabold">{item.harga}</p>
                </div>

                <div className="text-center mt-2">
                  <p className=" font-bold text-yellow-500">
                    ⭐ 4.9 / 5.0
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </section>

        {/* MAPS + WA FORM */}
        <section className="mt-20 grid md:grid-cols-2 gap-10">

          {/* MAPS */}
          <div>
            <h2 className="text-xl font-bold mb-3">Lokasi UMKM</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126899.47809331416!2d106.71307695301827!3d-6.315023821833172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef0063730015%3A0xbcf9c4e83ca26572!2sMIE%20AYAM%20%26%20BAKSO%20BINANGUN!5e0!3m2!1sen!2sid!4v1763266240811!5m2!1sen!2sid" 
              className="w-full h-64 rounded-xl shadow"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* FORM WA */}
          <div>
            <h2 className="text-xl font-bold mb-3">Pemesanan</h2>

            <div className="bg-white shadow p-6 rounded-xl space-y-4">

              <input
                className="w-full border px-4 py-2 rounded-md"
                placeholder="Nama Anda"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />

              <input
                className="w-full border px-4 py-2 rounded-md"
                placeholder="Pesanan"
                value={pesanan}
                onChange={(e) => setPesanan(e.target.value)}
              />

              <button
                onClick={kirimWA}
                className="w-full bg-[#6FC233] text-white py-3 rounded-lg font-semibold"
              >
                Kirim ke WhatsApp Penjual
              </button>
            </div>
          </div>

        </section>

        {/* REVIEW – STYLE FIGMA */}
        <section className="mt-20 bg-[#E9FFD9] p-10 rounded-2xl">

          <h2 className="text-3xl font-bold">
            Apa Yang Mereka Katakan <span className="text-[#6FC233]">Tentang</span> UMKM Ini
          </h2>

          <p className="text-gray-600 max-w-md mt-3">
            Kami mengumpulkan beberapa pesan dan masukkan demi perkembangan usaha yang
            lancar untuk masa mendatang.
          </p>

          {/* KIRI: Rating + Button */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-6">

            {/* Rating Box */}
            <div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 text-4xl">⭐</span>
                <p className="text-3xl font-bold">4.9</p>
              </div>
              <p className="text-gray-600">10 reviews</p>
            </div>

            {/* Tombol Add Review */}
            <a
              href="https://maps.app.goo.gl/BmzuNBNaWCNCE3ip7"
              target="_blank"
              className="bg-[#6FC233] text-white font-semibold px-6 py-3 rounded-full mt-5 md:mt-0 hover:bg-[#5ab029] transition"
            >
              + Tambah Review
            </a>
          </div>

          {/* Card Review */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">

            {detailData.reviews.map((r, i) => (
              <div
                key={i}
                className="bg-[#FAD8A8] p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-3">
                  {/* Avatar Default */}
                  <div className="w-12 h-12 rounded-full bg-gray-300"></div>

                  <div>
                    <p className="font-bold capitalize">{r.nama}</p>
                    <p className="text-sm text-gray-500">Beberapa bulan lalu</p>
                  </div>
                </div>

                <p className="italic text-gray-800 mt-4 text-sm">
                  "{r.komentar}"
                </p>

                <div className="flex justify-between items-center mt-5">
                  <div className="flex items-center gap-1 text-yellow-500">
                    ⭐ <span className="text-lg font-semibold">{r.rating.replace("⭐ ", "")}</span>
                  </div>
                  <p className="text-xs text-gray-600">Makan di Tempat</p>
                </div>
              </div>
            ))}

          </div>

        </section>


        {/* GALERI */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-center">Galeri</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {detailData.galeri.map((img, i) => (
              <img key={i} src={img} className="rounded-lg h-40 w-full object-cover" />
            ))}
          </div>
        </section>

        {/* REKOMENDASI */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-center">Rekomendasi Lainnya</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {detailData.rekomendasi.map((r, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow p-4 cursor-pointer"
              >
                <img src={r.img} className="rounded-lg h-40 w-full object-cover" />
                <h3 className="font-semibold mt-3">{r.nama}</h3>
                <p className="text-sm text-gray-500">{r.rating}</p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
