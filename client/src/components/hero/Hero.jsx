import heroImage from "../../assets/Hero.png";
import Button from "../button/Button";
import SearchBar from "../searchBar/SearchBar";
import "./Hero.scss";

const Hero = () => {
	const handleClick = () => {
		window.location.href = `#explore`;
	};

	const handleSearch = (text) => {
		if (text === "") return;
		window.location.href = `/search/${text}`;
	};

	return (
		<div className="app__hero">
			<div className="app__hero-text">
				<h1>What book are you looking for?</h1>
				<p>Explore our catalog and find your next read</p>
				<SearchBar handleClick={handleSearch} loc="home" />
				<div className="app__hero-button">
					<Button variant="explore" handleClick={handleClick} />
					<div className="app__hero-line"></div>
				</div>
			</div>
			<div className="app__hero-image">
				<img src={heroImage} alt="image" />
			</div>
		</div>
	);
};

export default Hero;
