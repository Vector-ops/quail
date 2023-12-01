import { MinusCircle, PlusCircle } from "@phosphor-icons/react";
import { useState } from "react";
import defaultBook from "../../assets/book-default.png";
import Button from "../button/Button";
import "./BookDetail.scss";

const BookDetail = ({ data }) => {
	const [count, setCount] = useState(1);

	const increaseCount = () => {
		if (count < data.count) {
			setCount(count + 1);
		}
	};
	const decreaseCount = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};

	return (
		<div className="app__book-detail">
			<div className="app__book-detail-image img-shadow">
				{data?.image ? (
					<img src={data.image} alt={data.title} />
				) : (
					<img src={defaultBook} alt={data.title} />
				)}
			</div>
			<div className="app__book-detail-info">
				<div className="app__book-detail-title">
					<h1>{data.title}</h1>
					<Button variant="bookmark" type="button" />
				</div>
				<div className="app__book-detail-des">
					<p className="author">{data.author}</p>
					<p className="description">{data.description}</p>
				</div>
				<div className="app__book-detail-price-count">
					<p className="price">
						&#8377;{data.BookPrice.sellingPrice}
					</p>
					<div className="counter">
						<MinusCircle
							size={24}
							onClick={decreaseCount}
							className={count > 1 ? "" : "disabled"}
							style={{ cursor: "pointer" }}
						/>
						<p>{count}</p>
						<PlusCircle
							size={24}
							onClick={increaseCount}
							className={count < data.count ? "" : "disabled"}
							style={{ cursor: "pointer" }}
						/>
					</div>
				</div>
				<div className="app__book-detail-buttons">
					<Button
						variant="cart"
						type="button"
						width="15em"
						height="1.9em"
					/>
					<Button
						variant="inverse"
						type="button"
						width="15em"
						height="1.9em"
						text="Buy Now"
					/>
				</div>
			</div>
		</div>
	);
};

export default BookDetail;
