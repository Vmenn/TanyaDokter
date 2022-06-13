import { Check, Gembok, Setting, SignOut } from "../../assets";
import React,{ Component } from 'react'
export const DummyMenu =[
    {
        id:1,
        nama:'Profile Settings',
        desc:'Update profilemu',
        gambar:<Setting/>,
        halaman:'EditProfile'
    },
    {
        id:2,
        nama:'Change Password',
        desc:'Ubah passwordmu',
        gambar:<Gembok/>,
        halaman:'ChangePassword'
    },
    {
        id:3,
        nama:'History',
        desc:'Cek Pemesananmu',
        gambar:<Check/>,
        halaman:'History'
    },
    {
        id:4,
        nama:'SignOut',
        desc:'keluar',
        gambar:<SignOut/>,
        halaman:'Login'
    },
]