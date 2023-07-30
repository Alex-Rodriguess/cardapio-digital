import styled from 'styled-components';

export const MenuContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
    font-size: 28px;
    margin-bottom: 30px;
    color: #333;
  }
`;

export const MenuItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #ddd;

  h3 {
    font-size: 20px;
    color: #444;
    margin: 0;
  }

  p {
    font-size: 18px;
    color: #666;
    margin: 0;
  }
`;

export const Button = styled.button`
  background-color: #ff6f47;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px; /* Adicionamos uma margem superior para separar do cardápio */
`;
