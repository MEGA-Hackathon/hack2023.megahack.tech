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
							</Paragraph>
						</Fri>
						<Sat>
							<Subheader>Saturday</Subheader>
						</Sat>
						<Sun>
							<Subheader>Sunday</Subheader>
						</Sun>
					</>
				)}
			</Composition>
			<br />
			<br />
			<br />
		</Container>
	);
};
