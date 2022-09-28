import { useState } from "react";

const Object = () => {

    let [mtr, setMtr] = useState({
        // Property
        merk : "KAWASIAKI",
        type : "ZX25R",
        warna : "Hitam",
        bahan_bakar : 3,
        harga : 200000000,
        plat : "Z 6790 HD",
        status : "OFF",

        // Method
        nyalakan : () => {
            console.log("Mesin di nyalakan");
            setMtr( data => {
                return{
                    ...data,
                    status : "ON",
                    bahan_bakar : data.bahan_bakar - .1,
                }
            })
        },

        matikan : () => {
            console.log("Mesin dimatikan !");
            setMtr( data => {
                return{
                    ...data,
                    status : "OFF"
                }
            })
        },

        isibensin : () => {
            console.log("Bensin Diisi !");
            setMtr( data => {
                return {
                    ...data,
                    bahan_bakar : data.bahan_bakar + 1,
                }
            })
        }
    })

    const motor = {
        // Property
        merk : "KAWASIAKI",
        type : "ZX25R",
        warna : "Hitam",
        bahan_bakar : "Bensi",
        harga : 200000000,
        plat : "Z 6790 HD",
        status : "OFF",

        // Method
        nyalakan : () => {
            console.log("Mesin di nyalakan");
            motor.status = "ON";
            console.log(motor);
        }
    }

    return(
        <div>
            <h1>MOTOR</h1>
            <ul>
                <li>Merk : {mtr.merk}</li>
                <li>Type : {mtr.type}</li>
                <li>Warna : {mtr.warna}</li>
                <li>Bahan Bakar : {mtr.bahan_bakar} L</li>
                <li>harga : {mtr.harga}</li>
                <li>plat : {mtr.plat}</li>
                <li>status : {mtr.status}</li>
            </ul>
            <button onClick={() => mtr.nyalakan()}>Nyalakan motor</button>
            <button onClick={() => mtr.matikan()}>Matikan motor</button>
            <button onClick={() => mtr.isibensin()}>Isi Bensin</button>
        </div>
    )
}

export default Object;