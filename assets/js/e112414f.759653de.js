"use strict";(self.webpackChunksymphony_docs=self.webpackChunksymphony_docs||[]).push([[195],{7777:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var r=s(4848),o=s(8453);const t={sidebar_position:1},i="1. ResourceGroups",c={id:"docs/concepts/resource-groups",title:"1. ResourceGroups",description:"ResourceGroups are the fundamental building blocks in Symphony. They",source:"@site/docs/docs/concepts/00-resource-groups.md",sourceDirName:"docs/concepts",slug:"/docs/concepts/resource-groups",permalink:"/docs/docs/concepts/resource-groups",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/docs/concepts/00-resource-groups.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Concepts",permalink:"/docs/category/concepts"},next:{title:"2. Simple Schema",permalink:"/docs/docs/concepts/simple-schema"}},a={},l=[{value:"What is a <strong>ResourceGroup</strong>?",id:"what-is-a-resourcegroup",level:2},{value:"Anatomy of a <strong>ResourceGroup</strong>",id:"anatomy-of-a-resourcegroup",level:2},{value:"<strong>ResourceGroup</strong> Processing",id:"resourcegroup-processing",level:2},{value:"<strong>ResourceGroup</strong> Claim Example",id:"resourcegroup-claim-example",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"1-resourcegroups",children:"1. ResourceGroups"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ResourceGroups"})," are the fundamental building blocks in Symphony. They\nprovide a way to define, organize, and manage sets of related Kubernetes\nresources as a single, reusable unit."]}),"\n",(0,r.jsxs)(n.h2,{id:"what-is-a-resourcegroup",children:["What is a ",(0,r.jsx)(n.strong,{children:"ResourceGroup"}),"?"]}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.strong,{children:"ResourceGroup"})," is a custom resource that serves as a blueprint for creating\nand managing a collection of Kubernetes resources. It allows you to:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Define multiple resources in a single, cohesive unit"}),"\n",(0,r.jsx)(n.li,{children:"Establish relationships and dependencies between resources"}),"\n",(0,r.jsx)(n.li,{children:"Create high-level abstractions of complex Kubernetes configurations"}),"\n",(0,r.jsx)(n.li,{children:"Promote reusability and consistency across your infrastructure"}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"anatomy-of-a-resourcegroup",children:["Anatomy of a ",(0,r.jsx)(n.strong,{children:"ResourceGroup"})]}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.strong,{children:"ResourceGroup"}),", like any Kubernetes resource, consists of three main parts:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Metadata"}),": Name, namespace, labels, etc."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Spec"}),": Defines the structure and properties of the ResourceGroup"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Status"}),": Reflects the current state of the ResourceGroup"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"spec"})," section of a ResourceGroup typically includes:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Parameters"}),": Define the customizable aspects of the ResourceGroup"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Resources"}),": Specify the Kubernetes resources to be created"]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"kind"})," and ",(0,r.jsx)(n.strong,{children:"apiVersion"})," fields within the spec define the CRD that\nwill be generated for this ResourceGroup.\nHere's a simple example of a ResourceGroup:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'text title="simple-web-app.yaml"',children:"apiVersion: symphony.k8s.aws/v1\nkind: ResourceGroup\nmetadata:\n  name: simple-web-app\nspec:\n  kind: SimpleWebApp\n  apiVersion: v1alpha1\n  parameters:\n    appName: string\n    image: string\n    replicas: int\n  resources:\n    - name: deployment\n      definition:\n        apiVersion: apps/v1\n        kind: Deployment\n        metadata:\n          name: ${spec.appName}-deployment\n        spec:\n          replicas: ${spec.replicas}\n          selector:\n            matchLabels:\n              app: ${spec.appName}\n          template:\n            metadata:\n              labels:\n                app: ${spec.appName}\n            spec:\n              containers:\n                - name: ${spec.appName}-container\n                  image: ${spec.image}\n    - name: service\n      definition:\n        apiVersion: v1\n        kind: Service\n        metadata:\n          name: ${spec.appName}-service\n        spec:\n          selector:\n            app: ${spec.appName}\n          ports:\n            - port: 80\n              targetPort: 80\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In this example, the ",(0,r.jsx)(n.strong,{children:"ResourceGroup"})," defines a simple web application with\na Deployment and a Service. The appName, image, and replicas are\nparameters that can be set when instantiating this ResourceGroup."]}),"\n",(0,r.jsxs)(n.h2,{id:"resourcegroup-processing",children:[(0,r.jsx)(n.strong,{children:"ResourceGroup"})," Processing"]}),"\n",(0,r.jsxs)(n.p,{children:["When a ",(0,r.jsx)(n.strong,{children:"ResourceGroup"})," is submitted to the Kubernetes API server, the\nSymphony controller processes it as follows:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Formal Verification"}),": The controller performs a comprehensive analysis\nof the ResourceGroup definition. This includes:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Syntax checking"}),": Ensuring all fields are correctly formatted."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Type checking"}),": Validating that parameter types match their\ndefinitions."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Semantic validation"}),": Verifying that resource relationships and\ndependencies are logically sound."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Dry-run validation"}),": Simulating the creation of resources to detect\npotential issues."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"CRD Generation"}),": The controller automatically generates a new ",(0,r.jsx)(n.strong,{children:"Custom\nResource Definition (CRD)"})," based on the ResourceGroup's specification.\nThis CRD represents the type for instances of this ResourceGroup."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"CRD Registration"}),": It registers the newly generated CRD with the\nKubernetes API server, making it available for use in the cluster."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Micro-Controller Deployment"}),": Symphony deploys a dedicated\nmicro-controller for this ResourceGroup. This micro-controller will\nlisten for ",(0,r.jsx)(n.strong,{children:'"claim" events'})," - instances of the CRD created in step 2.\nIt will be responsible for managing the ",(0,r.jsx)(n.strong,{children:"lifecycle of resources"})," defined\nin the ResourceGroup for each claim."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Status Update"}),": The controller updates the status of the ResourceGroup\nto reflect that the corresponding CRD has been created and registered."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For example, given our ",(0,r.jsx)(n.code,{children:"simple-web-app"})," ResourceGroup, the controller\nwould create and register a CRD named ",(0,r.jsx)(n.code,{children:"SimpleWebApps"})," (plural form of the\nResourceGroup name). This CRD defines the structure for creating instances\nof the web application with customizable parameters. The deployed\nmicro-controller would then manage all ",(0,r.jsx)(n.strong,{children:"SimpleWebApps instances"}),", creating\nand managing the associated ",(0,r.jsx)(n.strong,{children:"Deployments"})," and ",(0,r.jsx)(n.strong,{children:"Services"})," as defined in the\nResourceGroup."]}),"\n",(0,r.jsxs)(n.p,{children:["The Symphony controller continues to monitor the ",(0,r.jsx)(n.strong,{children:"ResourceGroup"})," for any\nchanges, updating the corresponding CRD and micro-controller as necessary."]}),"\n",(0,r.jsxs)(n.h2,{id:"resourcegroup-claim-example",children:[(0,r.jsx)(n.strong,{children:"ResourceGroup"})," Claim Example"]}),"\n",(0,r.jsxs)(n.p,{children:["After the ",(0,r.jsx)(n.strong,{children:"ResourceGroup"})," is processed, users can create instances of it. Here's\nan example of how a claim for the ",(0,r.jsx)(n.code,{children:"SimpleWebApp"})," might look:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="my-web-app-claim.yaml"',children:"apiVersion: symphony.k8s.aws/v1alpha1\nkind: SimpleWebApp\nmetadata:\n  name: my-web-app\nspec:\n  appName: awesome-app\n  image: nginx:latest\n  replicas: 3\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the next section, we'll explore the ",(0,r.jsx)(n.code,{children:"parameters"})," and ",(0,r.jsx)(n.code,{children:"resources"})," sections of\na ",(0,r.jsx)(n.strong,{children:"ResourceGroup"})," in more detail."]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var r=s(6540);const o={},t=r.createContext(o);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);