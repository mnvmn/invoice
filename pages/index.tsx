import type { NextPage } from "next";
import { ThemeProvider } from "styled-components";
import Form from "../components/Form/Form";
import { GlobalStyle } from "../styles/Global";
import { theme } from "../styles/theme";

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Form />
    </ThemeProvider>
  );
};

export default Home;
