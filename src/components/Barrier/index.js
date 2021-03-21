import { component } from 'haunted'
import { html } from 'lit-html'
import {Container} from './styles/Barrier'


const Barrier = () => html`
    <Container>
    <h1 class="title">TEste</h1>
    </Container>
    `

customElements.define('wc-title', component(Barrier))
