import Hero from "./Hero";
import Cardjurusan from "./Cardjurusan";
import jurusan1 from "./../assets/jurusan1.png";
import jurusan2 from "./../assets/jurusan2.jpg";
import jurusan3 from "./../assets/jurusan3.jpg";
import Cardkegiatan from "./Cardkegiatan";
import kegiatan1 from "./../assets/kegiatan1.jpg";
import kegiatan2 from "./../assets/kegiatan2.jpeg";
import kegiatan3 from "./../assets/kegiatan3.jpg";
import kegiatan4 from "./../assets/kegiatan4.jpg";
import kegiatan5 from "./../assets/kegiatan5.jpg";

const Maincontent = () => {
    return (
        <div>
            <Hero />

            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Jurusan Kuliah</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 mt-3 col-lg-4">
                        <Cardjurusan image={jurusan1} jurusan="teknik informatika"/>
                    </div>
                    <div className="col-12 mt-3 col-lg-4">
                        <Cardjurusan image={jurusan2} jurusan="sistem informasi"/>
                    </div>
                    <div className="col-12 mt-3 col-lg-4">
                        <Cardjurusan image={jurusan3} jurusan="otomotif"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Kegiatan</h1>
                    </div>
                    <div className="col-12 my-3">
                        <Cardkegiatan image={kegiatan1} title="Kunjungan Codepolitan"/>
                    </div>
                    <div className="col-12 my-3">
                        <Cardkegiatan image={kegiatan2} title="Bootcamp Teknik Informatika"/>
                    </div>
                    <div className="col-12 my-3">
                        <Cardkegiatan image={kegiatan5} title="Kegiatan Belajar Mengajar"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Maincontent;