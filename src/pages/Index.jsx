import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, useToast } from "@chakra-ui/react";

const Index = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Normally, you would send a request to your server here, and your server would handle the login
    toast({
      title: "Login Attempt",
      description: "This is a client-side placeholder and cannot actually log in due to security restrictions.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <VStack as="form" onSubmit={handleSubmit} spacing={4}>
        <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input type="text" name="username" value={credentials.username} onChange={handleChange} />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" value={credentials.password} onChange={handleChange} />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full">
          Login
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
