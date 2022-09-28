import React from "react";

class Eventreact extends React.Component{

    constructor(){
        super();
        this.state = {
            nama : "Galih",
        }
    }

    kirimpesan(nama){
        alert(`kirim pesan kepada ${nama}`)
    }

    ubahTulisan(e){
        e.target.textContent = "Kirim Pesan";
    }

    returnTulisan(e){
        e.target.textContent = "Click Me";
    }

    sapa(e){
        this.setState({nama : e.target.value})
    }

    render(){
        return(
            <div>
                {/* <button onClick={()=> alert('Hello World !')}>Click Me</button> */}
                {/* <button onClick={this.kirimpesan.bind(this,'Galih')}>Kirim Pesan</button> */}
                {/* <button onClick={(e)=> this.kirimpesan('Galih', e)}>Kirim Pesan arrow</button> */}
                {/* <button onMouseEnter={(e)=>this.ubahTulisan(e)} onMouseOut={this.returnTulisan.bind(this)} onClick={this.kirimpesan.bind(this, "Galih")}>Click Me</button> */}

                <div style={{
                    marginInline : "5rem",
                    marginTop : "5rem"
                }}>
                    <h1>Hallo Nama Saya : {this.state.nama}</h1>
                    <input type={'text'} placeholder={'Masukan Nama'} onChange={this.sapa.bind(this)} />
                </div>
            </div>
        )
    }
}

export default Eventreact;