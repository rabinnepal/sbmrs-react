import { Box, Container, Typography } from "@mui/material";
import React from "react";

const AboutUs = () => {
  return (
    <Box
      className="background-image"
      sx={{
        width: "100%",
        color: "white",
      }}
    >
      <Container>
        <Box>
          <Typography variant="h3" fontWeight="bold" sx={{ pt: 5, mb: 3 }}>
            About Us
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Welcome to our Sentiment Based Movie Rating System! We are dedicated
            to providing users with a platform to rate and review movies and
            series while utilizing advanced artificial intelligence algorithms
            to determine the sentiment of each review. Our goal is to assist
            movie enthusiasts in making informed decisions about what to watch
            next and to foster a community of passionate film lovers.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            At our core, we understand the importance of user opinions in
            shaping the movie-watching experience. By allowing users to rate and
            review movies and series, we enable them to express their thoughts,
            share their insights, and contribute to the collective knowledge of
            our platform. This creates a rich database of reviews that can help
            fellow movie enthusiasts make well-informed decisions.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Our sentiment analysis technology utilizes the power of artificial
            intelligence to analyze and interpret the sentiment behind each
            review. Through natural language processing and machine learning
            techniques, we can determine whether a review reflects a positive or
            negative sentiment. This analysis is based on various factors,
            including the words used, the overall tone, and the context in which
            the review is written.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Using sentiment analysis, we provide an additional layer of
            information to our users beyond simple numerical ratings. While
            traditional rating systems rely solely on numerical scores, our
            sentiment-based approach adds a qualitative dimension to the
            ratings. By understanding the sentiment behind a review, users can
            get a better sense of the overall reception of a movie or series,
            even before reading individual reviews.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Our platform features a comprehensive collection of movies and
            series from various genres, ensuring that there is something for
            everyone. Whether you're into action-packed blockbusters,
            thought-provoking dramas, heartwarming romances, or gripping TV
            series, our extensive library caters to all tastes and preferences.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            In addition to providing a platform for rating and reviewing movies
            and series, we also offer personalized recommendations based on
            individual preferences. By leveraging the power of AI algorithms, we
            analyze user ratings, reviews, and viewing history to suggest movies
            and series that align with their unique tastes. This feature
            enhances the movie discovery process and helps users uncover hidden
            gems they may have otherwise missed.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            We are committed to creating a vibrant and engaging community where
            movie lovers can connect, share their thoughts, and engage in
            discussions. Our platform encourages users to interact with each
            other through comments, likes, and sharing features, fostering a
            sense of community and collective movie appreciation.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Join us on our journey to revolutionize the way movies and series
            are rated and reviewed. Together, we can create a platform that
            empowers users with valuable insights and recommendations, making
            the movie-watching experience more enjoyable and informed. Discover
            new favorites, share your opinions, and let our AI-powered sentiment
            analysis help guide your movie choices.
          </Typography>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" fontWeight="bold ">
            Customer Service and Support
          </Typography>
          <Typography marginTop="1rem">
            <span style={{ fontWeight: "bold" }}>Help site.</span> Check out our
            help site for answers to your questions and to learn how to get the
            most out of SBMRS and your movies.
          </Typography>
          <Typography marginTop="1rem">
            <span style={{ fontWeight: "bold" }}>Community.</span> Get fast
            support from expert SBMRS users. If there isn't already an answer
            there to your question, post it and someone will quickly answer. You
            can also suggest and vote on new ideas for SBMRS or simply discuss
            movies with other fans.
          </Typography>
          <Typography marginTop="1rem">
            <span style={{ fontWeight: "bold" }}>Contact Us.</span> Contact our
            Customer Support if you don't find a solution on our support site or
            Community.
          </Typography>
        </Box>
        <Box sx={{ py: 5 }}>
          <Typography variant="h4" fontWeight="bold ">
            SBMRS HQ
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            SBMRS Inc.
          </Typography>
          <Typography>Sydney</Typography>
          <Typography>Australia</Typography>
          <Typography>Reg no. 2345-2312432-12</Typography>
          <Typography>contact@sbmrs.com</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
