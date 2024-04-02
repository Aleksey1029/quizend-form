type HeadingProps = {
	headingText: string
	headingType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Heading = ({ headingText, headingType }: HeadingProps) => {
	const renderHeading = () => {
		switch (headingType) {
			case 'h1':
				return <h1>{headingText}</h1>
			case 'h2':
				return <h2>{headingText}</h2>
			case 'h3':
				return <h3>{headingText}</h3>
			case 'h4':
				return <h4>{headingText}</h4>
			case 'h5':
				return <h5>{headingText}</h5>
			case 'h6':
				return <h6>{headingText}</h6>
			default:
				return <h1>{headingText}</h1>
		}
	}
	return renderHeading()
}

// export const Heading2 = (props) => {
// 	const { headingText2 } = props
// 	return <h2>{headingText2}</h2>
// }

// export const Heading3 = (props) => {
// 	const { headingText3 } = props
// 	return <h3>{headingText3}</h3>
// }
