"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Button, FormLabel, Text } from '@chakra-ui/react'
import { LoginInput } from './LoginInput';

/**
 * LoginForm component representing the login form
 * @returns {JSX.Element} The rendered JSX element
 */
export function LoginForm() {
    // Manages the username input
    const [username, setUsername] = useState('');
    // Manages the password input
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    /**
     * Handle the login button click
     * Checks if the input values are correct and navigates to the upload PDF page
     */
    const handleLogin = () => {
        // Check if input values are correct
        if (username === 'Blona' && password === 'ToTheSky') {
            router.push('/upload-pdf')
        } else {
            // If the credentials are incorrect: show error message to user
            setErrorMessage('Invalid credentials. Please try again.');
        }
    };

    return (
        <Box
            maxW="md"
            mx="auto"
            mt={8}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
        >
            <FormLabel htmlFor="username">Username</FormLabel>
            <LoginInput
                placeholder="Username"
                value={username}
                onChange={setUsername}
            />
            <FormLabel htmlFor="password">Password</FormLabel>
            <LoginInput
                placeholder="Password"
                value={password}
                onChange={setPassword}
                type="password"
            />
            <Button
                colorScheme="blue"
                onClick={handleLogin}
                width="full"
                mt={4}
            >Log In
            </Button>
            {/* Error message display */}
            {errorMessage && (
                <Text mt={2} color="red" fontSize="sm">
                    {errorMessage}
                </Text>
            )}
        </Box>
    );
}