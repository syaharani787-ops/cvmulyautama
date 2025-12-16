'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MapPin, CheckCircle, HardHat, Truck, Wrench, Building, Menu, X, Shield, Users, Clock } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="CV MULYA UTAMA Logo"
                className="h-10 w-auto mr-3"
              />
              <span className="text-xl font-bold text-gray-900">CV MULYA UTAMA</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors">Beranda</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">Tentang</a>
              <a href="#services" className="text-gray-700 hover:text-orange-600 transition-colors">Layanan</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">Kontak</a>
              <a href="/privacy" className="text-gray-700 hover:text-orange-600 transition-colors">Privacy</a>
              <a href="/terms" className="text-gray-700 hover:text-orange-600 transition-colors">Terms</a>
            </div>

            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Beranda</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Tentang</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Layanan</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Kontak</a>
              <a href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Privacy</a>
              <a href="/terms" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Terms</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-orange-600 to-orange-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              CV MULYA UTAMA
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Konstruksi Bangunan Sipil Jalan Terpercaya
            </p>
            <p className="text-lg mb-12 max-w-3xl mx-auto text-orange-50">
              Spesialis dalam pembangunan infrastruktur jalan dan konstruksi sipil dengan kualitas terbaik dan pengalaman bertahun-tahun di Majalengka dan sekitarnya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
                <a href="#contact">Hubungi Kami</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600" asChild>
                <a href="#services">Lihat Layanan</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tentang <span className="text-orange-600">CV MULYA UTAMA</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Perusahaan konstruksi terpercaya yang berdedikasi untuk menyediakan solusi infrastruktur berkualitas tinggi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Membangun Infrastruktur untuk Masa Depan</h3>
              <p className="text-gray-600 mb-6">
                CV MULYA UTAMA adalah perusahaan konstruksi yang berfokus pada pembangunan sipil jalan. Dengan pengalaman bertahun-tahun, kami telah membantu berbagai proyek infrastruktur di wilayah Majalengka dan sekitarnya.
              </p>
              <p className="text-gray-600 mb-8">
                Kami berkomitmen untuk memberikan hasil kerja terbaik dengan standar kualitas tinggi, tepat waktu, dan dengan harga yang kompetitif.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-orange-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Bergaransi</h4>
                    <p className="text-sm text-gray-600">Kualitas terjamin</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-orange-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Tim Profesional</h4>
                    <p className="text-sm text-gray-600">Ahli berpengalaman</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-8 w-8 text-orange-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Tepat Waktu</h4>
                    <p className="text-sm text-gray-600">Deadline terjaga</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-8 w-8 text-orange-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Berkualitas</h4>
                    <p className="text-sm text-gray-600">Standar tinggi</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Building className="h-24 w-24 mx-auto mb-4 text-gray-400" />
                <p>Galeri Proyek</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Solusi konstruksi komprehensif untuk kebutuhan infrastruktur Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Konstruksi Jalan</h3>
                <p className="text-gray-600">
                  Pembangunan jalan aspal, jalan beton, dan jalan tanah dengan standar kualitas tinggi untuk berbagai keperluan.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HardHat className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Konstruksi Sipil</h3>
                <p className="text-gray-600">
                  Pembangunan infrastruktur sipil termasuk jembatan, drainase, dan struktur penunjang lainnya.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Maintenance Jalan</h3>
                <p className="text-gray-600">
                  Perawatan dan perbaikan jalan rutin untuk menjaga kualitas dan keamanan infrastruktur jalan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Siap untuk mewujudkan proyek konstruksi Anda? Hubungi tim profesional kami sekarang
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Nama Perusahaan</h4>
                    <p className="text-gray-600"><strong>CV MULYA UTAMA</strong></p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Alamat</h4>
                    <p className="text-gray-600">
                      BLOK GOROLONG, Desa/Kelurahan Sindangpala<br />
                      Kec. Banjaran, Kab. Majalengka<br />
                      Provinsi Jawa Barat
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telepon</h4>
                    <p className="text-gray-600">085353876138</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@cmulyautama.co.id</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Kirim Pesan</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Subjek pesan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Tuliskan pesan Anda..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="/logo.png"
                  alt="CV MULYA UTAMA Logo"
                  className="h-8 w-auto mr-2"
                />
                <span className="text-lg font-bold">CV MULYA UTAMA</span>
              </div>
              <p className="text-gray-400">
                Konstruksi Bangunan Sipil Jalan Terpercaya di Majalengka
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Konstruksi Jalan</li>
                <li>Konstruksi Sipil</li>
                <li>Maintenance Jalan</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>085353876138</li>
                <li>info@cmulyautama.co.id</li>
                <li>Banjaran, Majalengka</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CV MULYA UTAMA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}