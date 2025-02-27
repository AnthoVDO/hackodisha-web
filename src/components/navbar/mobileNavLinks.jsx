import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";

import { Link} from "react-scroll";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 10px;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: transparent;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 50px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  padding-top: 10px;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  display: flex;
`;

const Links = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    border-bottom: 2px solid #ff0000;
  }
`;
const Marginer = styled.div`
  height: 2em;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <Links
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Home
            </Links>
          </LinkItem>
          <LinkItem>
            <Links
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              About Us
            </Links>
          </LinkItem>
          <LinkItem>
            <Links
              activeClass="active"
              to="tracks"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Tracks
            </Links>
          </LinkItem>
          <LinkItem>
            <Links
              activeClass="active"
              to="events"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Events
            </Links>
          </LinkItem>
          <LinkItem>
            <Links
              activeClass="active"
              to="sponsors"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Sponsors
            </Links>
          </LinkItem>
          <LinkItem>
            <Links
              activeClass="active"
              to="faq"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              FAQ
            </Links>
          </LinkItem>
          <Marginer />
          <Accessibility />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
