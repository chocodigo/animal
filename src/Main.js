import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainDiv = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleBar = styled.div`
  width: 1110px;
  height: 83px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #ffffff;
  background-color: #323232;
  font-weight: bold;
  margin-bottom: 30px;
`;

const ContentDiv = styled.div`
  width: 1110px;
  display: flex;
`;

const AnimalPicList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-right: 110px;
`;

const AnimalPicItem = styled.div`
  display:flex:
  flex-direction: column;
`;

const AnimalImage = styled.img`
  width: 285px;
  height: 285px;
  margin-bottom: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const ButtonDiv = styled.button`
  font-weight: regular;
  width: 135px;
  height: 45px;
  font-size: 10px;
  color: ${(props) => (props.state === null ? "#323232" : "#ffffff")};
  border: #a5a5a5 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  background-color: ${(props) =>
    props.state === "like"
      ? `#006ebe`
      : props.state === "dislike"
      ? `#d74b00`
      : "white"};
`;

const AnimalListDiv = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
`;

const AnimalList = styled.div`
  width: 100%;
  height: 720px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  justify-content: center;
  align-items: center;
  border: #323232 1px solid;
`;

const AnimalText = styled.div`
  margin-bottom: 60px;
  font-weight: bold;
  font-size: 24px;
  color: ${(props) =>
    props.state === "like"
      ? `#006ebe`
      : props.state === "dislike"
      ? `#d74b00`
      : "#323232"};
`;

const DivideAnimalBtn = styled.button`
  width: 100%;
  height: 80px;
  font-weight: bold;
  color: #323232;
  background-color: #dcdcdc;
  font-size: 24px;
`;

const Main = () => {
  const [animalList, setAnimalList] = useState([]);
  useEffect(() => {
    fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=5CW-KNz1vVOS2MnUR_GpTJgK5hPTz8QMNaOq7c68ulLMgwFq16UUlUPGy15X7KggGnAX5ibqaVsWpRlZt3gM8_-Gf2E1b1sjm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMnlFFJdsZ45o9OHBZtd23PRzGqnMMtwVXxZatTcZ_ElWWQARivlerawy0qOn_ogddlOaIY5A3XJYuWNj0SVUwM&lib=MQ5y52npMqnCycenuTos7mqgLslxuhQuA"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        const response = JSON.parse(JSON.stringify(json));

        setAnimalList(
          response.map((item) => {
            return {
              animal: { id: item.id, name: item.name, img_url: item.img_url },
              state: null,
            };
          })
        );
      });
  }, []);

  const onClickLike = (item) => {
    item.state = "like";

    setAnimalList([...animalList]);
  };

  const onClickDisLike = (item) => {
    item.state = "dislike";

    setAnimalList([...animalList]);
  };

  return (
    <MainDiv>
      <TitleBar>내가 좋아하는 동물</TitleBar>
      <ContentDiv>
        <AnimalPicList>
          {animalList.map((item) => {
            return (
              <AnimalPicItem key={item.animal.id}>
                <AnimalImage src={item.animal.img_url} />
                <ButtonWrapper>
                  <ButtonDiv
                    onClick={(event) => onClickLike(item)}
                    state={item.state === "like" ? "like" : null}
                  >
                    좋아요
                  </ButtonDiv>
                  <ButtonDiv
                    onClick={(event) => onClickDisLike(item)}
                    state={item.state === "dislike" ? "dislike" : null}
                  >
                    싫어요
                  </ButtonDiv>
                </ButtonWrapper>
              </AnimalPicItem>
            );
          })}
        </AnimalPicList>
        <AnimalListDiv>
          <AnimalList>
            {animalList.map((item) => {
              return (
                <AnimalText key={item.animal.id} state={item.state}>
                  {item.animal.name}
                </AnimalText>
              );
            })}
          </AnimalList>
          <Link to={{ pathname: "/classification", state: { animalList } }}>
            <DivideAnimalBtn>좋아하는 동물들 나누기</DivideAnimalBtn>
          </Link>
        </AnimalListDiv>
      </ContentDiv>
    </MainDiv>
  );
};

export default Main;
