import { List, ListItem, ListItemButton, ListItemText, ListItemIcon, styled, Theme, CSSObject, Drawer as MuiDrawer} from '@mui/material'
import {
    CottageRounded as HomeIcon,
    AccountBalanceRounded as AccountBalanceIcon,
    CurrencyExchange as CurrencyExchangeIcon,
    DomainRounded as DomainRoundedIcon,
    CasinoRounded as CasinoRoundedIcon,
    DocumentScannerRounded as DocumentScannerRoundedIcon,
    SportsSoccer as RouletteIcon
} from '@mui/icons-material'
import { useEffect, useState } from 'react'

// const menuItems = ['Home', 'Staking', 'About', 'Coin Flip', 'Dice Game', 'Tower', 'Lucky Wheel', 'Docs']

const menuItems = [
    {name: "Home", element: <HomeIcon sx={{fontSize: "30px"}}/>, link: "/home"},
    {name: "Staking", element: <AccountBalanceIcon sx={{fontSize: "30px"}}/>, link: "/staking"},
    {name: "Coin Flip", element: <CurrencyExchangeIcon  sx={{fontSize: "30px"}}/>, link: "/coinflip"},
    {name: "Dice Game", element: <CasinoRoundedIcon sx={{fontSize: "30px"}}/>, link: "/dice"},
    {name: "Tower", element: <DomainRoundedIcon sx={{fontSize: "30px"}}/>, link: "/tower"},
    {name: "Roulette", element:<RouletteIcon  sx={{fontSize: "30px"}}/>, link: "/roulette"},
    {name: "Docs", element: <DocumentScannerRoundedIcon sx={{fontSize: "30px"}}/>, link: ""},
]

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  background: "linear-gradient(0deg, rgb(16, 28, 43), rgb(16, 28, 43)), linear-gradient(180.6deg, rgb(17, 25, 35) 0.46%, rgb(19, 33, 51) 99.43%), linear-gradient(rgb(0, 3, 6) 0%, rgb(1, 9, 18) 60.19%);",  
  width: drawerWidth,
  // transition: theme.transitions.create('width', {
  //   easing: theme.transitions.easing.sharp,
  //   duration: theme.transitions.duration.enteringScreen,
  // }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  background: "linear-gradient(0deg, rgb(16, 28, 43), rgb(16, 28, 43)), linear-gradient(180.6deg, rgb(17, 25, 35) 0.46%, rgb(19, 33, 51) 99.43%), linear-gradient(rgb(0, 3, 6) 0%, rgb(1, 9, 18) 60.19%);",
  // transition: theme.transitions.create('width', {
  //   easing: theme.transitions.easing.sharp,
  //   duration: theme.transitions.duration.leavingScreen,
  // }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      '& .MuiDrawer-paper' : {},
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );



export default function SideBar(){
    
    const [open, setOpen] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(()=>{
      let path = window.location.pathname
      for(let i=0; i<menuItems.length; i++){
        if(path===menuItems[i].link)
          setSelectedIndex(i)
      }
    },[])

    const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, idx: number) => {
        setSelectedIndex(idx)
        window.location.href = menuItems[idx].link
    }

    return <Drawer variant="permanent" open={open} onMouseOver={()=>{setOpen(true)}} onMouseLeave={()=>{setOpen(false)}}>
        <div style={{height: "80px"}}></div>
        <List sx={{paddingLeft: "8px"}}>
        {
            menuItems.map((item, idx)=>{
                return <ListItem key={idx} disablePadding sx={{display: 'block'}}>
                    <ListItemButton selected={selectedIndex===idx} 
                        sx={{
                            minHeight: 58,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                            fontFamily: "IndustryBold",
                            borderRadius: "8px 0 0 8px",
                            borderRight: selectedIndex===idx ? "2px solid rgb(79, 255, 139)" : "none",
                            background: selectedIndex===idx? "linear-gradient(90deg, rgba(79, 255, 139, 0.2) 0%, rgba(79, 255, 139, 0.05) 100%) !important" : "",
                            ":hover" : {
                                background: "linear-gradient(90deg, rgba(150, 168, 194, 0.2) 0%, rgba(150, 168, 194, 0.05) 100%);"
                            }
                        }}
                        onClick={(event)=>handleListItemClick(event, idx)}
                    >
                        <ListItemIcon sx={{minWidth: "50px", mr: open ? 3 : 'auto', justifyContent: 'center', color: selectedIndex===idx? "rgb(79, 255, 139)" : "rgb(150, 168, 194)", fontSize:"30px !important"}}>
                            {item.element}
                        </ListItemIcon>
                        <ListItemText primary={item.name} sx={{opacity: open ? 1 : 0, color: selectedIndex===idx? "rgb(79, 255, 139)" : "rgb(150, 168, 194)"}}></ListItemText>
                    </ListItemButton>
                </ListItem>
            })
        }
        </List>
    </Drawer>
}