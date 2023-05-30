import React from "react";
import { Typography, Box, Container } from "@mui/material";

const TermsAndConditions = () => {
  return (
    <Container>
      <Box maxWidth="1000px">
        <Typography variant="h3" fontWeight="bold" sx={{ pt: 5, mb: 3 }}>
          Terms and Conditions
        </Typography>
        <Box sx={{ my: 3 }}>
          <Typography variant="body1">
            Welcome to our Sentiment Based Movie Rating System. These terms and
            conditions outline the rules and regulations for the use of our
            platform.
          </Typography>

          <Typography variant="h5" gutterBottom>
            1. Acceptance of Terms
          </Typography>

          <Typography variant="body1">
            By accessing or using our platform, you acknowledge that you have
            read, understood, and agree to be bound by these terms and
            conditions. If you do not agree with any part of these terms, please
            refrain from using our services.
          </Typography>

          <Typography variant="h5" gutterBottom>
            2. User Conduct
          </Typography>

          <Typography variant="body1">
            a. You are solely responsible for any content you post, including
            reviews, ratings, comments, and other contributions on our platform.
            You agree not to post any content that is illegal, abusive,
            defamatory, obscene, or infringes upon the rights of others.
          </Typography>

          <Typography variant="body1">
            b. You must be at least 13 years old to use our platform. If you are
            under 18 years old, you confirm that you have obtained parental
            consent to use our services.
          </Typography>

          <Typography variant="body1">
            c. You agree to use our platform for lawful purposes only and not to
            engage in any activities that may disrupt or interfere with the
            functioning of our platform or compromise the security of our
            systems.
          </Typography>

          <Typography variant="h5" gutterBottom>
            3. Intellectual Property
          </Typography>

          <Typography variant="body1">
            a. Our platform and its contents, including but not limited to
            logos, trademarks, text, graphics, and software, are the property of
            the platform owners and are protected by applicable intellectual
            property laws.
          </Typography>

          <Typography variant="body1">
            b. You may not reproduce, distribute, modify, or create derivative
            works of any content from our platform without obtaining explicit
            permission from the platform owners.
          </Typography>

          <Typography variant="h5" gutterBottom>
            4. Privacy
          </Typography>

          <Typography variant="body1">
            a. We collect and process personal information in accordance with
            our Privacy Policy. By using our platform, you consent to the
            collection and processing of your personal information as described
            in the Privacy Policy.
          </Typography>

          <Typography variant="body1">
            b. You are responsible for maintaining the confidentiality of your
            account credentials and for all activities that occur under your
            account. Notify us immediately of any unauthorized use of your
            account or any other security breach.
          </Typography>

          <Typography variant="h5" gutterBottom>
            5. Limitation of Liability
          </Typography>

          <Typography variant="body1">
            a. Our platform is provided on an "as is" and "as available" basis
            without any warranties or representations, express or implied. We do
            not guarantee the accuracy, completeness, or availability of the
            content on our platform.
          </Typography>

          <Typography variant="body1">
            b. We shall not be liable for any direct, indirect, incidental,
            consequential, or exemplary damages arising out of or in connection
            with the use of our platform.
          </Typography>

          <Typography variant="h5" gutterBottom>
            6. Modification of Terms
          </Typography>

          <Typography variant="body1">
            We reserve the right to modify or update these terms and conditions
            at any time without prior notice. Your continued use of our platform
            after any changes to these terms signifies your acceptance of the
            modified terms.
          </Typography>

          <Typography variant="h5" gutterBottom>
            7. Governing Law
          </Typography>

          <Typography variant="body1">
            These terms and conditions shall be governed by and construed in
            accordance with the laws of Sydney, Australia. Any legal disputes
            arising out of or in connection with these terms shall be subject to
            the exclusive jurisdiction of the courts in Sydney, Australia.
          </Typography>

          <Typography variant="body1">
            If you have any questions or concerns regarding these terms and
            conditions, please contact us at contact@sbmrs.com.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default TermsAndConditions;
