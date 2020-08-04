import styled from "styled-components";

export const FormSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;

  @media(max-width: 375px){
      padding: 0;
      flex-direction: column;
  }
`;
export const FormArea = styled.div`
  background: #fff;
  border-radius: 50px;
  border: 1px solid black;
  height: 400px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 50px 0;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  border: none;
  background: none;
  border-bottom: 1px solid black;
  margin: 20px;
`;

export const TextInput = styled.input`
  border: none;
  background: none;
  border-bottom: 1px solid black;
  margin: 20px;
`;

export const SendButton = styled.button`
  border: 1px solid black;
  background: none;
  margin: auto;
  width: 100px;
  border-radius: 50px;
  margin-top: 20px;
`;

export const ContactImage = styled.img`
    width: 507px;
    height: 347px;

    @media(max-width: 375px){
        display: none;
    }
`;

export const ContactSection = styled.div`
text-align: center;
background: #ebfafc;
padding: 100px 30px;
    
    @media(max-width: 375px){
        padding: 50px 30px;
    }
`
