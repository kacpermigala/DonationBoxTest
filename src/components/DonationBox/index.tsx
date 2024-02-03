import { DonationBoxProvider } from "context/DonationBoxContext";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Box = styled.div`
  width: 600px;
  background-color: #fff;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 16px 32px 0px rgba(30, 42, 50, 0.08);
  border-radius: 5px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const DonationBox: React.FC = () => {
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleResize = useCallback(() => {
    if (window.innerWidth > 600) setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) {
      window.addEventListener("resize", handleResize);
      handleResize();
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  return (
    <Box>
      <DonationBoxProvider>
        <Header open={open} handleToggle={handleToggle} />
        {open && (
          <>
            <Body />
            <Footer />
          </>
        )}
      </DonationBoxProvider>
    </Box>
  );
};

export default DonationBox;
