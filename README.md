# vsx-proxy

A very basic Express.js proxy for OpenVSX

To run locally:
1. clone repo
2. `yarn` - install dependencies
3. `yarn start` - start express server
4. open http://localhost:3000/api/redhat in your browser 

If it's working correctly, you should see a response like this:

```json
{"name":"redhat","extensions":{"ansible":"https://open-vsx.org/api/redhat/ansible","apache-camel-extension-pack":"https://open-vsx.org/api/redhat/apache-camel-extension-pack","atlasmap-viewer":"https://open-vsx.org/api/redhat/atlasmap-viewer","fabric8-analytics":"https://open-vsx.org/api/redhat/fabric8-analytics","java":"https://open-vsx.org/api/redhat/java","mta-vscode-extension":"https://open-vsx.org/api/redhat/mta-vscode-extension","project-initializer":"https://open-vsx.org/api/redhat/project-initializer","rhamt-vscode-extension":"https://open-vsx.org/api/redhat/rhamt-vscode-extension","vscode-apache-camel":"https://open-vsx.org/api/redhat/vscode-apache-camel","vscode-camelk":"https://open-vsx.org/api/redhat/vscode-camelk","vscode-commons":"https://open-vsx.org/api/redhat/vscode-commons","vscode-debug-adapter-apache-camel":"https://open-vsx.org/api/redhat/vscode-debug-adapter-apache-camel","vscode-didact":"https://open-vsx.org/api/redhat/vscode-didact","vscode-extension-bpmn-editor":"https://open-vsx.org/api/redhat/vscode-extension-bpmn-editor","vscode-extension-dmn-editor":"https://open-vsx.org/api/redhat/vscode-extension-dmn-editor","vscode-extension-pmml-editor":"https://open-vsx.org/api/redhat/vscode-extension-pmml-editor","vscode-extension-red-hat-business-automation-bundle":"https://open-vsx.org/api/redhat/vscode-extension-red-hat-business-automation-bundle","vscode-extension-serverless-workflow-editor":"https://open-vsx.org/api/redhat/vscode-extension-serverless-workflow-editor","vscode-microprofile":"https://open-vsx.org/api/redhat/vscode-microprofile","vscode-openshift-connector":"https://open-vsx.org/api/redhat/vscode-openshift-connector","vscode-quarkus":"https://open-vsx.org/api/redhat/vscode-quarkus","vscode-redhat-account":"https://open-vsx.org/api/redhat/vscode-redhat-account","vscode-rhoas":"https://open-vsx.org/api/redhat/vscode-rhoas","vscode-tekton-pipelines":"https://open-vsx.org/api/redhat/vscode-tekton-pipelines","vscode-wsdl2rest":"https://open-vsx.org/api/redhat/vscode-wsdl2rest","vscode-xml":"https://open-vsx.org/api/redhat/vscode-xml","vscode-yaml":"https://open-vsx.org/api/redhat/vscode-yaml"},"verified":true,"access":"restricted"}
```