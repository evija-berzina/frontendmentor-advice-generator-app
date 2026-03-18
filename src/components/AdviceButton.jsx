import IconDice from '../assets/images/icon-dice.svg';

export function AdviceButton({dataFetch, isLoading}) {
  
  return (
    <div className={`flex justify-center bg-green-primary-300 aspect-square w-13 rounded-full absolute -bottom-6 cursor-pointer ${isLoading ? "opacity-75 cursor-default" : ""}`}>
      <button onClick={dataFetch} disabled={isLoading} className={isLoading ? "cursor-default" : "cursor-pointer"}>
        <img className={isLoading ? 'animate-spin w-5' : 'w-5'} src={IconDice} alt="dice icon" />
      </button>
    </div>
 )
}