// Importa o styled do pacote styled-components para criar componentes com estilos encapsulados
import styled from 'styled-components';
// Importa o ReactNode para tipar as propriedades que serão passadas como filhos do componente
import { ReactNode } from 'react';

// Define a interface para as propriedades do componente estilizado, permitindo receber uma prop 'disabled'
interface StyledButtonProps {
  disabled?: boolean;
}

// Cria um componente de botão estilizado com styled-components
// O estilo é condicionado à propriedade 'disabled': se for true, o fundo é vermelho e o cursor indica "não permitido"
const StyledButton = styled.button<StyledButtonProps>`
  background: ${({ disabled }) => (disabled ? 'red' : 'blue')};
  color: white; 
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  margin: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')}; // Cursor diferente se o botão estiver desabilitado
`;

// Define a interface para as propriedades do componente Button, que receberá um indicador 'disabled',
// o conteúdo interno (children) e a função onClick para tratar cliques
interface ButtonProps {
  disabled?: boolean;
  children: ReactNode;
  onClick: () => void;
}

// Componente funcional Button que utiliza o StyledButton para renderizar um botão estilizado
const Button = ({ disabled = false, children, onClick }: ButtonProps) => {
  return (
    // O StyledButton recebe a prop 'disabled' e a função 'onClick' que serão aplicadas ao botão
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}  {/* Renderiza o conteúdo passado como filhos */}
    </StyledButton>
  );
};

export default Button;
