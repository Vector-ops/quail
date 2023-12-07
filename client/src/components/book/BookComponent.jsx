import axios from "axios";
import { Tooltip } from "react-tooltip";
import defaultBook from "../../assets/book-default.png";
import Button from "../button/Button";
import "./BookComponent.scss";

const BookComponent = ({ data }) => {
	const handleClick = () => {
		window.location.href = `/book/${data.id}`;
	};

	const toggleBookmark = async () => {
		try {
			const response = await axios.post(
				"http://localhost:3000/api/books/bookmarks",
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
				<h3
					data-tooltip-content={data.title}
					data-tooltip-place="top"
					data-tooltip-id={data.id}
				>
					{data.title}
				</h3>
				<Tooltip id={data.id} />
				<div className="app__book-info-option">
					<div className="app__book-info-option-price">
						<p>&#8377;{data.BookPrice.sellingPrice}</p>
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
					handleClick={() => console.log("cart")}
				/>
			</div>
		</div>
	);
};

export default BookComponent;
