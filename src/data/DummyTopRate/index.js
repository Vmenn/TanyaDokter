import { Dokter1, DokterUmum, Dokter2, DokterMata, Dokter3, DokterAnak, DokterJantung } from "../../assets";


export const DummyTopDokter =[ 
    {
        id : 1,
        gambar:Dokter1,
        nama : 'Drs.Muhamad Firmansyah',
        rate :'rating 4/5',
        wa:'081510828843',
        about:'Lörem ipsum larar fadeplade diregt hang. Häs makrobel fast krislåda, sohyrtad. Operaism pasm smygöppna. Podat nehet att airbaghjälm och tristik. Prenat sogon, tyr men nitöliga.',
        dialy:'Senin - Jumat',
        jam:'10:00-03:30',
        cate:{
            id:1,
            nama:'Dokter Anak',
            gambar:DokterAnak
        },
        klinik:{
            id:1,
            nama:'Klinik Permata',
            alamat:'Ruko Permata Cibubur Blok.D-4 No.1, Jalan Cileungsi-Jonggol, Cileungsi Kidul, Kec. Cileungsi, Kabupaten Bogor, Jawa Barat 16820',
        },
        status:true,
    },
    {
        id : 2,
        gambar:Dokter2,
        nama : 'Drs.Muhammad',
        rate :'rating 5/5',
        wa:'081510828843',
        about:'Lörem ipsum larar fadeplade diregt hang. Häs makrobel fast krislåda, sohyrtad. Operaism pasm smygöppna. Podat nehet att airbaghjälm och tristik. Prenat sogon, tyr men nitöliga.',
        dialy:'Senin - Jumat',
        jam:'10:00-03:30',
        cate:{
            id: 2,
            nama: 'Dokter Mata',
            gambar : DokterMata,
        },
        klinik:{
            id:1,
            nama:'Klinik Permata',
            alamat:'Ruko Permata Cibubur Blok.D-4 No.1, Jalan Cileungsi-Jonggol, Cileungsi Kidul, Kec. Cileungsi, Kabupaten Bogor, Jawa Barat 16820',
        },
        status:true,
    },
    {
        id : 3,
        gambar:Dokter3,
        nama : 'Drs.Firmansyah',
        rate :'rating 4/5',
        wa:'081510828843',
        about:'Lörem ipsum larar fadeplade diregt hang. Häs makrobel fast krislåda, sohyrtad. Operaism pasm smygöppna. Podat nehet att airbaghjälm och tristik. Prenat sogon, tyr men nitöliga.',
        Dialy:'Senin - Jumat',
        jam :'10:00-03:30',
        cate:{
            id: 2,
            nama: 'Dokter Mata',
            gambar : DokterMata,
        },
        klinik:{
            id:1,
            nama:'Klinik Permata',
            alamat:'Ruko Permata Cibubur Blok.D-4 No.1, Jalan Cileungsi-Jonggol, Cileungsi Kidul, Kec. Cileungsi, Kabupaten Bogor, Jawa Barat 16820',
        },
        status:true,
    },
    {
        id : 4,
        gambar:Dokter1,
        nama : 'Drs.Dea Aulia',
        rate :'rating 1/5',
        wa:'081510828843',
        about:'Lörem ipsum larar fadeplade diregt hang. Häs makrobel fast krislåda, sohyrtad. Operaism pasm smygöppna. Podat nehet att airbaghjälm och tristik. Prenat sogon, tyr men nitöliga.',
        Dialy:'Senin - Jumat',
        jam :'10:00-03:30',
        cate:{
            id: 2,
            nama: 'Dokter Jantung',
            gambar : DokterJantung,
        },
        klinik:{
            id:1,
            nama:'Klinik Permata',
            alamat:'Ruko Permata Cibubur Blok.D-4 No.1, Jalan Cileungsi-Jonggol, Cileungsi Kidul, Kec. Cileungsi, Kabupaten Bogor, Jawa Barat 16820',
        },
        status:true,
    },
        
]