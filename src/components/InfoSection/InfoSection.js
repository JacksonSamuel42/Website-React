import React from 'react';
import {Link} from 'react-router-dom';
import {Container} from '../../globalStyles';
import {Button} from '../../globalStyles';
import {
	InfoSec,
	InfoRow,
	InfoColumn,
	TextWrapper,
	Heading,
	TopLine,
	Subtitle,
	ImgWrapper,
	Img
} from './InfoSection.elements';

const InfoSection = ({
    primary,
	lightBg,
	imgStart,
	lightTopLine,
	lightText,
	lightTextDesc,
	topLine,
	description,
	headline,
	buttonLabel,
	start,
	img,
	alt
}) => {
	return (
		<>
			<InfoSec lightBg={lightBg}>
				<Container>
					<InfoRow imgStart={imgStart}>
						<InfoColumn>
							<TextWrapper>
								<TopLine lightTopLine={lightTopLine}>
									{topLine}
								</TopLine>
								<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle lightTextDesc={lightTextDesc}>
									{description}
								</Subtitle>
								<Link to='/sign-up'>
									<Button big fontBig primary={primary}>
										{buttonLabel}
									</Button>
								</Link>
							</TextWrapper>
						</InfoColumn>
						<InfoColumn>
							<ImgWrapper start={start}>
								<Img src={img} alt={alt}/>
							</ImgWrapper>
						</InfoColumn>
					</InfoRow>
				</Container>
			</InfoSec>
		</>
	);
};

export default InfoSection;
