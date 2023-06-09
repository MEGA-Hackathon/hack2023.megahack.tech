import { Composition } from "atomic-layout";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
	padding: 0px 10%;
	text-align: center;
`;
const Header = styled.div`
	font-size: 68px;
	font-family: "Poppins";
	font-weight: 400;
	letter-spacing: 20px;

	margin-top: 0.5rem;
	margin-bottom: 0;

	@media (max-width: 768px) {
		font-size: 42px;
	}
`;
const Subheader = styled.div`
	font-size: 42px;
	font-family: "Poppins";
	font-weight: 200;

	margin-top: 1.5rem;
	margin-bottom: 0.5rem;

	@media (max-width: 768px) {
		font-size: 32px;
	}
`;
const EmbedYoutube = styled.iframe`
	border-radius: 20px;
	aspect-ratio: 605 / 340;
	@media (max-width: 768px) {
		width: 100%;
	}
`;
const GuestsContainer = styled.div`
	margin: 3rem 0;
`;

const WorkshopGridsLg = `Grid1 Grid2 Grid3`;
const WorkshopGrids = `
	Grid1
	Grid2
	Grid3
`;

export const Events = () => {
	return (
		<Container>
			<Header>EVENTS</Header>
			<Subheader>Opening Ceremony</Subheader>
			<EmbedYoutube
				width="60%"
				src="https://www.youtube.com/embed/m2CqgnospmQ"
				title="Opening Ceremony"
				allowfullscreen
			/>

			<Subheader>Guest Speakers</Subheader>
			<EmbedYoutube
				width="60%"
				src="https://www.youtube.com/embed/MtJf1waAC4E"
				title="Guest Speakers"
				allowfullscreen
			/>
			<GuestsContainer>
				<img
					src="https://media.discordapp.net/attachments/857650733233995776/1096546475355426928/Frame_1.png"
					width="100%"
				/>
			</GuestsContainer>

			<Subheader>Workshops</Subheader>
			<Composition areas={WorkshopGrids} areasLg={WorkshopGridsLg} gap={5}>
				{({ Grid1, Grid2, Grid3 }) => (
					<>
						<Grid1>
							<EmbedYoutube
								width="100%"
								src="https://www.youtube.com/embed/OusZxkDVEkw"
								title="Workshop 1"
								allowfullscreen
							/>
						</Grid1>
						<Grid2>
							<EmbedYoutube
								width="100%"
								src="https://www.youtube.com/embed/aGsgBEJc_Vs"
								title="Workshop 2"
								allowfullscreen
							/>
						</Grid2>
						<Grid3>
							<EmbedYoutube
								width="100%"
								src="https://www.youtube.com/embed/SYHUMH_hrfo"
								title="Workshop 3"
								allowfullscreen
							/>
						</Grid3>
					</>
				)}
			</Composition>
		</Container>
	);
};
