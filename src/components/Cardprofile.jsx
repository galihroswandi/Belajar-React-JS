import '../css/style.css';
import acsent from "./../assets/acsent.png";
import profile from "./../assets/profile.jpg";
import styling from "./../css/Cardprofile.module.css";

const Cardprofile = () => {

    // variabel styling
    const wrapper = {
        backgroundColor : "#00B6DF",
        backgroundImage : `url(${acsent})`,
        backgroundPosition : "bottom right",
        backgroundRepeat : 'no-repeat',
        width : "100vw",
        height : "100vh",
        display : "flex",
        justifyContent : "center",
        alignItems : "center"
    }

    return (

        // 1. Inline Css
        <div style={wrapper}>

            {/* 2. CSS FILE */}
            <div className="card" style={{
                borderRadius : "2.5rem"
            }}>
                <img src={profile} alt="Galih Roswandi" />
                <div className="profesi">Frontend Developer</div>
                <div className="name">Galih Roswandi</div>
                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nulla quos dolor odit eos tempora dolores quidem provident eius ipsum.</div>
                <div className="button">
                    <button>Contact me</button>
                </div>
            </div>

            {/* 3. CSS MODULE */}
            <div className="card" style={{
                borderRadius : "2.5rem"
            }}>
                <img src={profile} alt="Galih Roswandi" />
                <div className="profesi">Frontend Developer</div>
                <div className="name">Galih Roswandi</div>
                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nulla quos dolor odit eos tempora dolores quidem provident eius ipsum.</div>
                <div className={styling.button}>
                    <button>Contact me</button>
                </div>
            </div>
        </div>
    )
}

export default Cardprofile;