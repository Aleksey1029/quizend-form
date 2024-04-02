import { AppButton } from '../components/UI/AppButton'
import { Heading } from '../components/Typography/Heading'
import { AppInput } from '../components/UI/AppInput'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const YourAnswers = () => {
	const [nameData, setNameData] = useState()

	const [nameError, setNameError] = useState(false)

	useEffect(() => {
		if (!nameData) {
			setNameError(true)
		}else {
			setNameError(false)
		}
	}, [nameData])


	const navigate = useNavigate()

	const submitHandler = () => {
		navigate('/')
	}

	return (
		<div className='container'>
			<div className='wrapper'>
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
						<div className='indicator__unit indicator__unit-4 _active'></div>
					</div>
				</div>
				<div className='welcome'>
					<Heading headingType='h1' headingText='Ваши ответы' />
					<div className='question'>
						<ul>
							<li>
								<Heading
									headingType='h3'
									headingText='1. Где вы узнали про нашу школу?'
								/>
								<form onSubmit={submitHandler}>
									<AppInput
										id='username'
										inputType='text'
										inputPlacaholder='Ответ'
										hasError={nameError}
										onChange={e => {
											setNameData(e.target.value)
											setNameError(!e.target.value)
										}}
										inputLabel={''}
										errorMessage='Введите ваш ответ'
									/>
								</form>
							</li>
							<li>
								<Heading
									headingType='h3'
									headingText='2. На какой курс вы хотите пойти?'
								/>
								<form onSubmit={submitHandler}>
									<AppInput
										id='username'
										inputType='text'
										inputPlacaholder='Ответ'
										hasError={nameError}
										onChange={e => {
											setNameData(e.target.value)
											setNameError(!e.target.value)
										}}
										inputLabel={''}
										errorMessage='Введите ваш ответ'
									/>
								</form>
							</li>
							<li>
								<Heading headingType='h3' headingText='3. Какой вы?' />
								<form onSubmit={submitHandler}>
									<AppInput
										id='username'
										inputType='text'
										inputPlacaholder='Ответ'
										hasError={nameError}
										onChange={e => {
											setNameData(e.target.value)
											setNameError(!e.target.value)
										}}
										inputLabel={''}
										errorMessage='Введите ваш ответ'
									/>
								</form>
							</li>
							<li>
								<Heading
									headingType='h3'
									headingText='4. Хотите ли вы стать частью семьи Tehnikum?'
								/>
								<form onSubmit={submitHandler}>
									<AppInput
										id='username'
										inputType='text'
										inputPlacaholder='Ответ'
										hasError={nameError}
										onChange={e => {
											setNameData(e.target.value)
											setNameError(!e.target.value)
										}}
										inputLabel={''}
										errorMessage='Введите ваш ответ'
									/>
									<AppButton
										isDisabled={false}
										buttonText='Подтвердить'
									/>
								</form>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
