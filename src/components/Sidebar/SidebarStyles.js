import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: grid;
  align-items: center;
  transition: 0.3s ease-in-out;
  z-index: 999;
  /* toggle open & close */

  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  /* top: 0; //keep open to style */
`;

export const CloseIcon = styled(FaTimes)`
  color: #555555;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #555555;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px); /* (row, height) */
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: none;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #555555;
  cursor: pointer;

  &:hover {
    color: grey;
    transition: 0.2s ease-in-out;
  }
`;
