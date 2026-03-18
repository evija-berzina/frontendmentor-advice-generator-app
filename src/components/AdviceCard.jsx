import {AdviceButton} from '../components/AdviceButton';
import DividerMobile from '../assets/images/pattern-divider-mobile.svg';
import DividerDesktop from '../assets/images/pattern-divider-desktop.svg';

export function AdviceCard({data, dataFetch, isLoading}) {
  
  return (
    <section className='flex flex-col justify-content items-center gap-4 text-center bg-blue-neutral-900 text-lg w-2xs px-4 py-8 rounded-lg relative'>
      <h1 className='text-green-primary-300 uppercase text-xs tracking-[0.3em]'>Advice #117</h1>
      <p className='leading-7'><q>{data}</q></p>
      <picture>
        <source media="(min-width: 768px)" srcSet={DividerDesktop} />
        <img className='pb-5' src={DividerMobile} alt="divider pattern" />
      </picture>
      <AdviceButton
        dataFetch={dataFetch}
        isLoading={isLoading}
      />
    </section>
  )
}