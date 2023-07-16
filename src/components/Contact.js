// import {
//   TextInput,
//   PasswordInput,
//   Checkbox,
//   Anchor,
//   Paper,
//   Title,
//   Text,
//   Container,
//   Group,
//   Button,
//   Textarea
// } from "@mantine/core";

// function Contact() {
//   return (
//     <>
//       <Container size={420} my={40}>
//         <Title
//           align="center"
//           sx={(theme) => ({
//             fontFamily: `Greycliff CF, ${theme.fontFamily}`,
//             fontWeight: 900,
//           })}
//         >
//           feedBack <span className="primary">Form!</span>
//         </Title>
//         <Text color="dimmed" size="sm" align="center" mt={5}>
//           any feedback will be appreciated <Anchor>get In Touch.</Anchor>
//         </Text>

//         <Paper withBorder shadow="md" p={30} mt={30} radius="md">
//           <TextInput label="Name" placeholder="John Doe" required />
//           <TextInput label="Email" placeholder="john@gailcom" required />
//           <Textarea
//             placeholder="Your comment"
//             label="Your comment"
//           />
//           <Group position="apart" mt="md"></Group>
//           <Button fullWidth mt="xl">
//             Send Message
//           </Button>
//         </Paper>
//       </Container>
//     </>
//   );
// }

// export default Contact;



import React, { useState } from "react";
import {
  TextInput,
  Textarea,
  Button,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
} from "@mantine/core";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Form data is valid, perform further actions (e.g., send data to server)
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <Container size={420} my={40}>
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          feedBack <span className="primary">Form!</span>
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          any feedback will be appreciated <Anchor>get In Touch.</Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form onSubmit={handleSubmit}>
            <TextInput
              label="Name"
              name="name" // Added name attribute
              placeholder="John Doe"
              required
              value={formData.name}
              onChange={handleInputChange}
              error={errors.name}
            />
            <TextInput
              label="Email"
              name="email" // Added name attribute
              placeholder="john@gmail.com"
              required
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
            />
            <Textarea
              placeholder="Your comment"
              label="Your comment"
              name="comment" // Added name attribute
              value={formData.comment}
              onChange={handleInputChange}
              withAsterisk
            />
            <Button type="submit" style={{backgroundColor: "#118c4f"}} fullWidth mt="xl">
              Send Message
            </Button>
          </form>
        </Paper>
      </Container>
    </>
  );
}

export default Contact;

