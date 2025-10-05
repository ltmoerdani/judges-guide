import type { EquipmentNode } from '@/types';

/**
 * Data Equipment Archery berdasarkan World Archery Rules dan Judge Guidebook
 * Struktur data lengkap dengan referensi yang valid dan use case praktis
 */
export const equipmentData: EquipmentNode = {
  id: 'equipment-master',
  name: 'ARCHERY EQUIPMENT MASTERY',
  subtitle: 'World Archery Rules Reference',
  color: 'bg-blue-50 border-blue-300',
  children: [
    {
      id: 'inspection',
      name: '⚠️ EQUIPMENT INSPECTION PROCEDURE',
      ref: 'Judge Guidebook Ch.3.7 & 4.4',
      color: 'bg-red-50 border-red-400',
      children: [
        {
          id: 'insp-timing',
          name: 'TIMING & LOCATION',
          ref: 'Judge Guidebook 3.7',
          useCase: 'Dilakukan saat official practice day, di target range',
          specs: 'Atlet dipanggil alphabetically by country, starting with "A"'
        },
        {
          id: 'insp-judges',
          name: 'JUDGE ALLOCATION',
          ref: 'Judge Guidebook 3.7.1',
          useCase: '3 Judges per division untuk inspection, judges lain untuk field control',
          specs: 'Harus familiar dengan rules & interpretations untuk setiap division'
        },
        {
          id: 'insp-recurve',
          name: 'RECURVE BOW INSPECTION',
          ref: 'Judge Guidebook p.25-26',
          color: 'bg-blue-50 border-blue-300',
          children: [
            {
              id: 'rec-hold',
              name: 'CARA MEMEGANG',
              useCase: 'Pegang bow dari LIMBS dekat riser, string menghadap judge',
              specs: 'JANGAN pegang grip - tangan judge bisa berkeringat/berminyak!'
            },
            {
              id: 'rec-brace',
              name: 'CHECK BRACE',
              ref: 'Book 3 - 11.1.1.2',
              useCase: 'Pastikan brace TIDAK consistently touching forearm/wrist',
              specs: 'Observe dari belakang saat official practice untuk angle yang tepat'
            },
            {
              id: 'rec-sight',
              name: 'CHECK SIGHT',
              ref: 'Book 3 - 11.1.5',
              useCase: 'Max 2cm horizontal dari atlet ke target (sight pin, hoods, tubes)',
              specs: 'Fibre optic pin & housing measured INDEPENDENTLY, masing-masing max 2cm'
            },
            {
              id: 'rec-rest',
              name: 'CHECK ARROW REST',
              ref: 'Book 3 - 11.1.3.1',
              useCase: 'Pressure point max 4cm dari pivot point (deepest part of handle)',
              specs: 'JANGAN touch items! Check hanya ONE audible signal untuk draw check'
            },
            {
              id: 'rec-string',
              name: 'CHECK STRING',
              ref: 'Book 3 - 11.1.2',
              useCase: 'Focus: additional sighting aids yang tidak diperbolehkan',
              specs: 'Items selain yang described di rule book = NOT ACCEPTED'
            },
            {
              id: 'rec-tab',
              name: 'CHECK TAB/GLOVE',
              ref: 'Book 3 - 11.1.8',
              useCase: 'Hati-hati saat touch - no sweat/grease! Check layers & construction',
              specs: 'Aware of tabs constructed untuk purposes beyond yang di-describe di rules'
            }
          ]
        },
        {
          id: 'insp-compound',
          name: 'COMPOUND BOW INSPECTION',
          ref: 'Judge Guidebook p.26',
          color: 'bg-green-50 border-green-300',
          children: [
            {
              id: 'comp-weight',
              name: 'PEAK DRAW WEIGHT CHECK',
              ref: 'Judge Guidebook p.26',
              useCase: 'Max 60lbs untuk semua classes, use spring scales atau electronic scales',
              specs: 'Tolerance max 1 pound. Compare all scales sebelum inspection, gunakan SATU scale saja'
            },
            {
              id: 'comp-procedure',
              name: 'DRAW WEIGHT PROCEDURE',
              useCase: 'Athlete yang draw bow SENDIRI, JANGAN judge yang draw',
              specs: 'Check: athlete tidak twisting scale saat draw (bisa salah indikasi). Record poundage!'
            },
            {
              id: 'comp-rest',
              name: 'CHECK ARROW REST',
              ref: 'Judge Guidebook p.26',
              useCase: 'Pressure point max 6cm behind pivot point',
              specs: 'Lebih longgar dari recurve (6cm vs 4cm)'
            },
            {
              id: 'comp-electronic',
              name: 'CHECK ELECTRONICS',
              ref: 'Book 3 - 11.2',
              useCase: 'NO electronics di bow, sight, arrow rest, atau release aid',
              specs: 'Compound unlimited kecuali 3 restrictions: 60lbs, no electronics, 6cm rest'
            },
            {
              id: 'comp-spot',
              name: 'SPOT CHECKS ESSENTIAL',
              ref: 'Judge Guidebook 4.4',
              useCase: 'Random spot checks SELAMA competition untuk prevent cheating',
              specs: 'Ada kasus bow over weight saat spot check! Inform di team managers meeting'
            }
          ]
        },
        {
          id: 'insp-barebow',
          name: 'BAREBOW INSPECTION',
          ref: 'Book 3 - 11.4.1 | Judge Guidebook',
          color: 'bg-amber-50 border-amber-300',
          children: [
            {
              id: 'bb-ring',
              name: '12.2CM RING TEST ⭕',
              ref: 'Book 3 - 11.4.1',
              useCase: 'CRITICAL: Unbraced bow + ALL accessories harus lewat ring Ø12.2cm ±0.5mm',
              specs: 'Ini mandatory test! Prepare ring/hole dengan exact diameter untuk inspection'
            },
            {
              id: 'bb-sight',
              name: 'CHECK NO SIGHTING AIDS',
              ref: 'Book 3 - 11.4.1',
              useCase: 'Bow harus BARE: no sight, sight marks, marks/blemishes untuk aiming',
              specs: 'Colored riser yang bisa untuk aiming harus di-tape over (11.4.1.1)'
            },
            {
              id: 'bb-string',
              name: 'CHECK STRING',
              ref: 'Book 3 - 11.4.2.1',
              useCase: 'NO lip/nose mark allowed (berbeda dari recurve!)',
              specs: 'String tidak boleh assist aiming: no peephole, no marking'
            },
            {
              id: 'bb-rest',
              name: 'CHECK ARROW REST',
              ref: 'Book 3 - 11.4.3.1',
              useCase: 'Pressure point max 2cm dari pivot point (lebih ketat dari recurve)',
              specs: 'Adjustable rest OK, pressure button OK'
            }
          ]
        },
        {
          id: 'insp-trad',
          name: 'TRADITIONAL INSPECTION',
          ref: 'Book 4 Ch.22.4 & 22.5',
          color: 'bg-purple-50 border-purple-300',
          children: [
            {
              id: 'trad-material',
              name: 'CHECK BOW MATERIAL',
              ref: 'Book 4 - 22.4.1',
              useCase: 'Wood/bamboo construction ATAU fiberglass/carbon dengan wood core',
              specs: 'Handle: wood atau wrapped, verify construction legitimacy'
            },
            {
              id: 'trad-string',
              name: 'CHECK STRING MATERIAL',
              ref: 'Book 4 - 22.4.2',
              useCase: 'Natural (linen, hemp, sinew) ATAU synthetic',
              specs: 'NO lip/nose mark! Similar to barebow'
            },
            {
              id: 'trad-finger',
              name: 'CHECK FINGER TECHNIQUE',
              ref: 'Book 4 - 22.5.7.1',
              useCase: 'Mediterranean loose OR fingers under nock - pilih SATU!',
              specs: 'NO anchor plate allowed, must be consistent throughout'
            },
            {
              id: 'trad-arrow',
              name: 'CHECK ARROWS',
              ref: 'Book 4 - 22.5.6',
              useCase: 'Wood/bamboo/fiberglass/carbon/aluminium OK',
              specs: 'Must have nama/initials, identical appearance, NO lighted nocks'
            }
          ]
        },
        {
          id: 'insp-during',
          name: 'RE-CHECKING DURING COMPETITION',
          ref: 'Judge Guidebook 4.4',
          color: 'bg-orange-50 border-orange-300',
          children: [
            {
              id: 'during-what',
              name: 'WHAT TO CHECK',
              useCase: 'Sound preventing items, spectacles compliance, bow brace usage, overdraw distance',
              specs: 'Compound draw weight spot-tests ESSENTIAL! Check dress code, advertising, team officials'
            },
            {
              id: 'during-procedure',
              name: 'PROCEDURE SAAT MENEMUKAN ILLEGAL EQUIPMENT',
              ref: 'Judge Guidebook 4.4',
              useCase: '1) Approach team manager/athlete, 2) Advise correction immediately',
              specs: 'Evaluate: type of equipment, conditions, how many ends shot'
            },
            {
              id: 'during-action',
              name: 'TINDAKAN',
              ref: 'Book 3 - 18.1.2',
              useCase: 'NO advantage = correction cukup. SIGNIFICANT advantage = disqualify scores',
              specs: 'MUST discuss with Chairperson before disqualification decision!'
            },
            {
              id: 'during-timing',
              name: 'TIMING OF CHECKS',
              useCase: 'Spot-tests TIDAK boleh interfere dengan efficient running atau off-putting athletes',
              specs: 'Balance antara fairness enforcement vs tournament flow'
            }
          ]
        },
        {
          id: 'insp-common',
          name: 'COMMON INSPECTION ITEMS (ALL DIVISIONS)',
          ref: 'Judge Guidebook & Books 3/4',
          children: [
            {
              id: 'com-arrows',
              name: 'ARROWS',
              ref: 'Book 3 - 11.1.7.1',
              useCase: 'Max Ø9.3mm shaft, Ø9.4mm point. Harus ada nama/initials',
              specs: 'All arrows IDENTICAL: same pattern & colour fletching, nocks, cresting'
            },
            {
              id: 'com-spectacles',
              name: 'SPECTACLES/GLASSES',
              ref: 'Book 3 - 11.1.9.3',
              useCase: 'NO micro-hole lenses, NO marking untuk assist aiming',
              specs: 'Prescription glasses, shooting spectacles, sunglasses OK if compliant'
            },
            {
              id: 'com-foot',
              name: 'FOOT DEVICES',
              ref: 'Book 3 - 11.1.10.1',
              useCase: 'Max 2cm past footprint of shoe, tidak ganggu athletes lain',
              specs: 'Check measurement & placement saat official practice'
            },
            {
              id: 'com-electronic',
              name: 'ELECTRONIC DEVICES',
              ref: 'Book 3 - 11.3.1',
              useCase: 'NO electronic/electrical devices attached to equipment',
              specs: 'Exception: fitness tracker untuk physiological data (not visually intrusive)'
            },
            {
              id: 'com-camo',
              name: 'CAMOUFLAGE CHECK',
              ref: 'Book 3 - 11.3.3',
              useCase: 'NO camouflage colours of any kind pada equipment',
              specs: 'Applies to ALL divisions - automatic violation'
            }
          ]
        },
        {
          id: 'insp-documentation',
          name: 'DOCUMENTATION & MARKING',
          ref: 'Judge Guidebook & Book 5',
          children: [
            {
              id: 'doc-list',
              name: 'COMPETITOR LIST',
              useCase: 'Obtain list by country, class, division dari Organizing Committee',
              specs: 'DOS calls countries alphabetically via PA system untuk control flow'
            },
            {
              id: 'doc-record',
              name: 'RECORD KEEPING',
              useCase: 'Record compound poundage during inspection, inform TM meeting',
              specs: 'Keep notes untuk reference selama competition, esp untuk spot checks'
            },
            {
              id: 'doc-marking',
              name: 'EQUIPMENT MARKING',
              ref: 'Book 5 - 33.19.2.4',
              useCase: 'Untuk special events: mark skis & bow dengan athlete number & colours',
              specs: 'Prevent unauthorized equipment change during competition'
            }
          ]
        }
      ]
    },
    {
      id: 'divisions',
      name: '4 DIVISI UTAMA',
      ref: 'Book 3 & 4',
      children: [
        {
          id: 'recurve',
          name: 'RECURVE DIVISION',
          ref: 'Book 3 Ch.11.1 | Book 4 Ch.22.1',
          color: 'bg-blue-50 border-blue-300',
          children: [
            {
              id: 'recurve-bow',
              name: 'BOW (Busur)',
              ref: 'Book 3 - 11.1.1',
              useCase: 'Busur non-shoot-through, handle/riser + 2 limbs fleksibel, satu string',
              specs: 'Multi-colour riser diperbolehkan (11.1.1.1), Brace tidak boleh menyentuh tangan (11.1.1.2)'
            },
            {
              id: 'recurve-string',
              name: 'BOWSTRING',
              ref: 'Book 3 - 11.1.2',
              useCase: 'String dengan serving di tengah untuk jari, nocking point, lip/nose mark (1 attachment)',
              specs: 'Multi-colour strands OK, Serving tidak boleh di vision saat full draw (11.1.2.1)'
            },
            {
              id: 'recurve-sight',
              name: 'BOW SIGHT',
              ref: 'Book 3 - 11.1.5',
              useCase: 'Alat bidik, TIDAK boleh ada prism/lensa/magnifying, hanya 1 sighting point',
              specs: 'Extension diperbolehkan (11.1.5.2), Tidak boleh electric/electronic (11.1.5.1)'
            },
            {
              id: 'recurve-stabilizer',
              name: 'STABILIZER',
              ref: 'Book 3 - 11.1.6',
              useCase: 'Penyeimbang busur, bisa multiple rods dengan dampers & weights',
              specs: 'Boleh menempel pada bow, tidak boleh sebagai string guide/face/ground contact (11.1.6.1)'
            },
            {
              id: 'recurve-arrow',
              name: 'ARROWS',
              ref: 'Book 3 - 11.1.7',
              useCase: 'Anak panah: shaft + point + nock + fletching + cresting',
              specs: 'Max Ø9.3mm shaft, Ø9.4mm point, harus ada nama/inisial, identik appearance (11.1.7.1)'
            },
            {
              id: 'recurve-tab',
              name: 'FINGER PROTECTION',
              ref: 'Book 3 - 11.1.8',
              useCase: 'Tab/glove untuk menarik string, anchor plate OK, separator OK',
              specs: 'Tidak boleh ada device untuk assist draw/release, tidak melewati wrist joint (11.1.8.1)'
            },
            {
              id: 'recurve-acc',
              name: 'ACCESSORIES',
              ref: 'Book 3 - 11.1.10',
              useCase: 'Arm guard, chest protector, bow sling, quiver, foot devices',
              specs: 'Foot device max 2cm dari footprint sepatu (11.1.10.1)'
            }
          ]
        },
        {
          id: 'compound',
          name: 'COMPOUND DIVISION',
          ref: 'Book 3 Ch.11.2',
          color: 'bg-green-50 border-green-300',
          children: [
            {
              id: 'comp-bow',
              name: 'COMPOUND BOW',
              ref: 'Book 3 - 11.2.1',
              useCase: 'Busur dengan sistem pulley/cam, bisa shoot-through riser',
              specs: 'Draw dimechanically varied, tidak boleh electric/electronic'
            },
            {
              id: 'comp-release',
              name: 'RELEASE AID',
              ref: 'Book 3 - 11.2.3',
              useCase: 'Alat pelepas string, bisa hand-held/wrist/arm attached',
              specs: 'Tidak boleh electric/electronic yang assist draw/aim/release (11.2.3.1)'
            },
            {
              id: 'comp-sight',
              name: 'BOW SIGHT',
              ref: 'Book 3 - 11.2.4',
              useCase: 'DIPERBOLEHKAN: magnifying lenses, levelling devices, prisms',
              specs: 'Bisa pakai scope dengan dot/ring/crosshair, multiple sighting points OK (11.2.4.1)'
            },
            {
              id: 'comp-peep',
              name: 'PEEP SIGHT',
              ref: 'Book 3 - 11.2.5',
              useCase: 'Clarifier/verifier di peep sight diperbolehkan',
              specs: 'Tidak boleh ada hood/tube yang extend ke mata'
            },
            {
              id: 'comp-arrow',
              name: 'ARROWS',
              ref: 'Book 3 - 11.2.6',
              useCase: 'Same as recurve specs',
              specs: 'Max Ø9.3mm shaft, Ø9.4mm point, harus identik (11.2.6.1)'
            }
          ]
        },
        {
          id: 'barebow',
          name: 'BAREBOW DIVISION',
          ref: 'Book 3 Ch.11.4 | Book 4 Ch.22.3',
          color: 'bg-amber-50 border-amber-300',
          children: [
            {
              id: 'bb-bow',
              name: 'BAREBOW (Busur Polos)',
              ref: 'Book 3 - 11.4.1',
              useCase: 'Busur TANPA sight, stabilizer, marking untuk aiming',
              specs: 'HARUS bisa lewat ring Ø12.2cm ±0.5mm (unbraced + accessories) (11.4.1)'
            },
            {
              id: 'bb-string',
              name: 'BOWSTRING',
              ref: 'Book 3 - 11.4.2',
              useCase: 'Multi-colour OK, serving + nocking point, TIDAK BOLEH lip/nose mark',
              specs: 'String tidak boleh assist aiming (no peephole/marking) (11.4.2.1)'
            },
            {
              id: 'bb-rest',
              name: 'ARROW REST',
              ref: 'Book 3 - 11.4.3',
              useCase: 'Adjustable rest OK, pressure button OK',
              specs: 'Pressure point max 2cm dari pivot point grip (11.4.3.1)'
            },
            {
              id: 'bb-technique',
              name: 'FACE & STRING WALKING',
              ref: 'Book 4 - 22.3.5',
              useCase: 'DIPERBOLEHKAN: menggunakan teknik face walking & string walking untuk aiming',
              specs: 'Tidak ada draw check device (22.3.4)'
            },
            {
              id: 'bb-nostab',
              name: 'NO STABILIZERS',
              ref: 'Book 4 - 22.3.6',
              useCase: 'DILARANG: stabilizer. BOLEH: vibration dampeners di riser/weight',
              specs: 'Dampener+weight harus lewat ring 12.2cm, limb dampeners OK (22.3.6.1)'
            }
          ]
        },
        {
          id: 'traditional',
          name: 'TRADITIONAL DIVISION',
          ref: 'Book 4 Ch.22.4 & 22.5',
          color: 'bg-purple-50 border-purple-300',
          children: [
            {
              id: 'trad-bow',
              name: 'TRADITIONAL BOW',
              ref: 'Book 4 - 22.4.1',
              useCase: 'Busur tradisional kayu, bamboo, atau fiberglass/carbon dengan wood core',
              specs: 'Bentuk: longbow/recurve/flatbow/reflex/hybrid, handle kayu/wrapped (22.4.1.1)'
            },
            {
              id: 'trad-string',
              name: 'BOWSTRING',
              ref: 'Book 4 - 22.4.2',
              useCase: 'Material alami (linen, hemp, sinew) ATAU synthetic, bisa multi-colour',
              specs: 'Centre serving + nocking point OK, TIDAK BOLEH lip/nose mark (22.4.2.1)'
            },
            {
              id: 'trad-rest',
              name: 'ARROW REST',
              ref: 'Book 4 - 22.4.3',
              useCase: 'Rest adjustable, pressure button OK untuk "off the shelf shooting"',
              specs: 'Pressure point max 2cm dari pivot point (22.4.3.1)'
            },
            {
              id: 'trad-finger',
              name: 'FINGER PROTECTION',
              ref: 'Book 4 - 22.5.7',
              useCase: 'Tab/glove/tape, Mediterranean loose ATAU fingers under nock',
              specs: 'Tidak boleh anchor plate, pilih 1 style & consistent (22.5.7.1)'
            },
            {
              id: 'trad-arrow',
              name: 'ARROWS',
              ref: 'Book 4 - 22.5.6',
              useCase: 'Kayu/bamboo/fiberglass/carbon/aluminium, natural/synthetic fletching',
              specs: 'Harus ada nama, identik appearance, no lighted nocks (22.5.6.1)'
            }
          ]
        }
      ]
    },
    {
      id: 'universal',
      name: 'UNIVERSAL RESTRICTIONS',
      ref: 'Book 3 Ch.11.3 | Book 4 Ch.22.6',
      color: 'bg-red-50 border-red-300',
      children: [
        {
          id: 'no-electric',
          name: 'DILARANG: Electronic Devices',
          ref: 'Book 3 - 11.3.1 | Book 4 - 22.6.1',
          useCase: 'Semua device electric/electronic pada equipment DILARANG',
          specs: 'Exception: fitness tracker/smartwatch untuk physiological data (11.3.2)'
        },
        {
          id: 'no-comm',
          name: 'DILARANG: Communication Devices',
          ref: 'Book 4 - 22.6.2',
          useCase: 'No electronic communication di World Ranking/Continental/World Championships',
          specs: 'Exception: medical monitoring dengan izin Medical Committee (22.6.2.1)'
        },
        {
          id: 'no-rangefinder',
          name: 'DILARANG: Range Finders',
          ref: 'Book 4 - 22.6.3',
          useCase: 'Tidak boleh alat estimasi jarak/sudut, memoranda elektronik',
          specs: 'Boleh bawa copy World Archery Rules (22.6.3)'
        },
        {
          id: 'no-camo',
          name: 'DILARANG: Camouflage',
          ref: 'Book 3 - 11.3.3',
          useCase: 'Equipment tidak boleh warna camouflage jenis apapun',
          specs: 'Berlaku untuk semua divisi'
        }
      ]
    },
    {
      id: 'accessories',
      name: 'COMMON ACCESSORIES',
      ref: 'Book 3 & 4',
      color: 'bg-gray-50 border-gray-300',
      children: [
        {
          id: 'acc-armguard',
          name: 'ARM GUARD',
          useCase: 'Melindungi lengan dari string',
          specs: 'Diperbolehkan semua divisi'
        },
        {
          id: 'acc-chest',
          name: 'CHEST PROTECTOR',
          useCase: 'Melindungi dada dari string, menjaga clothing clearance',
          specs: 'Diperbolehkan semua divisi'
        },
        {
          id: 'acc-sling',
          name: 'BOW SLING / FINGER SLING',
          useCase: 'Mencegah bow jatuh saat release',
          specs: 'Diperbolehkan semua divisi'
        },
        {
          id: 'acc-quiver',
          name: 'QUIVER',
          useCase: 'Tempat arrow: belt/back/hip/ground mounted',
          specs: 'TIDAK boleh attached ke bow (22.5.8.1)'
        },
        {
          id: 'acc-bino',
          name: 'BINOCULARS / SCOPE',
          ref: 'Book 3 - 11.1.9',
          useCase: 'Spotting arrows di target',
          specs: 'Max height: ketiak atlet (11.1.9.2), no micro-hole lenses (11.1.9.3)'
        },
        {
          id: 'acc-foot',
          name: 'FOOT DEVICES',
          ref: 'Book 3 - 11.1.10.1',
          useCase: 'Platform untuk kaki saat shooting',
          specs: 'Max 2cm dari footprint sepatu, tidak boleh ganggu atlet lain'
        }
      ]
    },
    {
      id: 'special',
      name: 'SPECIAL EQUIPMENT',
      color: 'bg-indigo-50 border-indigo-300',
      children: [
        {
          id: 'run-archery',
          name: 'RUN ARCHERY EQUIPMENT',
          ref: 'Book 5 Ch.34.1.2',
          useCase: 'Equipment untuk kombinasi lari & archery',
          specs: 'DILARANG: compound bow & release (34.1.2.1), Max 10cm protrusi dari bow (34.1.2.2)'
        },
        {
          id: 'run-carry',
          name: 'BOW CARRYING OPTIONS',
          ref: 'Book 5 - 34.1.2.3',
          useCase: '3 cara: by hand, back bow-quiver, harness system',
          specs: 'Harness: 2 shoulder straps, limb tidak melewati shoulder line (34.1.2.3.3)'
        },
        {
          id: 'flight',
          name: 'FLIGHT ARCHERY',
          ref: 'Book 5 Ch.1.2.1',
          useCase: 'Equipment khusus untuk jarak maksimal',
          specs: 'Bow sight max 5cm dari back face bow, full aluminium arrows only (1.2.1.8.1, 1.2.1.9)'
        }
      ]
    }
  ]
};