

import React from 'react'
import universal, { setHasBabelPlugin } from '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/404.tsx'), universalOptions)
      t_0.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/404.tsx'
      
const t_1 = universal(import('/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/about.tsx'), universalOptions)
      t_1.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/about.tsx'
      
const t_2 = universal(import('/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/articles-by-source.tsx'), universalOptions)
      t_2.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/articles-by-source.tsx'
      
const t_3 = universal(import('/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/contact.tsx'), universalOptions)
      t_3.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/contact.tsx'
      
const t_4 = universal(import('/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/impressum.tsx'), universalOptions)
      t_4.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/impressum.tsx'
      
const t_5 = universal(import('/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/index.tsx'), universalOptions)
      t_5.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/index.tsx'
      
const t_6 = universal(import('/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects.tsx'), universalOptions)
      t_6.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects.tsx'
      
const t_7 = universal(import('/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/sources.tsx'), universalOptions)
      t_7.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/sources.tsx'
      
const t_8 = universal(import('/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/technic.tsx'), universalOptions)
      t_8.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/technic.tsx'
      

// Template Map
export default {
  '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/404.tsx': t_0,
'/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/about.tsx': t_1,
'/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/articles-by-source.tsx': t_2,
'/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/contact.tsx': t_3,
'/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/impressum.tsx': t_4,
'/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/index.tsx': t_5,
'/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/projects.tsx': t_6,
'/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/sources.tsx': t_7,
'/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/technic.tsx': t_8
}
// Not Found Template
export const notFoundTemplate = "/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/404.tsx"

