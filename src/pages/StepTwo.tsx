import { Option } from '../components/Option'
import { Heading } from '../components/Typography/Heading'
import { AppButton } from '../components/UI/AppButton'
import { Link } from 'react-router-dom'

const OptionData = [
	{
		labelText: 'Frontend',
		id: 'variant-1',
	},
	{
		labelText: 'Python',
		id: 'variant-2',
	},
	{
		labelText: 'UX/UI',
		id: 'variant-3',
	},
	{
		labelText: 'Design',
		id: 'variant-4',
	},
]

const StepTwo = () => {
	return (
		<div className='container'>
			<div className='wrapper'>
				<div className='variants-quiz'>
					<div className='indicator'>
						<div className='indicator__text'>
							<span className='indicator__description'>
								Скидка за прохождение опроса:
							</span>
							<span className='indicator__value'>15%</span>
						</div>
						<div className='indicator__progressbar'>
							<div className='indicator__unit indicator__unit-1 _active'></div>
							<div className='indicator__unit indicator__unit-2'></div>
							<div className='indicator__unit indicator__unit-3'></div>
							<div className='indicator__unit indicator__unit-4'></div>
						</div>
					</div>
					<div className='question'>
						<Heading
							headingType='h2'
							headingText='2. На какой курс вы хотите пойти?'
						/>
						<ul className='variants'>
							{OptionData &&
								OptionData.map(elem => (
									<Option
										labelText={elem.labelText}
										inputType={'radio'}
										id={elem.id}
									/>
								))}
						</ul>
						<Link to={'/step-three'}>
							<AppButton isDisabled={false} buttonText='Далее' />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default StepTwo
