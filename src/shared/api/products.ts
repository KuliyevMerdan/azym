const getData = () => {
    const data = [
        {
            "id": 1,
            "title": "Tor kabeli üçin UGREEN NW110 birleşdirijisi (kategoriýa 5e / 100 sany)",
            "description": "kategoriýa : 5e Material : plastmassa Reňk : aýdyň Ýurdy : Hytaý Öndürilen ýeri : Hytaý",
            "price": 67,
            "images": ""
        },
        {
            "id": 2,
            "title": "Tor kabeli TENCIA UTP ( 305 metr / kategoriýa 6 / Kabeliñ görnüşi UTP/ Alýumin kesimi 0,55 mm / Reñki ak)",
            "description": "Kabeliñ görnüşi: UTP Kabeliň uzynlygy: 305 metr Kategoriýa: 6 Kesimi: 0.55 mm Material: Alýumin Reňkli: gök (firuzeli) Ýurdy: Hytaý Öndürilen ýeri: Hytaý",
            "price": 594,
            "images": ""
        },
        {
            "id": 3,
            "title": "Tor kabeli UGREEN NW149 ( Uzynlygy 2 metr/ Kategoriýasy 7/ Kabeliñ görnüşi UTP/ Zawod gysym)",
            "description": "",
            "price": 594,
            "images": ""
        },
        {
            "id": 4,
            "title": "Optiki kabel UGREEN NW131 ( Birikdiriji görnüşi SC-SC / ýekeleýin režim)",
            "description": "Görnüşi: Optiki kabel (SC-SC) Uzynlygy: 3 metr Zawod gysymy: bar Reñki: Sary Ýurdy: Hytaý Öndürilen ýeri: Hytaý",
            "price": 25,
            "images": ""
        },
        {
            "id": 5,
            "title": "Tor kabeli UGREEN NW121",
            "description": "Görnüşi: SFTP Uzynlygy: 2 metr Zawod gysymy: bar Kategoriýasy: 8 Reñki: Gara Material: Mis Kesimi: 0.45 Ýurdy: Hytaý Öndürilen ýeri: Hytaý",
            "price": 57,
            "images": ""
        },
        {
            "id": 6,
            "title": "Optiki Kabel UGREEN NW130",
            "description": "Görnüşi: Optiki kabel (LC-LC) Uzynlygy: 3 metr, Zawod gysymy: bar, Reñki: Sary, Ýurdy: Hytaý, Öndürilen ýeri: Hytaý",
            "price": 25,
            "images": ""
        },
        {
            "id": 7,
            "title": "Tor Kabeli UGREEN NW199 UTP",
            "description": "Görnüşi: UTP, Uzynlygy: 305 metr, Kategoriýasy: 6, Reñki: Çal, Material: Mis, Kesimi: 0.57, Ýurdy: Hytaý, Öndürilen ýeri: Hytaý",
            "price": 2376,
            "images": ""
        },
        {
            "id": 8,
            "title": "Modul birleşdiriji UGREEN NW186 KEYSTONE JACK",
            "description": "Kategoriýasy: 6, Material: Plastmas, Reñki: ak, Ýurdy: Hytaý, Öndürilen ýeri: Hytaý",
            "price": 25,
            "images": ""
        },
        {
            "id": 9,
            "title": "Tor Kabeli TENCIA SFTP",
            "description": "Kabeliñ görnüşi: SFTP, Kabeliň uzynlygy: 305 metr, Kategoriýa: 6, Kesimi: 0.55 mm, Material: Alýumin, Reňkli: gara, Ýurdy: Hytaý, Öndürilen ýeri: Hytaý",
            "price": 1108,
            "images": ""
        },
        {
            "id": 10,
            "title": "Konwerter UGREEN CR111 RJ45 USB (tor kartasy)",
            "description": "Baglanşygyñ görnüşi: USB - RJ-45, Tapawutly aýratynlyklary: 1 Gigabit tizlik, Reñki : ak, Garantiýa: 1 aý, Ýurdy: Hytaý, Öndürilen ýeri: Hytaý",
            "price": 217,
            "images": ""
        },
        {
            "id": 11,
            "title": "Splitter RJ45 UGREEN CM210 (2 portdan 1 porta geçiş)",
            "description": "Görnüşi: Dolandyrylmaýan, Maglumat geçirişiñ görnüşi: 10 / 100 / 1000, LAN portlaryñ sany: 3, POE goldawy: Ýok, Garantiýa: Ýok, Reňkli: Gara, Ýurdy: Hytaý, Öndürilen ýeri: Hytaý",
            "price": 63,
            "images": ""
        },
        {
            "id": 12,
            "title": "Swiç D-LINK (8 portly / 4 porty POE/ 1 Gigabit)",
            "description": "Görnüşi: Dolandyrylmaýan, Maglumat geçirişiñ görnüşi: 10 / 100 mbit/s, Umumy geçiriş ukyby: 16 Gbit/s, LAN portlaryñ sany: 8, POE goldawy: Bar, Garantiýa: 1 aý, Reňki: Gara, Ýurdy: Taýwan, Öndürilen ýeri: Hytaý",
            "price": 990,
            "images": ""
        },
        {
            "id": 13,
            "title": "Swiç TP-LINK LS 1005 ( 5 portly / 100 Megabit)",
            "description": "Görnüşi: Dolandyrylmaýan, Maglumat geçirişiñ görnüşi: 10 / 100 mbit/s, Umumy geçiriş ukyby: 1 Gbit/s, LAN portlaryñ sany: 5, POE goldawy: Ýok, Garantiýa: 1 aý, Reňki: Ak, Ýurdy: Hytaý, Öndürilen ýeri: Hytaý",
            "price": 138,
            "images": ""
        },
        {
            "id": 14,
            "title": "Tor Kabeliñ birikdirijisi UGREEN NW114 (RJ45)",
            "description": "Baglanşygyñ görnüşi: LAN - LAN, Reñki : Gara, Garantiýa: Ýok, Ýurdy: Hytaý, Öndürilen ýeri: Hytaý",
            "price": 19,
            "images": ""
        },
        {
            "id": 15,
            "title": "Swiç TENDA SG-108 (8 port / 1 Gigabit)",
            "description": "Görnüşi: Dolandyrylmaýan, Maglumat geçirişiñ görnüşi: 10 / 100 / 1000 mbit/s, Umumy geçiriş ukyby: 16 Gbit/s, LAN portlaryñ sany: 8, POE goldawy: Ýok, Garantiýa: 1 aý, Reňki: Gara, Ýurdy: Hytaý, Öndürilen ýeri: Hytaý",
            "price": 277,
            "images": ""
        },
        {
            "id": 16,
            "title": "UGREEN NW144 tor rozetkasy üçin ( Komplekt 5 sany)",
            "description": "Görnüşi: Tor rozetkasy uçin ramkalar, Reñki: ak, Garantiýa: Ýok, Ýurdy: Hytaý, Öndürilen ýeri: Hytaý",
            "price": 71,
            "images": ""
        },
        {
            "id": 17,
            "title": "Swiç TP-LINK TL-SG1008D (8 portly / 1 Gigabit)",
            "description": "Görnüşi: Dolandyrylmaýan, Maglumat geçirişiñ görnüşi: 10 / 100 / 1000 mbit/s, Umumy geçiriş ukyby: 16 Gbit/s, LAN portlaryñ sany: 8, POE goldawy: Ýok, Garantiýa: 1 aý, Reňki: Gara, Ýurdy: Hytaý, Öndürilen ýeri: Hytaý",
            "price": 316,
            "images": ""
        },
        {
            "id": 18,
            "title": "Mediakonwerter HTB GS-03-25KM ( Öptikisüýümden RJ45 / Aralygy 25 km çenli)",
            "description": "Görnüşi: Mediakonwerter Öptikisüýümden RJ45, Sany: 2, Material: Demir, Reñki: Çal, Garantiýa: 1 aý, Ýurdy: Hytaý, Öndürilen ýeri: Hytaý",
            "price": 554,
            "images": ""
        },
        {
            "id": 19,
            "title": "Router XIAOMI AX3200 RB01",
            "description": "Birikmäniñ görnüşi: WAN, Wi-Fi Standartlary: Wi-Fi 6 (802.11ax), Ýygylyk aralygy: 2.4 GGs / 5 GGs, LAN portlaryñ sany: 4 (1 WAN), Antenalaryñ görnüşi: Daşky, Antenalaryñ sany: 6, LAN arkaly geçiriş tizligi: 100 mbit/s, Wi-FI arkaly geçiriş tizligi: 3202 mbit/s, Aýratynlyklary: Mesh goldawy, Garantiýa: 1 aý, Reňki: Gara, Ýurdy: Hytaý, Öndürilen ýeri: Hytaý",
            "price": 990,
            "images": ""
        },
        {
            "id": 20,
            "title": "Router TP-LINK ARCHER AX10",
            "description": "Birikmäniñ görnüşi: WAN, Wi-Fi Standartlary: Wi-Fi 6 (802.11ax), Ýygylyk aralygy: 2.4 GGs / 5 GGs, LAN portlaryñ sany: 4, Antenalaryñ görnüşi: Daşky, Antenalaryñ sany: 4, LAN arkaly geçiriş tizligi: 1 Gbit/s, Wi-FI arkaly geçiriş tizligi: 1201 mbit/s, Garantiýa: 1 aý, Reňki: Gara, Ýurdy: Hytaý, Öndürilen ýeri: Hytaý",
            "price": 1326,
            "images": ""
        },
        {
            "id": 21,
            "title": "Router Mercusys MW300D",
            "description": "Birikmäniñ görnüşi: ADSL, Wi-Fi Standartlary: Wi-Fi 4 (802.11n), Ýygylyk aralygy: 2.4 GGs, LAN portlaryñ sany: 3, USB portlary: Ýok, Antenalaryñ görnüşi: Daşky, Antenalaryñ sany: 2, LAN arkaly geçiriş tizligi: 100 mbit/s, Wi-FI arkaly geçiriş tizligi: 300 mbit/s, Garantiýa: 1 aý, Reňki: Ak, Ýurdy: Hytaý, Öndürilen ýeri: Hytaý",
            "price": 356,
            "images": ""
        },
        {
            "id": 22,
            "title": "Tor Adapter UGREEN US230 (PCI-E interfeýs)",
            "description": "Wi-Fi signalyñ güýçlendirmesi / paýlamagy: Bar, LAN signalyñ paýlamagy: Bar, LAN signalyñ kabul etmegi: Ýok, Wi-Fi Standartlary: Wi-Fi 4 (802.11n), Ýygylyk aralygy: 2.4 GGs, Antenalaryñ görnüşi: Içki, Antenalaryñ sany: 2, Wi-FI arkaly geçiriş tizligi: 300 mbit/s, Garantiýa: 1 aý, Reňki: Ak, Ýurdy: Hytaý, Öndürilen ýeri: Hytaý",
            "price": 346,
            "images": ""
        },
        {
            "id": 23,
            "title": "Tor kabelleri barlaýjy enjam UGREEN NW167 ( RJ-45 kabeli barlamak)",
            "description": "Adapteryñ görnüşi: PCI-E, LAN arkaly geçiriş tizligi: 1 Gbit/s, Garantiýa: 1 aý, Ýurdy: Hytaý, Öndürilen ýeri: Hytaý",
            "price": 138,
            "images": ""
        },
        {
            "id": 24,
            "title": "Simsyz toruñ güýçlendirijisi TENDA A9 N300",
            "description": "Nazaryýeti: Tor kabelleri barlamak, Reñki: Ýaşyl, Garantiýa: Ýok, Ýurdy: Hytaý, Öndürilen ýeri: Hytaý",
            "price": 132,
            "images": ""
        },
    ]
    return data as []
}


export default getData;