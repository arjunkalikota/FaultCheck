var responseContent = context.getVariable('response.content');
var contentLength = responseContent.length;

var maximumLength = context.getVariable("KVM.ProxySettings.Policy-ResponseMessageSize")

context.setVariable("reponse.content.ExceededLength", contentLength - maximumLength);