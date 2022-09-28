import styled from "styled-components";
import { Routes } from "@config/routes";
import { useState } from "react";

const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const ContactButton = styled.button`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  padding: 1rem;
  background: #7f56d9;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;

  &:hover {
    background: #6941c6;
  }
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;
const A = styled.a`
  align-items: center;
  text-decoration: none;
  padding-left: 32px;
  color: #667085;
  font-size: 16px;
`;

const AtoDash = styled.a`
  background: #7F56D9;
  color: white;
  font-size: 16px;
  text-decoration: none;
  padding: 10px 18px;
  border-radius: 8px;
`;

const IssuesPage = () => {
  const [modal, setModal] = useState(false);

  const setModalTrue = () => {
    setModal(true)
  }

  return (
    <div>
      <Header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />
        <Div>
          <A href="/">Home</A>
          <A href="/products">Products</A>
          <A href="/documentation">Documentation</A>
          <A href="/pricing">Pricing</A>
        </Div>
        <AtoDash href={Routes.projects}>Open Dashboard</AtoDash>
      </Header>
      {modal && 
      <div style={{position: 'absolute', zIndex: 10, top: 0, width: '100%', height: '100%', background:'rgba(52, 64, 84, 0.6', backdropFilter: 'blur' }}>
        {/* add modal here*/}
      </div>} 
      <ContactButton onClick={setModalTrue}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </ContactButton>
    </div>
  );
};

export default IssuesPage;
