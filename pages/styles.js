import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;800&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialised;
  }

  body,
  input,
  button {
    font-family: 'Nunito', sans-serif;
  }

  #root {
    margin: 0 auto;
    /* padding: 0 20px 50px; */
  }

  button {
    cursor: pointer;
  }

  width: 58%;
  text-align: center;
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;

  div {
    font-size: 34px;
    font-weight: 800;
    text-align: center;
  }

  > .stripe-most-selled {
    height: 6px;
    width: 150px;
    text-align: center;

    background: #c0c0c0;
    margin: 6px 0px;
  }

  @media screen and (max-width: 1400px) {
    & {
      width: 84%;
    }
  }
  @media screen and (max-width: 560px) {
    & {
      width: 92%;

      div {
        font-size: 18px;
        font-weight: black;
      }
    }
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  width: 70%;

  margin: 0 auto;
  justify-content: center;
  list-style: none;
  padding-bottom: 30px;

  .rec-pagination {
    display: none;
    margin-top: 0px;
  }

  .rec-arrow-right,
  .rec-arrow-left {
    background-color: #fff !important;
    color: #000;
    border: 0 !important;
    box-shadow: none;
    /* background: url(https://cdn.onlinewebfonts.com/svg/img_92254.png);
    background-size: 0.4em;
    cursor: pointer;
    background-repeat: no-repeat;
    background-p
    osition: right 0.5em center; */
  }

  .rec-arrow-right,
  .rec-arrow-left:hover {
    background-color: #fff !important;
    color: #000 !important;
    border: 0 !important;
    box-shadow: none !important;
  }
  .CarouselContent {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      display: block;
    }
  }

  @media only screen and (max-width: 1400px) {
    & {
      width: 100%;
    }
  }

  @media only screen and (max-width: 600px) {
    & {
      width: 100%;
    }

    .rec-pagination {
      display: block;
    }
    .rec-arrow-right,
    .rec-arrow-left {
      display: none;
    }

    .rec-dot {
      background: #bdbdbd;
      box-shadow: 0 0 0px 0px #bdbdbd !important;
    }
    .rec-dot_active {
      box-shadow: 0 0 1px 3px #f8475f;
      background-color: #f8475f;
    }
  }

  .title-most-selled {
    color: white;
    display: block;
  }
  .rating-product {
    margin: 0 auto;
  }

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 2px;
    padding: 10px;

    img {
      align-self: center;
      max-width: 200px;
    }

    .top-product-info {
      .off-stripe {
        position: absolute;
        width: 0;
        left: 55%;
        height: 0;
        color: #fff;
        border-style: solid;
        border-width: 0 80px 80px 0;
        border-color: transparent #f8475f transparent transparent;
      }

      @media screen and (max-width: 380px) and (min-width: 180px) {
        .off-stripe {
          left: 16%;
          border-width: 0 40px 40px 0;
          .off-stripe-text {
            margin: 5px 17px;
            font-size: 10px;
          }
        }
      }
      @media screen and (max-width: 480px) and (min-width: 381px) {
        .off-stripe {
          left: 15%;
          border-width: 0 60px 60px 0;
          .off-stripe-text {
            margin: 10px 25px;
          }
        }
      }

      .off-stripe-text {
        position: absolute;
        margin: 20px 40px;
      }
    }

    .middle-product-info {
      padding: 10px 0px 15px 0px;
      min-height: 170px;
      text-align: center;
      transition: all ease-in 300ms;

      button {
        cursor: pointer;
        opacity: 0;
        transition: all ease-in 300ms;
        span {
          line-height: 40px;
        }
      }

      &:hover {
        background: #e6e8ea;

        button {
          opacity: 1;
        }
      }

      @media only screen and (max-width: 600px) {
        button {
          opacity: 1;
        }
      }
    }

    .middle-product-info > strong {
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
      font-size: 12px;
      color: #7a7a7a;
      text-align: center;
      margin-top: 5px;
    }

    .middle-product-info .price-tag {
      font-size: 18px;
      font-weight: bold;
      color: #000;
      text-align: center;
    }

    .middle-product-info > span {
      font-size: 12px;
      display: block;
      font-weight: 400;
      color: #7a7a7a;
      margin-bottom: 5px;

      text-align: center;
    }

    button {
      background: #000;
      color: #fff;
      border: 0;
      border-radius: 4px;
      /* margin-top: auto; */
      margin: 0 auto;
      width: 125px;
      height: 32px;
      display: flex;
      font-size: 12px;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#000')};
      }

      @media only screen and (max-width: 600px) {
        & {
          width: 90%;
          height: 36px;
          font-size: 15px;
        }
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
      }

      svg {
        margin-right: 5px;
      }

      span {
        flex: 1;
        align-items: center;
        min-width: 120px;
        line-height: 40px;
        height: 40px;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
