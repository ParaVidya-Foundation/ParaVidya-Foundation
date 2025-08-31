"use client";

import React from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("../public/bgmain.png"); /* put bgmain.png in public/assets */
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled(Image)`
  width: 120px;
  height: 120px;
  animation: ${pulse} 2s infinite ease-in-out;
`;

const Loader: React.FC = () => {
  return (
    <LoaderWrapper>
      <SpinnerContainer>
        <LogoImage
          src="../public/Logo.png" // put logo in public/assets/Logo
          alt="Loading..."
          width={120}
          height={120}
          priority
        />
      </SpinnerContainer>
    </LoaderWrapper>
  );
};

export default Loader;
