import React from "react";
import img from "./../../../assets/perfil.jpg";

const Home = () => {
	return (
		<div>
			<h1>FABIÁN BLANCO WUEST</h1>
			<h2>FullStack Developer</h2>

			<img src={img}></img>

			<p>Argentina, Formosa | fabianblancowuest@gmail.com</p>
			<p>
				Full Stack Developer con formación en JavaScript, ReactJS, Node, Java,
				Express, Css, HTML, Postgre SQL y Sequelize, especializado en Front-end.
				Conocimientos en metodologías ágiles, GIT, UX, UI, estructura de datos,
				algoritmos. Experiencia en desarrollo de Front End y Back End /
				arquitectura de datos. Con actitud positiva, adaptabilidad, análisis de
				problemas y automotivación. Nivel de Inglés: Upper Intermediate.
			</p>
			<img></img>
		</div>
	);
};

export default Home;
