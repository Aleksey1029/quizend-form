import { Option2 } from '../components/Option'
import { Heading } from '../components/Typography/Heading'
import { AppButton } from '../components/UI/AppButton'
import { Link } from 'react-router-dom'

const OptionData = [
	{
		optionText: 'Веселый',
		id: 'variant-1',
		optionImg: './img/laugh.png',
		altText: 'laugh',
	},
	{
		optionText: 'Красивый',
		id: 'variant-2',
		optionImg: './img/hearts.png',
		altText: 'hearts',
	},
	{
		optionText: 'Строгий',
		id: 'variant-3',
		optionImg: './img/smirk.png',
		altText: 'smirk',
	},
	{
		optionText: 'Пугливый',
		id: 'variant-4',
		optionImg: './img/fright.png',
		altText: 'fright',
	},
]

const StepThree = () => {
	return (
		<div className='container'>
			<div className='wrapper'>
				<div className='emoji-quiz'>
					<div className='indicator'>
						<div className='indicator__text'>
							<span className='indicator__description'>
								Скидка за прохождение опроса:
							</span>
							<span className='indicator__value'>15%</span>
						</div>
						<div className='indicator__progressbar'>
							<div className='indicator__unit indicator__unit-1 _active'></div>
							<div className='indicator__unit indicator__unit-2 _active'></div>
							<div className='indicator__unit indicator__unit-3'></div>
							<div className='indicator__unit indicator__unit-4'></div>
						</div>
					</div>
					<div className='question'>
						<Heading headingType='h2' headingText='3. Какой вы?' />
						<ul className='emoji-variants'>
							{OptionData &&
								OptionData.map(elem => (
									<Option2
										optionText={elem.optionText}
										inputType={'radio'}
										id={elem.id}
										optionImg={elem.optionImg}
										altText={elem.altText}
									/>
								))}
						</ul>
						<Link to={'/step-four'}>
							<AppButton isDisabled={false} buttonText='Далее' />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default StepThree
