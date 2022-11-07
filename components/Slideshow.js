import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slideshow = () => {
	//Array of Images  
	const images = [
        "/images/Banner-2-1311X400.png",
		"/images/image3.webp",
        "/images/image2.webp",
	];

	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		indicators: true,
		scale: 1.2,
		duration: 5000,
		transitionDuration: 500,
		infinite: true,
		 prevArrow:false, //(
		// 	<div className="hidden" style={{ width: "30px", marginRight: "-30px", cursor: "pointer" }}>
		// 		<svg
		// 			xmlns="http://www.w3.org/2000/svg"
		// 			viewBox="0 0 512 512"
		// 			fill="#2e2e2e"
		// 		>
		// 			<path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
		// 		</svg>
		// 	</div>
		// ),
		 nextArrow:false 
         //(
		// 	<div style={{ width: "30px", marginLeft: "-30px", cursor: "pointer" }}>
		// 		<svg
		// 			xmlns="http://www.w3.org/2000/svg"
		// 			viewBox="0 0 512 512"
		// 			fill="#2e2e2e"
		// 		>
		// 			<path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
		// 		</svg>
		// 	</div>
		// ),update slideshow
	};
	return (
		<div className="pt-[4rem]">
			<Zoom {...zoomInProperties}>
				{images.map((each, index) => (
					<div key={index} className="flex justify-center w-full h-full">
						<img
							className="w-full lg:h-[500px]  object-cover lg:object-fill  shadow-xl"
							src={each}
						/>
					</div>
				))}
			</Zoom>
		</div>
	);
};

export default Slideshow;