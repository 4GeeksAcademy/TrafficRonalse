import React, { useEffect, useState } from "react";
import Styles from "/workspaces/TrafficRonalse/src/styles/index.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
    const [Color, setColor] = useState("red");
    const [ActivePurple, setActivePurple] = useState(false);

    const AutomaticColor = () => {
        if (!ActivePurple) {
            if (Color === "red") {
                setColor("yellow");
            } else if (Color === "yellow") {
                setColor("green");
            } else if (Color === "green") {
                setColor("red");
            }
        } else {
            if (Color === "red") {
                setColor("yellow");
            } else if (Color === "yellow") {
                setColor("green");
            } else if (Color === "green") {
                setColor("purple");
            } else if (Color === "purple") {
                setColor("red");
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(AutomaticColor, 1000);
        return () => clearInterval(interval);
    }, [Color, ActivePurple]);

    const botonPurple = () => {
        setActivePurple(!ActivePurple);
    };

    const ManualColor = () => {
        if (!ActivePurple) {
            if (Color === "red") {
                setColor("yellow");
            } else if (Color === "yellow") {
                setColor("green");
            } else if (Color === "green") {
                setColor("red");
            }
        } else {
            if (Color === "red") {
                setColor("yellow");
            } else if (Color === "yellow") {
                setColor("green");
            } else if (Color === "green") {
                setColor("purple");
            } else if (Color === "purple") {
                setColor("red");
            }
        }
    };

    return (
        <div>
            <div className="container contenedorBarra"></div>
            <div className="container text-center">
                <div className="traffic-light">
                    <div onClick={() => setColor("red")} className={"light red" + ((Color === "red") ? " glow" : "")}></div>
                    <div onClick={() => setColor("yellow")} className={"light yellow mt-3" + ((Color === "yellow") ? " glow" : "")}></div>
                    <div onClick={() => setColor("green")} className={"light green mt-3" + ((Color === "green") ? " glow" : "")}></div>
                    {ActivePurple && <div className={"light purple mt-3" + ((Color === "purple") ? " glow" : "")}></div>}
                </div>
                <div>
                    <div className="contenedorBotones mt-4">
                        <div className="contenedorBotonCambiarColor">
                            <button onClick={ManualColor} className="btn btn-info">Cambiar de color</button>
                        </div>
                        <div className="contenedorBotonPurpura mt-3"></div>
                        <button onClick={botonPurple} className="btn btn-info">{ActivePurple ? "Quitar Color Purpura" : "Añadir Color Purpura"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
