import { Path } from "@phosphor-icons/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookDetail from "../components/bookDetail/BookDetail";
import Suggestion from "../components/suggestion/Suggestion";

const ProductDetail = () => {
	const { bookId } = useParams();

	const [book, setBook] = useState({});
	const [loading, setLoading] = useState(true);
	const [loadingSuggestions, setLoadingSuggestions] = useState(true);
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		setLoading(true);

		const fetchBook = async () => {
			try {
				const response = await axios.get(
					`http://localhost:3000/api/books/${bookId}`
				);
				if (!response.data) {
					throw new Error("Book not found");
				}
				setBook(response.data);
			} catch (error) {
				console.error("Error fetching book:", error);
			} finally {
				setLoading(false);
			}
		};

		if (bookId) {
			fetchBook();
		}
	}, [bookId]);

	useEffect(() => {
		if (book && !loading) {
			setLoadingSuggestions(true);

			const fetchSuggestions = async () => {
				try {
					const response = await axios.get(
						`http://localhost:3000/api/books/suggestions`,
						{
							params: {
								author: book.author,
								section: book.section.type,
								limit: 12,
								id: book.id,
							},
						}
					);

					if (!response.data) {
						throw new Error("Suggestions not found");
					}
					setSuggestions(response.data);
				} catch (error) {
					console.error("Error fetching suggestions:", error);
				} finally {
					setLoadingSuggestions(false);
				}
			};

			fetchSuggestions();
		}
	}, [book, loading]);

	return (
		<div className="app__product">
			{loading ? <h1>Loading...</h1> : <BookDetail data={book} />}

			<div className="app__product-viewmore">
				{loading ? (
					<p></p>
				) : (
					<div className="app__product-viewmore-title">
						<Path size={32} />
						<h3 className="title">View More</h3>
					</div>
				)}
				{loadingSuggestions ? (
					<h1 className="loading-suggestions">Loading...</h1>
				) : (
					<Suggestion data={suggestions} />
				)}
			</div>
		</div>
	);
};

export default ProductDetail;
