import styled from 'styled-components';

export const Container = styled.div`
  width: 32%;
  background: #4e4e5c;
  color: #fff;
  padding-bottom: 20px;
  min-height: 40px;
  font-size: 12px;
  display: flex;
  overflow: hidden;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  transition: all 400ms;
  position: relative;
  top: -50px;
  z-index: -1;
  border-radius: 25px;
  margin-top: 20px;
  font-size: 14px;
  margin-bottom: 10px;
  border-radius: 3px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);

  li:first-child {
    margin-top: 20px;
    margin-left: 20px;
    font-size: 1rem;
  }

  li:last-child {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  li {
    list-style: none;
  }

  @media screen and (max-width: 760px) {
    & {
      width: 90%;
    }
  }
`;
