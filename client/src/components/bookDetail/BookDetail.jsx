import defaultBook from "../../assets/book-default.png";
import axios from "../../config/axiosConfig";
import Button from "../button/Button";
import Counter from "../counter/Counter";
import "./BookDetail.scss";

const BookDetail = ({ data }) => {
	const toggleAddToCart = async () => {
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
			toggleCartItem(data.id);
		} catch (error) {
			console.error("Error adding to cart:", error);
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
						&#8377;{data.BookPrice.sellingPrice.toFixed(2)}
					</p>

					<Counter data={data.count} />
				</div>
				<div className="app__book-detail-buttons">
					<Button
						variant="cart"
						type="button"
						width="15em"
						height="1.9em"
						handleClick={toggleAddToCart}
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
