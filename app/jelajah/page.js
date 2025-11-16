"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // <-- WAJIB DITAMBAHKAN

// ================= NAVBAR =================
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full py-3 px-20 flex items-center justify-between z-50 backdrop-blur-xl transition-all duration-500 ${
        isScrolled ? "bg-white/30 shadow-sm" : "bg-white/80"
      }`}
    >
      <div className="flex items-center gap-3">
        <img src="/assets/logo.png" alt="Veats logo" className="w-20 h-20 object-contain" />
      </div>

      <ul className="hidden md:flex gap-12 text-base font-medium text-gray-700 mx-auto">
        {[
          { label: "Jelajah", link: "/" },
          { label: "Tentang Kami", link: "/jelajah" },
          { label: "Kontak", link: "/kontak" },
        ].map((item, idx) => (
          <li key={idx}>
            <a
              href={item.link}
              className="relative transition-all duration-300 hover:text-[#6FC233]
              after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#6FC233]
              after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ================= UTILS: generate slug =================
function makeSlug(str) {
  return str
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

// ================= JELAJAH PAGE =================
export default function Jelajah() {
  const [search, setSearch] = useState("");

  const produkUnggulan = [
    { nama: "Ayam Mevera", rating: "⭐ 4.7 (289)", img: "/assets/mavera.png" },
    { nama: "Sempol", rating: "⭐ 4.8 (320)", img: "/assets/sempol1.jpg" },
    { nama: "Nasi Bebek", rating: "⭐ 4.6 (260)", img: "/assets/nasibebek.png" },
    { nama: "Alpukat Kocok", rating: "⭐ 4.6 (215)", img: "/assets/alpucok.png" },
  ];

  const umkmSekitar = [
    { nama: "Ayam Geprek Mavera", rating: "⭐ 4.6 (289)", img: "/assets/depanmavera.png" },
    { nama: "Bumbu Ndesso", rating: "⭐ 4.5 (316)", img: "/assets/bumbundeso.png" },
    { nama: "Ayam Gepuk Semeru", rating: "⭐ 4.7 (290)", img: "/assets/ayamsemeru.png" },
    { nama: "RM Pondok Selera", rating: "⭐ 4.5 (325)", img: "/assets/pondoksalero.png" },
    { nama: "Warung nasi Parahyaangan", rating: "⭐ 4.8 (250)", img: "/assets/warungnasiparahyangan.jpg" },
    { nama: "Mie Ayam & Bakso binangun", rating: "⭐ 4.4 (280)", img: "/assets/miayambinangun.png" },
    { nama: "Ayam Geprek mus", rating: "⭐ 4.4 (285)", img: "/assets/ayamaamus.png" },
    { nama: "Sambel Pedas Abah Hadi", rating: "⭐ 4.6 (290)", img: "/assets/sambelpadeh.png" },
    { nama: "Sempol & Cilok", rating: "⭐ 4.8 (260)", img: "/assets/sempol.png" },
    { nama: "Pecel Lele Sukajadi", rating: "⭐ 4.9 (250)", img: "/assets/pecellelesukajadi.png" },
  ];

  const filteredProduk = produkUnggulan.filter((p) =>
    p.nama.toLowerCase().includes(search.toLowerCase())
  );

  const filteredUmkm = umkmSekitar.filter((u) =>
    u.nama.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* ================= HERO SEARCH ================= */}
      <section className="relative w-full h-[520px] pt-32">

        <div className="absolute -top-20 left-0 w-[460px] h-[460px] bg-[#79C268]/40 blur-[150px] rounded-full"></div>
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#FC9E84]/40 blur-[150px] rounded-full"></div>

        <img 
          src="/assets/sempol.png"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <h1 className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 
          text-white text-4xl md:text-6xl font-extrabold text-center drop-shadow-xl">
          UMKM Kuliner Daerah UPNVJ
        </h1>

        <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[90%] md:w-[70%]">
          <div className="flex bg-white rounded-xl overflow-hidden shadow-2xl">
            <input
              type="text"
              placeholder="Cari makanan, lokasi, atau penjual"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-5 py-4 outline-none text-gray-700"
            />
            <button className="px-8 bg-[#6FC233] text-white font-bold">
              Cari
            </button>
          </div>
        </div>

      </section>

      {/* ================= PRODUK UNGGULAN ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold">Produk Unggulan</h2>

        <div className="grid md:grid-cols-4 gap-6 mt-8">
          {filteredProduk.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl bg-white shadow hover:shadow-lg p-4 cursor-pointer"
            >
              <img src={p.img} className="rounded-lg h-40 w-full object-cover" />
              <h3 className="mt-3 font-semibold">{p.nama}</h3>
              <p className="text-sm text-gray-500">{p.rating}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= UMKM SEKITAR ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-16 text-center">
        <h2 className="text-2xl font-bold">UMKM Sekitar</h2>
        <p className="text-gray-600 mt-1">Temukan UMKM pilihan di sekitar Anda.</p>

        <div className="overflow-x-auto scrollbar-hide mt-8">
          <div className="min-w-max flex flex-col gap-6">

            {/* BARIS 1 */}
            <div className="flex gap-6">
              {filteredUmkm.slice(0, 5).map((u, i) => (
                <Link key={i} href={`/detail/${makeSlug(u.nama)}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-xl bg-white shadow hover:shadow-lg p-4 cursor-pointer w-[260px]"
                  >
                    <img src={u.img} className="rounded-lg h-40 w-full object-cover" />
                    <h3 className="mt-3 font-semibold">{u.nama}</h3>
                    <p className="text-sm text-gray-500">{u.rating}</p>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* BARIS 2 */}
            <div className="flex gap-6">
              {filteredUmkm.slice(5, 10).map((u, i) => (
                <Link key={i} href={`/detail/${makeSlug(u.nama)}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-xl bg-white shadow hover:shadow-lg p-4 cursor-pointer w-[260px]"
                  >
                    <img src={u.img} className="rounded-lg h-40 w-full object-cover" />
                    <h3 className="mt-3 font-semibold">{u.nama}</h3>
                    <p className="text-sm text-gray-500">{u.rating}</p>
                  </motion.div>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// ================= FOOTER =================
function Footer() {
  return (
    <footer id="kontak" className="bg-[#69325A] text-white py-12 mt-20">
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
