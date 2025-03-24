import { fireEvent, render, screen } from '@testing-library/react'
import Button from './Button'

describe("Button Component", () => {
    
    //Testando Stilo CSS
    it("should render with red background if disabled", () => {
        render(<Button disabled={true} onClick={() => {}}>Click me</Button>)

        const button = screen.getByRole('button', {name: "Click me"});

        //Espero que o butao que esta sendo rederizado esta vermelho, se tiver desabilitado.
        expect(button).toHaveStyle({backgroundColor: "red"})
    })

    it('should call onClick prop on click', () => {
        const onClick = jest.fn();

        //renderizo o buttao
        render(<Button onClick={onClick}>Click me</Button>);

        const button = screen.getByText(/Click me/i);

        //click no butao
        fireEvent.click(button);

        expect(onClick).toHaveBeenCalled();
    })
})

/**
 * A linha const onClick = jest.fn(); cria uma função simulada (ou "mock function") usando o Jest. Essa função serve para:

Monitorar chamadas: Você pode verificar quantas vezes ela foi chamada, com quais argumentos e se foi chamada ou não.

Testar comportamentos: É útil para testar se uma determinada função foi invocada corretamente em resposta a algum evento (como um clique, por exemplo).

Dessa forma, ao utilizar essa função no seu teste, você consegue garantir que o evento de clique está disparando a função onClick conforme esperado.
 * 
 */