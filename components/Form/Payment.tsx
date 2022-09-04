import utils from "@shared/utils";
import { useContext } from "react";
import styled from "styled-components";
import DataContext from "./dataContext";

const Title = styled.section`
  display: flex;
  border-top: 1px solid
    ${(props) => {
      return props.theme.textSecondary;
    }};
  padding-top: 15px;
  margin-bottom: 20px;
  & > div {
    padding-left: ${(props) => {
      return props.theme.gutter + "px";
    }};
    margin-right: ${(props) => {
      return props.theme.gutter * 2 + "px";
    }};
  }
`;
const Section = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border: 1px solid
    ${(props) => {
      return props.theme.textPrimary;
    }};
  background: ${(props) => {
    return props.theme.bgHighlight;
  }};
  padding: ${(props) => {
    return props.theme.gutter + "px";
  }};
  .value {
    font-weight: bold;
  }
`;
const SubTitle = styled.section`
  display: flex;
  margin-bottom: 20px;
  & > div {
    padding-left: ${(props) => {
      return props.theme.gutter + "px";
    }};
    margin-right: ${(props) => {
      return props.theme.gutter * 2 + "px";
    }};
  }
`;

const Payment = () => {
  const {
    count,
    totalPrice,
    variableSymbol,
    dateBilled,
    dateDelivered,
    iban,
    daysDue,
  } = useContext(DataContext);
  const dueDate = utils.addDays(dateBilled, daysDue);

  return (
    <>
      <Title>
        <div>
          <div>Dátum vystavenia</div>
          <div className="text-bold">{utils.formatDate(dateBilled)}</div>
        </div>
        <div>
          <div>Dátum dodania</div>
          <div className="text-bold">{utils.formatDate(dateDelivered)}</div>
        </div>
        <div>
          <div>Dátum splatnosti</div>
          <div className="text-bold">{utils.formatDate(dueDate)}</div>
        </div>
      </Title>
      <Section>
        <div>
          <div>IBAN</div>
          <div className="text-bold">{iban}</div>
        </div>
        <div>
          <div>SWIFT</div>
          <div className="text-bold">TATRSKBX</div>
        </div>
        <div>
          <div>VS</div>
          <div className="text-bold">{variableSymbol}</div>
        </div>
        <div>
          <div>Suma na úhradu</div>
          <div className="text-bold">{utils.formatPrice(totalPrice)} EUR</div>
        </div>
      </Section>
      <SubTitle>
        <div>
          <div>Spôsob úhrady</div>
          <div>Bankový prevod</div>
        </div>
        <div>
          <div>Číslo objednávky</div>
          <div>{count}</div>
        </div>
      </SubTitle>
    </>
  );
};

export default Payment;
