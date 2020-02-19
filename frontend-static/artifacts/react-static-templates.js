

import React from 'react'
import universal, { setHasBabelPlugin } from 'C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/404.tsx'), universalOptions)
      t_0.template = 'C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/404.tsx'
      
const t_1 = universal(import('C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/403.tsx'), universalOptions)
      t_1.template = 'C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/403.tsx'
      
const t_2 = universal(import('C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/box-panel.tsx'), universalOptions)
      t_2.template = 'C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/box-panel.tsx'
      
const t_3 = universal(import('C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/container.tsx'), universalOptions)
      t_3.template = 'C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/container.tsx'
      
const t_4 = universal(import('C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/features.tsx'), universalOptions)
      t_4.template = 'C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/features.tsx'
      
const t_5 = universal(import('C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/index.tsx'), universalOptions)
      t_5.template = 'C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/index.tsx'
      
const t_6 = universal(import('C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/link-button.tsx'), universalOptions)
      t_6.template = 'C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/link-button.tsx'
      
const t_7 = universal(import('C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/list-icon.tsx'), universalOptions)
      t_7.template = 'C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/list-icon.tsx'
      
const t_8 = universal(import('C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/text-heading.tsx'), universalOptions)
      t_8.template = 'C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/text-heading.tsx'
      
const t_9 = universal(import('C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/tiles-section.tsx'), universalOptions)
      t_9.template = 'C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/tiles-section.tsx'
      

// Template Map
export default {
  'C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/404.tsx': t_0,
'C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/403.tsx': t_1,
'C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/box-panel.tsx': t_2,
'C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/container.tsx': t_3,
'C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/features.tsx': t_4,
'C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/index.tsx': t_5,
'C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/link-button.tsx': t_6,
'C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/list-icon.tsx': t_7,
'C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/text-heading.tsx': t_8,
'C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/tiles-section.tsx': t_9
}
// Not Found Template
export const notFoundTemplate = "C:/Users/respo/Source/GitHub/BasicFrontend/frontend-static/src/pages/404.tsx"

