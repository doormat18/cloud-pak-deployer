(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"013z":function(e,a,t){"use strict";var n=t("q1tI"),o=t.n(n),r=t("NmYn"),i=t.n(r),l=t("Wbzz"),s=t("Xrax"),c=t("k4MR"),d=t("TSYQ"),p=t.n(d),b=t("QH2O"),u=t.n(b),m=t("qKvR"),g=function(e){var a,t=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(m.b)("div",{className:p()(u.a.pageHeader,(a={},a[u.a.withTabs]=r.length,a[u.a.darkMode]="dark"===n,a))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},t)))))},h=t("BAC9"),f=function(e){var a=e.relativePagePath,t=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=t||n,r=o.baseUrl,i=o.subDirectory,s=r+"/edit/"+o.branch+i+"/src/pages"+a;return r?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:s},"Edit this page on GitHub"))):null},O=t("FCXl"),A=t("dI71"),j=t("I8xM"),_=function(e){function a(){return e.apply(this,arguments)||this}return Object(A.a)(a,e),a.prototype.render=function(){var e=this.props,a=e.title,t=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var a,t=i()(e,{lower:!0,strict:!0}),r=t===o,s=new RegExp(o+"/?(#.*)?$"),c=n.replace(s,t);return Object(m.b)("li",{key:e,className:p()((a={},a[j.selectedItem]=r,a),j.listItem)},Object(m.b)(l.Link,{className:j.link,to:""+c},e))}));return Object(m.b)("div",{className:j.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":a},Object(m.b)("ul",{className:j.list},r))))))},a}(o.a.Component),y=t("MjG9"),v=t("CzIb"),x=t("Asxa"),w=t("OIbQ"),N=t.n(w),P=function(e){var a=e.date,t=new Date(a);return a?Object(m.b)(x.c,{className:N.a.row},Object(m.b)(x.a,null,Object(m.b)("div",{className:N.a.text},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};a.a=function(e){var a=e.pageContext,t=e.children,n=e.location,o=e.Title,r=a.frontmatter,d=void 0===r?{}:r,p=a.relativePagePath,b=a.titleType,u=d.tabs,h=d.title,A=d.theme,j=d.description,x=d.keywords,w=d.date,N=Object(v.a)().interiorTheme,k=Object(l.useStaticQuery)("2456312558").site.pathPrefix,C=k?n.pathname.replace(k,""):n.pathname,D=u?C.split("/").filter(Boolean).slice(-1)[0]||i()(u[0],{lower:!0}):"",T=A||N;return Object(m.b)(c.a,{tabs:u,homepage:!1,theme:T,pageTitle:h,pageDescription:j,pageKeywords:x,titleType:b},Object(m.b)(g,{title:o?Object(m.b)(o,null):h,label:"label",tabs:u,theme:T}),u&&Object(m.b)(_,{title:h,slug:C,tabs:u,currentTab:D}),Object(m.b)(y.a,{padded:!0},t,Object(m.b)(f,{relativePagePath:p}),Object(m.b)(P,{date:w})),Object(m.b)(O.a,{pageContext:a,location:n,slug:C,tabs:u,currentTab:D}),Object(m.b)(s.a,null))}},BAC9:function(e,a,t){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,a,t){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,a,t){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,a,t){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},YpSm:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return s})),t.d(a,"default",(function(){return p}));var n=t("wx14"),o=t("zLVn"),r=(t("q1tI"),t("7ljp")),i=t("013z"),l=(t("qKvR"),["components"]),s={},c={_frontmatter:s},d=i.a;function p(e){var a=e.components,t=Object(o.a)(e,l);return Object(r.b)(d,Object(n.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h1",null,"Cloud Pak Deployer Advanced Configuration"),Object(r.b)("h3",null,"Cloud Pak for Data LDAP configuration"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"22.22222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAIAAAABPYjBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxElEQVQI101OzY7CIBjs+z/IvoHxbtKY7A8eqEkTdd02oQi01AKF0qUfUi86mczPYZLJGGOU0qQIoRhjCP+cYC1w0CdwpKJDxUYifWIj54oZ0q25HeP+G2ec87T03kvZUUFvohF/O37ZlF8fhn0W1yEvODrf84L+nO45bnJM9wVDv3q7O2Raa0KItRYArLNuclbdnCK9uPpRKBta5aWeO72qNHOn5naY1ATH8pwZY+q67vs+PJGew4rkcUm+LBFeBHiv8AAZIN5S3jCefgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"LDAP_Overview",title:"LDAP connection and User Groups",src:"/cloud-pak-deployer/static/55901c2f7b05e5ad4daea3d44cfc8a39/3cbba/ldap_user_groups.png",srcSet:["/cloud-pak-deployer/static/55901c2f7b05e5ad4daea3d44cfc8a39/7fc1e/ldap_user_groups.png 288w","/cloud-pak-deployer/static/55901c2f7b05e5ad4daea3d44cfc8a39/a5df1/ldap_user_groups.png 576w","/cloud-pak-deployer/static/55901c2f7b05e5ad4daea3d44cfc8a39/3cbba/ldap_user_groups.png 1152w","/cloud-pak-deployer/static/55901c2f7b05e5ad4daea3d44cfc8a39/62c68/ldap_user_groups.png 1341w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("p",null,"IBM Cloud Pak for Data can connect to an LDAP user registry in order for users to log on with their LDAP credentials. The configuration of LDAP can be specified in a seperate yaml file in the ",Object(r.b)("inlineCode",{parentName:"p"},"config")," folder:  ",Object(r.b)("a",{parentName:"p",href:"/cloud-pak-deployer/cpd-design/objects/ldap_user_groups"},"Example LDAP and User Group settings"),"."),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"cp4d_ldap_config")," entry contains the connectivity information to the LDAP user registry. The ",Object(r.b)("inlineCode",{parentName:"p"},"project")," and ",Object(r.b)("inlineCode",{parentName:"p"},"openshift_cluster_name")," values uniquely identify the Cloud Pak for Data cluster instance.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"ldap_domain_search_password_vault")," entry contains a reference to the vault, which means that as a preparation the LDAP bind user password must be stored in the vault used by the Cloud Pak Deployer using the key referenced in the configuration.\nIf the password is not available, the Cloud Pak Deployer will fail and not able to configure the LDAP connectivity."),Object(r.b)("p",null,"File: config/cp4d_ldap.yaml"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'# Each Cloud Pak for Data Deployment deployed in an OpenShift Project of an OpenShift cluster can have its own LDAP configuration\ncp4d_ldap_config:\n- project: zen-sample                                                    # Mandatory\n  openshift_cluster_name: sample                                         # Mandatory\n  ldap_host: ldaps://ldap-host                                           # Mandatory\n  ldap_port: 636                                                         # Mandatory\n  ldap_user_search_base: ou=users,dc=ibm,dc=com                          # Mandatory\n  ldap_user_search_field: uid                                            # Mandatory\n  ldap_domain_search_user: uid=ibm_roks_bind_user,ou=users,dc=ibm,dc=com # Mandatory\n  ldap_domain_search_password_vault: ldap_bind_password                  # Mandatory, Password vault reference\n  auto_signup: "false"                                                   # Mandatory\n  ldap_group_search_base: ou=groups,dc=ibm,dc=com                        # Optional, but mandatory when using user groups\n  ldap_group_search_field: cn                                            # Optional, but mandatory when using user groups\n  ldap_mapping_first_name: cn                                            # Optional, but mandatory when using user groups\n  ldap_mapping_last_name: sn                                             # Optional, but mandatory when using user groups\n  ldap_mapping_email: mail                                               # Optional, but mandatory when using user groups\n  ldap_mapping_group_membership: memberOf                                # Optional, but mandatory when using user groups\n  ldap_mapping_group_member: member                                      # Optional, but mandatory when using user groups\n')),Object(r.b)("h3",null,"Cloud Pak for Data User Group configuration"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"cp4d_user_group_configuration:")," can optionally create User Group(s) with references to LDAP Group(s). A ",Object(r.b)("inlineCode",{parentName:"p"},"user_groups")," entry must contain at least 1 ",Object(r.b)("inlineCode",{parentName:"p"},"role_assignments")," and 1 ",Object(r.b)("inlineCode",{parentName:"p"},"ldap_groups")," entry."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Role Assignment values:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"zen_administrator_role"),Object(r.b)("li",{parentName:"ul"},"zen_user_role"),Object(r.b)("li",{parentName:"ul"},"wkc_data_scientist_role"),Object(r.b)("li",{parentName:"ul"},"zen_developer_role"),Object(r.b)("li",{parentName:"ul"},"zen_data_engineer_role (requires installation of DataStage cartridge to become available)")),Object(r.b)("p",null,"During the creation of User Group(s) the following validations are performed:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"LDAP configuration is completed"),Object(r.b)("li",{parentName:"ul"},"The provided role assignment(s) are available in Cloud Pak for Data"),Object(r.b)("li",{parentName:"ul"},"The provided LDAP group(s) are available in the LDAP registry"),Object(r.b)("li",{parentName:"ul"},"If the User Group already exists, it ensures the provided LDAP Group(s) are assigned, but no changes to the existing role assignments are performed and no LDAP groups are removed from the User Group")),Object(r.b)("h3",null,"Cloud Pak for Data provisioned instance authorization"),Object(r.b)("p",null,"When using Cloud Pak for Data LDAP connectivity and User Groups, the User Groups can be assigned to authorize the users of the LDAP groups access to the proviosioned instance(s).\n",Object(r.b)("a",{parentName:"p",href:"/cloud-pak-deployer/cpd-design/objects/cp4d_instance_configuration"},"Example Cloud Pak for Data instance configuration"),"."),Object(r.b)("p",null,"Currently supported instance authorization:  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Cognos Analytics (ca)")),Object(r.b)("h4",null,"Cognos Analytics instance authorization"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1111px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.583333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAAsTAAALEwEAmpwYAAABUklEQVQY042QWUvDQBSF8/9/g+8iFCyICEIXBVuXWmnatFnMMtmmWzrNdNJMZiaJQ6pS8MWP8zAP99xz7igQQtd1d7ud4ziqqtYNSxgEYJGsPE4RPpB1gtGBphnDGUtJsW+UEqoQQjzPo5TKFbquM84o42li46i/D/t0+ww3aGQiA/IZyMYWWkSFHjMpa8UVhJDv+0VRyEDGmBPYbuTG/gSBTmTc1WS8SfFQW03c/cRNn9RgOI0H02gwg6q7V/I8l80BAGWDEKIsK86OJcOVIOl2aRuBacSGHjr2BkaY5CKjpdSRCkUWDsPQtm0ZK82cc9FwOj4M096L/fBqDT7ASN+an0gUvP5BkdOys1whDfJdVdUp//vn1qTdG7XuH9vdYXdsmR4u2Zm5/sN5cgwPrc7b5W3v4urmuv9uAlIW/zYna6JpcD6PNS3StBg4SDDxO/kF0v+8dtUJttgAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Cognos Analytics Authorization",title:"Cognos Analytics Authorization",src:"/cloud-pak-deployer/static/713a58d2033989d41a4e2c3d9fa128f7/70b72/cognos_authorization.png",srcSet:["/cloud-pak-deployer/static/713a58d2033989d41a4e2c3d9fa128f7/7fc1e/cognos_authorization.png 288w","/cloud-pak-deployer/static/713a58d2033989d41a4e2c3d9fa128f7/a5df1/cognos_authorization.png 576w","/cloud-pak-deployer/static/713a58d2033989d41a4e2c3d9fa128f7/70b72/cognos_authorization.png 1111w"],sizes:"(max-width: 1111px) 100vw, 1111px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("p",null,"A Cognos Analytics (ca) instance can have multiple ",Object(r.b)("inlineCode",{parentName:"p"},"manage_access")," entries. Each entry consists of 1 ",Object(r.b)("inlineCode",{parentName:"p"},"ca_role")," and 1 ",Object(r.b)("inlineCode",{parentName:"p"},"cp4d_user_group")," element.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"ca_role")," must be one of the following possible values:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Analytics Administrators"),Object(r.b)("li",{parentName:"ul"},"Analytics Explorers"),Object(r.b)("li",{parentName:"ul"},"Analytics Users "),Object(r.b)("li",{parentName:"ul"},"Analytics Viewer")),Object(r.b)("p",null,"During the configuration of the instance authorization the following validations are performend:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"LDAP configuration is completed"),Object(r.b)("li",{parentName:"ul"},"The provided ",Object(r.b)("inlineCode",{parentName:"li"},"ca_role")," is valid"),Object(r.b)("li",{parentName:"ul"},"The provided ",Object(r.b)("inlineCode",{parentName:"li"},"cp4d_user_group")," exists")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-cpd-design-objects-cp-4-d-ldap-configuration-mdx-224270b21418026330b5.js.map