"use strict";(self.webpackChunksymphony_docs=self.webpackChunksymphony_docs||[]).push([[79],{9878:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=s(4848),o=s(8453);const r={sidebar_position:1},i="What is Symphony?",a={id:"docs/overview",title:"What is Symphony?",description:"Symphony is an open-source project that allows you to define custom",source:"@site/docs/docs/overview.md",sourceDirName:"docs",slug:"/docs/overview",permalink:"/docs/docs/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/docs/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",next:{title:"Getting started",permalink:"/docs/category/getting-started"}},c={},l=[{value:"Developer interface",id:"developer-interface",level:3},{value:"ResourceGroup",id:"resourcegroup",level:3},{value:"ResourceGroup Instance",id:"resourcegroup-instance",level:3},{value:"Manage any group of resources as one unit",id:"manage-any-group-of-resources-as-one-unit",level:3},{value:"Collaborate",id:"collaborate",level:3},{value:"Standardize",id:"standardize",level:3}];function d(e){const n={a:"a",em:"em",h1:"h1",h3:"h3",header:"header",img:"img",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"what-is-symphony",children:"What is Symphony?"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Symphony"})," is an open-source project that allows you to define custom\n",(0,t.jsx)(n.strong,{children:"Kubernetes"})," APIs using straightforward configuration. With Symphony,\nyou can easily configure new custom APIs that create a group of Kubernetes\nobjects and the logical operations between them. Symphony automatically\ncalculates the order in which objects should be created. You can pass values\nfrom one object to another, set default values for fields in the API\nspecification, and incorporate conditionals into your custom API definitions.\nEnd users can easily call these custom APIs to create grouped resources."]}),"\n",(0,t.jsx)(n.h1,{id:"how-does-symphony-work",children:"How does Symphony work?"}),"\n",(0,t.jsx)(n.h3,{id:"developer-interface",children:"Developer interface"}),"\n",(0,t.jsxs)(n.p,{children:["When the end user applies a YAML spec to the cluster using the ",(0,t.jsx)(n.strong,{children:"Custom API"}),",\nthe API creates a set of resources within the cluster. These resources can\ninclude both ",(0,t.jsx)(n.strong,{children:"native Kubernetes"})," resources and any ",(0,t.jsx)(n.strong,{children:"Custom Resource Definitions (CRDs)"}),"\ninstalled in the cluster. Some of these resources may create additional resources\noutside of your cluster."]}),"\n",(0,t.jsxs)(n.p,{children:["As depicted in the following diagram, the Developers call the Custom API, which\ncreates resources such as the ",(0,t.jsx)(n.strong,{children:"Deployment"}),", ",(0,t.jsx)(n.strong,{children:"Ingress"}),", ",(0,t.jsx)(n.strong,{children:"ServiceAccount"}),", ",(0,t.jsx)(n.strong,{children:"Prometheus Monitor"}),",\n",(0,t.jsx)(n.strong,{children:"Role"}),", ",(0,t.jsx)(n.strong,{children:"Policy"}),", and ",(0,t.jsx)(n.strong,{children:"Amazon S3"}),". This allows the Developers to easily manage and deploy\ntheir applications in a standardized and streamlined manner."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"End user interface - Custom API",src:s(8461).A+"",width:"1833",height:"978"}),"\n",(0,t.jsx)(n.em,{children:"Fugure 1: End user interface - Custom API"})]}),"\n",(0,t.jsx)(n.h3,{id:"resourcegroup",children:"ResourceGroup"}),"\n",(0,t.jsxs)(n.p,{children:["When you install ",(0,t.jsx)(n.strong,{children:"Symphony"})," in your cluster, it installs a Custom Resource Definition (CRD)\ncalled ",(0,t.jsx)(n.strong,{children:"ResourceGroup (RG)"}),". The ",(0,t.jsx)(n.strong,{children:"Platform Team"}),", which includes the Infrastructure, Security,\nand Compliance teams, can collaborate to create custom APIs by defining Custom Resources\nfor the ResourceGroup CRD."]}),"\n",(0,t.jsxs)(n.p,{children:["In the depicted example, the ",(0,t.jsx)(n.strong,{children:"Platform Team"})," has created an ",(0,t.jsx)(n.strong,{children:"Application Stack RG"})," that encapsulates\nthe necessary resources, along with any additional logic, abstractions, and security best practices.\nThis empowers the Developers to interact with an API when managing their applications. The Developers\nno longer need to directly manage the underlying infrastructure complexities, as the custom API\nhandles the deployment and configuration of the required resources."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Platform Team Interface",src:s(4103).A+"",width:"2430",height:"1464"}),"\n",(0,t.jsx)(n.em,{children:"Fugure 2: ResourceGroup (RG) - Platform Team Interface"})]}),"\n",(0,t.jsx)(n.h3,{id:"resourcegroup-instance",children:"ResourceGroup Instance"}),"\n",(0,t.jsxs)(n.p,{children:["Developer teams can create multiple instances of the ",(0,t.jsx)(n.strong,{children:"Application Stack"}),", each tailored to their\nspecific requirements. As shown, ",(0,t.jsx)(n.strong,{children:"Dev Team A"})," and ",(0,t.jsx)(n.strong,{children:"Dev Team B"})," have both instantiated their own Application\nStacks. While the underlying resources are similar, ",(0,t.jsx)(n.strong,{children:"Dev Team A"})," has chosen to expose their service externally,\nleveraging the Ingress option, while ",(0,t.jsx)(n.strong,{children:"Dev Team B"})," has opted to keep their service internal to the cluster.\nThis flexibility allows each development team to customize their application stack based on their specific\nrequirements."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"ResourceGroup Instance",src:s(1229).A+"",width:"2436",height:"2307"}),"\n",(0,t.jsx)(n.em,{children:"Fugure 3: ResourceGroup Instance (RGI)"})]}),"\n",(0,t.jsx)(n.h1,{id:"why-symphony",children:"Why Symphony?"}),"\n",(0,t.jsx)(n.h3,{id:"manage-any-group-of-resources-as-one-unit",children:"Manage any group of resources as one unit"}),"\n",(0,t.jsxs)(n.p,{children:["Using ",(0,t.jsx)(n.strong,{children:"Symphony"}),", the ",(0,t.jsx)(n.strong,{children:"Platform Team"})," can enable Developer teams to quickly deploy and manage applications\nand their dependencies as one unit, handling the entire lifecycle from deployment to maintenance.\nThe new APIs integrate seamlessly with developers' existing CD tools, preserving familiar processes\nand interfaces to simplify adoption."]}),"\n",(0,t.jsx)(n.h3,{id:"collaborate",children:"Collaborate"}),"\n",(0,t.jsxs)(n.p,{children:["Transform ",(0,t.jsx)(n.strong,{children:"Kubernetes"})," into your unified platform configuration framework using ",(0,t.jsx)(n.strong,{children:"Symphony"}),". Platform,\nCompliance, and Security teams work together to develop APIs that standardize and streamline configurations,\nmaking it easier for Developer teams to adopt secure, compliant practices. This collaboration lets you build\nyour organizational standards directly into the APIs, ensuring every application deployment aligns with\nsecurity and compliance requirements without adding complexity for developers."]}),"\n",(0,t.jsx)(n.h3,{id:"standardize",children:"Standardize"}),"\n",(0,t.jsx)(n.p,{children:"By creating unified APIs, you can define and enforce best practices across all environments, ensuring\nevery application meets organizational requirements and achieving consistency across deployment environments."}),"\n",(0,t.jsx)(n.h1,{id:"community",children:"Community"}),"\n",(0,t.jsxs)(n.p,{children:["We welcome questions, suggestions, and contributions from the community! To get involved, check out our\n",(0,t.jsx)(n.a,{href:"https://github.com/aws-controllers-k8s/private-symphony/blob/main/CONTRIBUTING.md",children:"contributing guide"}),".\nFor bugs or feature requests, feel free to ",(0,t.jsx)(n.a,{href:"https://github.com/aws-controllers-k8s/private-symphony/issues",children:"submit an issue"}),".\nYou\u2019re also invited to join our ",(0,t.jsx)(n.a,{href:"https://github.com/aws-controllers-k8s/private-symphony?tab=readme-ov-file#symphony",children:"community meeting"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8461:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Symphony-Dev-Interface-c9f120b7267003f579d534ce40912946.png"},1229:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Symphony-Instance-26c3ed740c8e40dafbf7fd45a4a4ea45.png"},4103:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Symphony-Platform-Team-b37b5e2108b2d3189d64ecfd0b1c9d62.png"},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var t=s(6540);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);