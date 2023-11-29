import {
	CaretDown,
	CaretLeft,
	CaretRight,
	CaretUp,
	Sparkle,
} from "@phosphor-icons/react";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import defaultBook from "../../assets/book-default.png";
import ArrowComponent from "../arrow/ArrowComponent";
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
			{/* <Carousel
				additionalTransfrom={0}
				arrows
				customLeftArrow={<ArrowComponent variant="left" />}
				customRightArrow={<ArrowComponent variant="right" />}
				centerMode={false}
				className="app__carousel-container"
				// containerClass="app__carousel-container"
				dotListClass=""
				draggable
				focusOnSelect={false}
				infinite={false}
				itemClass="app__carousel-component"
				keyBoardControl
				minimumTouchDrag={80}
				pauseOnHover
				partialVisible={false}
				renderArrowsWhenDisabled={false}
				renderButtonGroupOutside={false}
				renderDotsOutside={false}
				responsive={responsive}
				rewind
				rewindWithAnimation={false}
				rtl={false}
				shouldResetAutoplay
				showDots={false}
				sliderClass=""
				slidesToSlide={2}
				swipeable
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
			</Carousel> */}

			<Carousel
				className="app__carousel-component"
				itemsToShow={6}
				showArrows={false}
				enableAutoPlay={true}
				itemsToScroll={1}
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
