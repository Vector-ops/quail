import { Sparkle } from "@phosphor-icons/react";
import defaultBook from "../../assets/book-default.png";
import "./Carousel.scss";

import Carousel from "@itseasy21/react-elastic-carousel";
import { useEffect, useState } from "react";
import axios from "../../config/axiosConfig";

const CarouselComponent = () => {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const getCarouselBooks = async () => {
			const res = await axios.get("/api/books/carousel");
			setBooks(res.data);
			setLoading(false);
		};
		getCarouselBooks();
	}, []);

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

	const breakPoints = [
		{ width: 3000, itemsToShow: 6 },
		{ width: 1024, itemsToShow: 4 },
		{ width: 464, itemsToShow: 1 },
	];

	return (
		<>
			{loading ? (
				<div>Loading...</div>
			) : (
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
						// breakPoints={breakPoints}
						initialActiveIndex={0}
						initialFirstItem={0}
						autoPlaySpeed={6000}
					>
						{books.map((book) => (
							<div
								className="app__carousel-section-card"
								key={book.id}
								onClick={() =>
									(window.location.href = `/book/${book.id}`)
								}
							>
								<img
									src={book.image ? book.image : defaultBook}
									alt="book"
								/>
							</div>
						))}
					</Carousel>
				</div>
			)}
		</>
	);
};

export default CarouselComponent;
