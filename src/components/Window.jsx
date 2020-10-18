/** @jsx jsx */
import { jsx } from '@emotion/core'
import tw, { styled } from 'twin.macro'
import React from 'react'
import Draggable from 'react-draggable'
import { ResizableBox } from 'react-resizable'
import { FiMinus, FiMaximize, FiX } from 'react-icons/fi'

import '../resize.css'

export const Window = () => {
   const [size, setSize] = React.useState({ width: 640, height: 480 })

   const maximize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight - 80 })

   return (
      <Draggable
         handle=".handle"
         scale={1}
         position={null}
         bounds={{
            left: 0,
            top: 0,
            right: window.innerWidth - size.width,
            bottom: window.innerHeight - size.height - 80,
         }}
         defaultPosition={{ x: 0, y: 0 }}
      >
         <ResizableBox
            width={size.width}
            height={size.height}
            lockAspectRatio={true}
            minConstraints={[640, 480]}
            style={{ display: 'flex', flexDirection: 'column' }}
            maxConstraints={[
               window.innerWidth,
               window.innerHeight - size.height - 80,
            ]}
            onResize={data =>
               setSize({ width: data.clientX, height: data.clientY })
            }
         >
            <React.Fragment>
               <Styles.Header>
                  <Styles.Title className="handle">Twitter</Styles.Title>
                  <Styles.Icons>
                     <Styles.Icon title="Minimize">
                        <FiMinus color="#fff" />
                     </Styles.Icon>
                     <Styles.Icon title="Maximize" onClick={maximize}>
                        <FiMaximize color="#fff" />
                     </Styles.Icon>
                     <Styles.Icon title="Close">
                        <FiX color="#fff" strokeWidth="2.5" />
                     </Styles.Icon>
                  </Styles.Icons>
               </Styles.Header>
               <Styles.Main>window content</Styles.Main>
            </React.Fragment>
         </ResizableBox>
      </Draggable>
   )
}

const Styles = {
   Header: styled.header`
      ${tw`h-8 flex items-center justify-between bg-gray-900`}
      .handle {
         ${tw`cursor-pointer`}
      }
   `,
   Title: styled.h3`
      ${tw`pl-2 text-white flex-1`}
   `,
   Main: styled.main`
      ${tw`flex-1 bg-white`}
   `,
   Icons: styled.ul`
      ${tw`flex divide-x divide-gray-700 border-l border-gray-700`}
   `,
   Icon: styled.li`
      ${tw`w-8 h-8 flex items-center justify-center cursor-pointer transition-all transition duration-500 ease-in-out`};
      :nth-of-type(1),
      :nth-of-type(2) {
         :hover {
            ${tw`bg-gray-700`}
         }
      }
      :nth-of-type(3) {
         :hover {
            ${tw`bg-red-500`}
         }
      }
   `,
}
