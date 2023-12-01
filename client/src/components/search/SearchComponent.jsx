import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookOpen from "../../assets/BookOpen.png";
import BookComponent from "../book/BookComponent";
import DropDown from "../dropdown/DropDown";
import SearchBar from "../searchBar/SearchBar";
import "./SearchComponent.scss";

const SearchComponent = ({ data, categories }) => {
	const [loading, setLoading] = useState(false);
	const [books, setBooks] = useState([]);
	const navigate = useNavigate();

	const filter = ["Price", "Rating", "Popularity"];

	const handleSearch = (text) => {
		if (text === "") {
			return;
		}
		navigate(`/search/${text}`);
	};

	useEffect(() => {
		setLoading(true);
		const fetchResults = async () => {
			try {
				const response = await axios.get(
					`http://localhost:3000/api/books/search/${data}`
				);
				if (!response.data) {
					throw new Error("Search results not found");
				}
				setBooks(response.data);
			} catch (error) {
				console.error("Error fetching results:", error);
				setBooks([]);
			} finally {
				setLoading(false);
			}
		};
		fetchResults();
	}, [data]);

	return (
		<div className="app__search">
			<SearchBar handleClick={handleSearch} />
			<div className="app__search-header">
				<h2 className="search-text">
					Results "<span>{data}</span>"
				</h2>
				<div className="app__search-header-dropdown">
					<DropDown variant="category" list={categories} />
					<DropDown variant="filter" list={filter} />
				</div>
			</div>
			<div className="app__search-results">
				{loading ? (
					<h1>Loading...</h1>
				) : books.length === 0 ? (
					<div className="notFound-text">
						<img src={BookOpen} alt="Not Found" />
						<h1>Nothing was found :\</h1>
					</div>
				) : (
					books.map((book, index) => {
						return <BookComponent key={index} data={book} />;
					})
				)}
			</div>
		</div>
	);
};

export default SearchComponent;
