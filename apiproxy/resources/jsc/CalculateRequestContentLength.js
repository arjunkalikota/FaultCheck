 var requestContent = context.getVariable("request.content");
var contentLength = requestContent.length;
var maximumLength = context.getVariable("KVM.ProxySettings.Policy-RequestMessageSize")

context.setVariable("request.content.ExceededLength", contentLength - maximumLength);