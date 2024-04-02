type OptionProps = {
	labelText: string
	inputType: string
	id: string
}

type Option2Props = {
	optionText: string
	inputType: string
	id: string
	optionImg: string
	altText: string
}

export const Option = ({ labelText, inputType, id }: OptionProps) => {
	return (
		<li className='variant-wrapper'>
			<input required type={inputType} name={id} id={id} />
			<label htmlFor={id}>{labelText}</label>
		</li>
	)
}

export const Option2 = ({
	optionText,
	id,
	optionImg,
	altText,
}: Option2Props) => {
	return (
		<li className='variant-wrapper'>
			<input required type='radio' name='variant' id={id} />
			<label htmlFor={id}>
				<img src={optionImg} alt={altText} />
				<p>{optionText}</p>
			</label>
		</li>
	)
}

