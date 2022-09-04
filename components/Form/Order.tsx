import utils from "@shared/utils";
import { useContext } from "react";
import styled from "styled-components";
import DataContext from "./dataContext";

const Section = styled.section`
  margin-bottom: 20px;
  table {
    width: 100%;
    border-collapse: collapse;
    tr {
      th {
        background: ${(props) => {
          return props.theme.bgHighlight;
        }};
      }
      td,
      th {
        border-bottom: 1px solid
          ${(props) => {
            return props.theme.textSecondary;
          }};
        padding: 2px 5px;
        &:first-of-type {
          padding-left: 10px;
        }
        &:last-of-type {
          padding-right: 10px;
        }
      }
      th {
        padding-top: 10px;
        padding-bottom: 8px;
      }
    }
  }
`;

const Title = styled.section`
  margin-bottom: 10px;
`;

const Summary = styled.section`
  display: flex;
  margin-top: 40px;
  justify-content: end;
  font-weight: bold;
  .total-label {
    margin-right: 50px;
  }
  .total {
    font-size: 1.2em;
  }
  .total,
  .total-label {
    display: flex;
    span {
      align-self: flex-end;
      line-height: 1em;
    }
  }
`;

const Order = () => {
  const { totalPrice, order, title } = useContext(DataContext);

  return (
    <Section>
      <Title>{title}</Title>
      <table>
        <thead>
          <tr>
            <th className="align-right">Č.</th>
            <th className="align-left">Názov položky</th>
            <th className="align-right">Počet</th>
            <th className="align-right">MJ</th>
            <th className="align-right">Jedn. cena</th>
            <th className="align-right">Cena spolu</th>
          </tr>
        </thead>
        <tbody>
          {order.map((item, index) => {
            return (
              <tr key={item[2]}>
                <td className="align-right">{index + 1}.</td>
                <td className="align-left">{item[2]}</td>
                <td className="align-right">{utils.formatPrice(item[1])}</td>
                <td className="align-right">hod</td>
                <td className="align-right">{utils.formatPrice(item[0])}</td>
                <td className="align-right">
                  {utils.formatPrice(item[0] * item[1])}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Summary>
        <div className="total-label">
          <span>Celkom</span>
        </div>
        <div className="total">
          <span>EUR {utils.formatPrice(totalPrice)}</span>
        </div>
      </Summary>
    </Section>
  );
};

export default Order;
