import Button from "../ui/button/button.tsx";
import { useNavigate } from "react-router-dom";
import "./landingpage.styles.css";
import Headline from "../ui/typography/headline/Headline.tsx";
import { useAppSelector } from "../../hooks/useRedux.ts";
import { selectToken } from "../../features/auth/auth.slice.ts";
import Text from "../ui/typography/text/Text.tsx";
import landingImage from "../../assets/images/invoice-illustration-concept-design-vector.jpg";
import logo from "../../assets/images/LandingPageLogo.jpeg";

const LandingPage = () => {
  const navigate = useNavigate();
  const token = useAppSelector(selectToken);

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img src={logo} alt="Logo" className="logo" />
          <Headline variant="h1" className="hero-title">
            Streamline Your Invoice Management
          </Headline>
          <Text className="hero-description">
            Simplify your workflow by creating, editing, and managing invoices all in one place.
          </Text>

          {/* Conditional button rendering */}
          {token ? (
            <Button variant="primary" onClick={() => navigate("/invoices")}>
              Start Managing Invoices
            </Button>
          ) : (
            <Button
              variant="secondary"
              onClick={() => navigate("/auth/login")}
              className="login-button"
            >
              Login
            </Button>
          )}
        </div>
        <div className="hero-image">
          <img src={landingImage} alt="Landing" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <Headline variant="h2" className="features-heading">
          Key Features
        </Headline>
        <div className="features-list">
          <div className="feature-item">
            <Headline variant="h3">Create Invoices</Headline>
            <Text>Create and customize invoices with ease using our intuitive editor.</Text>
          </div>
          <div className="feature-item">
            <Headline variant="h3">Track Payments</Headline>
            <Text>Keep track of all payments and due dates, ensuring timely payments.</Text>
          </div>
          <div className="feature-item">
            <Headline variant="h3">Manage Clients</Headline>
            <Text>Store and manage client details securely for easy access and invoicing.</Text>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <div className="cta-content">
          <Headline variant="h2">Ready to Get Started?</Headline>
          <Button variant="primary" onClick={() => navigate("/invoices")}>
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
