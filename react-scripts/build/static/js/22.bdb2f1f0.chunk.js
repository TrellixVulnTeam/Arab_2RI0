(this["webpackJsonpthefront-js--react-scripts"]=this["webpackJsonpthefront-js--react-scripts"]||[]).push([[22],{827:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return p}));var n=t(1),o=t(0),i=(t(2),t(785)),a=t(751),s=t(75),c=t(184),d=t(4),m=[{name:"imageSrc",type:"string",default:"",description:"Side image"},{name:"backgroundColor",type:"string",default:"",description:"Background color of the hero"},{name:"children",type:"node",default:"",description:"Children to placed inside the hero"},{name:"imageSrcSet",type:"string",default:"",description:"Side image srcset"},{name:"reverse",type:"bool",default:"",description:"Should show in reverse order"},{name:"className",type:"string",default:"",description:"External classes"}],p=function(e){var r=Object.assign({},e);return Object(o.jsxs)("div",Object(n.a)(Object(n.a)({},r),{},{children:[Object(o.jsx)(c.e,{title:"Description",gutterBottom:!0,children:Object(o.jsx)(c.b,{title:"HeroSideImage",path:"src/components/organisms/HeroSideImage/HeroSideImage.js",description:"Component to display the side image hero"})}),Object(o.jsx)(c.e,{title:"Import",gutterBottom:!0,children:Object(o.jsx)(c.a,{code:"\nimport { HeroSideImage } from 'components/organisms';\n// or\nimport HeroSideImage from 'components/organisms/HeroSideImage';\n"})}),Object(o.jsx)(c.e,{title:"Props & Methods",gutterBottom:!0,children:Object(o.jsx)(c.d,{dataProperties:m})}),Object(o.jsx)(c.e,{title:"Basic Example",gutterBottom:!0,children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",children:Object(o.jsx)(d.q,{imageSrc:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1.jpg",children:Object(o.jsxs)(a.a,{container:!0,spacing:4,children:[Object(o.jsx)(a.a,{item:!0,xs:12,children:Object(o.jsx)(s.a,{variant:"h4",children:"Join the world's leading companies at TheFront 2020"})}),Object(o.jsx)(a.a,{item:!0,xs:12,children:Object(o.jsx)(s.a,{variant:"h6",children:"Download our overview and a member of our specialist team will be in touch."})})]})})}),Object(o.jsx)(c.a,{code:"\nimport React from 'react';\nimport { Box, Grid, Typography } from '@material-ui/core';\nimport { HeroSideImage } from 'components/organisms';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border=\"1px solid #ccc\" borderRadius=\"4px\">\n      <HeroSideImage imageSrc=\"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1.jpg\">\n        <Grid container spacing={4}>\n          <Grid item xs={12}>\n            <Typography variant=\"h4\" style={{ color: isMd ? 'inherit' : 'white' }}>\n              Join the world's leading companies at TheFront 2020\n            </Typography>\n          </Grid>\n          <Grid item xs={12}>\n            <Typography variant=\"h6\" style={{ color: isMd ? 'inherit' : 'white' }}>\n              Download our overview and a member of our specialist team will be in touch.\n            </Typography>\n          </Grid>\n        </Grid>\n      </HeroSideImage>\n    </Box>\n  );\n}\n"})]})}),Object(o.jsx)(c.e,{title:"Reverse Order Example",gutterBottom:!0,children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",children:Object(o.jsx)(d.q,{imageSrc:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery2.jpg",reverse:!0,children:Object(o.jsxs)(a.a,{container:!0,spacing:4,children:[Object(o.jsx)(a.a,{item:!0,xs:12,children:Object(o.jsx)(s.a,{variant:"h4",children:"Join the world's leading companies at TheFront 2020"})}),Object(o.jsx)(a.a,{item:!0,xs:12,children:Object(o.jsx)(s.a,{variant:"h6",children:"Download our overview and a member of our specialist team will be in touch."})})]})})}),Object(o.jsx)(c.a,{code:'\nimport React from \'react\';\nimport { Box, Grid, Typography } from \'@material-ui/core\';\nimport { HeroSideImage } from \'components/organisms\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">\n      <HeroSideImage imageSrc="https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery2.jpg" reverse>\n        <Grid container spacing={4}>\n          <Grid item xs={12}>\n            <Typography variant="h4">\n              Join the world\'s leading companies at TheFront 2020\n            </Typography>\n          </Grid>\n          <Grid item xs={12}>\n            <Typography variant="h6">\n              Download our overview and a member of our specialist team will be in touch.\n            </Typography>\n          </Grid>\n        </Grid>\n      </HeroSideImage>\n    </Box>\n  );\n}\n'})]})})]}))}}}]);