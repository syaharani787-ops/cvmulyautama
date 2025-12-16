'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Shield, Eye, Lock, UserCheck, FileText, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
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
            
            <div className="flex items-center">
              <Button variant="ghost" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Kembali ke Beranda
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-orange-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Privasi Anda adalah prioritas kami. Pelajari bagaimana <strong>CV MULYA UTAMA</strong> melindungi data pribadi Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Introduction */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Pendahuluan</h2>
                <p className="text-gray-600 leading-relaxed">
                  Selamat datang di Kebijakan Privasi <strong>CV MULYA UTAMA</strong>. Dokumen ini menjelaskan bagaimana kami mengumpulkan, 
                  menggunakan, melindungi, dan membagikan informasi pribadi Anda ketika Anda menggunakan layanan konstruksi kami, 
                  mengunjungi website kami, atau berinteraksi dengan kami dalam kapasitas lain.
                </p>
              </CardContent>
            </Card>

            {/* Information Collection */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Eye className="h-6 w-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Informasi yang Kami Kumpulkan</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Informasi Pribadi</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Nama lengkap dan informasi identitas</li>
                      <li>Alamat email dan nomor telepon</li>
                      <li>Alamat fisik dan lokasi proyek</li>
                      <li>Informasi perusahaan atau organisasi</li>
                      <li>Informasi pembayaran dan penagihan</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Informasi Teknis</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Alamat IP dan jenis perangkat</li>
                      <li>Informasi browser dan sistem operasi</li>
                      <li>Data penggunaan website</li>
                      <li>Cookies dan teknologi pelacakan lainnya</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Information Usage */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Penggunaan Informasi</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Kami menggunakan informasi yang dikumpulkan untuk tujuan berikut:
                  </p>
                  
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li><strong>Penyediaan Layanan:</strong> Untuk menjalankan dan mengelola layanan konstruksi yang Anda minta</li>
                    <li><strong>Komunikasi:</strong> Untuk menghubungi Anda mengenai proyek, penawaran, dan pembaruan layanan</li>
                    <li><strong>Penagihan:</strong> Untuk memproses pembayaran dan mengelola transaksi keuangan</li>
                    <li><strong>Penyempurnaan Layanan:</strong> Untuk menganalisis dan meningkatkan kualitas layanan kami</li>
                    <li><strong>Keamanan:</strong> Untuk melindungi keamanan dan integritas sistem dan pelanggan kami</li>
                    <li><strong>Kepatuhan Hukum:</strong> Untuk mematuhi kewajiban hukum dan peraturan yang berlaku</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Lock className="h-6 w-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Perlindungan Data</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600">
                    <strong>CV MULYA UTAMA</strong> berkomitmen untuk melindungi informasi pribadi Anda dengan:
                  </p>
                  
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Enkripsi data selama transmisi dan penyimpanan</li>
                    <li>Akses terbatas ke informasi pribadi bagi staf yang berwenang</li>
                    <li>Keamanan fisik dan digital untuk server dan sistem kami</li>
                    <li>Audit keamanan reguler dan pembaruan sistem</li>
                    <li>Pelatihan staf tentang praktik privasi terbaik</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <UserCheck className="h-6 w-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Hak Anda sebagai Pengguna</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Sebagai pemilik data, Anda memiliki hak untuk:
                  </p>
                  
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li><strong>Mengakses:</strong> Meminta salinan informasi pribadi yang kami simpan tentang Anda</li>
                    <li><strong>Mengoreksi:</strong> Memperbaiki informasi yang tidak akurat atau tidak lengkap</li>
                    <li><strong>Menghapus:</strong> Meminta penghapusan informasi pribadi Anda dalam kondisi tertentu</li>
                    <li><strong>Membatasi:</strong> Membatasi pemrosesan informasi pribadi Anda</li>
                    <li><strong>Memindahkan:</strong> Meminta transfer informasi Anda ke penyedia layanan lain</li>
                    <li><strong>Menolak:</strong> Menolak pemrosesan informasi untuk tujuan pemasaran langsung</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Third Party Sharing */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <AlertCircle className="h-6 w-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Pembagian dengan Pihak Ketiga</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga. 
                    Kami hanya membagikan informasi Anda dalam kondisi berikut:
                  </p>
                  
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Dengan persetujuan eksplisit Anda</li>
                    <li>Kepada penyedia layanan yang membantu operasi bisnis kami (misalnya, sistem penagihan)</li>
                    <li>Untuk mematuhi kewajiban hukum atau perintah pengadilan</li>
                    <li>Untuk melindungi hak, privasi, keamanan, atau properti kami atau orang lain</li>
                    <li>Dalam hubungannya dengan merger, akuisisi, atau penjualan aset perusahaan</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
                <p className="text-gray-600 mb-4">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menggunakan hak Anda, 
                  silakan hubungi kami:
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2"><strong>CV MULYA UTAMA</strong></p>
                  <p className="text-gray-600">Email: privacy@cmulyautama.co.id</p>
                  <p className="text-gray-600">Telepon: 085353876138</p>
                  <p className="text-gray-600">
                    Alamat: BLOK GOROLONG, Desa/Kelurahan Sindangpala, Kec. Banjaran, Kab. Majalengka, Provinsi Jawa Barat
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Last Updated */}
            <Card>
              <CardContent className="p-6 bg-gray-50">
                <p className="text-center text-gray-600">
                  <strong>Kebijakan Privasi</strong> ini terakhir diperbarui pada: {new Date().toLocaleDateString('id-ID', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 CV MULYA UTAMA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}