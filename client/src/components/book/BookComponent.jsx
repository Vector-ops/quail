import defaultBook from "../../assets/book-default.png";
import Button from "../button/Button";
import "./BookComponent.scss";

const BookComponent = ({ data }) => {
	return (
		<div className="app__book">
			<div className="app__book-cover">
				<img
					src={data.image ? data.image : defaultBook}
					alt="book cover"
				/>
			</div>
			<div className="app__book-info">
				<div className="app__book-info-option">
					<div className="app__book-info-option-price">
						<p>&#8377;{data.BookPrice.sellingPrice}</p>
					</div>
					<Button
						type="button"
						variant="bookmark"
						handleClick={() => console.log("bookmark")}
					/>
				</div>
				<Button
					type="button"
					variant="cart"
					handleClick={() => console.log("cart")}
				/>
			</div>
		</div>
	);
};

export default BookComponent;
