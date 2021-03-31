(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{367:function(e,s,t){"use strict";t.r(s);var a=t(45),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"quick-start"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[e._v("#")]),e._v(" Quick Start")]),e._v(" "),t("p",[e._v("Bitwarden SSH Manager is written in Golang. It is small and very fast tool. You can find detailed examples how to use\nit.")]),e._v(" "),t("h2",{attrs:{id:"generate-test-ssh-key-pair"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generate-test-ssh-key-pair"}},[e._v("#")]),e._v(" Generate Test SSH Key pair")]),e._v(" "),t("p",[e._v("Before using your SSH keys to store in Bitwarden, let's create dummy key and test with it.")]),e._v(" "),t("ol",[t("li",[e._v("Open Terminal.")]),e._v(" "),t("li",[e._v("Paste the command below")])]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("ssh-keygen -t ed25519 \n")])])]),t("ol",[t("li",[e._v('When you\'re prompted to "Enter a file in which to save the key," enter '),t("code",[e._v("test")]),e._v(".")]),e._v(" "),t("li",[e._v("At the prompt, do not type a secure passphrase.")])]),e._v(" "),t("h2",{attrs:{id:"add-ssh-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-ssh-key"}},[e._v("#")]),e._v(" Add SSH Key")]),e._v(" "),t("p",[e._v("Let's be sure that we have previously created keys:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("❯ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" -l test*\n-rw-------  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" X  staff  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("432")]),e._v(" Mar "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("30")]),e._v(" 08:38 "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v("\n-rw-r--r--  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" X  staff  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("112")]),e._v(" Mar "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("30")]),e._v(" 08:38 test.pub\n")])])]),t("p",[e._v("Now we can add them to Bitwarden.")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("bw-ssh "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" --name "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v(" --private-key "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v(" --public-key test.pub\n")])])]),t("h2",{attrs:{id:"get-ssh-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-ssh-key"}},[e._v("#")]),e._v(" Get SSH Key")]),e._v(" "),t("p",[e._v("Once we have SSH key pair on Bitwarden, let's get them to our local machine.")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("❯ bw-ssh get --name "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v("\nSSH Key "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v(" added.\n")])])]),t("p",[e._v("Let's check "),t("code",[e._v("~/.ssh/keys")]),e._v(" folder if our keys are added.")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("❯ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" -l ~/.ssh/keys/\n-rw-------  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" X  staff   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("432")]),e._v(" Mar "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("30")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("11")]),e._v(":05 "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v("\n-rw-------  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" X  staff   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("112")]),e._v(" Mar "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("30")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("11")]),e._v(":05 test.pub\n")])])]),t("h2",{attrs:{id:"session-duration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#session-duration"}},[e._v("#")]),e._v(" Session Duration")]),e._v(" "),t("p",[e._v("After a login with Bitwarden CLI tool, it will return a "),t("code",[e._v("session key")]),e._v(" that you will need to define it as environment\nvariable. Otherwise it will keep asking you to enter your credentials all the time. You can read for more info\nat "),t("a",{attrs:{href:"https://bitwarden.com/help/article/cli/#environment-variable",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bitwarden documentation"),t("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);s.default=r.exports}}]);