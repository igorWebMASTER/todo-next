import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 50%;
  background: #f2f2f2;
  min-height: 166px;
  font-size: 12px;
  display: flex;
  border-radius: 10px;
  margin: 40px auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 400ms;

  .form-newsletter {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    padding: 15px;

    form {
      width: 90%;
      display: flex;
      flex-direction: column;
    }

    /* > div {
      text-align: center;
    } */

    input {
      height: 48px;
      border: 0;
      background: white;
      min-width: 250px;
      font-size: 14px;
      border-radius: 5px;
      padding-left: 15px;

      &::placeholder {
        color: #585858;
      }
    }

    button {
      height: 48px;
      border: 0;
      color: #fff;
      font-size: 14px;
      background: #13825c;
      min-width: 140px;
      border-radius: 5px;
      margin-left: 10px;
      transition: background-color 300ms;
      cursor: pointer;
    }

    .addAgainNewsletter {
      height: 48px;
      border: 0;
      color: #fff;
      font-size: 14px;
      background: #13825c;
      min-width: 300px;
      border-radius: 5px;
      margin-left: 10px;
      transition: background-color 300ms;
      cursor: pointer;
    }

    button:hover {
      background: ${shade(0.15, '#13825c')};
    }
  }

  @media screen and (max-width: 760px) {
    .form-newsletter {
      flex-direction: column;

      span {
        position: relative;
      }

      button,
      input {
        width: 100%;
        margin-top: 10px;
        margin-left: 0px;
      }

      #name {
        margin-bottom: 11px;
      }
    }
  }

  div > h1 {
    font-weight: 500;
    font-size: 22px;
    margin-top: 10px;
    text-align: center;
  }

  .line-break {
    display: none;
  }

  @media screen and (max-width: 760px) {
    div {
      width: 100%;
    }
    div > h1 {
      text-align: left;
      margin: 1rem 0 0rem 1rem;
    }

    .line-break {
      display: block;
    }
  }
`;
