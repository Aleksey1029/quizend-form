type AppButtonProps = {
	buttonText: string
	isDisabled: boolean;
}

export const AppButton = ({ buttonText, isDisabled, }: AppButtonProps) => {
	return (
		<button disabled={isDisabled} type='submit' id='next-btn'>
			{buttonText}
		</button>
	);
};
