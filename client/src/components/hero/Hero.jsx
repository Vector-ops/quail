import heroImage from "../../assets/Hero.png";
import Button from "../button/Button";
import "./Hero.scss";
import SearchBar from "../searchBar/SearchBar";

const Hero = () => {
	return (
		<div className="app__hero">
			<div className="app__hero-text">
				<h1>What book are you looking for?</h1>
				<p>Explore our catalog and find your next read</p>
				<SearchBar />
				<div className="app__hero-button">
					<Button variant="explore" />
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
