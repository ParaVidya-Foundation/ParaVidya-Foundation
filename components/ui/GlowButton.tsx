'use client';
import React from 'react';
import styled from 'styled-components';

interface GradientButtonProps {
  text: string;
  onClick?: () => void;
}

const GradientButton: React.FC<GradientButtonProps> = ({ text, onClick }) => {
  return (
    <StyledWrapper>
      <button onClick={onClick}>
        {text}
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`star star-${i + 1}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 784.11 815.53"
              xmlSpace="preserve"
            >
              <path
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 
                207.96,29.37 371.12,197.68 392.05,407.74 
                20.93,-210.06 184.09,-378.37 392.05,-407.74 
                -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              />
            </svg>
          </div>
        ))}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    position: relative;
    padding: 14px 30px;
    background: linear-gradient(90deg, #f7a72b, #fbd75d);
    font-size: 17px;
    font-weight: 600;
    color: white;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 15px rgba(255, 188, 66, 0.35);
    overflow: hidden;
    font-family: 'Inter', sans-serif;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.2px;
  }

  button:hover {
    background: linear-gradient(90deg, #f6b23f, #f7cb66);
    box-shadow: 0 0 30px rgba(255, 200, 90, 0.5);
    transform: translateY(-1px);
  }

  .star {
    position: absolute;
    width: 9px;
    height: auto;
    opacity: 0;
    filter: drop-shadow(0 0 3px #fff4b3);
    transition: all 0.8s ease-in-out;
  }

  button:hover .star {
    opacity: 1;
    transform: scale(1.15);
  }

  .star svg path {
    fill: #fff5c4;
  }

  /* Star placement for balanced symmetry */
  .star-1 { top: 18%; left: 12%; }
  .star-2 { top: 55%; left: 22%; }
  .star-3 { bottom: 20%; left: 40%; }
  .star-4 { top: 25%; right: 18%; }
  .star-5 { bottom: 12%; right: 28%; }
  .star-6 { top: 42%; right: 42%; }

  @media (max-width: 768px) {
    button {
      font-size: 15px;
      padding: 12px 24px;
    }
  }
`;

export default GradientButton;
