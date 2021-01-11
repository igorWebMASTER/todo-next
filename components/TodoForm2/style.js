import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  min-height: 166px;
  font-size: 12px;
  display: flex;
  margin: 0 auto;
  border-radius: 10px;
  margin: 40px auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 400ms;

  h1 {
    font-size: 34px;
    position: absolute;
    top: 1.5rem;
    color: #fff;
  }

  .formTodo {
    display: flex;
    align-content: center;
    width: 100%;
    margin: 0 auto;
    max-width: 460px;
    padding: 15px;

    .inputTask {
      display: flex;
      flex-direction: column;
    }

    input {
      height: 48px;
      border: 0;
      background: #2e2d34;
      color: #5d5d5f;
      min-width: 250px;
      max-width: 250px;
      font-size: 14px;
      border-radius: 3px;
      padding-left: 15px;

      &::placeholder {
        color: #5d5d5f;
      }
    }

    button {
      height: 48px;
      border: 0;
      width: 100%;
      color: #fff;
      font-size: 14px;
      background: #13825c;
      min-width: 130px;

      border-radius: 3px;
      margin-left: 10px;
      transition: background-color 300ms;
      cursor: pointer;
    }

    button:hover {
      background: ${shade(0.15, '#13825c')};
    }

    .error {
      padding-top: 10px;
      color: #ed5249;
    }
  }

  @media screen and (max-width: 760px) {
    .formTodo {
      flex-direction: column;

      span {
        position: relative;
      }

      button,
      input {
        width: 100%;
      }
    }

    div > h1 {
      text-align: left;
      margin: 1rem 0 0rem 1rem;
    }
  }

  div > h1 {
    font-weight: 500;
    font-size: 22px;
    margin-top: 10px;
    text-align: center;
  }

  @media screen and (max-width: 760px) {
  }
`;
