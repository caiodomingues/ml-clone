import React from "react";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";
import tshirtImage from "../../assets/tshirt.png";
import SellerInfo from "../SellerInfo";
import ProductAction from "../ProductAction";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-shirt" src={tshirtImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto que você está esperando ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre a garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sapiente ab
      soluta nostrum vero eius, quo harum voluptas quia porro consequuntur,
      officiis laudantium. Aut aliquam consequatur nulla ab libero inventore!
    </h2>
    <br />
    <br />
    Itens inclusos: <br />
    - 1x Exemplo <br />
    - 1x Exemplo <br />
    - 1x Exemplo <br />
    - 1x Exemplo <br />
    - 1x Exemplo <br />
    - 1x Exemplo <br />
    - 1x Exemplo <br />
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
    tempora soluta.
  </Description>
);

export default Product;
