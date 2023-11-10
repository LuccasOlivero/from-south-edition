import styled from "styled-components";

import { H2 } from "../ui/H2";
import { Paragraph } from "../ui/Paragraph";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Strong } from "../ui/Strong";
import FooterComplete from "../components.jsx/FooterComplete";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: black;
  padding: 0 13rem;
`;

const StyledUl = styled.ul`
  margin-left: 2.5rem;
  padding: 1rem 0;
`;

const StyledA = styled.a`
  color: #0f5b5b;
`;

function CookiePolicy() {
  const location = useLocation();

  useEffect(() => {
    // Scrolls to the top when the location changes
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Container>
        <H2 space="marginTop2">Cookie Policy</H2>
        <H2 space="marginTop">What Are Cookies</H2>
        <Paragraph type="policy">
          As is common practice with almost all professional websites this site
          uses cookies, which are tiny files that are downloaded to your
          computer, to improve your experience. This page describes what
          information they gather, how we use it and why we sometimes need to
          store these cookies. We will also share how you can prevent these
          cookies from being stored however this may downgrade or
          &apos;break&apos; certain elements of the sites functionality.
        </Paragraph>
        <H2 space="marginTop">How We Use Cookies</H2>
        <Paragraph type="policy">
          We use cookies for a variety of reasons detailed below. Unfortunately
          in most cases there are no industry standard options for disabling
          cookies without completely disabling the functionality and features
          they add to this site. It is recommended that you leave on all cookies
          if you are not sure whether you need them or not in case they are used
          to provide a service that you use.
        </Paragraph>
        <Paragraph type="policy">
          We&apos;ll never sell your personal information to third parties, and
          we won&apos;t use your name or company in marketing statements without
          your permission either.
        </Paragraph>
        <H2 space="marginTop">Disabling Cookies</H2>
        <Paragraph type="policy">
          You can prevent the setting of cookies by adjusting the settings on
          your browser (see your browser Help for how to do this). Be aware that
          disabling cookies will affect the functionality of this and many other
          websites that you visit. Disabling cookies will usually result in also
          disabling certain functionality and features of the this site.
          Therefore it is recommended that you do not disable cookies. This
          Cookies Policy was created with the help of the{" "}
          <StyledA href="https://www.cookiepolicygenerator.com/cookie-policy-generator/">
            <Strong>Cookies Policy Generator</Strong>.
          </StyledA>
        </Paragraph>
        <H2 space="marginTop">The Cookies We Set</H2>
        <Paragraph type="policy">
          <StyledUl>
            <li>Site preferences cookies</li>
            <li>
              In order to provide you with a great experience on this site we
              provide the functionality to set your preferences for how this
              site runs when you use it. In order to remember your preferences
              we need to set cookies so that this information can be called
              whenever you interact with a page is affected by your preferences.
            </li>
          </StyledUl>
        </Paragraph>
        <H2 space="marginTop">Third Party Cookies</H2>
        <Paragraph type="policy">
          In some special cases we also use cookies provided by trusted third
          parties. The following section details which third party cookies you
          might encounter through this site.
        </Paragraph>
        <Paragraph type="policy">
          <StyledUl>
            <li>
              This site uses Google Analytics which is one of the most
              widespread and trusted analytics solution on the web for helping
              us to understand how you use the site and ways that we can improve
              your experience. These cookies may track things such as how long
              you spend on the site and the pages that you visit so we can
              continue to produce engaging content.
            </li>
            <li>
              For more information on Google Analytics cookies, see the official
              Google Analytics page.
            </li>
          </StyledUl>
        </Paragraph>
        <H2 space="marginTop">More Information</H2>
        <Paragraph type="policy">
          Hopefully that has clarified things for you and as was previously
          mentioned if there is something that you aren&apos;t sure whether you
          need or not it&apos;s usually safer to leave cookies enabled in case
          it does interact with one of the features you use on our site.
        </Paragraph>
        <Paragraph type="policy">
          For more general information on cookies, please read{" "}
          <StyledA href="https://www.cookiepolicygenerator.com/sample-cookies-policy/">
            <Strong>the Cookies Policy article</Strong>.
          </StyledA>
        </Paragraph>
        <Paragraph type="policy2">
          However if you are still looking for more information then you can
          contact us through one of our preferred contact methods.
        </Paragraph>
      </Container>
      <FooterComplete />
    </>
  );
}

export default CookiePolicy;
