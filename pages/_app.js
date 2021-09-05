import {ChakraProvider} from '@chakra-ui/react';
import {AuthProvider} from '../components/Auth';

import {Footer} from '../components';
import {Flex} from '@chakra-ui/react';

const ScreenComponent = ({Component, pageProps, Footer}) => {
  return (
    <Flex direction="column" h="100vh">
      <Component {...pageProps} />
      <Footer />
    </Flex>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ChakraProvider>
        <ScreenComponent Component={Component} pageProps={pageProps} Footer={Footer}/>
      </ChakraProvider>
    </AuthProvider>
  )
}

export default MyApp;
