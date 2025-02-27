import React from "react";
import styled from "styled-components";
import { Link} from "react-scroll";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  display: flex;

  &:hover {
    transition: all 0.2s ease-in-out;
    border-bottom: 6px solid #ff0000;
  }
`;

const Links = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  cursor: pointer;
`;

export function NavLinks(props) {
  return (
    <NavLinksContainer>
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
      </LinksWrapper>
    </NavLinksContainer>
  );
}
