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
`;
const Subheader = styled.div`
	font-size: 42px;
	font-family: "Poppins";
	font-weight: 200;

	margin-top: 1.5rem;
	margin-bottom: 0.5rem;
`;
const EmbedYoutube = styled.iframe`
	border-radius: 20px;
`;
const GuestsContainer = styled.div`
	margin: 3rem 0;
`;

const WorkshopGridsLg = `Grid1 Grid2`;
const WorkshopGrids = `
	Grid1
	Grid2
`;

export const Events = () => {
	return (
		<Container>
			<Header>EVENTS</Header>
			<Subheader>Opening Ceremony</Subheader>
			<EmbedYoutube
				width="605"
				height="340"
				src="https://www.youtube.com/embed/m2CqgnospmQ"
				title="Opening Ceremony"
				allowfullscreen
			/>

			<Subheader>Guest Speakers</Subheader>
			<EmbedYoutube
				width="605"
				height="340"
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
			<Composition areas={WorkshopGrids} areasLg={WorkshopGridsLg} gap={0}>
				{({ Grid1, Grid2 }) => (
					<>
						<Grid1>
							<EmbedYoutube
								width="507"
								height="284"
								src="https://www.youtube.com/embed/OusZxkDVEkw"
								title="Workshop 1"
								allowfullscreen
							/>
						</Grid1>
						<Grid2>
							<EmbedYoutube
								width="507"
								height="284"
								src="https://www.youtube.com/embed/aGsgBEJc_Vs"
								title="Workshop 2"
								allowfullscreen
							/>
						</Grid2>
					</>
				)}
			</Composition>
		</Container>
	);
};
