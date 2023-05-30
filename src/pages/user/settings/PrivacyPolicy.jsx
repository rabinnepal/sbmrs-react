import React from "react";
import { Typography, Box, Container } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container>
      <Box maxWidth="1000px">
        <Typography variant="h3" fontWeight="bold" sx={{ pt: 5, mb: 3 }}>
          Privacy Policy
        </Typography>
        <Box sx={{ mb: 4 }}>
          <Typography variant="body1">
            At our Sentiment Based Movie Rating System, we value your privacy
            and are committed to protecting your personal information. This
            privacy policy outlines how we collect, use, and safeguard the
            information you provide while using our platform.
          </Typography>
          <Typography variant="h5" gutterBottom>
            1. Information Collection
          </Typography>
          <Typography variant="body1">
            a. Personal Information: When you create an account on our platform,
            we may collect personal information such as your name, email
            address, and other relevant details necessary for providing our
            services.
          </Typography>
          <Typography variant="body1">
            b. Usage Data: We may collect non-personal information about your
            interactions with our platform, including your IP address, browser
            type, device information, and usage patterns. This information helps
            us analyze and improve our services.
          </Typography>
          <Typography variant="h5" gutterBottom>
            2. Use of Information
          </Typography>
          <Typography variant="body1">
            a. We use the information collected to provide and improve our
            platform, personalize your experience, and communicate with you
            regarding updates, new features, and promotional offers.
          </Typography>
          <Typography variant="body1">
            b. We may aggregate and anonymize data for statistical and research
            purposes, which does not personally identify you.
          </Typography>
          <Typography variant="h5" gutterBottom>
            3. Information Sharing
          </Typography>
          <Typography variant="body1">
            a. We do not sell, rent, or trade your personal information to third
            parties without your consent, except as required by law or to comply
            with legal obligations.
          </Typography>
          <Typography variant="body1">
            b. We may share your information with trusted third-party service
            providers who assist us in operating our platform, conducting
            business operations, or servicing you. These providers are bound by
            confidentiality agreements and are prohibited from using your
            information for any other purpose.
          </Typography>
          <Typography variant="h5" gutterBottom>
            4. Data Security
          </Typography>
          <Typography variant="body1">
            a. We employ industry-standard security measures to protect your
            personal information from unauthorized access, disclosure,
            alteration, or destruction. However, no method of transmission or
            storage is 100% secure, and we cannot guarantee absolute security.
          </Typography>
          <Typography variant="h5" gutterBottom>
            5. Third-Party Links
          </Typography>
          <Typography variant="body1">
            Our platform may contain links to third-party websites or services.
            We are not responsible for the privacy practices or content of these
            third-party sites. We encourage you to review the privacy policies
            of those sites before providing any personal information.
          </Typography>
          <Typography variant="h5" gutterBottom>
            6. Children's Privacy
          </Typography>
          <Typography variant="body1">
            Our platform is not intended for use by children under the age of
            13. We do not knowingly collect personal information from children.
            If we become aware that we have inadvertently collected personal
            information from a child, we will take steps to delete that
            information.
          </Typography>
          <Typography variant="h5" gutterBottom>
            7. Changes to the Privacy Policy
          </Typography>
          <Typography variant="body1">
            We reserve the right to update or modify this privacy policy at any
            time. Any changes will be effective immediately upon posting on our
            platform. Your continued use of our services after any modifications
            signify your acceptance of the updated privacy policy.
          </Typography>
          <Typography variant="body1">
            If you have any questions or concerns regarding our privacy policy,
            please contact us at contact@sbmrs.com.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
