import IconDice from '../assets/images/icon-dice.svg';

export function AdviceButton({dataFetch, isLoading}) {
  
  return (
    <button
      type="button"
      aria-label="Generate new advice"
      onClick={dataFetch}
      disabled={isLoading}
      className={`flex justify-center items-center bg-green-primary-300 aspect-square w-13 rounded-full absolute -bottom-6 ${isLoading ? "opacity-75 cursor-default" : "cursor-pointer transition-shadow duration-300 hover:shadow-xl/30 hover:shadow-custom"}`}
    >
      <img className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} src={IconDice} alt="dice icon" />
    </button>
 )
}