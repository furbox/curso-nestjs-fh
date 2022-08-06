import { templateString } from './bases/01-types'
import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'
import { pokemons } from './bases/02-objects'
// import { charmander } from './bases/03-classes'
// import { charmander } from './bases/04-injection'
// import { dito } from './bases/05-decorators'
import { dito } from './bases/06-decorators2'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript - ${templateString}!!!</h1>
    <p>${pokemons.join(',')}</p>
    <p>${dito.name}</p>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
