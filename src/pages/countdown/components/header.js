import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
	height: 110vh;
	color: ${({ theme }) => theme.colors.main};
	background: ${({ theme }) => theme.colors.contrast};
	clip-path: polygon(0 0%, 100% 0, 100% 100%, 0 92%);

	display: flex;
	overflow: hidden;
	position: relative;
	align-items: center;
	text-align: center;
	padding: 0px 5%;
`;

const Center = styled.div`
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 6%;
`;

const Countdown = styled.div`
	font-size: 90px;
	font-family: "Poppins", sans-serif;
	font-weight: 200;
	letter-spacing: 0.25em;
	line-height: 115%;
`;
const Unit = styled.span`
	font-weight: 500;
	color: ${({ theme }) => theme.colors.primary};
`;
const Delim = () => <span> : </span>;
const Subheader = styled.div`
	font-size: 30px;
	font-weight: 400;
`;
const ReturnLink = styled.a`
	color: ${({ theme }) => theme.colors.primary};
	text-decoration: none;
`;
const Timer = ({ hours, minutes, seconds }) => (
	<>
		{hours}
		<Unit>H</Unit>
		<Delim />
		{minutes}
		<Unit>M</Unit>
		<Delim />
		{seconds}
		<Unit>S</Unit>
	</>
);

const EndDate = new Date("Sun, 16 Apr 2023 12:00:00 EST");

export const Header = () => {
	const [inProgress, setInProgress] = React.useState(true);
	const [time, setTime] = React.useState({ hours: 11, minutes: 59, seconds: 59 });
	useEffect(() => {
		const interval = setInterval(() => {
			// Get time difference
			const now = new Date();
			const delta = EndDate.getTime() - now.getTime();

			// Check if event has ended
			if (delta < 0) {
				setInProgress(false);
				clearInterval(interval);
				return;
			}

			// Update time
			const hours = Math.floor(delta / (1000 * 60 * 60));
			const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((delta % (1000 * 60)) / 1000);
			setTime({ hours, minutes, seconds });
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	return (
		<Container>
			<Center>
				<Countdown>
					{inProgress ? (
						<Timer hours={time.hours} minutes={time.minutes} seconds={time.seconds} />
					) : (
						"Event Ended"
					)}
				</Countdown>
				{inProgress && <Subheader>Until Submission</Subheader>}
				<div style={{ margin: "1% 0px", padding: "3px 0px" }} />
				<ReturnLink href="https://megahack.tech/">Return to Main Website</ReturnLink>
			</Center>
		</Container>
	);
};
