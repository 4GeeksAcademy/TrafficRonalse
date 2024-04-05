import React, { useEffect, useState } from "react";
import Styles from "/workspaces/TrafficRonalse/src/styles/index.css";
import Traffic from "./Traffic";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
			
	const [RedGlow, setRedGlow] = useState(true);
	const [YellowGlow, setYellowGlow] = useState(false);
	const [GreenGlow, setGreenGlow] = useState(false);

	const handleClick = (color)=> {
		setRedGlow(color === "red");
    	setYellowGlow(color === "yellow");
    	setGreenGlow(color === "green");                     
	}

	const ChangeAuto = () =>{
		if (RedGlow){
			handleClick("yellow")
		}else if (YellowGlow){
			handleClick("green")
		}else if (GreenGlow){
			handleClick("red" )
		}
	}
	useEffect ( ()=> {
		const interval = setTimeout(ChangeAuto, 1000);

		return ()=> clearInterval(interval);

	},[RedGlow, YellowGlow, GreenGlow] )



		
	return (
<>
		<div className="container bg-dark" style={{width : 80, height : 100}}></div>
			<div className="container bg-dark  ps-5" style={{width : 195, height : 320,}}>
				<Traffic handleClick={handleClick} color= "red" glow= {RedGlow} />
				<Traffic handleClick={handleClick} color="yellow" glow= {YellowGlow} />
				<Traffic handleClick={handleClick} color="green" glow={GreenGlow} />
		</div>


</>
)
};

export default Home;
