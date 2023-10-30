import {Box, AppBar, Toolbar, Typography} from '@mui/material'
import LogoIMG from '../assets/images/logopng.png'
import { useEffect, useState } from 'react'

export default function Header(){
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    useEffect(()=>{
        function handleWindowResize(){
            setWindowSize(window.innerWidth)
        }
        window.addEventListener('resize', handleWindowResize)
        return ()=>{
            window.removeEventListener('resize',handleWindowResize)
        }
    },[])

    return <Box sx={{display: 'flex'}}>
        <AppBar component="nav" sx={{background: "linear-gradient(90deg, rgb(26, 42, 62) 0%, rgb(11, 20, 30) 100%)", zIndex: 10000}}>
            <Toolbar>
                <Typography variant='h4' component="div" sx={{flexGrow: 1, display: "flex", alignItems: "center", fontWeight: "bold", lineHeight: "44px", fontFamily: "IndustryBold", cursor: "pointer !important"}}>
                    <img src={LogoIMG} alt="logo" width="45px"/>&nbsp;{windowSize>580 ? "BLOHEROES":""}
                </Typography>
                <Box sx={{display: "block"}}>
                    <button className='btn-switch-chain'>Connect Wallet</button>
                </Box>
            </Toolbar>
        </AppBar>
    </Box>
}