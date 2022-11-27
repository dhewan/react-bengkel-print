import logo from "../../icon/LOGIN MENU/DESKTOP/logo.png"
import banner from "../../icon/LOGIN MENU/DESKTOP/BANNER.png"
import dtf from "../../icon/LOGIN MENU/DESKTOP/dtf.png"
import dtg from "../../icon/LOGIN MENU/DESKTOP/dtg.png"
import uv from "../../icon/LOGIN MENU/DESKTOP/uv.png"
import print from "../../icon/LOGIN MENU/DESKTOP/print.png"
import "./style.css"
function ColorSchemesExample() {
    function toDashboard() {
        window.location.href = "/dashboard"
    }
  return (

    
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid containerPd py-0" >
            <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav d-flex w-100 justify-content-between">
                <li>
                <a class="navbar-brand" href="#"><img src={logo}/></a>
                </li>
                <div class="d-flex">
                    <li class="nav-item">
                    <a class="nav-link " href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Fitur Bengkel</a>
                    </li>
                </div>
                <li class="nav-item">
                <a class="nav-link">Masuk/Daftar</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        <div className="section2">
            <div className="banner">
            <h4>
                    Cek Garanasi
                </h4>
                <p>Cari tau dengan mudah masa aktif garansi mesin riecat anda, riwayat service dan sparepart yang telah diganti</p>

            </div>
                <div class="boxForm">
                    <div className="d-flex flex-column formL">
                        <label>Serial Number</label>
                        <input placeholder="Contoh: ALFXXXXXX" className="mb-3" type="text" />
                        <label>E-Mail</label>
                        <input placeholder="Masukan email anda" className="mb-3" type="text" />
                    </div>
                    <div className="d-flex flex-column formR">
                    <label>Tipe Jenis Mesin</label>
                        <select name="" id="mesin">
                            <option value="" selected disabled>Pilih mesin</option>
                            <option value="DTF">DTF</option>
                            <option value="DTG">DTG</option>
                            <option value="UV">UV</option>
                        </select>
                        <button onClick={toDashboard} type="button" class="btn btn-primary">Cek sekarang!</button>
                    </div>
                </div>
        </div>
        <div className="section3">
            <p>Belum tau tempat</p>
            <p>serial mesin anda?<span><a href="">Lihat disini</a></span></p>
        </div>
        <div className="section4">
            <div className="s4r">
                <div>
                    <h3>Lindungi Mesin Anda!</h3>
                    <h5>After sales kami terbaik</h5>
                </div>
                <p>Aktifkan segera produk anda dan rasakan kenyamanan memiliki produk dari bengkel print. Serial yang terdaftar adalah mesin Riecat.</p>
                <div className="d-flex">
                    <div className="d-flex flex-column">
                        <img src={dtf} alt="" />
                        <label htmlFor="">Riecat DTF</label>
                    </div>
                    <div className="d-flex flex-column">
                        <img src={dtg} alt="" />
                        <label className="mt-1" htmlFor="">Riecat DTG</label>
                    </div>
                    <div className="d-flex flex-column">
                        <img src={uv} alt="" />
                        <label htmlFor="">Riecat UV</label>
                    </div>
                </div>
            </div>
            <div>
                <img className="printer" src={print} alt="" />
            </div>
        </div>
    </div>
  );
}

export default ColorSchemesExample;