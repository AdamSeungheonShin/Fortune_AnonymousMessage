import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Img from '../assets/images/asas.jpg';
import dummyData from '../DummyData/DummyCard.json';

const DummyCard = ({ sender, Img, message, timestamp }) => {
  return (
    <CardContainer>
      <CardHeader>
        <Avatar>
          <img src={Img} alt="Avatar" />
        </Avatar>
        <UserInfo>
          <Username>{sender}</Username>
          <Timestamp>{timestamp}</Timestamp>
        </UserInfo>
      </CardHeader>
      <CardBody>
        <p>{message}</p>
      </CardBody>
    </CardContainer>
  );
};

const CardList2 = () => {
  const [dummy, setDummy] = useState([]);

  useEffect(() => {
    setDummy(dummyData);
  }, []);

  return (
    <>
      <CardList2Wrapper>
        <CardList2Container>
          {dummy.map((data) => (
            <DummyCard
              key={data.id}
              sender={data.sender}
              avatar={data.avatar}
              message={data.message}
              timestamp={data.timestamp}
            />
          ))}
        </CardList2Container>
      </CardList2Wrapper>
    </>
  );
};

const CardList2Wrapper = styled.div`
  max-width: 1248px;
  margin: 0 auto;
  padding: 15px 24px;
`;
const CardList2Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 384px;
  height: 280px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UserInfo = styled.div`
  margin-left: 8px;
`;

const Username = styled.span`
  font-weight: bold;
`;

const Timestamp = styled.span`
  font-size: 12px;
  color: #888;
`;

const CardBody = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;
export default CardList2;
