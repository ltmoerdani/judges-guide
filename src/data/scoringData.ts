import type { EquipmentNode } from '@/types';

/**
 * Data mindmap lengkap untuk sistem scoring archery berdasarkan World Archery Rulebooks & Judge Guidebook
 * Disusun ulang dari draft React component menjadi struktur EquipmentNode yang konsisten
 */
export const scoringData: EquipmentNode = {
  id: 'scoring-system-archery',
  name: 'SCORING SYSTEM ARCHERY - COMPLETE GUIDE',
  subtitle: 'Panduan komprehensif untuk judge dengan 100+ use cases praktis',
  color: 'bg-orange-50 border-orange-300',
  children: [
    {
      id: 'scoring-prinsip-dasar',
      name: '1. PRINSIP DASAR SCORING',
      ref: 'Book 3 - Chapter 14',
      color: 'bg-blue-50 border-blue-300',
      children: [
        {
          id: 'scoring-posisi-arrow',
          name: '1.1 Posisi Arrow di Target',
          ref: 'Book 3 - 14.2',
          useCase: 'Arrow dinilai berdasarkan posisi shaft di target face. Jika shaft menyentuh 2 zona, berikan nilai lebih tinggi.',
          children: [
            {
              id: 'scoring-use-case-arrow-garis',
              name: 'USE CASE: Arrow di Garis Pembatas',
              ref: 'Book 3 - 14.2',
              useCase: '⚠️ Arrow shaft menyentuh garis antara zona 9 dan 10. Judge wajib memberikan nilai 10 (nilai lebih tinggi).'
            },
            {
              id: 'scoring-use-case-garis-rusak',
              name: 'USE CASE: Garis Rusak/Hilang',
              ref: 'Book 3 - 14.2.3 & Judge Guide 4.18',
              useCase: '⚠️ Garis pembatas hilang/rusak. Judge gunakan garis imajiner melingkar; jika ragu, berikan nilai lebih tinggi (benefit of doubt).'
            }
          ]
        },
        {
          id: 'scoring-jenis-target-face',
          name: '1.2 Jenis Target Faces',
          ref: 'Book 2 - 7.2.2 & Book 3 - Appendix 1',
          children: [
            {
              id: 'scoring-target-archery',
              name: 'Target Archery (1-10 Zones)',
              ref: 'Book 3 - Appendix 1',
              specs: '• Gold (10/X): 6.1cm inner, 12.2cm outer (122cm face)\n• Red (9-8): merah\n• Blue (7-6): biru\n• Black (5-4): hitam\n• White (3-2-1): putih'
            },
            {
              id: 'scoring-field-archery',
              name: 'Field Archery (1-6 Zones)',
              ref: 'Book 2 - 8.2.1',
              specs: '• Yellow inner (6): inner yellow zone\n• Yellow outer (5): outer yellow zone\n• Black (4-3-2-1): 4 zona hitam\n• Garis hitam 1mm antara zona 6 & 5\n• Garis putih 1mm di zona hitam\n• Tidak ada garis antara yellow dan black'
            },
            {
              id: 'scoring-3d-archery',
              name: '3D Archery (11-10-8-5 Zones)',
              ref: 'Book 2 - 9.2.2',
              specs: '• 11 points: lingkaran kecil di center 10-ring (±25% dari 10-ring)\n• 10 points: lingkaran besar di vital area\n• 8 points: vital area di luar 10-ring\n• 5 points: remaining body colour zone\n• Horn/hoof/non-scoring area: MISS (M)\n• Tail/wings pada bird target: arrow tetap scoring'
            },
            {
              id: 'scoring-use-case-3d-horn',
              name: 'USE CASE 3D: Horn vs Body',
              ref: 'Book 2 - 9.2.2',
              useCase: '⚠️ Arrow melewati horn namun menyentuh zona 5. Beri nilai 5. Jika arrow melewati horn tanpa menyentuh zona scoring = MISS (M).'
            },
            {
              id: 'scoring-use-case-3d-ricochet',
              name: 'USE CASE 3D: Ricochet',
              ref: 'Book 4 - 25.2.2',
              useCase: '⚠️ Arrow ricochet (memantul) di 3D target = MISS (M). Berbeda dengan rebound di target archery yang dapat dinilai.'
            }
          ]
        },
        {
          id: 'scoring-larangan-sebelum',
          name: '1.3 Larangan Sebelum Scoring',
          ref: 'Book 3 - 14.2.1',
          useCase: '⛔ Dilarang menyentuh arrow, target face, butt, atau 3D target sebelum semua nilai tercatat dan dicek.',
          children: [
            {
              id: 'scoring-use-case-atlet-menyentuh',
              name: 'USE CASE: Atlet Menyentuh Arrow',
              ref: 'Book 3 - 14.2.1 & Book 4 - 25.2.1',
              useCase: '⚠️ Atlet menyentuh arrow sebelum scoring selesai. Judge wajib memberi peringatan dan terapkan sanksi sesuai rules.'
            }
          ]
        }
      ]
    },
    {
      id: 'scoring-target-procedure',
      name: '2. PROSEDUR SCORING - TARGET ARCHERY',
      ref: 'Book 3 - Chapter 14',
      color: 'bg-green-50 border-green-300',
      children: [
        {
          id: 'scoring-target-waktu-format',
          name: '2.1 Waktu & Format Scoring',
          ref: 'Book 3 - 14.1.2',
          useCase: 'Scoring dilakukan setelah setiap end/set selesai.',
          children: [
            {
              id: 'scoring-target-qualification',
              name: 'Qualification Round',
              ref: 'Book 3 - 14.1.3',
              specs: '• Scorer mencatat nilai yang dipanggil atlet\n• Urutan descending\n• Atlet lain mengecek setiap nilai\n• Jika tidak setuju → panggil Judge'
            },
            {
              id: 'scoring-target-elim-sim',
              name: 'Elimination/Finals - Simultaneous',
              ref: 'Book 3 - 14.1.4',
              specs: '• Atlet memanggil nilai sendiri\n• Lawan mengecek nilai\n• Jika tidak setuju → panggil Judge\n• Keputusan Judge final'
            },
            {
              id: 'scoring-target-elim-alt',
              name: 'Elimination/Finals - Alternating',
              ref: 'Book 3 - 14.1.6',
              specs: '• Scorer catat sementara sesuai urutan tembakan\n• Verifikasi resmi di target dengan Target Judge\n• Target Judge panggil nilai descending order\n• Judge sign jika ada perubahan'
            }
          ]
        },
        {
          id: 'scoring-peran-scorer',
          name: '2.2 Peran Scorer',
          ref: 'Judge Guide - 5.6',
          children: [
            {
              id: 'scoring-tanggung-jawab-scorer',
              name: 'Tanggung Jawab Scorer',
              ref: 'Judge Guide - 5.6',
              specs: '• Catat nilai dengan jelas dan akurat\n• Tidak ikut diskusi nilai arrow\n• Pastikan total benar\n• Catat jumlah 10s & Xs (atau 9s indoor)\n• Panggil atlet dengan nama di scorecard'
            },
            {
              id: 'scoring-larangan-scorer',
              name: 'Larangan Scorer',
              ref: 'Judge Guide - 5.6',
              specs: '⛔ Tidak boleh:\n• Mengubah nilai tanpa persetujuan semua atlet\n• Terlibat diskusi aturan/interpretasi\n• Membuat keputusan nilai arrow'
            },
            {
              id: 'scoring-use-case-scorer-ragu',
              name: 'USE CASE: Scorer Ragu Nilai',
              ref: 'Judge Guide - 5.6',
              useCase: '⚠️ Scorer ragu apakah arrow 9 atau 10. Scorer wajib meminta atlet mengulangi nilai dengan jelas dan tidak menebak.'
            },
            {
              id: 'scoring-use-case-scorer-salah-atlet',
              name: 'USE CASE: Nilai Dicatat Salah Atlet',
              ref: 'Judge Guide - 5.6',
              useCase: '⚠️ Scorer mencatat nilai di scorecard atlet yang salah karena tidak memanggil nama. Harus dikoreksi sebelum arrow ditarik atau ikuti proteksi scorecard.'
            }
          ]
        },
        {
          id: 'scoring-set-points',
          name: '2.3 Set Points System (Match Play)',
          ref: 'Book 3 - 14.1.4.1 & 14.1.5.1',
          children: [
            {
              id: 'scoring-set-individual',
              name: 'Individual Match',
              ref: 'Book 3 - 14.1.4.1 - 14.1.4.2',
              specs: '• Max per set: 30 poin (3 arrows)\n• Menang set: 2 set points\n• Tie: masing-masing 1 set point\n• Menang match: 6 set points (dari max 10)\n• Match bisa selesai 5-0, 5-1, 5-3, 6-0, 6-2, 6-4'
            },
            {
              id: 'scoring-set-team',
              name: 'Team Match',
              ref: 'Book 3 - 14.1.5.1 - 14.1.5.2',
              specs: '• Max per set: 60 poin (6 arrows)\n• Menang set: 2 set points\n• Tie: masing-masing 1 set point\n• Menang match: 5 set points (dari max 8)'
            },
            {
              id: 'scoring-set-mixed',
              name: 'Mixed Team Match',
              ref: 'Book 3 - 14.1.5.1',
              specs: '• Max per set: 40 poin (4 arrows)\n• Sistem set points sama dengan team\n• Menang match: 5 set points (dari max 8)'
            }
          ]
        }
      ]
    },
    {
      id: 'scoring-field-procedure',
      name: '3. PROSEDUR SCORING - FIELD & 3D ARCHERY',
      ref: 'Book 4 - Chapter 25',
      color: 'bg-purple-50 border-purple-300',
      children: [
        {
          id: 'scoring-field-group-procedure',
          name: '3.1 Group Scoring Procedures',
          ref: 'Book 4 - 25.1',
          useCase: 'Scoring dilakukan setelah semua atlet dalam group menembak.',
          children: [
            {
              id: 'scoring-pembagian-tugas-group',
              name: 'Pembagian Tugas dalam Group',
              ref: 'Book 4 - 25.1.1',
              specs: '• Athlete A: group leader (kecuali disepakati lain)\n• Athlete B & C: scorers\n• Athlete D: mark arrow holes (jika applicable)\n• Group 3 orang: leader juga mark holes\n• Field rounds: tidak boleh tinggalkan target sebelum semua holes ditandai'
            },
            {
              id: 'scoring-finals-field',
              name: 'Finals Round Scoring',
              ref: 'Book 4 - 25.1.2.1',
              specs: '• Judge wajib dampingi tiap group atau tunggu di setiap target\n• Portable scoreboard dibawa untuk menampilkan score\n• Medal matches: 2 scoreboards (Gold & Bronze match)'
            }
          ]
        },
        {
          id: 'scoring-field-rebound',
          name: '3.2 Rebound/Pass-Through (Field & 3D)',
          ref: 'Book 4 - 25.2.2',
          children: [
            {
              id: 'scoring-kesepakatan-group',
              name: 'Kesepakatan Group',
              ref: 'Book 4 - 25.2.2',
              useCase: 'Jika semua atlet setuju bahwa rebound/pass-through/embedded terjadi, mereka boleh menyepakati nilai arrow tersebut.'
            },
            {
              id: 'scoring-field-tidak-setuju',
              name: 'FIELD: Jika Tidak Setuju',
              ref: 'Book 4 - 25.2.2',
              useCase: 'Jika tidak ada kesepakatan, arrow dinilai = nilai lubang terendah yang tidak ditandai di scoring zone.'
            },
            {
              id: 'scoring-3d-tidak-setuju',
              name: '3D: Jika Tidak Setuju',
              ref: 'Book 4 - 25.2.2',
              useCase: 'Pada 3D, jika tidak sepakat, arrow dinilai = lima (5).'
            },
            {
              id: 'scoring-use-case-field-multiple',
              name: 'USE CASE Field: Multiple Unmarked Holes',
              ref: 'Book 4 - 25.2.2',
              useCase: '⚠️ Pass-through, terdapat 3 lubang tidak ditandai (nilai 6, 4, 2). Group tidak setuju nilai arrow. Nilai akhir = 2 (terendah).'
            }
          ]
        }
      ]
    },
    {
      id: 'scoring-kasus-arrow',
      name: '4. KASUS KHUSUS ARROW',
      ref: 'Book 3 - 14.2.6',
      color: 'bg-red-50 border-red-300',
      children: [
        {
          id: 'scoring-rebound-arrow',
          name: '4.1 Rebound Arrow',
          ref: 'Book 3 - 14.2.6.1',
          useCase: 'Arrow memantul dari target, dinilai sesuai bekas lubang jika semua lubang sudah ditandai dan bekas baru dapat diidentifikasi.',
          children: [
            {
              id: 'scoring-rebound-procedure',
              name: 'PROSEDUR Rebound (Target Archery)',
              ref: 'Book 3 - 14.2.6.1 & Judge Guide 4.11.1',
              specs: '1. Semua atlet berhenti menembak (tetap di shooting line)\n2. Panggil Judge\n3. Tunggu atlet lain selesai/waktu habis\n4. DOS beri signal atlet bermasalah untuk lanjut\n5. Setelah end selesai, Judge & atlet ke target\n6. Judge verifikasi bekas & nilai\n7. Judge mark hole, taruh arrow di belakang target\n8. Judge ikut saat scoring end tersebut'
            },
            {
              id: 'scoring-rebound-multiple-holes',
              name: 'Multiple Unmarked Holes',
              ref: 'Judge Guide - 4.11.1',
              useCase: 'Jika ada lebih dari satu lubang tidak ditandai, arrow dinilai berdasarkan nilai terendah dari lubang tersebut.'
            },
            {
              id: 'scoring-use-case-rebound-tidak-jelas',
              name: 'USE CASE: Rebound Tidak Jelas',
              ref: 'Judge Guide - 4.11.1',
              useCase: '⚠️ Arrow rebound dengan dua lubang tidak ditandai. Judge tidak bisa identifikasi lubang yang benar → nilai = lubang terendah.'
            }
          ]
        },
        {
          id: 'scoring-pass-through',
          name: '4.2 Pass-Through Arrow',
          ref: 'Book 3 - 14.2.6.2 & Judge Guide 4.11.2',
          useCase: 'Arrow menembus butt sepenuhnya, dinilai sesuai lubang tidak ditandai jika dapat diidentifikasi.',
          children: [
            {
              id: 'scoring-pass-through-procedure',
              name: 'PROSEDUR Pass-Through',
              ref: 'Judge Guide - 4.11.2',
              specs: '1. Ditemukan saat scoring (bukan saat menembak)\n2. Semua atlet maju (mungkin perlu scoring/ganti butt)\n3. Judge cari arrow di tanah atau butt belakang\n4. Judge identifikasi lubang (cari bekas vanes)\n5. Jika embedded: identifikasi sebelum push kembali\n6. Push kembali hanya jika perlu identifikasi nilai\n7. Dorong dengan sudut yang sama\n8. Ganti/perkuat buttress setelah kejadian'
            },
            {
              id: 'scoring-pass-through-belakang',
              name: 'Identifikasi dari Belakang Butt',
              ref: 'Judge Guide - 4.11.2',
              useCase: 'Jika arrow deeply embedded, Judge dapat ukur jarak dari belakang butt sebelum mendorong kembali untuk identifikasi nilai.'
            },
            {
              id: 'scoring-use-case-pass-through-tidak-teridentifikasi',
              name: 'USE CASE: Pass-Through Tidak Teridentifikasi',
              ref: 'Judge Guide - 4.11.2',
              useCase: '⚠️ Arrow pass-through, ditemukan di tanah dengan tiga lubang tidak ditandai. Jika tidak bisa diidentifikasi, nilai = lubang terendah.'
            }
          ]
        },
        {
          id: 'scoring-hanging-arrow',
          name: '4.3 Hanging Arrow',
          ref: 'Judge Guide - 4.11.3',
          useCase: 'Arrow menggantung di target face dan tidak tertanam dengan baik di buttress.',
          children: [
            {
              id: 'scoring-hanging-procedure',
              name: 'PROSEDUR',
              ref: 'Judge Guide - 4.11.3',
              specs: '1. Hentikan shooting pada buttress terkait\n2. Ikuti prosedur bouncer/pass-through\n3. Nilai berdasarkan impact zone tempat arrow menggantung\n4. Shaft yang menyentuh multiple zones tidak signifikan untuk score'
            },
            {
              id: 'scoring-use-case-hanging',
              name: 'USE CASE: Hanging di Garis',
              ref: 'Judge Guide - 4.11.3',
              useCase: '⚠️ Arrow hanging di zona 10 tapi shaft menyentuh zona 9. Nilai ditetapkan dari impact point, bukan posisi saat menggantung.'
            }
          ]
        },
        {
          id: 'scoring-robin-hood',
          name: '4.4 Arrow Mengenai Arrow Lain (Robin Hood)',
          ref: 'Book 3 - 14.2.6',
          children: [
            {
              id: 'scoring-robin-hood-nock',
              name: 'Mengenai Nock',
              ref: 'Book 3 - 14.2.6.3',
              useCase: 'Arrow yang menancap di nock arrow lain dinilai sesuai nilai arrow yang terkena.'
            },
            {
              id: 'scoring-robin-hood-defleksi-target',
              name: 'Defleksi ke Target',
              ref: 'Book 3 - 14.2.6.4',
              useCase: 'Arrow mengenai arrow lain lalu masuk target dinilai sesuai posisi saat menempel.'
            },
            {
              id: 'scoring-robin-hood-defleksi-rebound',
              name: 'Defleksi Rebound',
              ref: 'Book 3 - 14.2.6.5',
              useCase: 'Arrow mengenai arrow lain lalu rebound dinilai sesuai arrow yang terkena, jika arrow rusak dapat diidentifikasi.'
            },
            {
              id: 'scoring-use-case-robin-hood-classic',
              name: 'USE CASE: Robin Hood Classic',
              ref: 'Book 3 - 14.2.6.3',
              useCase: '✅ Arrow kedua masuk tepat di nock arrow pertama bernilai 10. Kedua arrow dinilai 10.'
            },
            {
              id: 'scoring-use-case-robin-hood-tidak-identify',
              name: 'USE CASE: Defleksi Tidak Teridentifikasi',
              ref: 'Book 3 - 14.2.6.5',
              useCase: '⚠️ Arrow rebound setelah mengenai arrow lain namun arrow rusak tidak bisa diidentifikasi. Arrow rebound = MISS.'
            }
          ]
        },
        {
          id: 'scoring-arrow-butt',
          name: '4.5 Arrow Tertanam di Butt',
          ref: 'Book 3 - 14.2.5',
          useCase: 'Arrow tertanam di butt dan tidak terlihat di face hanya dapat dinilai oleh Judge.',
          children: [
            {
              id: 'scoring-use-case-embedded-arrow',
              name: 'USE CASE: Embedded Arrow',
              ref: 'Book 3 - 14.2.5',
              useCase: '⚠️ Arrow tertanam di butt, tidak terlihat di face. Atlet wajib memanggil Judge sebelum menarik arrow apa pun.'
            }
          ]
        },
        {
          id: 'scoring-arrow-left',
          name: '4.6 Arrow Left in Target',
          ref: 'Book 3 - 14.3.1 & Judge Guide 4.22',
          useCase: 'Arrow tertinggal di target butt dari end sebelumnya.',
          children: [
            {
              id: 'scoring-prosedur-arrow-tertinggal',
              name: 'PROSEDUR',
              ref: 'Book 3 - 14.3.1',
              specs: '• Shooting tidak diinterrupt\n• Atlet boleh menembak dengan arrow lain atau make-up setelah distance selesai\n• Judge wajib hadir saat scoring\n• Judge pastikan arrow tertinggal tercatat sebelum arrow ditarik'
            },
            {
              id: 'scoring-use-case-arrow-tertinggal',
              name: 'USE CASE: Arrow Tertinggal',
              ref: 'Book 3 - 14.3.1',
              useCase: '⚠️ Atlet lupa menarik 1 arrow end sebelumnya sehingga ada 7 arrow. Judge catat arrow tertinggal dahulu baru 6 arrow baru.'
            }
          ]
        }
      ]
    },
    {
      id: 'scoring-scorecard',
      name: '5. SCORECARD MANAGEMENT & CONSEQUENCES',
      ref: 'Book 3 - 14.4',
      color: 'bg-gray-50 border-gray-300',
      children: [
        {
          id: 'scoring-tanda-tangan-scorecard',
          name: '5.1 Tanda Tangan Scorecard',
          ref: 'Book 3 - 14.4',
          useCase: 'Scorecard wajib ditandatangani scorer dan atlet sebagai persetujuan nilai, total, dan jumlah 10s/Xs.',
          children: [
            {
              id: 'scoring-kewajiban-isi-scorecard',
              name: 'KEWAJIBAN Isi Scorecard',
              ref: 'Book 3 - 14.4 & Book 4 - 25.4',
              specs: '• Nilai setiap arrow\n• Total poin\n• Jumlah 10s dan Xs (atau 9s indoor, 5s/6s field, 10s/11s 3D)\n• Tanda tangan scorer & atlet'
            },
            {
              id: 'scoring-critical-tidak-tandatangan',
              name: '🚨 CRITICAL: Tidak Tanda Tangan',
              ref: 'Judge Guide - 4.20',
              useCase: 'Kedua atlet di match play tidak menandatangani scorecard → keduanya didiskualifikasi dari turnamen.'
            },
            {
              id: 'scoring-use-case-sign-agreement',
              name: 'USE CASE: Sign = Agreement',
              ref: 'Judge Guide - A.3',
              useCase: '⚠️ Atlet menandatangani scorecard dengan nilai 9 padahal Judge panggil 10. Setelah submit, atlet tidak dapat protes karena tanda tangan = persetujuan.'
            }
          ]
        },
        {
          id: 'scoring-koreksi-scorecard',
          name: '5.2 Koreksi Scorecard',
          ref: 'Book 3 - 14.4.1 & Judge Guide - 4.20',
          children: [
            {
              id: 'scoring-koreksi-sebelum-tarik',
              name: 'Koreksi Sebelum Arrow Ditarik',
              ref: 'Book 3 - 17.1.1',
              useCase: 'Kesalahan dapat dikoreksi jika semua atlet setuju, dilakukan sebelum arrow ditarik, dan semua memberi initial.'
            },
            {
              id: 'scoring-diskrepansi-dua-scorecard',
              name: 'Diskrepansi Dua Scorecard',
              ref: 'Judge Guide - 4.20',
              useCase: 'Jika ada perbedaan nilai antara dua scorecard, nilai terendah yang dianggap valid yang digunakan.'
            },
            {
              id: 'scoring-paper-vs-electronic',
              name: 'Paper vs Electronic',
              ref: 'Book 3 - 14.4.1 & Book 4 - 25.4.1',
              useCase: 'Jika terdapat perbedaan antara scorecard kertas dan elektronik, yang dipakai adalah versi kertas.'
            },
            {
              id: 'scoring-use-case-koreksi-judge',
              name: 'USE CASE: Koreksi oleh Judge',
              ref: 'Judge Guide - 4.20',
              useCase: '⚠️ Judge boleh membantu koreksi scorecard, tetapi wajib edukasi atlet bahwa proses seharusnya dilakukan atlet dengan persetujuan semua pihak di target.'
            }
          ]
        },
        {
          id: 'scoring-sanksi-scorecard',
          name: '5.3 Sanksi Scorecard Tidak Lengkap',
          ref: 'Book 3 - 14.4.1',
          useCase: 'Organizer tidak wajib menerima scorecard tanpa tanda tangan, total, jumlah 10s/Xs, atau dengan salah hitung.',
          children: [
            {
              id: 'scoring-proses-koreksi',
              name: 'Proses Koreksi',
              ref: 'Book 3 - 14.4.1',
              specs: 'Jika official menemukan error saat submission:\n• Minta atlet koreksi saat itu juga\n• Hasil koreksi langsung berlaku\n• Koreksi harus selesai sebelum stage berikutnya'
            },
            {
              id: 'scoring-diskualifikasi-scorecard',
              name: '🚨 Diskualifikasi',
              ref: 'Book 3 - 14.4.1',
              useCase: 'Scorecard tidak ditandatangani dan tidak dikoreksi saat submission → atlet didiskualifikasi oleh Chairperson of Judge Commission.'
            }
          ]
        }
      ]
    },
    {
      id: 'scoring-pelanggaran-sanksi',
      name: '6. PELANGGARAN & SANKSI',
      ref: 'Book 3 - Chapter 15',
      color: 'bg-pink-50 border-pink-300',
      children: [
        {
          id: 'scoring-terlalu-banyak-arrow',
          name: '6.1 Terlalu Banyak Arrow',
          ref: 'Book 3 - 14.2.2 & Judge Guide - 4.19.1',
          useCase: 'Jika atlet menembak lebih banyak arrow, yang dinilai adalah arrow bernilai terendah.',
          children: [
            {
              id: 'scoring-qualification-terlalu-banyak',
              name: 'Qualification Round',
              ref: 'Judge Guide - 4.19.1 & Book 3 - 14.2.2',
              useCase: 'Jika menembak lebih dari 6 arrow, hanya 6 arrow terendah yang dinilai.'
            },
            {
              id: 'scoring-elimination-terlalu-banyak',
              name: 'Elimination Round',
              ref: 'Judge Guide - 4.19.1',
              useCase: 'Jika menembak lebih dari 3 arrow, hanya 3 arrow terendah yang dinilai.'
            },
            {
              id: 'scoring-field-multiple-face',
              name: 'Field: Multiple Arrow di 20cm Face',
              ref: 'Book 4 - 25.2.5',
              useCase: 'Jika lebih dari 1 arrow di face 20cm yang sama, semua dihitung sebagai end tetapi hanya arrow terendah yang dinilai. Sisanya = MISS.'
            },
            {
              id: 'scoring-use-case-7-arrow',
              name: 'USE CASE: 7 Arrow di Target',
              ref: 'Judge Guide - 4.19.1',
              useCase: '⚠️ Atlet menembak 7 arrow (seharusnya 6). Nilai akhir = 6 arrow terendah, arrow tertinggi menjadi tidak dinilai.'
            }
          ]
        },
        {
          id: 'scoring-arrow-luar-waktu',
          name: '6.2 Arrow Di Luar Waktu',
          ref: 'Book 3 - 15.2.2 & Judge Guide - 4.15',
          children: [
            {
              id: 'scoring-sebelum-setelah-signal',
              name: 'Sebelum/Setelah Signal',
              ref: 'Book 3 - 15.2.2',
              useCase: 'Arrow ditembak sebelum start signal atau setelah stop signal → kehilangan arrow tertinggi di end tersebut, diubah menjadi MISS.'
            },
            {
              id: 'scoring-setelah-practice',
              name: 'Setelah Practice/Saat Break',
              ref: 'Book 3 - 15.2.3',
              useCase: 'Arrow ditembak setelah practice ditutup atau saat break → kehilangan arrow tertinggi di end berikutnya, diubah menjadi MISS.'
            },
            {
              id: 'scoring-prosedur-judge-waktu',
              name: 'PROSEDUR Judge',
              ref: 'Judge Guide - 4.15',
              specs: '1. Pastikan waktu benar-benar habis\n2. Lihat momen release sebagai acuan\n3. Jika simultan dengan signal → benefit of doubt\n4. Tunjukkan red card\n5. Catat semua nilai arrow\n6. Coret arrow tertinggi → ubah jadi M\n7. Paraaf dengan tinta merah\n8. Keputusan dapat diajukan banding'
            },
            {
              id: 'scoring-use-case-after-signal',
              name: 'USE CASE: After Signal',
              ref: 'Judge Guide - 4.15',
              useCase: '⚠️ Atlet menembak setelah stop signal. Nilai end: 10-9-8 → 10 dicoret dan menjadi M, skor final 0-9-8.'
            },
            {
              id: 'scoring-use-case-simultaneous',
              name: 'USE CASE: Simultaneous Release',
              ref: 'Judge Guide - 4.15',
              useCase: '✅ Arrow dilepas bersamaan dengan start/stop signal → benefit of doubt, arrow tetap dihitung.'
            }
          ]
        },
        {
          id: 'scoring-pelanggaran-ganda',
          name: '6.3 Pelanggaran Ganda (Multiple Violations)',
          ref: 'Judge Guide - 4.19.2',
          useCase: 'Jika atlet menembak di luar waktu dan terlalu banyak arrow, terapkan dua prosedur penalti sekaligus.',
          children: [
            {
              id: 'scoring-prosedur-double-violation',
              name: 'PROSEDUR',
              ref: 'Judge Guide - 4.19.2',
              specs: '1. Ambil nilai lowest 6/3 arrows\n2. Coret arrow tertinggi dari kelompok tersebut\n3. Ubah menjadi MISS (M)'
            },
            {
              id: 'scoring-use-case-double',
              name: 'USE CASE: Double Violation',
              ref: 'Judge Guide - 4.19.2',
              useCase: '⚠️ Atlet menembak 4 arrow (seharusnya 3) dan 1 di luar waktu. Nilai 10-9-8-7 → ambil 9-8-7, coret 9 → M. Final: M-8-7.'
            },
            {
              id: 'scoring-use-case-triple-indoor',
              name: 'USE CASE: Triple Violation Indoor',
              ref: 'Judge Guide - 4.11.4',
              useCase: '⚠️ Indoor triple face: 2 arrow satu spot, total 4 arrow, 1 out of time. Prosedur kombinasi bisa menghasilkan dua MISS.'
            }
          ]
        },
        {
          id: 'scoring-team-violations',
          name: '6.4 TEAM VIOLATIONS - Time Penalties',
          ref: 'Book 3 - 15.3 & Judge Guide 6.3',
          color: 'bg-yellow-50 border-yellow-300',
          children: [
            {
              id: 'scoring-yellow-card',
              name: 'YELLOW CARD - Minor Violations',
              ref: 'Book 3 - 15.3.1 & Judge Guide 6.3.1',
              useCase: '🟨 Minor violation = time penalty. Atlet harus kembali ke belakang 1m line.',
              children: [
                {
                  id: 'scoring-kapan-yellow',
                  name: 'Kapan YELLOW CARD?',
                  ref: 'Judge Guide - 6.3.1',
                  specs: 'a) Dua atlet melewati area 1m line bersamaan\nb) Atlet expose arrow point sebelum straddle shooting line\nc) Compound: melewati 1m line dengan release aid sudah nocked\nd) Menyilang 1m line sebelum countdown clock mulai'
                },
                {
                  id: 'scoring-prosedur-yellow',
                  name: 'PROSEDUR Yellow Card',
                  ref: 'Judge Guide - 6.3.1 & Book 3 - 19.3',
                  specs: '1. Judge segera angkat yellow card\n2. Panggil nama team dengan jelas\n3. Atlet kembali ke belakang 1m line & mulai ulang\n4. Jika tidak merespon → keep yellow raised & panggil ulang\n5. Keputusan yellow card final, tidak bisa di-appeal'
                },
                {
                  id: 'scoring-use-case-yellow',
                  name: 'USE CASE: 2 Atlet Bersamaan',
                  ref: 'Judge Guide - 6.3.1',
                  useCase: '⚠️ Dua atlet tim sama melewati 1m line bersamaan. Judge angkat yellow card dan panggil tim untuk kembali.'
                }
              ]
            },
            {
              id: 'scoring-red-card',
              name: 'RED CARD - Major Violations',
              ref: 'Judge Guide 6.3.2',
              useCase: '🟥 Major violation = team kehilangan arrow tertinggi di end (diubah jadi MISS).',
              children: [
                {
                  id: 'scoring-kapan-red',
                  name: 'Kapan RED CARD?',
                  ref: 'Judge Guide - 6.3.2',
                  specs: 'a) Mengabaikan yellow card\nb) Menembak sebelum/ setelah waktu\nc) Menembak di luar giliran\nd) Anggota tim menembak >1 arrow dalam satu half saat alternating'
                },
                {
                  id: 'scoring-prosedur-red',
                  name: 'PROSEDUR Red Card',
                  ref: 'Judge Guide - 6.3.2',
                  specs: '1. Angkat red card\n2. Tahan posisi tanpa intimidasi\n3. Tunjukkan kepada coach tim terkait\n4. Line Judge wajib ikut scoring end tersebut\n5. Coret arrow tertinggi → ubah M'
                },
                {
                  id: 'scoring-use-case-red',
                  name: 'USE CASE: Ignoring Yellow',
                  ref: 'Judge Guide - 6.3.2',
                  useCase: '🚨 Atlet tetap menembak tanpa kembali ke 1m line setelah yellow card. Judge angkat red card, tim kehilangan arrow tertinggi.'
                }
              ]
            }
          ]
        },
        {
          id: 'scoring-team-compound',
          name: '6.5 Team Compound: 4 Arrow di 1 Face',
          ref: 'Judge Guide - 6.2',
          useCase: 'Jika team compound memiliki 4 arrow di satu face, nilai tertinggi menjadi MISS.',
          children: [
            {
              id: 'scoring-prosedur-team-compound',
              name: 'PROSEDUR',
              ref: 'Judge Guide - 6.2',
              specs: '• Nilai tertinggi di face dengan 4 arrow → MISS\n• Ikuti prosedur seperti indoor triple face\n• Jika out of sequence saat alternating → red card + kehilangan arrow tertinggi'
            },
            {
              id: 'scoring-use-case-team-compound',
              name: 'USE CASE: Outdoor 7 Arrows',
              ref: 'Judge Guide - 6.2',
              useCase: '⚠️ Outdoor team: 4 arrow face A, 3 face B. Face A: 10-9-8-7 → 10 menjadi M. Jika ada pelanggaran sequence, terapkan penalti tambahan.'
            }
          ]
        },
        {
          id: 'scoring-wrong-target',
          name: '6.6 Arrow Wrong Target/Out of Zone',
          ref: 'Book 3 - 15.2.8',
          useCase: 'Arrow yang tidak mengenai scoring zone atau mengenai target lain tetap dihitung sebagai bagian dari end namun bernilai MISS.',
          children: [
            {
              id: 'scoring-use-case-salah-target',
              name: 'USE CASE: Salah Target',
              ref: 'Book 3 - 15.2.8 & 14.2.6.6',
              useCase: '⚠️ Atlet menembak ke target face tetangga. Arrow dihitung dalam end namun nilainya MISS (M).'
            }
          ]
        }
      ]
    },
    {
      id: 'scoring-judges',
      name: '7. TARGET JUDGE & LINE JUDGE',
      ref: 'Judge Guide - 5.4 & 5.5',
      color: 'bg-blue-50 border-blue-300',
      children: [
        {
          id: 'scoring-line-judge',
          name: '7.1 Line Judge Procedures',
          ref: 'Judge Guide - 5.4',
          children: [
            {
              id: 'scoring-posisi-tanggung-jawab-line',
              name: 'Posisi & Tanggung Jawab',
              ref: 'Judge Guide - 5.4',
              specs: '• Berdiri di belakang waiting line\n• Monitor dua match sekaligus\n• Pantau pelanggaran (yellow/red card)\n• Komunikasi dengan DOS & Target Judge\n• Jangan mengganggu fokus atlet'
            },
            {
              id: 'scoring-athlete-skip-arrow',
              name: 'Athlete May Skip Last Arrow',
              ref: 'Judge Guide - 5.4',
              useCase: 'Jika pemenang match jelas, atlet boleh skip arrow terakhir dengan inform line judge atau jabat tangan lawan. Arrow terakhir dicatat M.'
            },
            {
              id: 'scoring-use-case-athlete-quit',
              name: 'USE CASE: Athlete Quit Gracefully',
              ref: 'Judge Guide - 5.4',
              useCase: '✅ Skor 28-30, atlet kalah dengan 1 arrow tersisa dan langsung jabat tangan lawan. Line judge inform DOS, arrow terakhir = M.'
            }
          ]
        },
        {
          id: 'scoring-target-judge',
          name: '7.2 Target Judge (dengan Blind)',
          ref: 'Judge Guide - 5.5',
          children: [
            {
              id: 'scoring-pre-scoring-blind',
              name: 'Pre-Scoring di Blind',
              ref: 'Judge Guide - 5.5',
              specs: '• Satu target judge per match\n• Awasi scorer pre-scoring\n• Pastikan agents dapat melihat\n• Monitor perkembangan match\n• Antisipasi kemungkinan shoot-off'
            },
            {
              id: 'scoring-official-scoring-target',
              name: 'Official Scoring di Target',
              ref: 'Judge Guide - 5.5',
              specs: '1. Setelah 3 signal (semua arrow ditembak)\n2. Target judge menuju target (diikuti agent-scorer-agent)\n3. Berdiri di ujung target\n4. Scorer di tengah belakang target line\n5. Judge panggil nilai descending order\n6. Scorer checklist di scoresheet\n7. Judge cek kecocokan nilai\n8. Scorer konfirmasi via komunikasi lapangan\n9. Skor menjadi resmi'
            },
            {
              id: 'scoring-menentukan-pemenang',
              name: 'Menentukan Pemenang',
              ref: 'Judge Guide - 5.5',
              specs: '• Setelah scoring final selesai\n• Berdiri jelas jauh dari agent/crew\n• Angkat tangan ke arah pemenang selama 5 detik\n• Lakukan secepat mungkin meski announcer sudah umumkan'
            },
            {
              id: 'scoring-use-case-pre-score-vs-actual',
              name: 'USE CASE: Pre-score vs Actual',
              ref: 'Judge Guide - 5.5',
              useCase: '⚠️ Pre-scoring catat 10 namun arrow di target 9. Target judge wajib memanggil 9 dan scorer update scoresheet.'
            }
          ]
        },
        {
          id: 'scoring-shoot-off',
          name: '7.3 Shoot-Off Procedures',
          ref: 'Judge Guide - 5.5',
          children: [
            {
              id: 'scoring-first-shoot-off',
              name: '1st Shoot-Off Tie Score',
              ref: 'Judge Guide - 5.5',
              useCase: 'Jika shoot-off tie lagi, ukur jarak ke center. Terdekat ke center menjadi pemenang; jika sama, lakukan shoot-off ulang.'
            },
            {
              id: 'scoring-measuring-caliper',
              name: 'Measuring dengan Calliper',
              ref: 'Judge Guide - 5.5',
              useCase: 'Selalu gunakan inner dimension jaws (marked 2): satu jaw di center cross dan satu jaw di sisi arrow terdekat X.'
            },
            {
              id: 'scoring-use-case-closest',
              name: 'USE CASE: Closest to Center',
              ref: 'Judge Guide - 5.5',
              useCase: '✅ Shoot-off tie 10-10. Ukur: Atlet A 2.3 cm dari X, atlet B 1.8 cm → atlet B menang.'
            }
          ]
        }
      ]
    },
    {
      id: 'scoring-marking-target',
      name: '8. MARKING HOLES & TARGET MAINTENANCE',
      ref: 'Book 3 - 14.2.4 & Judge Guide - 4.21',
      color: 'bg-green-50 border-green-300',
      children: [
        {
          id: 'scoring-kewajiban-marking',
          name: '8.1 Kewajiban Marking',
          ref: 'Book 3 - 14.2.4',
          useCase: 'Semua lubang arrow di scoring zone wajib ditandai setiap kali arrow dinilai dan ditarik.',
          children: [
            {
              id: 'scoring-cara-marking',
              name: 'Cara Marking Benar',
              ref: 'Judge Guide - 4.21',
              specs: '• Garis pendek ≤5mm\n• Dua garis membentuk sudut siku\n• Hanya di scoring zone (122/80/60/40cm)\n• Lubang di luar scoring zone tidak dihitung'
            },
            {
              id: 'scoring-use-case-bold-marking',
              name: 'USE CASE: Bold Marking',
              ref: 'Judge Guide - 4.21',
              useCase: '⚠️ Atlet marking holes dengan garis tebal atau memperbesar lubang untuk aiming. Judge wajib ganti face dan memberi peringatan.'
            }
          ]
        },
        {
          id: 'scoring-peran-judge-marking',
          name: '8.2 Peran Judge dalam Marking',
          useCase: 'Marking bukan tanggung jawab judge kecuali kondisi khusus.',
          children: [
            {
              id: 'scoring-kapan-judge-mark',
              name: 'Kapan Judge Mark?',
              useCase: 'Judge melakukan marking saat mengevaluasi kondisi face, memeriksa garis pembagi, menemukan unmarked hole, dan memberikan edukasi.'
            }
          ]
        }
      ]
    },
    {
      id: 'scoring-appeals',
      name: '9. APPEALS & JURY OF APPEAL',
      ref: 'Book 3 - Chapter 19 & Judge Guide A.3',
      color: 'bg-purple-50 border-purple-300',
      children: [
        {
          id: 'scoring-keputusan-final',
          name: '9.1 Keputusan yang FINAL (Non-Appealable)',
          ref: 'Book 3 - 19.2 & 19.3',
          specs: '🚫 Tidak dapat diajukan banding: keputusan nilai arrow sebelum withdrawal, keputusan yellow card, scorecard yang sudah ditandatangani dan diterima, serta appeal yang terlambat.',
          children: [
            {
              id: 'scoring-arrow-value-final',
              name: 'Arrow Value Decision',
              ref: 'Book 3 - 19.2',
              useCase: 'Keputusan judge tentang nilai arrow sebelum arrow ditarik bersifat final.'
            },
            {
              id: 'scoring-yellow-card-final',
              name: 'Yellow Card Decision',
              ref: 'Book 3 - 19.3',
              useCase: 'Keputusan judge atas yellow card tidak dapat diappeal.'
            },
            {
              id: 'scoring-signed-scorecard-final',
              name: 'Signed Scorecard',
              ref: 'Book 3 - 14.4.1',
              useCase: 'Scorecard yang sudah ditandatangani dan diterima tidak dapat diappeal meski ada error.'
            },
            {
              id: 'scoring-late-appeal',
              name: 'Late Appeal',
              ref: 'Book 2 - 3.13.3.1',
              useCase: 'Notice of appeal yang terlambat tidak akan diproses.'
            },
            {
              id: 'scoring-use-case-appeal-arrow',
              name: 'USE CASE: Cannot Appeal Arrow Value',
              ref: 'Book 3 - 19.2',
              useCase: '⚠️ Judge memutuskan arrow = 9 dan arrow sudah ditarik. Atlet tidak bisa appeal ke Jury karena keputusan nilai final.'
            }
          ]
        },
        {
          id: 'scoring-appeal-procedure',
          name: '9.2 Appeal Procedures & Deadlines',
          ref: 'Book 2 - 3.13.3',
          children: [
            {
              id: 'scoring-notice-intent',
              name: 'Notice of Intent',
              ref: 'Book 2 - 3.13.3.1',
              useCase: 'Harus diberikan dalam 5 menit setelah end of round/match secara tertulis kepada Chairperson of Judges.'
            },
            {
              id: 'scoring-written-appeal',
              name: 'Written Appeal',
              ref: 'Book 2 - 3.13.3.2 & 3.13.4',
              useCase: 'Diajukan dalam 15 menit setelah round/match, sebaiknya menggunakan formulir resmi dan menyertakan fee.'
            },
            {
              id: 'scoring-use-case-late-appeal',
              name: 'USE CASE: Late Appeal',
              ref: 'Book 2 - 3.13.3.1',
              useCase: '⚠️ Atlet mengajukan notice 7 menit setelah match (melewati batas 5 menit). Appeal tidak diproses.'
            }
          ]
        },
        {
          id: 'scoring-jury-decision',
          name: '9.3 Jury Decision Making',
          ref: 'Judge Guide - A.3',
          useCase: 'Jury bertugas melindungi hak atlet, menerapkan rules secara fair, dan memilih opsi yang menguntungkan atlet jika ada keraguan.',
          children: [
            {
              id: 'scoring-prinsip-jury',
              name: 'Prinsip Jury',
              ref: 'Judge Guide - A.3',
              specs: '• Lindungi hak atlet\n• Terapkan rules secara adil\n• Ketidakpastian → berpihak pada atlet\n• Tidak boleh hapus poin tanpa otoritas rule book\n• Pertimbangkan seluruh fakta'
            },
            {
              id: 'scoring-jury-final',
              name: 'Jury Decision = FINAL',
              ref: 'Book 3 - 19.4 & Book 2 - 3.13.2',
              useCase: 'Keputusan Jury of Appeal bersifat final dan tidak dapat di-appeal.'
            },
            {
              id: 'scoring-chairperson-overrule',
              name: 'Chairperson Can Overrule',
              ref: 'Judge Guide - 4.18',
              useCase: 'Chairperson dapat mengoreksi keputusan judge yang terbukti keliru, kecuali pada isu non-appealable.'
            },
            {
              id: 'scoring-use-case-signed-wrong-card',
              name: 'USE CASE: Signed Wrong Card',
              ref: 'Judge Guide - A.3',
              useCase: '⚠️ Judge memanggil 10, scorer menulis 9, atlet menandatangani. Setelah complain, Jury menimbang fairness vs finality tetapi tanda tangan tetap mengikat.'
            }
          ]
        }
      ]
    },
    {
      id: 'scoring-special-situations',
      name: '10. SPECIAL SITUATIONS',
      ref: 'Various',
      color: 'bg-indigo-50 border-indigo-300',
      children: [
        {
          id: 'scoring-suspended-shooting',
          name: '10.1 Suspended Shooting',
          ref: 'Book 3 - 13.7',
          children: [
            {
              id: 'scoring-time-adjustment-individual',
              name: 'Time Adjustment Individual',
              ref: 'Book 3 - 13.7.1',
              useCase: 'Jika shooting dihentikan, berikan 30 detik per arrow (20 detik saat alternating) untuk arrow sisa.'
            },
            {
              id: 'scoring-time-adjustment-team',
              name: 'Time Adjustment Team',
              ref: 'Book 3 - 13.7.2',
              useCase: 'Jika waktu tersisa > (20 detik × arrow tersisa), lanjutkan dari waktu tersebut; jika tidak, berikan 20 detik per arrow.'
            },
            {
              id: 'scoring-use-case-weather',
              name: 'USE CASE: Weather Interruption',
              ref: 'Book 3 - 13.7.2',
              useCase: '⚠️ Team memiliki 3 arrow tersisa, clock 40 detik (butuh 60). Team mendapatkan 60 detik tambahan (20×3).'
            }
          ]
        },
        {
          id: 'scoring-equipment-failure',
          name: '10.2 Equipment Failure (Non-WR Events)',
          ref: 'Judge Guide - 4.12',
          children: [
            {
              id: 'scoring-legitimate-failures',
              name: 'Legitimate Failures',
              ref: 'Judge Guide - 4.12',
              specs: '• Broken strings/nocks\n• Loose sights\n• Damaged tabs\n• Shifted clickers\n• Hal-hal yang tidak bisa diprediksi atlet'
            },
            {
              id: 'scoring-prosedur-equipment-failure',
              name: 'PROSEDUR',
              ref: 'Judge Guide - 4.12',
              specs: '1. Atlet inform judge segera\n2. Judge verifikasi kerusakan\n3. Catat arrows tersisa & estimasi waktu perbaikan\n4. Inform DOS\n5. Make-up: max 2 end × 6 arrows outdoor atau 3 end × 3 arrows indoor\n6. Ditembak setelah distance selesai'
            }
          ]
        },
        {
          id: 'scoring-atlet-terlambat',
          name: '10.3 Athlete Arriving Late',
          ref: 'Book 3 - 15.2.1',
          useCase: 'Atlet yang terlambat forfeit arrow yang sudah ditembak kecuali keterlambatan di luar kontrol atlet.',
          children: [
            {
              id: 'scoring-use-case-traffic',
              name: 'USE CASE: Traffic Jam',
              ref: 'Book 3 - 15.2.1 & 13.8',
              useCase: '⚠️ Atlet terlambat karena kemacetan berat (di luar kontrol). Chairperson dapat mengizinkan tanpa forfeit.'
            }
          ]
        }
      ]
    }
  ]
};
