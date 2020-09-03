import React from "react";

import {
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  MethodRow,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
  DevolutionIcon,
} from "./styles";

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>Novo</Condition>

      <Row>
        <h1>Camiseta branca aleatória qualquer</h1>
        <HeartIcon />
      </Row>

      <DispatchTag>Enviando normalmente</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">34</span>
          <span className="cents">99</span>
        </PriceRow>

        <InstallmentsInfo>em 3x de R$11.67</InstallmentsInfo>
      </PriceCard>

      <StockStatus>Estoque disponível</StockStatus>

      <MethodCard>
        <MethodRow>
          <CheckIcon />

          <div>
            <span className="title">Frete Grátis</span>
            <span className="details">
              Chegará entre os dias 09 e 14 de setembro
            </span>

            <a href="#" className="more">
              Ver mais opções
            </a>
          </div>
        </MethodRow>

        <MethodRow>
          <DevolutionIcon />
          <div>
            <span className="title">Devolução grátis</span>
            <span className="details">
              Você tem 30 dias a partir do recebimento
            </span>

            <a href="#" className="more">
              Saiba mais
            </a>
          </div>
        </MethodRow>
      </MethodCard>

      <Actions>
        <Button solid>Comprar agora</Button>
        <Button>Adicionar ao carrinho</Button>
      </Actions>

      <Benefits>
        <li>
          <ShieldIcon />
          <p>
            Compra Garantida, receba o produto que está esperando ou devolvemos
            o seu dinheiro
          </p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;
