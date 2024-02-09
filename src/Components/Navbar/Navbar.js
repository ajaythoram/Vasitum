
import "..//Navbar/Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () =>{


    return(
        <div id="nav-bar">
                
                <div id="nav-left">
                 
                 <input type="search" placeholder="Search" />
                 <SearchIcon style={{color:"#8d8d8d"}} />
                </div>
                <div id="nav-right">
                     <NotificationsIcon  />
                     <ChatBubbleIcon />
                     <AccountCircleIcon />
                     <h5>Ajaythoram</h5>
                </div>
        </div>
    )
}      

export default Navbar;