'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, FileText, CheckCircle, AlertTriangle, Users, Hammer, Scale, Shield } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
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
            <FileText className="h-16 w-16 mx-auto mb-6 text-orange-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Syarat dan Ketentuan
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Ketentuan penggunaan layanan <strong>CV MULYA UTAMA</strong> untuk konstruksi bangunan sipil jalan.
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
                  Selamat datang di Syarat dan Ketentuan <strong>CV MULYA UTAMA</strong>. Dokumen ini mengatur penggunaan 
                  layanan konstruksi yang kami sediakan. Dengan menggunakan layanan kami, Anda menyetujui syarat dan ketentuan ini.
                </p>
              </CardContent>
            </Card>

            {/* Services Scope */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Hammer className="h-6 w-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Lingkup Layanan</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600">
                    <strong>CV MULYA UTAMA</strong> menyediakan layanan konstruksi meliputi:
                  </p>
                  
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li><strong>Konstruksi Jalan:</strong> Pembangunan jalan aspal, beton, dan tanah</li>
                    <li><strong>Konstruksi Sipil:</strong> Jembatan, drainase, dan struktur penunjang</li>
                    <li><strong>Maintenance Jalan:</strong> Perawatan dan perbaikan rutin</li>
                    <li><strong>Konsultasi Teknis:</strong> Perencanaan dan desain infrastruktur</li>
                    <li><strong>Supervisi Proyek:</strong> Pengawasan dan manajemen konstruksi</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Client Obligations */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Kewajiban Klien</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Sebagai klien, Anda setuju untuk:
                  </p>
                  
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Menyediakan informasi yang akurat dan lengkap mengenai proyek</li>
                    <li>Memastikan lokasi proyek dapat diakses dengan aman</li>
                    <li>Memperoleh izin dan perizinan yang diperlukan dari pihak berwenang</li>
                    <li>Melakukan pembayaran sesuai dengan jadwal yang telah disepakati</li>
                    <li>Bekerjasama dalam proses supervisi dan inspeksi</li>
                    <li>Memberikan akses ke lokasi proyek sesuai jadwal kerja</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Company Obligations */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Kewajiban Perusahaan</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600">
                    <strong>CV MULYA UTAMA</strong> berkomitmen untuk:
                  </p>
                  
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Menyelesaikan proyek sesuai dengan spifikasi teknis yang disepakati</li>
                    <li>Menggunakan material berkualitas sesuai standar industri</li>
                    <li>Menerapkan praktik keselamatan kerja yang memadai</li>
                    <li>Menyelesaikan proyek dalam waktu yang telah ditentukan</li>
                    <li>Memberikan garansi untuk pekerjaan yang dilakukan</li>
                    <li>Menyediakan dokumentasi lengkap setelah penyelesaian proyek</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Scale className="h-6 w-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Syarat Pembayaran</h2>
                </div>
                
                <div className="space-y-4">
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li><strong>Uang Muka (DP):</strong> 30-50% dari total nilai kontrak</li>
                    <li><strong>Pembayaran Progress:</strong> Sesuai dengan milestone yang disepakati</li>
                    <li><strong>Pelunasan:</strong> Setelah penyelesaian proyek dan serah terima</li>
                    <li><strong>Retensi:</strong> 5-10% dari total kontrak untuk jaminan pemeliharaan</li>
                    <li><strong>Metode Pembayaran:</strong> Transfer bank atau tunai dengan kwitansi resmi</li>
                    <li><strong>Keterlambatan Pembayaran:</strong> Dikenakan denda 0.5% per hari dari jumlah yang terlambat</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Warranty and Liability */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Garansi dan Tanggung Jawab</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Masa Garansi</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Konstruksi Jalan: 1-2 tahun</li>
                      <li>Struktur Sipil: 2-5 tahun</li>
                      <li>Pekerjaan Finishing: 6-12 bulan</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Batasan Tanggung Jawab</h3>
                    <p className="text-gray-600">
                      Kami tidak bertanggung jawab atas:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
                      <li>Kerusakan akibat bencana alam (gempa, banjir, longsor)</li>
                      <li>Kerusakan akibat kelalaian pemeliharaan setelah serah terima</li>
                      <li>Kerusakan akibat penggunaan yang tidak sesuai</li>
                      <li>Keterlambatan akibat faktor di luar kendali kami (force majeure)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Pemutusan Kontrak</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Kontrak dapat dihentikan dalam kondisi berikut:
                  </p>
                  
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li><strong>Kesepakatan Bersama:</strong> Kedua belah pihak setuju untuk mengakhiri kontrak</li>
                    <li><strong>Pelanggaran Kontrak:</strong> Salah satu pihak melanggar syarat kontrak secara material</li>
                    <li><strong>Force Majeure:</strong> Keadaan kahar yang membuat pelaksanaan kontrak tidak mungkin</li>
                    <li><strong>Kepailitan:</strong> Salah satu pihak dinyatakan pailit</li>
                  </ul>
                  
                  <p className="text-gray-600">
                    Dalam kasus pemutusan kontrak, hak dan kewajiban finansial akan diselesaikan sesuai dengan progres pekerjaan yang telah dilakukan.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Dispute Resolution */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Penyelesaian Sengketa</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Setiap sengketa yang timbul dari kontrak ini akan diselesaikan melalui:
                  </p>
                  
                  <ol className="list-decimal list-inside text-gray-600 space-y-2">
                    <li><strong>Negosiasi:</strong> Upaya penyelesaian secara musyawarah</li>
                    <li><strong>Mediasi:</strong> Melalui mediator pihak ketiga yang netral</li>
                    <li><strong>Arbitrase:</strong> Melalui lembaga arbitrase yang disepakati</li>
                    <li><strong>Pengadilan:</strong> Pengadilan Negeri di Kabupaten Majalengka</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
                <p className="text-gray-600 mb-4">
                  Untuk pertanyaan atau klarifikasi mengenai Syarat dan Ketentuan ini, silakan hubungi:
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2"><strong>CV MULYA UTAMA</strong></p>
                  <p className="text-gray-600">Email: legal@cmulyautama.co.id</p>
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
                  <strong>Syarat dan Ketentuan</strong> ini terakhir diperbarui pada: {new Date().toLocaleDateString('id-ID', { 
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