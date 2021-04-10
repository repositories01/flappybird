import { component } from 'haunted'
import { html } from 'lit-html'
import styled from 'masquerades'


const Container = styled.h1`
background-color: red;

`;

customElements.define('styled-container', Container, {
    extends: 'h1',
});



const Barrier = () => html`
   
    <h1 is="styled-container">TEste</h1>
    `

customElements.define('wc-title', component(Barrier))
