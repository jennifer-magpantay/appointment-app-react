import React from "react";
import styled from "styled-components";
import { SiBehance, SiLinkedin, SiGithub } from "react-icons/si";

const FooterContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 1% 2%;
  background-color: var(--blue);
  color: var(--white);
  text-align: center;
  & p {
    font-size: 12px;
  }
`;

const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1%;
  border-bottom: 1px solid var(--white);
  text-align: left;

  @media (max-width: 800px) {
    flex-flow: column;
  }
`;

const FooterContent = styled.div`
  flex: 1;
  padding-right: 1%;
  & h6 {
    margin: 0 0 1% 0;
  }
  & li {
    font-size: 12px;
  }

  @media (max-width: 800px) {
    padding-top: 3%;
  }
`;

const SocialIconWrapper = styled.div`
  width: auto;
  display: flex;
  padding-top: 2%;
  font-size: 20px;
  & a {
    margin-right: 2%;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterContent>
          <h6>ABOUT ME</h6>
          <ul>
            <li>Jennifer Magpantay</li>
            <li>Curious and non-stop learner</li>
            <li>
              Graduated in IT CCT College Dublin, 2020, looking for graduate
              positions and work experience in Web Development or Web Design
            </li>
            <li>Currently based in Dublin, IRL. Open to remote positions</li>
          </ul>
        </FooterContent>

        <FooterContent>
          <h6>INTERESTED IN</h6>
          <ul>
            <li>Front End Web Development</li>
            <li>Web Design</li>
            <li>UX/UI Design</li>
            <li>Graphic Design</li>
          </ul>
        </FooterContent>

        <FooterContent>
          <h6>CONTACT ME</h6>
          <ul>
            <li>
              <a href="mailto:jennifer.magpantay@gmail.com">
                {" "}
                popme@message.com
              </a>
            </li>
          </ul>

          <SocialIconWrapper>
            <a href="https://www.linkedin.com/in/jennifermagpantay/">
              <SiLinkedin />
            </a>

            <a href="https://github.com/jennifer-magpantay">
              <SiGithub />
            </a>

            <a href="https://www.behance.net/jennifer_magpantay">
              <SiBehance />
            </a>
          </SocialIconWrapper>

          {/* <a href="https://www.linkedin.com/in/jennifermagpantay/"></a> */}

          {/* <a href="https://github.com/jennifer-magpantay"></a> */}

          {/* <a href="https://www.behance.net/jennifer_magpantay"></a> */}
        </FooterContent>
      </FooterWrapper>
      <p>
        Copyright &copy; 2020 Developed by Jennifer Magpantay using HTML5, CSS3
        & React
      </p>
    </FooterContainer>
  );
}

export default Footer;
