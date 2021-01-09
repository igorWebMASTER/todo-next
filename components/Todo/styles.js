import styled from 'styled-components';

export const Container = styled.div`
  width: 30%;
  background: #fff;
  padding-bottom: 20px;
  min-height: 40px;
  font-size: 12px;
  display: flex;
  overflow: hidden;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 400ms;
  position: relative;
  top: -40px;
  z-index: -1;
  border-radius: 25px;
  margin-top: 20px;
  font-size: 14px;
  margin-bottom: 10px;
  border-radius: 50px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);

  li:first-child {
    margin-top: 20px;
  }

  li:last-child {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  li {
    list-style: none;
  }
`;
