import Footer from "../../components/Footer";
import { MapImage } from "../../components/RoadGraphics";

const CONTACT = {
  phone: "+855 23 XXX XXX",
  phoneHref: "tel:+85523000000",
  email: "info@ANAJAK-roads.com",
  linkedin: "https://www.linkedin.com/company/ANAJAK-road-engineering",
  address: ["ANAJAK Road Engineering Co., Ltd.", "Prek Pnov, Phnom Penh", "Cambodia"],
};

export const metadata = {
  title: "Contact — ANAJAK",
};

export default function ContactPage() {
  return (
    <>
      <div className="contact-wrap">
        <div className="contact-main">
          <span className="eyebrow-tag">Get In Touch</span>
          <h1>Let&apos;s Build Better Roads Together.</h1>
          <p className="contact-lead">
            Talk to our engineering team about rubber-modified asphalt supply, road construction
            contracts, or rubber recycling capacity. We reply to every enquiry from Phnom Penh.
          </p>

          <div className="contact-list">
            <div className="contact-row">
              <span className="contact-label">Phone</span>
              <a className="contact-value" href={CONTACT.phoneHref}>
                {CONTACT.phone}
              </a>
            </div>
            <div className="contact-row">
              <span className="contact-label">Email</span>
              <a className="contact-value" href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>
            </div>
            <div className="contact-row">
              <span className="contact-label">LinkedIn</span>
              <a
                className="contact-value"
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                ANAJAK Road Engineering →
              </a>
            </div>
            <div className="contact-row">
              <span className="contact-label">Office</span>
              <span className="contact-value">
                {CONTACT.address[0]}
                <br />
                {CONTACT.address[1]}
                <br />
                {CONTACT.address[2]}
              </span>
            </div>
          </div>
        </div>

        <div className="contact-info">
          <div className="info-block">
            <h4>Head Office</h4>
            <p>
              {CONTACT.address[0]}
              <br />
              {CONTACT.address[1]}
              <br />
              {CONTACT.address[2]}
            </p>
          </div>
          <div className="info-block">
            <h4>Working Hours</h4>
            <p>Monday – Saturday, 08:00 – 17:30 (GMT+7)</p>
          </div>
          <div className="info-block">
            <h4>Services</h4>
            <p>Rubber road construction, asphalt paving, rubber recycling, maintenance</p>
          </div>
          <div className="map-box">
            <MapImage
              src="/photos/rubber-recycling-machine.png"
              alt="ANAJAK rubber processing facility, Phnom Penh"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
