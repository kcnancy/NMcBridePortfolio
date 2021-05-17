import styled from 'styled-components';


export const Box = styled.div`
padding: 100px 60px;
position: absolute;
bottom: 0;
width: 100%;
height: 100px;
@media (max-width: 100%) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 100%;
	height: 125px;
	margin: 0 auto;
	background: blue;
`;

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: center;
margin-left: 10;
color: white;
justify-content: center;
`;

export const Row = styled.div`
display: grid;
text-align: center;
color: white;
grid-template-columns: repeat(auto-fill,
						minmax(175px, 1fr));
grid-gap: 5px;
@media (max-width: 100%) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 5fr));
}
`;

export const FooterLink = styled.a`
position: center;
bottom: 0px;
height: 20px;
font-size: 18px;
color: white;
&:hover {
	color: red;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 17px;
color: white;
margin-bottom: 15px;
font-weight: bold;
`;