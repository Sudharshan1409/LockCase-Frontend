import logo from "./logo.svg";
import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import React, { Component } from "react";
import {
  Authenticator,
  useAuthenticator,
  TextField,
  useTheme,
  View,
  Image,
  Button,
  Text,
  Heading,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

export default class App extends Component {
  render() {
    const components = {
      Header() {
        const { tokens } = useTheme();

        return (
          <View textAlign="center" padding={tokens.space.large}>
            <Image
              alt="Amplify logo"
              src="https://docs.amplify.aws/assets/logo-dark.svg"
            />
          </View>
        );
      },

      Footer() {
        const { tokens } = useTheme();

        return (
          <View textAlign="center" padding={tokens.space.large}>
            <Text color={`${tokens.colors.neutral["80"]}`}>
              &copy; All Rights Reserved
            </Text>
          </View>
        );
      },

      SignIn: {
        Header() {
          const { tokens } = useTheme();

          return (
            <Heading
              padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
              level={3}
            >
              Sign in to your account
            </Heading>
          );
        },
        Footer() {
          const { toResetPassword } = useAuthenticator();

          return (
            <View textAlign="center">
              <Button
                fontWeight="normal"
                onClick={toResetPassword}
                size="small"
                variation="link"
              >
                Reset Password
              </Button>
            </View>
          );
        },
      },

      SignUp: {
        Header() {
          const { tokens } = useTheme();

          return (
            <Heading
              padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
              level={3}
            >
              Create a new account
            </Heading>
          );
        },
        Footer() {
          const { toSignIn } = useAuthenticator();

          return (
            <View textAlign="center">
              <Button
                fontWeight="normal"
                onClick={toSignIn}
                size="small"
                variation="link"
              >
                Back to Sign In
              </Button>
            </View>
          );
        },
      },
      ConfirmSignUp: {
        Header() {
          const { tokens } = useTheme();
          return (
            <Heading
              padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
              level={3}
            >
              Enter Information:
            </Heading>
          );
        },
        Footer() {
          return <Text>Footer Information</Text>;
        },
      },
      SetupTOTP: {
        Header() {
          const { tokens } = useTheme();
          return (
            <Heading
              padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
              level={3}
            >
              Enter Information:
            </Heading>
          );
        },
        Footer() {
          return <Text>Footer Information</Text>;
        },
      },
      ConfirmSignIn: {
        Header() {
          const { tokens } = useTheme();
          return (
            <Heading
              padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
              level={3}
            >
              Enter Information:
            </Heading>
          );
        },
        Footer() {
          return <Text>Footer Information</Text>;
        },
      },
      ResetPassword: {
        Header() {
          const { tokens } = useTheme();
          return (
            <Heading
              padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
              level={3}
            >
              Enter Information:
            </Heading>
          );
        },
        Footer() {
          return <Text>Footer Information</Text>;
        },
      },
      ConfirmResetPassword: {
        Header() {
          const { tokens } = useTheme();
          return (
            <Heading
              padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
              level={3}
            >
              Enter Information:
            </Heading>
          );
        },
        Footer() {
          return <Text>Footer Information</Text>;
        },
      },
    };

    const formFields = {
      signIn: {
        username: {
          labelHidden: false,
          placeholder: "Enter your email",
        },
      },
      signUp: {
        name: {
          labelHidden: false,
          placeholder: "Enter your name",
        },
      },
      forceNewPassword: {
        password: {
          labelHidden: false,
          placeholder: "Enter your Password:",
        },
      },
      resetPassword: {
        username: {
          labelHidden: false,
          placeholder: "Enter your email:",
        },
      },
      confirmResetPassword: {
        confirmation_code: {
          labelHidden: false,
          placeholder: "Enter your Confirmation Code:",
          label: "New Label",
          isRequired: false,
        },
        confirm_password: {
          labelHidden: false,
          placeholder: "Enter your Password Please:",
        },
      },
      setupTOTP: {
        QR: {
          totpIssuer: "test issuer",
          totpUsername: "amplify_qr_test_user",
        },
        confirmation_code: {
          labelHidden: false,
          label: "New Label",
          placeholder: "Enter your Confirmation Code:",
          isRequired: false,
        },
      },
      confirmSignIn: {
        confirmation_code: {
          labelHidden: false,
          label: "New Label",
          placeholder: "Enter your Confirmation Code:",
          isRequired: false,
        },
      },
    };
    console.log("ho ho");
    return (
      <div className="App">
        <Authenticator
          loginMechanisms={["email"]}
          formFields={formFields}
          components={components}
          socialProviders={["google"]}
        >
          {({ signOut, user }) => (
            <>
              {console.log("user", user, user.username, user.email)}
              <Navbar bg="dark" variant="dark">
                <Container>
                  <Navbar.Brand href="#home">Home</Navbar.Brand>
                  <Nav className="me-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                  </Nav>
                  <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                      <a style={{ cursor: "pointer" }} onClick={signOut}>
                        Sign Out
                      </a>
                    </Navbar.Text>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
              <br />
              <Container>
                <Router>
                  <AppRoutes />
                </Router>
              </Container>
            </>
          )}
        </Authenticator>
      </div>
    );
  }
}
