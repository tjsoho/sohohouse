import React, { useState } from "react";
import { Grid, Typography, TextField,  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SlideReveal } from "../../Animations/SlideReveal";
import { Reveal } from "../../Animations/Reveal";

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      // Handle successful form submission here
      console.log("Form submitted successfully!");
      setIsSubmitted(true);
      form.reset();

      // Redirect to the home page after a successful submission (assuming "/home" is your home page route)
      navigate("/#/home");
    } else {
      // Handle form submission errors here
      console.error("Form submission failed.");
    }
  };
  
  return (
    <Grid container spacing={0}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
          paddingTop:16,
          paddingBottom:16,
        }} className="bg-brand-blue"
      >
        <SlideReveal>
        <h2 className="text-brand-orange text-center text-5xl lg:text-7xl my-4 ">
          Let's Chat
        </h2>
        </SlideReveal>
        <Reveal>
        <Typography variant="h5" style={{ textAlign: 'center', fontSize: '20px' }} className="text-brand-cream px-16 xl:px-32" gutterBottom>
         We love to hear about new ideas.<br /><br /> Feel free to share your thoughts with us and we'll get back to you as soon as we can.
        </Typography>
        </Reveal>
      
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          
          padding: { xs: '50px', sm: "0 32px", lg: "0 64px" ,xl: "0 132px"},
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "flex-start", sm: "center"},
          alignItems: "center",
        }}
        className="bg-brand-cream"
      >
        {/* Close Button */}
        

        <form onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="access_key"
            value="11ca1af5-f8d5-4044-b6c3-9d57029c53d8" // Replace with your actual Access Key
          />
          <h3 className="font-Black text-center text-3xl lg:text-5xl text-brand-blue" >
            Contact Form
            </h3>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Your Message"
            name="message"
            multiline
            rows={5}
            variant="outlined"
            margin="normal"
            required
          />
          <div style={{ display: "none" }}>
            <input type="checkbox" name="botcheck" />
          </div>
          <button
            type="submit"
            className="bg-brand-blue text-brand-cream hover:text-brand-orange font-Black font-bold py-2 px-4 rounded-sm"
          >
            Send Message
          </button>
        </form>
        <p id="result" style={{ textAlign: "center" }}></p>
        {/* Display a pop-up message if the form is successfully submitted */}
        {isSubmitted && (
          <div className="popup">
            <Typography variant="h5">
              Thanks for getting in touch! I'll be reaching out to you very
              shortly.
            </Typography>
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export default ContactForm;
