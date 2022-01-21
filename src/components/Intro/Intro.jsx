import MatrixBackground from "../../MatrixBackground/MatrixBackground"
import "./intro.scss"

const Intro = () => {
    return (
        
        <div className="intro" id="intro">
        <MatrixBackground/>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/me-removebg-preview.png" alt="full"></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                <span><h2>Hi, my name is</h2></span>
                <span><h1>Dmitry Frolow</h1></span>
                <span><h2>Frontend Developer</h2></span>
                </div>            
            </div>            
        </div>
        
    )
}

export default Intro
