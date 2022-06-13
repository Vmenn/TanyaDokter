import { Dokter1, DokterUmum, Dokter2, DokterMata, Dokter3, DokterAnak, DokterJantung } from "../../assets";


export const DummyTopDokter =[ 
    {
        id : 1,
        gambar:Dokter1,
        nama : 'Drs.Muhamad Firmansyah',
        rate :'rating 4/5',
        wa:'081510828843',
        cate:{
            id:1,
            nama:'Dokter Anak',
            gambar:DokterAnak
        },
        status:true,
    },
    {
        id : 2,
        gambar:Dokter2,
        nama : 'Drs.Muhammad',
        rate :'rating 5/5',
        wa:'081510828843',
        cate:{
            id: 2,
            nama: 'Dokter Mata',
            gambar : DokterMata,
        },
        status:true,
    },
    {
        id : 3,
        gambar:Dokter3,
        nama : 'Drs.Firmansyah',
        rate :'rating 4/5',
        wa:'081510828843',
        cate:{
            id: 2,
            nama: 'Dokter Mata',
            gambar : DokterMata,
        },
        status:true,
    },
    {
        id : 4,
        gambar:Dokter1,
        nama : 'Drs.Dea Aulia',
        rate :'rating 1/5',
        wa:'081510828843',
        cate:{
            id: 2,
            nama: 'Dokter Jantung',
            gambar : DokterJantung,
        },
        status:true,
    },
        
]