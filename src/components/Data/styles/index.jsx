import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const SerchBlock = styled.div`
  padding: 20px 0;
  width: 100%;
`

export const Search = styled.input`
  border: 1px solid #CCCCCC;
  border-radius: 10px;
  font-size: 18px;
  height: 60px;
  padding: 0 20px;
  width: 600px;
  `

export const ListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;
`

export const Pod = styled.div`
  align-items: center;
  border: 1px solid #CCCCCC;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 15px;
  padding: 10px;
  width: 200px;
`
export const Image = styled.img`
  height: 130px;
  width: auto;
`

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
`

export const Loading = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid #CCCCCC;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }
`