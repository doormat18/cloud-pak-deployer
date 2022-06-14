(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("NmYn"),b=a.n(r),i=a("Wbzz"),o=a("Xrax"),c=a("k4MR"),u=a("TSYQ"),d=a.n(u),s=a("QH2O"),p=a.n(s),m=a("qKvR"),j=function(e){var t,a=e.title,n=e.theme,l=e.tabs,r=void 0===l?[]:l;return Object(m.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=r.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},O=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||n,r=l.baseUrl,b=l.subDirectory,o=r+"/edit/"+l.branch+b+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+O.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:O.link,href:o},"Edit this page on GitHub"))):null},g=a("FCXl"),N=a("dI71"),f=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,l=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),r=a===l,o=new RegExp(l+"/?(#.*)?$"),c=n.replace(o,a);return Object(m.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(m.b)(i.Link,{className:f.link,to:""+c},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:f.list},r))))))},t}(l.a.Component),y=a("MjG9"),x=a("CzIb"),T=a("Asxa"),w=a("OIbQ"),P=a.n(w),k=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(T.c,{className:P.a.row},Object(m.b)(T.a,null,Object(m.b)("div",{className:P.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,l=e.Title,r=t.frontmatter,u=void 0===r?{}:r,d=t.relativePagePath,s=t.titleType,p=u.tabs,O=u.title,N=u.theme,f=u.description,T=u.keywords,w=u.date,P=Object(x.a)().interiorTheme,_=Object(i.useStaticQuery)("2456312558").site.pathPrefix,C=_?n.pathname.replace(_,""):n.pathname,I=p?C.split("/").filter(Boolean).slice(-1)[0]||b()(p[0],{lower:!0}):"",D=N||P;return Object(m.b)(c.a,{tabs:p,homepage:!1,theme:D,pageTitle:O,pageDescription:f,pageKeywords:T,titleType:s},Object(m.b)(j,{title:l?Object(m.b)(l,null):O,label:"label",tabs:p,theme:D}),p&&Object(m.b)(v,{title:O,slug:C,tabs:p,currentTab:I}),Object(m.b)(y.a,{padded:!0},a,Object(m.b)(h,{relativePagePath:d}),Object(m.b)(k,{date:w})),Object(m.b)(g.a,{pageContext:t,location:n,slug:C,tabs:p,currentTab:I}),Object(m.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},GN1t:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a("wx14"),l=a("zLVn"),r=(a("q1tI"),a("7ljp")),b=a("013z"),i=(a("qKvR"),["components"]),o={},c={_frontmatter:o},u=b.a;function d(e){var t=e.components,a=Object(l.a)(e,i);return Object(r.b)(u,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",null,"Vault configuration"),Object(r.b)("h2",null,"Vault configuration"),Object(r.b)("p",null,"Throughout the deployment process, the Cloud Pak Deployer will create secrets in a vault and retrieve them later. Examples of secrets are: ssh keys, Cloud Pak for Data admin password. Additionally, when provisioning infrastructure no the IBM Cloud, the resulting Terraform state file is also stored in the vault so it can be used later if the configuration needs to be changed."),Object(r.b)("p",null,"Configuration of the vault is done through a ",Object(r.b)("inlineCode",{parentName:"p"},"vault")," object in the configuration. If you want to use the file-based vault in the status directory, you do not need to configure anything."),Object(r.b)("p",null,"The following Vault implementations can be used to store and retrieve secrets:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"File Vault (no encryption)"),Object(r.b)("li",{parentName:"ul"},"IBM Cloud Secrets Manager"),Object(r.b)("li",{parentName:"ul"},"Hashicorp Vault (token authentication)"),Object(r.b)("li",{parentName:"ul"},"Hashicorp Vault (certificate authentication)")),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"File Vault")," is the default vault and also the simplest. It does not require a password and all secrets are stored in base-64 encoding in a properties file under the ",Object(r.b)("inlineCode",{parentName:"p"},"<status_directory>/vault")," directory. The name of the vault file is the ",Object(r.b)("inlineCode",{parentName:"p"},"environment_name")," you specified in the global configuration, inventory file or at the command line."),Object(r.b)("p",null,"All of the other vault options require some secret manager (IBM Cloud service or Hashicorp Vault) to be available and you need to specify a password or provide a certificate."),Object(r.b)("p",null,"Sample Vault config:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"vault:\n  vault_type: file-vault\n  vault_authentication_type: none\n")),Object(r.b)("h3",null,"Properties for all vault implementations"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Property"),Object(r.b)("th",{parentName:"tr",align:null},"Description"),Object(r.b)("th",{parentName:"tr",align:null},"Mandatory"),Object(r.b)("th",{parentName:"tr",align:null},"Allowed values"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"vault_type"),Object(r.b)("td",{parentName:"tr",align:null},"Chosen implementation of the vault"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},"file-vault, ibmcloud-vault, hashicorp-vault")))),Object(r.b)("h3",null,"Properties for ",Object(r.b)("inlineCode",{parentName:"h3"},"file-vault")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Property"),Object(r.b)("th",{parentName:"tr",align:null},"Description"),Object(r.b)("th",{parentName:"tr",align:null},"Mandatory"),Object(r.b)("th",{parentName:"tr",align:null},"Allowed values"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"vault_authentication_type"),Object(r.b)("td",{parentName:"tr",align:null},"Authentication method for the file vault"),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"none")))),Object(r.b)("h3",null,"Properties for ",Object(r.b)("inlineCode",{parentName:"h3"},"ibmcloud-vault")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Property"),Object(r.b)("th",{parentName:"tr",align:null},"Description"),Object(r.b)("th",{parentName:"tr",align:null},"Mandatory"),Object(r.b)("th",{parentName:"tr",align:null},"Allowed values"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"vault_authentication_type"),Object(r.b)("td",{parentName:"tr",align:null},"Authentication method for the file vault"),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"api-key")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"vault_url"),Object(r.b)("td",{parentName:"tr",align:null},"URL for the IBM Cloud secrets manager instance"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null})))),Object(r.b)("h3",null,"Properties for ",Object(r.b)("inlineCode",{parentName:"h3"},"hashicorp-vault")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Property"),Object(r.b)("th",{parentName:"tr",align:null},"Description"),Object(r.b)("th",{parentName:"tr",align:null},"Mandatory"),Object(r.b)("th",{parentName:"tr",align:null},"Allowed values"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"vault_authentication_type"),Object(r.b)("td",{parentName:"tr",align:null},"Authentication method for the file vault"),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"api-key, certificate")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"vault_url"),Object(r.b)("td",{parentName:"tr",align:null},"URL for the Hashicorp vault, this is typically https://hostname:8200"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"vault_api_key"),Object(r.b)("td",{parentName:"tr",align:null},"When authentication type is api-key, the field to authenticate with"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"vault_secret_path"),Object(r.b)("td",{parentName:"tr",align:null},"Default secret path to store and retrieve secrets into/from"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"vault_secret_field"),Object(r.b)("td",{parentName:"tr",align:null},"Default field to store or retrieve secrets"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"vault_secret_path_append_group"),Object(r.b)("td",{parentName:"tr",align:null},"Determines whether or not the secrete group will be appended to the path"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},"True (default), False")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"vault_secret_base64"),Object(r.b)("td",{parentName:"tr",align:null},"Depicts if secrets are stored in base64 format for Hashicorp Vault"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},"True (default), False")))))}d.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-cpd-design-objects-vault-mdx-7e7b5ad8573b4135b1e0.js.map