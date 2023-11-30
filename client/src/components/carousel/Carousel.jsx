import { Sparkle } from "@phosphor-icons/react";
import "react-multi-carousel/lib/styles.css";
import defaultBook from "../../assets/book-default.png";
import "./Carousel.scss";

import Carousel from "@itseasy21/react-elastic-carousel";

const CarouselComponent = () => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 6,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 4,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<div className="app__carousel">
			<h1>Trending Books</h1>
			<p>
				<Sparkle size={16} />
				Drag to explore
			</p>
			<Carousel
				className="app__carousel-component"
				itemsToShow={6}
				showArrows={false}
				enableAutoPlay={true}
				itemsToScroll={1}
				easing="ease-in-out"
				focusOnSelect={true}
				breakPoints={responsive}
				initialActiveIndex={0}
				initialFirstItem={0}
				autoPlaySpeed={3000}
			>
				<div className="app__carousel-section-card">
					<img src={defaultBook} alt="book" />
				</div>
				<div className="app__carousel-section-card">
					<img src={defaultBook} alt="book" />
				</div>
				<div className="app__carousel-section-card">
					<img src={defaultBook} alt="book" />
				</div>
				<div className="app__carousel-section-card">
					<img src={defaultBook} alt="book" />
				</div>
				<div className="app__carousel-section-card">
					<img src={defaultBook} alt="book" />
				</div>
				<div className="app__carousel-section-card">
					<img src={defaultBook} alt="book" />
				</div>
				<div className="app__carousel-section-card">
					<img src={defaultBook} alt="book" />
				</div>
				<div className="app__carousel-section-card">
					<img src={defaultBook} alt="book" />
				</div>
				<div className="app__carousel-section-card">
					<img src={defaultBook} alt="book" />
				</div>
			</Carousel>
		</div>
	);
};

export default CarouselComponent;
