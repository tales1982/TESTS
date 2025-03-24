import {render, screen, fireEvent } from '@testing-library/react'
import App from './App'

///////////////////////////////
///     Test Unitario       ///
///////////////////////////////
describe('App Component', () => {

    it('Should render App with hello message', () => {
        render(<App />)//renderizo a pagina.

        screen.getByText('Hello world!');//vai na pagina e preocura por esta mensagen
    })

    it('Should change message on button click', () => {
        render(<App />);

        screen.getByText("Let's learn more about testing in React.");
    
        const [button] = screen.getAllByText(/Change message/i);
        // esta sintaxe /Change message/i serve para que desconsidere maiscula e minuscola usse somente o texto.
        
        fireEvent.click(button);//o fireEvent simula o click.

        //vai comparar com a nova message.
        screen.getByText(/New message/i);

        /*Para ter certeza que um elemento realmente foi eliminado da tela usso o queryByText retorna true or false*/
        const oldMessage = screen.queryAllByAltText("Let's learn more about testing in React.");
        expect(oldMessage.length).toBe(0);
        //posso usar tb 
        /*
            expect(oldMessage).toBeInDocument(); // espero que esteja
            expect(oldMessage)not.toBeInDocument(); // espero que nao esteja.
        */
    })
})

export default {}