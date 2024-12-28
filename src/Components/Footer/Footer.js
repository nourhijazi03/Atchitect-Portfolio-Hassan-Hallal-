import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Footer() {
  return (
    <div className="footerCon">
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div>
              <h6>About</h6>
              <p class="text-justify">
                Interior Architect with a masters degree from institute of fine
                art Lebanese University with more than fifteen years in the
                field between Gulf-Lebanon and US.
              </p>
            </div>

            <div>
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <a href="https://www.facebook.com/hallal1981" target="_blank">
                  <FacebookIcon className="fbicon" />
                </a>

                <a href="https://wa.me/+96170977367" target="_blank">
                  <WhatsAppIcon className="whicon" />
                </a>

                <a
                  href="https://www.linkedin.com/in/hassan-hallal-7a306391/"
                  target="_blank"
                >
                  <LinkedInIcon className="fbicon" />
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div>
              <p class="copyright-text">
                Copyright &copy; 2024 All Rights Reserved by
                <a href="#"> NourH</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
