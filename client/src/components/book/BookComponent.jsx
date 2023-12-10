import { Tooltip } from "react-tooltip";
import defaultBook from "../../assets/book-default.png";
import axios from "../../config/axiosConfig";
import Button from "../button/Button";
import "./BookComponent.scss";

const BookComponent = ({ data }) => {
	const handleClick = () => {
		window.location.href = `/book/${data.id}`;
	};

	const handleAddToCart = async () => {
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_APP_SERVER_URL}/api/books/cart`,
				{
					bookId: data.id,
				},
				{
					withCredentials: true,
				}
			);
			if (!response.data) {
				throw new Error("Error adding to cart");
			}
		} catch (error) {
			console.error("Error adding to cart:", error);
		}
	};

	const toggleBookmark = async () => {
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_APP_SERVER_URL}/api/books/bookmarks`,
				{
					bookId: data.id,
				},
				{
					withCredentials: true,
				}
			);
			if (!response.data) {
				throw new Error("Book not found");
			}
		} catch (error) {
			console.error("Error fetching book:", error);
		}
	};

	return (
		<div className="app__book">
			<div className="app__book-cover" onClick={handleClick}>
				<img
					src={data.image ? data.image : defaultBook}
					alt="book cover"
				/>
			</div>
			<div className="app__book-info">
				<div className="app__book-info-title-author">
					<h3
						data-tooltip-content={data.title}
						data-tooltip-place="top"
						data-tooltip-id={data.id}
					>
						{data.title}
					</h3>
					<p className="app__book-info-author">{data.author}</p>
					<Tooltip id={data.id} />
				</div>
				<div className="app__book-info-option">
					<div className="app__book-info-option-price">
						&#8377;{data.BookPrice.sellingPrice}
					</div>
					<Button
						type="button"
						variant="bookmark"
						handleClick={toggleBookmark}
					/>
				</div>
				<Button
					type="button"
					variant="cart"
					handleClick={handleAddToCart}
				/>
			</div>
		</div>
	);
};

export default BookComponent;
