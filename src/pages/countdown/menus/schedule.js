import { Composition } from "atomic-layout";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
	padding: 0px 12%;
`;

const Header = styled.div`
	font-size: 68px;
	font-family: "Poppins";
	font-weight: 400;
	letter-spacing: 20px;
	text-align: center;

	margin-top: 2rem;
	margin-bottom: 3rem;
`;

const Subheader = styled.div`
	color: #68666f;
	font-size: 25px;
	font-family: "Poppins";
	font-weight: 600;
`;
const Paragraph = styled.div`
	color: #68666f;
	font-size: 16px;
	font-family: "Poppins";
	font-weight: 400;
`;

const areas = `Fri Sat Sun`;

export const Schedule = () => {
	return (
		<Container>
			<Header>SCHEDULE</Header>
			<Composition areas={areas}>
				{({ Fri, Sat, Sun }) => (
					<>
						<Fri>
							<Subheader>Friday</Subheader>
							<Paragraph>
								<br />
								<b>5:00-5:30 p.m.</b>
								<p>[Opening Ceremony] Conducted by Agni </p>
							</Paragraph>
							<Paragraph>
								<br />
								<b>5:30-5:40 p.m.</b>
								<p>[HyperEx Tutorial], Conducted by Daniel Achacon </p>
							</Paragraph>
							<Paragraph>
								<br />
								<b>6:00-6:30 p.m.</b>
								<p>[Rahul Desai, General Manager at Sylva] Moderated by Daniel Achacon</p>
							</Paragraph>
							<Paragraph>
								<br />
								<b>6:30-7:00 p.m.</b>
								<p>[Avi Patel, CEO of Nitrility] Moderated by Chul</p>
							</Paragraph>
							<Paragraph>
								<br />
								<b>7:00-7:30 p.m.</b>
								<p>[Brian Whaley VP at American Express] Moderated by Agni</p>
							</Paragraph>
							<Paragraph>
								<br />
								<b>7:30-8:00 p.m.</b>
								<p>[Chetan Zanwar Product Lead at Tiktok] Moderated by Jason Xu</p>
							</Paragraph>
							<Paragraph>
								<br />
								<b>8:00-8:30 p.m.</b>
								<p>[Form Teams!!] Moderated by Daniel Achacon and Max Xiong</p>
							</Paragraph>
						</Fri>
						<Sat>
							<Subheader>Saturday</Subheader>
							<Paragraph>
								<br />
								<b>12:00-12:30 p.m.</b>
								<p>[NGO Theme Reveals and Sponsor/NGO/Partner networking session] Moderated by Agni</p>
							</Paragraph>
							<Paragraph>
								<br />
								<b>2:00-2:30 p.m.</b>
								<p>[ML 101] Conducted by Daniel Tian</p>
							</Paragraph>
							<Paragraph>
								<br />
								<b>2:30-3:00 p.m.</b>
								<p>[Web/APP Development] Conducted by Larry Liu</p>
							</Paragraph>
							<Paragraph>
								<br />
								<b>3:00-3:30 p.m.</b>
								<p>[Intro to Competitive Programming] Conducted by Max Xiong</p>
							</Paragraph>
							<Paragraph>
								<br />
								<b>3:30-3:40 p.m.</b>
								<p>[Intro to CAD] Conducted by Arnav Kalapala from Youth Code Foundation</p>
							</Paragraph>
							<Paragraph>
								<br />
								<b>6:00-7:00 p.m.</b>
								<p>[TECH HELP]-All</p>
							</Paragraph>
							<Paragraph>
								<br />
								<b>9:00-10:00 p.m.</b>
								<p>[GAME NIGHT]</p>
							</Paragraph>
						</Sat>
						<Sun>
							<Subheader>Sunday</Subheader>
							<Paragraph>
								<br />
								<b>12:00 p.m.</b>
								<p>[Submissions Due]</p>
							</Paragraph>
							<Paragraph>
								<br />
								<b>12:00p.m.-12:30p.m.</b>
								<p>[Submission help]</p>
							</Paragraph>
							<Paragraph>
								<br />
								<b>1:00 p.m.</b>
								<p>[Submissions close] & [Closing Ceremony]</p>
							</Paragraph>
						</Sun>
					</>
				)}
			</Composition>
		</Container>
	);
};
