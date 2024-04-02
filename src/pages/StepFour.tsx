import { Option } from '../components/Option'
import { Heading } from '../components/Typography/Heading'
import { AppButton } from '../components/UI/AppButton'
import { Link } from 'react-router-dom'

const StepFour = () => {
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
							<div className='indicator__unit indicator__unit-3 _active'></div>
							<div className='indicator__unit indicator__unit-4'></div>
						</div>
					</div>
					<div className='question'>
						<Heading
							headingType='h2'
							headingText='4. Хотите ли вы стать частью семьи Tehnikum?'
						/>
						<ul className='level-variants'>
							<Option labelText='1' inputType='radio' id='variant-1' />
							<Option labelText='2' inputType='radio' id='variant-2' />
							<Option labelText='3' inputType='radio' id='variant-3' />
							<Option labelText='4' inputType='radio' id='variant-4' />
							<Option labelText='5' inputType='radio' id='variant-5' />
						</ul>
						<Link to={'/Thanks'}>
							<AppButton isDisabled={false} buttonText='Далее' />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default StepFour
