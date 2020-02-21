

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
      
const t_1 = universal(import('/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/403.tsx'), universalOptions)
      t_1.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/403.tsx'
      
const t_2 = universal(import('/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/box-panel.tsx'), universalOptions)
      t_2.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/box-panel.tsx'
      
const t_3 = universal(import('/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/container.tsx'), universalOptions)
      t_3.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/container.tsx'
      
const t_4 = universal(import('/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/eye-catcher.tsx'), universalOptions)
      t_4.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/eye-catcher.tsx'
      
const t_5 = universal(import('/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/features.tsx'), universalOptions)
      t_5.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/features.tsx'
      
const t_6 = universal(import('/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/index.tsx'), universalOptions)
      t_6.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/index.tsx'
      
const t_7 = universal(import('/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/landing-light-page-style.tsx'), universalOptions)
      t_7.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/landing-light-page-style.tsx'
      
const t_8 = universal(import('/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/link-button.tsx'), universalOptions)
      t_8.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/link-button.tsx'
      
const t_9 = universal(import('/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/list-icon.tsx'), universalOptions)
      t_9.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/list-icon.tsx'
      
const t_10 = universal(import('/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/regular-light-page-style.tsx'), universalOptions)
      t_10.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/regular-light-page-style.tsx'
      
const t_11 = universal(import('/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/spotlight.tsx'), universalOptions)
      t_11.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/spotlight.tsx'
      
const t_12 = universal(import('/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/text-heading.tsx'), universalOptions)
      t_12.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/text-heading.tsx'
      
const t_13 = universal(import('/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/tiles-section.tsx'), universalOptions)
      t_13.template = '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/tiles-section.tsx'
      

// Template Map
export default {
  '/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/404.tsx': t_0,
'/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/403.tsx': t_1,
'/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/box-panel.tsx': t_2,
'/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/container.tsx': t_3,
'/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/eye-catcher.tsx': t_4,
'/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/features.tsx': t_5,
'/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/index.tsx': t_6,
'/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/landing-light-page-style.tsx': t_7,
'/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/link-button.tsx': t_8,
'/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/list-icon.tsx': t_9,
'/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/regular-light-page-style.tsx': t_10,
'/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/spotlight.tsx': t_11,
'/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/text-heading.tsx': t_12,
'/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/tiles-section.tsx': t_13
}
// Not Found Template
export const notFoundTemplate = "/home/kaysta/Dev/GitHub/BasicFrontend/frontend-static/src/pages/404.tsx"

