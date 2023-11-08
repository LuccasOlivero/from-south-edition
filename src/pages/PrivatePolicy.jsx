import styled from "styled-components";

import { H2 } from "../ui/H2";
import { Noise } from "../ui/Noise";
import { Paragraph } from "../ui/Paragraph";
import Navbar from "../ui/Navbar";
import { Footer } from "../ui/Footer";
import { Line } from "../ui/Line";
import { ContainerRigths, Rigths, RigthsLink } from "../ui/ContainerRigths";
import { NavLink, useLocation } from "react-router-dom";
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

function PrivatePolicy() {
  const location = useLocation();

  useEffect(() => {
    // Scrolls to the top when the location changes
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Container>
        <H2 space="marginTop2">Privacy Policy</H2>
        <Paragraph type="policy">
          The privacy of your data—and it is your data, not ours!—is a big deal
          to us. In this policy, we lay out: what data we collect and why; how
          your data is handled; and your rights with respect to your data. We
          promise we never sell your data: never have, never will.
        </Paragraph>
        <H2 space="marginTop">Identity & access</H2>
        <Paragraph type="policy">
          When you sign up for a South Studio product, we ask for identifying
          information such as your name, email address, and maybe a company
          name. That&apos;s so you can personalize your new account, and we can
          send you product updates and other essential information. We may also
          send you optional surveys from time to time to help us understand how
          you use our products and to make improvements. With your consent, we
          will send you our newsletter and other updates. We sometimes also give
          you the option to add a profile picture that displays in our products.
        </Paragraph>
        <Paragraph type="policy">
          We&apos;ll never sell your personal information to third parties, and
          we won&apos;t use your name or company in marketing statements without
          your permission either.
        </Paragraph>
        <H2 space="marginTop">Billing information</H2>
        <Paragraph type="policy">
          If you sign up for a paid Sotuh Studio product, you will be asked to
          provide your payment information and billing address. Credit card
          information is submitted directly to our payment processor and
          doesn&apos;t hit South Studio servers. We store a record of the
          payment transaction, including the last 4 digits of the credit card
          number, for purposes of account history, invoicing, and billing
          support. We store your billing address so we can charge you for
          service, calculate any sales tax due, send you invoices, and detect
          fraudulent credit card transactions. We occasionally use aggregate
          billing information to guide our marketing efforts.
        </Paragraph>
        <H2 space="marginTop">Product interactions</H2>
        <Paragraph type="policy">
          We store on our servers the content that you upload or receive or
          maintain in your South Studio product accounts. This is so you can use
          our products as intended, for example, to create projects in Basecamp
          or to receive email in South Studio. We keep this content as long as
          your account is active. If you delete your account, we&apos;ll delete
          the content within 60 days.
        </Paragraph>
        <H2 space="marginTop">Geolocation data</H2>
        <Paragraph type="policy">
          For most of our products, we log the full IP address used to sign up a
          product account and retain that for use in mitigating future spammy
          signups. We also log all account access by full IP address for
          security and fraud prevention purposes, and we keep this login data
          for as long as your product account is active. Website interactions We
          collect information about your browsing activity for analytics and
          statistical purposes such as conversion rate testing and experimenting
          with new product designs. This includes, for example, your browser and
          operating system versions, your IP address, which web pages you
          visited and how long they took to load, and which website referred you
          to us. If you have an account and are signed in, these web analytics
          data are tied to your IP address and user account until your account
          is no longer active. The web analytics we use are described further in
          the Advertising and Cookies section.
        </Paragraph>
        <H2 space="marginTop">Website interactions</H2>
        <Paragraph type="policy">
          We collect information about your browsing activity for analytics and
          statistical purposes such as conversion rate testing and experimenting
          with new product designs. This includes, for example, your browser and
          operating system versions, your IP address, which web pages you
          visited and how long they took to load, and which website referred you
          to us. If you have an account and are signed in, these web analytics
          data are tied to your IP address and user account until your account
          is no longer active. The web analytics we use are described further in
          the Advertising and Cookies section.
        </Paragraph>
        <H2 space="marginTop">Voluntary correspondence</H2>
        <Paragraph type="policy">
          When you email South Studio with a question or to ask for help, we
          keep that correspondence, including your email address, so that we
          have a history of past correspondence to reference if you reach out in
          the future.
        </Paragraph>
        <Paragraph type="policy">
          We also store information you may volunteer, for example, written
          responses to surveys. If you agree to a customer interview, we may ask
          for your permission to record the conversation for future reference or
          use. We will only do so with your express consent.
        </Paragraph>
        <H2 space="marginTop">When we access or share your information</H2>
        <Paragraph type="policy">
          To provide products or services you&apos;ve requested. We use some
          third-party subprocessors to help run our applications and provide the
          Services to you. We also use third-party processors for other business
          functions such as managing newsletter subscriptions, sending customer
          surveys, and providing our company storefront. You can view the list
          at{" "}
          <StyledA href="https://github.com/basecamp/policies/blob/master/privacy/company-processors/index.md">
            Company processors
          </StyledA>
          .
        </Paragraph>
        <Paragraph type="policy">
          We may share your information at your direction if you integrate a
          third-party service into your use of our products. For example, we may
          allow you, at your option, to connect your Gmail account to your South
          Studio account so that you can use South Studio to receive and respond
          to your Gmail email. Email that you receive and respond to through
          South Studio from your Gmail address will be stored by both South
          Studio and Google and will be available to you from your Gmail account
          as well as your South Studio account.
        </Paragraph>
        <Paragraph type="policy">
          No South Studio human looks at your content except for limited
          purposes with your express permission, for example, if an error occurs
          that stops an automated process from working and requires manual
          intervention to fix. These are rare cases, and when they happen, we
          look for root cause solutions as much as possible to avoid them
          recurring. We may also access your data if required in order to
          respond to legal process (see “When required under applicable law”
          below).
        </Paragraph>
        <Paragraph type="policy">
          To exclude you from seeing our ads. Where permissible by law and if
          you have a Basecamp account, we may share a one-way hash of your email
          address with ad companies to exclude you from seeing our ads.
        </Paragraph>
        <Paragraph type="policy">
          To help you troubleshoot or squash a software bug, with your
          permission. If at any point we need to access your content to help you
          with a support case, we will ask for your consent before proceeding.
        </Paragraph>
        <Paragraph type="policy">
          To investigate, prevent, or take action regarding{" "}
          <StyledA href="https://github.com/basecamp/policies/blob/master/abuse/index.md">
            restricted uses
          </StyledA>
          . Accessing a customer&apos;s account when investigating potential
          abuse is a measure of last resort. We want to protect the privacy and
          safety of both our customers and the people reporting issues to us,
          and we do our best to balance those responsibilities throughout the
          process. If we discover you are using our products for a restricted
          purpose, we will take action as necessary, including notifying
          appropriate authorities where warranted.
        </Paragraph>
        <Paragraph type="policy">When required under applicable law.</Paragraph>
        <Paragraph type="policy">
          South Studio LLC is a U.S. company and all data infrastructure are
          located in the U.S.
        </Paragraph>
        <Paragraph type="policy">
          <StyledUl>
            <li>
              Requests for user data. Our policy is to not respond to government
              requests for user data unless we are compelled by legal process or
              in limited circumstances in the event of an emergency request.
              However, if U.S. law enforcement authorities have the necessary
              warrant, criminal subpoena, or court order requiring us to share
              data, we must comply. Likewise, we will only respond to requests
              from government authorities outside the U.S. if compelled by the
              U.S. government through procedures outlined in a mutual legal
              assistance treaty or agreement. It is South Studio&apos; policy to
              notify affected users before we share data unless we are legally
              prohibited from doing so, and except in some emergency cases.
            </li>
            <li>
              Preservation requests. Similarly, South Studio&apos; policy is to
              comply with requests to preserve data only if compelled by the
              U.S. Federal Stored Communications Act, 18 U.S.C. Section 2703(f),
              or by a properly served U.S. subpoena for civil matters. We do not
              share preserved data unless required by law or compelled by a
              court order that we choose not to appeal. Furthermore, unless we
              receive a proper warrant, court order, or subpoena before the
              required preservation period expires, we will destroy any
              preserved copies of customer data at the end of the preservation
              period.
            </li>
            <li>
              If we are audited by a tax authority, we may be required to share
              billing-related information. If that happens, we will share only
              the minimum needed, such as billing addresses and tax exemption
              information.
            </li>
            <li>
              Finally, if South Studio LLC is acquired by or merges with another
              company — we don&apos;t plan on that, but if it happens —
              we&apos;ll notify you well before any of your personal information
              is transferred or becomes subject to a different privacy policy.
            </li>
          </StyledUl>
        </Paragraph>
        <H2 space="marginTop">Your rights with respect to your information</H2>
        <Paragraph type="policy">
          At South Studio, we strive to apply the same data rights to all
          customers, regardless of their location. Some of these rights include:
        </Paragraph>
        <Paragraph type="policy">
          <StyledUl>
            <li>
              Right to Know. You have the right to know what personal
              information is collected, used, shared or sold. We outline both
              the categories and specific bits of data we collect, as well as
              how they are used, in this privacy policy.
            </li>

            <li>
              Right of Access. This includes your right to access the personal
              information we gather about you, and your right to obtain
              information about the sharing, storage, security and processing of
              that information. Right to Correction. You have the right to
              request correction of your personal information.
            </li>
            <li>
              Right to Erasure / “To Be Forgotten”. This is your right to
              request, subject to certain limitations under applicable law, that
              your personal information be erased from our possession and, by
              extension, from all of our service providers. Fulfillment of some
              data deletion requests may prevent you from using South Studio
              services because our applications may then no longer work. In such
              cases, a data deletion request may result in closing your account.
            </li>
            <li>
              Right to Complain. You have the right to make a complaint
              regarding our handling of your personal information with the
              appropriate supervisory authority.
            </li>
            <li>
              Right to Restrict Processing. This is your right to request
              restriction of how and why your personal information is used or
              processed, including opting out of sale of personal information.
              (Again: we never have and never will sell your personal data.)
            </li>
            <li>
              Right to Object. You have the right, in certain situations, to
              object to how or why your personal information is processed.
            </li>
            <li>
              Right to not Be Subject to Automated Decision-Making. You have the
              right to object to and prevent any decision that could have a
              legal or similarly significant effect on you from being made
              solely based on automated processes. This right is limited if the
              decision is necessary for performance of any contract between you
              and us, is allowed by applicable law, or is based on your explicit
              consent.
            </li>
            <li>
              Right to Non-Discrimination. We do not and will not charge you a
              different amount to use our products, offer you different
              discounts, or give you a lower level of customer service because
              you have exercised your data privacy rights. However, the exercise
              of certain rights may, by virtue of your exercising those rights,
              prevent you from using our Services. Many of these rights can be
              exercised by signing in and updating your account information. If
              you are in the EU or UK, you can contact your data protection
              authority to file a complaint or learn more about local privacy
              laws. Location of site and data Our products and other web
              properties are operated in the United States. If you are located
              in the European Union, UK, or elsewhere outside of the United
              States, please be aware that any information you provide to us
              will be transferred to and stored in the United States. By using
              our websites or Services and/or providing us with your personal
              information, you consent to this transfer.
            </li>
          </StyledUl>
        </Paragraph>
        <Paragraph type="policy">
          Many of these rights can be exercised by signing in and updating your
          account information.
        </Paragraph>
        <Paragraph type="policy">
          If you are in the EU or UK, you can contact your data protection
          authority to file a complaint or learn more about local privacy laws.
        </Paragraph>
        <Paragraph type="policy2">Last updated: Novenber 5, 2023</Paragraph>
      </Container>
      <FooterComplete />
    </>
  );
}

export default PrivatePolicy;
