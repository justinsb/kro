"use strict";(self.webpackChunksymphony_docs=self.webpackChunksymphony_docs||[]).push([[334],{8904:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var t=s(4848),i=s(8453);const o={sidebar_position:1},l="Installing Symphony",a={id:"docs/getting-started/Installation",title:"Installing Symphony",description:"This guide walks you through the process of installing Symphony on your",source:"@site/docs/docs/getting-started/01-Installation.md",sourceDirName:"docs/getting-started",slug:"/docs/getting-started/Installation",permalink:"/docs/docs/getting-started/Installation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/docs/getting-started/01-Installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Getting started",permalink:"/docs/category/getting-started"},next:{title:"Deploy a Resource Group",permalink:"/docs/docs/getting-started/deploy-a-resource-group"}},r={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation Steps",id:"installation-steps",level:2},{value:"1. Authenticate with Amazon ECR",id:"1-authenticate-with-amazon-ecr",level:3},{value:"2. Install Symphony using Helm",id:"2-install-symphony-using-helm",level:3},{value:"Verifying the Installation",id:"verifying-the-installation",level:2},{value:"Upgrading Symphony",id:"upgrading-symphony",level:2},{value:"Uninstalling Symphony",id:"uninstalling-symphony",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"installing-symphony",children:"Installing Symphony"})}),"\n",(0,t.jsx)(n.p,{children:"This guide walks you through the process of installing Symphony on your\nKubernetes cluster using Helm."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Before you begin, ensure you have the following:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Access to an AWS account"}),"\n",(0,t.jsx)(n.li,{children:"AWS CLI installed and configured"}),"\n",(0,t.jsx)(n.li,{children:"Helm 3.x installed"}),"\n",(0,t.jsx)(n.li,{children:"kubectl installed and configured to interact with your Kubernetes cluster"}),"\n",(0,t.jsx)(n.li,{children:"Necessary permissions to pull images from Amazon ECR"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"installation-steps",children:"Installation Steps"}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{children:(0,t.jsx)(n.strong,{children:"Getting Alpha Access"})}),(0,t.jsxs)(n.p,{children:["If you are reading this, you are installing a pre-alpha version of symphony,\nthat requires special authorization from the EKS service team. If you believe\nthat you don't have the necessary permissions, please reach out to Lukonde Mwila\n",(0,t.jsx)(n.a,{href:"mailto:lukondef@amazon.com",children:"lukondef@amazon.com"})]})]}),"\n",(0,t.jsx)(n.h3,{id:"1-authenticate-with-amazon-ecr",children:"1. Authenticate with Amazon ECR"}),"\n",(0,t.jsx)(n.p,{children:"First, authenticate your Helm client with the Amazon Elastic Container Registry\n(ECR) that hosts the Symphony pre-alpha chart. Run the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"aws ecr get-login-password --region us-west-2 | helm registry login \\\n  --username AWS --password-stdin 095708837592.dkr.ecr.us-west-2.amazonaws.com\n"})}),"\n",(0,t.jsx)(n.h3,{id:"2-install-symphony-using-helm",children:"2. Install Symphony using Helm"}),"\n",(0,t.jsx)(n.p,{children:"Once authenticated, install Symphony using the Helm chart:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'export SYMPHONY_VERSION=0.0.7 \n# TODO(a-hilaly): replace with curl-github-fu to get the latest version\n# export SYMPHONY_VERSION=$(curl -s https://api.github.com/repos/aws-controllers-k8s/private-symphony/releases/latest | grep \'"tag_name":\' | sed -E \'s/.*"([^"]+)".*/\\1/\')\n\nhelm install --version=${SYMPHONY_VERSION} -n symphony \\\n   symphony oci://095708837592.dkr.ecr.us-west-2.amazonaws.com/symphony-chart \\\n   --version=${SYMPHONY_VERSION}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"verifying-the-installation",children:"Verifying the Installation"}),"\n",(0,t.jsx)(n.p,{children:"After running the installation command, verify that Symphony has been installed\ncorrectly:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Check the Helm release:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"helm list\n"})}),"\n",(0,t.jsx)(n.p,{children:'You should see the "symphony" release listed.'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Check the Symphony pods:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"kubectl get pods\n"})}),"\n",(0,t.jsx)(n.p,{children:"You should see Symphony-related pods running."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"upgrading-symphony",children:"Upgrading Symphony"}),"\n",(0,t.jsx)(n.p,{children:"To upgrade to a newer version of Symphony, use the Helm upgrade command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export SYMPHONY_VERSION=<new-version>\n\nhelm upgrade -n symphony \\\n  symphony oci://095708837592.dkr.ecr.us-west-2.amazonaws.com/symphony-chart \\\n  --version=${SYMPHONY_VERSION}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"<new-version>"})," with the version you want to upgrade to."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Helm does not support updating CRDs, so you may need to manually update or remove\nsymphony related CRDs. For more information, refer to the Helm documentation."})}),"\n",(0,t.jsx)(n.h2,{id:"uninstalling-symphony",children:"Uninstalling Symphony"}),"\n",(0,t.jsx)(n.p,{children:"To uninstall Symphony, use the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm uninstall symphony\n"})}),"\n",(0,t.jsx)(n.p,{children:"Keep in mind that this command will remove all Symphony resources from your\ncluster, except for the ResourceGroup CRD and any other custom resources you\nmay have created."})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var t=s(6540);const i={},o=t.createContext(i);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);