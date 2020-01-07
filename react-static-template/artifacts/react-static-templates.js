

import React from 'react'
import universal, { setHasBabelPlugin } from '/home/kaysta/Dev/GitHub/BasicFrontend/react-static-template/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('/home/kaysta/Dev/GitHub/BasicFrontend/react-static-template/src/pages/404.tsx'), universalOptions)
      t_0.template = '/home/kaysta/Dev/GitHub/BasicFrontend/react-static-template/src/pages/404.tsx'
      
const t_1 = universal(import('/home/kaysta/Dev/GitHub/BasicFrontend/react-static-template/src/pages/about.tsx'), universalOptions)
      t_1.template = '/home/kaysta/Dev/GitHub/BasicFrontend/react-static-template/src/pages/about.tsx'
      
const t_2 = universal(import('/home/kaysta/Dev/GitHub/BasicFrontend/react-static-template/src/pages/blog.tsx'), universalOptions)
      t_2.template = '/home/kaysta/Dev/GitHub/BasicFrontend/react-static-template/src/pages/blog.tsx'
      
const t_3 = universal(import('/home/kaysta/Dev/GitHub/BasicFrontend/react-static-template/src/pages/index.tsx'), universalOptions)
      t_3.template = '/home/kaysta/Dev/GitHub/BasicFrontend/react-static-template/src/pages/index.tsx'
      
const t_4 = universal(import('/home/kaysta/Dev/GitHub/BasicFrontend/react-static-template/src/containers/Post'), universalOptions)
      t_4.template = '/home/kaysta/Dev/GitHub/BasicFrontend/react-static-template/src/containers/Post'
      

// Template Map
export default {
  '/home/kaysta/Dev/GitHub/BasicFrontend/react-static-template/src/pages/404.tsx': t_0,
'/home/kaysta/Dev/GitHub/BasicFrontend/react-static-template/src/pages/about.tsx': t_1,
'/home/kaysta/Dev/GitHub/BasicFrontend/react-static-template/src/pages/blog.tsx': t_2,
'/home/kaysta/Dev/GitHub/BasicFrontend/react-static-template/src/pages/index.tsx': t_3,
'/home/kaysta/Dev/GitHub/BasicFrontend/react-static-template/src/containers/Post': t_4
}
// Not Found Template
export const notFoundTemplate = "/home/kaysta/Dev/GitHub/BasicFrontend/react-static-template/src/pages/404.tsx"

