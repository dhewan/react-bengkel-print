import "./style1.css"
import logo from "../../icon/DASHBOARD/DESKTOP/logo.png"
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import pc from "../../icon/DASHBOARD/DESKTOP/pc.png"
import cd from "../../icon/DASHBOARD/DESKTOP/cd.png"
import doc from "../../icon/DASHBOARD/DESKTOP/doc.png"
import infos from "../../icon/DASHBOARD/DESKTOP/infos.png"
import LineDemo from "../chart";
import print from "../../icon/DASHBOARD/DESKTOP/print.png"
import gen from "../../icon/DASHBOARD/DESKTOP/gen.png"
import vector from "../../icon/DASHBOARD/DESKTOP/Vector3.png"
import { FaArrowRight,FaCheckCircle } from 'react-icons/fa';
import centang from "../../icon/DASHBOARD/DESKTOP/Vector.png"
import Table from "../table";




export default function Dashboard (){


  
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid containerPd py-0" >
            <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav d-flex w-100 justify-content-between">
                <li>
                <a class="navbar-brand" href="#"><img src={logo}/></a>
                </li>
                <div class="d-flex">
                    <li class="nav-item">
                    <a class="nav-link black" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link black" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link black" href="#">Fitur Bengkel</a>
                    </li>
                </div>
                <li class="nav-item">
                <a class="nav-link black">Masuk/Daftar</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        <SideNav className="sidenav"
    onSelect={(selected) => {
        // Add your code here
    }}
>   
    <SideNav.Nav  defaultSelected="home">
        <NavItem  eventKey="home">
            <NavIcon>
            <img src={pc}/>
            </NavIcon>
        </NavItem>
        <NavItem  eventKey="">
            <NavIcon>
            <img src={cd}/>
            </NavIcon>
        </NavItem>
        <NavItem  eventKey="">
            <NavIcon>
            <img src={infos}/>
            </NavIcon>
        </NavItem>
        <NavItem  eventKey="">
            <NavIcon>
            <img src={doc}/>
            </NavIcon>
        </NavItem>
    </SideNav.Nav>
</SideNav>
    <div className="section1d">
        <div className="garansi">
            <p><FaCheckCircle className="green"/> Status Garanasi :</p> <p className="blue">Aktif</p>
        </div>
        <div className="seri">
            <p>Serial Number :</p>
        </div>
    </div>
    <div className="section2d">
        <div className="s2l">
                <LineDemo/>
        </div>
        <div className="s2r">
            <img className="gen" src={gen}></img>
            <img className="bckg" src={vector}></img>
            <img className="prnt" src={print}></img>
            <button  className="buttonD">Spesifikasi  < FaArrowRight/></button>
           
        </div>
    </div>
    <div className="section3d">
        <p className="bold1">Riwayat Pergantian</p>
        <Table  />
    </div>
        </>
        
    )
}