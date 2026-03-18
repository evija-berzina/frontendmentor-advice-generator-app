import IconDice from '../assets/images/icon-dice.svg';

export function AdviceButton({dataFetch}) {
  
  return (
    <div className='flex justify-center bg-green-primary-300 aspect-square w-13 rounded-full absolute -bottom-6'>
      <button onClick={dataFetch}>
        <img className='w-5' src={IconDice} alt="dice icon" />
      </button>
    </div>
 )
}