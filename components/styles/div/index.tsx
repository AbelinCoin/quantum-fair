import styled from "styled-components";

export const Flex = styled.div`
  background: #efefef;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  display: flex;
  align-content: center;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const Card = styled.div`
  justify-content: center;
  background: #eee;
  align-items: center;
  width: 10vh;
  height: 5vh;
  display: flex;
  align-content: center;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const EachCard = styled.div`
  justify-content: center;
  background: #efefef;
  flex-direction: column;
  border-radius: 10px;
  border: 2px solid;
  border-color: #000000;
  align-items: center;
  display: block;
  align-content: center;
  height: 28vh;
  width: 35vh;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const Row = styled.div`
  justify-content: center;
  background: #efefef;
  flex-direction: row;
  align-items: center;
  display: flex;
  align-content: center;
  z-index: 12;
`;

export const Content = styled.div`
  justify-content: center;
  background: #efefef;
  flex-direction: column;
  align-items: center;
  display: flex;
  align-content: center;
  z-index: 12;
`;

export const Table = styled.div`
  justify-content: center;
  background: #efefef;
  flex-direction: column;
  align-items: center;
  display: block;
  align-content: center;
  height: 28vh;
  width: 35vh;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const CardSearch = styled.div`
  justify-content: center;
  background: #d9d7d7;
  flex-direction: column;
  align-items: center;
  display: block;
  align-content: center;
  height: 65vh;
  width: 90vh;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
      transform: translateY(40px);
}
`;
