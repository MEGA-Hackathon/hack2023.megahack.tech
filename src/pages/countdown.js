import React from "react";
import styled from "styled-components";

const Header = styled.div`
	height: 110vh;
	color: ${({ theme }) => theme.colors.main};
	background: ${({ theme }) => theme.colors.contrast};
	clip-path: polygon(0 0%, 100% 0, 100% 100%, 0 92%);

	display: flex;
	overflow: hidden;
	position: relative;
	align-items: center;
	padding: 0px 5%;
`;

const Center = styled.div`
	margin: auto;
`;

const CountdownPage = () => {
	return (
		<div>
			<Header>
				<Center>
					<h1>Countdown</h1>
				</Center>
			</Header>
		</div>
	);
};

export default CountdownPage;
