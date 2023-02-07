import { BRAND_NAME } from "@/constants";
import Container from "../Container";

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="md">
        <div className="flex items-center justify-center border-t py-6">
          <p className="text-sm text-body-light">
            © {BRAND_NAME} | Developed by <strong>Huy Nguyen</strong>{" "}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
