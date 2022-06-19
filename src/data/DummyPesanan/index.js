import { Cairan, Darah, Diare, Gatel, Gigi, Magh, Paracetamol } from "../../assets";

export const DummyPesanan = [
    {
        id: 1,
        tanggalPemesanan: 'Jumat, 18 September 2020',
        status: 'keranjang',
        totalHarga: 500000,
        berat: 1,
        pesanans: [
            {
                id: 1,
                product: {
                    id: 1,
                    nama: 'Paracetamol',
                    gambar: Darah,
                    harga: 125000,
                    berat: 0.25,
                    jenis: 'Tablet',
                    ready: true,
                },
                jumlahPesan: 1,
                totalHarga: 125000,
                keterangan: null,
            },
            {
                id: 2,
                product: {
                    id: 2,
                    nama: 'Lambungku',
                    gambar: Magh,
                    harga: 125000,
                    berat: 0.25,
                    jenis: 'Tablet',
                    ready: true
                },
                jumlahPesan: 3,
                totalHarga: 375000,
            },{
                id: 3,
                product: {
                    id: 3,
                    nama: 'Paracetamol',
                    gambar: Darah,
                    harga: 125000,
                    berat: 0.25,
                    jenis: 'Tablet',
                    ready: true,
                },
                jumlahPesan: 1,
                totalHarga: 125000,
                keterangan: null,
            },
        ]
    },
    {
        id: 2,
        tanggalPemesanan: 'Minggu, 20 September 2020',
        status: 'lunas',
        totalHarga: 500000,
        berat: 1,
        pesanans: [
            {
                id: 1,
                product: {
                    id: 1,
                    nama: 'Paracetamol',
                    gambar: Cairan,
                    harga: 125000,
                    berat: 0.25,
                    jenis: 'Tablet',
                    ready: true,
                },
                jumlahPesan: 1,
                totalHarga: 125000,
                keterangan: null,
            },
            {
                id: 2,
                product: {
                    id: 2,
                    nama: 'Lambungku',
                    gambar: Magh,
                    harga: 125000,
                    berat: 0.25,
                    jenis: 'Tablet',
                    ready: true
                },
                jumlahPesan: 3,
                totalHarga: 375000,
            }
        ]
    },
    {
        id: 3,
        tanggalPemesanan: 'Jumat, 18 September 2020',
        status: 'keranjang',
        totalHarga: 500000,
        berat: 1,
        pesanans: [
            {
                id: 1,
                product: {
                    id: 1,
                    nama: 'Paracetamol',
                    gambar: Darah,
                    harga: 125000,
                    berat: 0.25,
                    jenis: 'Tablet',
                    ready: true,
                },
                jumlahPesan: 1,
                totalHarga: 125000,
                keterangan: null,
            },
            {
                id: 2,
                product: {
                    id: 2,
                    nama: 'Lambungku',
                    gambar: Magh,
                    harga: 125000,
                    berat: 0.25,
                    jenis: 'Tablet',
                    ready: true
                },
                jumlahPesan: 3,
                totalHarga: 375000,
            },{
                id: 3,
                product: {
                    id: 3,
                    nama: 'Paracetamol',
                    gambar: Darah,
                    harga: 125000,
                    berat: 0.25,
                    jenis: 'Tablet',
                    ready: true,
                },
                jumlahPesan: 1,
                totalHarga: 125000,
                keterangan: null,
            },
        ]
    },

]