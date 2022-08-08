import React from 'react'
import { toast } from 'react-toastify';
import { MdWifi, MdWifiOff } from 'react-icons/md';

    const myToadtId = "1ghff24hd67c"

    window.addEventListener('online',()=>{
        toast.dismiss(myToadtId)
        toast.success("Hurray! Back to online",{icon:<MdWifi/>,autoClose: 5000, position: "bottom-center",hideProgressBar: true,theme:'colored' })
        
    })
    window.addEventListener('offline',()=>{
        toast.error("Opps! Internet Disconnected",{ icon:<MdWifiOff/> ,toastId:myToadtId,autoClose: false, position: "bottom-center",hideProgressBar: true,theme:'colored'})
        
    })

