import DividerMobile from '../assets/images/pattern-divider-mobile.svg';
import DividerDesktop from '../assets/images/pattern-divider-desktop.svg';

export function AdviceCard() {
  
  return (
    <section>
      <h1>Advice #117</h1>
      <p>It is easy to sit up and take notice, what's difficult is getting up and taking action.</p>
      <picture>
        <source media="(min-width: 768px)" srcSet={DividerDesktop} />
        <img src={DividerMobile} alt="divider pattern" />
      </picture>
    </section>
 )
}