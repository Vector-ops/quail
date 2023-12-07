import { X } from "@phosphor-icons/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookOpen from "../../assets/BookOpen.png";
import BookComponent from "../book/BookComponent";
import DropDown from "../dropdown/DropDown";
import SearchBar from "../searchBar/SearchBar";
import "./SearchComponent.scss";

const SearchComponent = ({ data, categories, bookmark }) => {
	const [loading, setLoading] = useState(false);
	const [books, setBooks] = useState([]);
	const [isSearch, setIsSearch] = useState(true);
	const navigate = useNavigate();

	let search = useParams().search;

	search = search === undefined ? "" : search;

	useEffect(() => {
		if (data && data.length > 0) {
			setBooks(data);
		}
	}, []);

	bookmark = bookmark === null ? false : bookmark;

	const filter = ["Price", "Rating", "Popularity"];

	const handleSearch = (text) => {
		if (text === "" || text === undefined) {
			return;
		}
		navigate(`/${bookmark ? "favourites" : "search"}/${text}`);
	};

	const clearSearch = () => {
		setIsSearch(false);
		if (bookmark) {
			window.location.href = `/favourites`;
		}
	};

	useEffect(() => {
		if (search === undefined || search === "") {
			return;
		}

		setLoading(true);
		const fetchResults = async () => {
			try {
				const response = await axios.get(
					`http://localhost:3000/api/books/${
						bookmark ? "bookmarks" : "search"
					}/${search}`,
					{
						withCredentials: true,
					}
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
				setIsSearch(true);
			}
		};
		fetchResults();
	}, [search]);

	return (
		<div className="app__search">
			<div className="app__search-bar">
				<SearchBar handleClick={handleSearch} />
				<X
					size={32}
					className="app__search-bar-clear"
					onClick={() => clearSearch()}
				/>
			</div>
			<div className="app__search-header">
				<h2 className="search-text">
					{isSearch && (
						<>
							Results "<span>{search}</span>"
						</>
					)}
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
						{bookmark ? (
							<h1>Favourites will appear here :) </h1>
						) : (
							<h1>Nothing was found :\</h1>
						)}
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
