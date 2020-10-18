/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import tw, { styled } from 'twin.macro'
import { AppIcon } from './components'
import {
   FaCodepen,
   FaGithub,
   FaTwitter,
   FaYoutube,
   FaBehance,
   FaDev,
} from 'react-icons/fa'

const App = () => {
   const apps = React.useMemo(
      () => [
         { bg: '#1DA1F2', icon: <FaTwitter size="18px" color="#fff" /> },
         { bg: '#333', icon: <FaGithub size="18px" color="#fff" /> },
         { bg: '#ff0000', icon: <FaYoutube size="18px" color="#fff" /> },
         { bg: '#ffdd40', icon: <FaCodepen size="18px" color="#fff" /> },
         { bg: '#0f3eff', icon: <FaBehance size="18px" color="#fff" /> },
         { bg: '#000', icon: <FaDev size="18px" color="#fff" /> },
      ],
      []
   )
   return (
      <Container>
         <main>main</main>
         <footer css={tw`flex items-center`}>
            <ul
               css={tw`space-x-3 pl-2 flex items-center h-16 m-auto bg-white rounded`}
            >
               {apps.map(app => (
                  <AppIcon key={app.bg} bg={app.bg}>
                     {app.icon}
                  </AppIcon>
               ))}
            </ul>
         </footer>
      </Container>
   )
}

export default App

const Container = styled.div`
   ${tw`h-screen w-screen flex flex-col`}
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   background-image: url('/imgs/wallpaper.jpg');

   main {
      flex: 1;
   }
   footer {
      height: 80px;
      ul {
         min-width: 480px;
         width: calc(100vw - 16px);
      }
   }
`
