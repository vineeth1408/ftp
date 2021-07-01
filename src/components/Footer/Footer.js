import React from 'react';
import Button from "./Button";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaTelegramPlane,
  FaPinterest,
  FaReddit
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest availble Books and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/'>How it works</FooterLink>
            <FooterLink to='/'>Resources</FooterLink>
            <FooterLink to='/'>Books</FooterLink>
            <FooterLink to='/'>Interests</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to='/'>Contact</FooterLink>
            <FooterLink to='/'>Support</FooterLink>
            <FooterLink to='/'>Destinations</FooterLink>
            <FooterLink to='/'>Sponsorships</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to='/'>Submit Video</FooterLink>
            <FooterLink to='/'>Ambassadors</FooterLink>
            <FooterLink to='/'>Agency</FooterLink>
            <FooterLink to='/'>Influencer</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to='/'>Instagram</FooterLink>
            <FooterLink to='/'>Facebook</FooterLink>
            <FooterLink to='/'>Youtube</FooterLink>
            <FooterLink to='/'>Twitter</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            FTP
          </SocialLogo>
          <WebsiteRights>ForThePeople © 2020</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='https://www.facebook.com/forthepeoplengo/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            
            <SocialIconLink href='https://www.instagram.com/forthepeoplengo/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>

            <SocialIconLink href='https://youtube.com/channel/UC4nClSYXX1Yf3KhD2iWSOYw' target="_blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>

            <SocialIconLink href='https://www.twitter.com/forthepeoplengo/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>

            <SocialIconLink href='https://www.linkedin.com/company/nonprofit-forthepeople/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>

            <SocialIconLink href='https://t.me/forthepeoplengo' target='_blank' aria-label='LinkedIn'>
              <FaTelegramPlane />
            </SocialIconLink>

            <SocialIconLink href='https://t.me/forthepeoplengo' target='_blank' aria-label='LinkedIn'>
              <FaTelegramPlane />
            </SocialIconLink>

            <SocialIconLink href='https://www.pinterest.com/forthepeoplengo/' target='_blank' aria-label='LinkedIn'>
              <FaPinterest />
            </SocialIconLink>

            <SocialIconLink href='https://www.reddit.com/user/forthepeoplengo' target='_blank' aria-label='LinkedIn'>
              <FaReddit />
            </SocialIconLink>

          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
