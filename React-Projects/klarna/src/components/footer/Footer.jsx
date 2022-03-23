import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__col1">
          <img src="./images/whitelogo.svg" alt="logo" width="80px" />
          <select name="" id="">
            <option value="au" label="Australia">
              Australia
            </option>
            <option value="at" label="Austria">
              Austria
            </option>
            <option value="be" label="Belgium (nl)">
              Belgium (nl)
            </option>
            <option value="fr-be" label="Belgium (fr)">
              Belgium (fr)
            </option>
            <option value="dk" label="Denmark">
              Denmark
            </option>
            <option value="fi" label="Finland">
              Finland
            </option>
            <option value="fr" label="France">
              France
            </option>
            <option value="de" label="Germany">
              Germany
            </option>
            <option value="it" label="Italy">
              Italy
            </option>
            <option value="ie" label="Ireland">
              Ireland
            </option>
            <option value="nl" label="Netherlands">
              Netherlands
            </option>
            <option value="no" label="Norway">
              Norway
            </option>
            <option value="nz" label="New Zealand">
              New Zealand
            </option>
            <option value="pl" label="Poland">
              Poland
            </option>
            <option value="es" label="Spain">
              Spain
            </option>
            <option value="se" label="Sweden">
              Sweden
            </option>
            <option value="ch" label="Switzerland (de)">
              Switzerland (de)
            </option>
            <option value="en-ch" label="Switzerland (en)">
              Switzerland (en)
            </option>
            <option value="fr-ch" label="Switzerland (fr)">
              Switzerland (fr)
            </option>
            <option value="it-ch" label="Switzerland (it)">
              Switzerland (it)
            </option>
            <option value="uk" label="United Kingdom">
              United Kingdom
            </option>
            <option  value="us" label="United States">
              United States
            </option>
            <option value="international" label="International">
              International
            </option>
            <option value="ca" label="Canada">
              Canada
            </option>
            <option value="fr-ca" label="Canada (fr)">
              Canada (fr)
            </option>
          </select>
        </div>
        <div className="footer__col2">
          <h4>Klarna</h4>
          <p>About us</p>
          <p>Careers</p>
          <p>Legal</p>
          <p>Press</p>
          <p>Extra O blog</p>
          <p>Privacy</p>
          <p>Email connect</p>
          <p>Sustainability</p>
        </div>
        <div className="footer__col3">
          <h4>Customer</h4>
          <p>Buy now pay later</p>
          <p>Contact us via app</p>
          <p>Customer service</p>
          <p>Klarna stores</p>
          <p>Shopping app</p>
          <p>Rewards club</p>
          <p>Buyer Protection Policy</p>
          <p>Feedback and complaints</p>
          <p>Shopping inspiration</p>
        </div>

        <div className="footer__col4">
          <h4>Business</h4>
          <p>Sell with Klarna</p>
          <p>Payment methods</p>
          <p>Platforms and partners</p>
          <p>Partner program</p>
          <p>Business login</p>
          <p>Business support</p>
          <p>Operational status</p>
        </div>
      </div>
      <div className="footer__credit">
        <p>
          Monthly financing through Klarna is issued by WebBank, member FDIC.
          Copyright © 2005-2022 Klarna Inc. NMLS #1353190, 629 N. High Street,
          Third Floor, Columbus, OH 43215. Other CA resident loans made or
          arranged pursuant to a California Finance Lenders Law license.
        </p>
        <div>
          <p>Legal</p>
          <p>Term</p>
          <p>Privecy Policy</p>
          <p>Cookie</p>
          <p>sitestamp</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
