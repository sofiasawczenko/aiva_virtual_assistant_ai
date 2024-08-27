import styled from 'styled-components';
import { Button } from 'antd';

export const ChatbotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ChatWindow = styled.div`
  flex-grow: 1;
  padding: 16px;
  background-color: #fff;
  overflow-y: auto;
  height: 40rem;

  .bot {
    text-align: left;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 8px;
    padding: 8px;
  }

  .user {
    text-align: right;
    margin-bottom: 8px;
    border-color: #003366;
    background-color: #F6F6F6;
    border: 1px solid #ddd;
    width: auto;
    border-radius: 5px;
    padding: 8px;
  }
`;

export const ChatInput = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #fff;
  border-top: 1px solid #ddd;
  bottom: 0;
  position: fixed;
  width: 32rem;
  box-sizing: border-box;
  z-index: 100;

  @media (max-width: 768px) {
    max-width: 25rem;
    }
`;

export const ChatInputFieldPlusOptions = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;

    textarea {
      width: 100%;
      margin-right: 0;
      margin-bottom: 8px;
    }
  }

  @media (min-width: 769px) {
    textarea {
      flex: 1;
      width: calc(100% - 50px);
      margin-right: 8px;
    }
  }
`;


export const ChatInputButton = styled.div`
  display: flex;
  flex-direction: column; 
  margin-left: auto; 
`;

export const ButtonStyled = styled(Button)`
  background-color: #1677FF;
  border-color: #1677FF;
  color: white;
  margin-top: 8px; 

  &:hover {
    background-color: #36b7b1;
    border-color: #36b7b1;
  }
`;

export const UploadButton = styled(Button)`
  border-color: #0066CC;
  color: #0066CC;

  &:hover {
    border-color: #36b7b1;
    color: #36b7b1;
  }
`;

export const ReactionButtons = styled.div`
  display: flex;
  margin-top: 8px;
`;

export const ReactionIcon = styled.div`
  font-size: 18px;
  color: #0066CC; 
  margin: 0 8px;

  &:hover {
    color: #36b7b1; 
  }
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;
