import { useState } from 'react';
import styled, { css } from 'styled-components';

const AddItem = () => {
  const [tags, setTags] = useState([]);
  const [isTagsEmpty, setIsTagsEmpty] = useState(true);

  const [values, setValues] = useState({
    title: '',
    description: '',
    price: '',
    imgFile: null,
  });

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const isValidate =
    values.title.trim() !== '' &&
    values.description.trim() !== '' &&
    values.price.trim() !== '' &&
    !isTagsEmpty;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('제목:', values.title);
    console.log('설명:', values.description);
    console.log('가격:', values.price);
    console.log('태그:', tags);
  };

  return (
    <AddItemContainer onSubmit={handleSubmit}>
      <AddItemTitle>
        상품등록하기
        <SubmitButton type="submit" disabled={!isValidate}>
          등록
        </SubmitButton>
      </AddItemTitle>
      <TitleText>상품이미지</TitleText>

      <InputTitleWrapper>
        <TitleText>상품명</TitleText>
        <InputText
          name="title"
          type="text"
          placeholder="상품명을 입력해 주세요"
          value={values.title}
          onChange={handleInputChange}
        />
      </InputTitleWrapper>
      <IntroItemWrapper>
        <TitleText>상품소개</TitleText>
        <ItemIntroduce
          name="description"
          placeholder="상품소개를 입력해주세요"
          value={values.description}
          onChange={handleInputChange}
        />
      </IntroItemWrapper>
      <InputTitleWrapper>
        <TitleText>판매가격</TitleText>
        <InputText
          name="price"
          type="text"
          placeholder="판매가격을 입력해 주세요"
          value={values.price}
          onChange={handleInputChange}
        />
      </InputTitleWrapper>
      <InputTitleWrapper>
        <TitleText>태그</TitleText>
      </InputTitleWrapper>
    </AddItemContainer>
  );
};

const AddItemContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1200px;
  padding: 40px 140px;
  @media (max-width: 1023px) {
    padding: 30px 30px;
    height: 100%;
  }

  @media (max-width: 767px) {
    padding: 20px 20px;
    height: 100%;
  }
`;

const AddItemTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontsize.MINI_TXT};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
  line-height: 33.41px;
  text-align: left;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.ORANGE};
`;

const SubmitButton = styled.button`
  display: inline-flex;
  width: 88px;
  height: 42px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.colors.ORANGE};
  color: #ffffff;

  ${(props) =>
    props.disabled &&
    css`
      background-color: #9ca3af;
      color: #ffffff;
      cursor: not-allowed;
    `}
`;

const InputText = styled.input`
  width: 100%;
  height: 56px;
  gap: 12px;
  margin-top: 20px;
  background: ${({ theme }) => theme.colors.ORANGE};
  border-radius: 12px;
  border: 0.5px solid #ccc;
  padding-left: 15px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  &:focus {
    border: 1px solid #3692ff;
    outline: none;
  }
`;

const InputTitleWrapper = styled.div`
  width: 100%;
  height: 89px;
  gap: 12px;
  opacity: 0px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const TitleText = styled.label`
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.48px;
  text-align: left;
`;

const IntroItemWrapper = styled.div`
  width: 100%;
  height: 233px;
  margin-top: 25px;
  gap: 12px;
  opacity: 0px;
`;
const ItemIntroduce = styled.textarea`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  border: 0.5px solid #ccc;
  background: #f3f4f6;
  resize: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  font-family: Pretendard;
  padding: 15px;
  margin-top: 20px;
  &:focus {
    border: 1px solid #3692ff;
    outline: none;
  }
`;
export default AddItem;
