import React from "react";
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
  display: flex;
`;

const DivideAnimalList = styled.div`
  width: 540px;
  height: 830px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 24px;
  color: ${(props) =>
    props.state === "like"
      ? `#006ebe`
      : props.state === "dislike"
      ? `#d74b00`
      : "white"};
  border: ${(props) =>
      props.state === "like"
        ? `#006ebe`
        : props.state === "dislike"
        ? `#d74b00`
        : "white"}
    2px solid;
  padding-top: 47px;
  margin-right: ${(props) => (props.state === "like" ? `30px` : ``)};
`;

const SubTitle = styled.div`
  margin-bottom: 47px;
`;

const AnimalImage = styled.img`
  width: 285px;
  height: 285px;
  margin-bottom: 30px;
`;

const Classification = ({
  location: {
    state: { animalList },
  },
}) => {
  const likeList = [];
  const dislikeList = [];

  animalList.forEach((item) => {
    if (item.state === "like") likeList.push(item);
    else if ((item.state = "dislike")) dislikeList.push(item);
  });

  return (
    <MainDiv>
      <TitleBar>내가 좋아하는 동물</TitleBar>
      <ContentDiv>
        <DivideAnimalList state={"like"}>
          <SubTitle>좋아요</SubTitle>
          {likeList.map((item) => (
            <AnimalImage src={item.animal.img_url} />
          ))}
        </DivideAnimalList>
        <DivideAnimalList state={"dislike"}>
          <SubTitle>싫어요</SubTitle>
          {dislikeList.map((item) => (
            <AnimalImage src={item.animal.img_url} />
          ))}
        </DivideAnimalList>
      </ContentDiv>
    </MainDiv>
  );
};

export default Classification;
