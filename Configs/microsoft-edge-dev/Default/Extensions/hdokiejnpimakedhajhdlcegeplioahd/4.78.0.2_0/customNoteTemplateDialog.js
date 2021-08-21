var CustomNoteTemplateDialog=function(t){Dialog.call(this,t,{closeButtonEnabled:!0,maximizeButtonEnabled:!0,buttonAlign:this.RIGHT_ALIGN})};CustomNoteTemplateDialog.prototype=Object.create(Dialog.prototype),CustomNoteTemplateDialog.prototype.constructor=CustomNoteTemplateDialog,function(){var n=function(t,e){DialogInput.Input.call(this,void 0,e),this.fields=[],this.hasNotes=!1,this.container=t};((n.prototype=Object.create(DialogInput.Input.prototype)).constructor=n).prototype.validate=function(){var t=!0;if(0<this.fields.length){var e={},i,n,a;for(i=0,n=this.fields.length;i<n;++i)a=this.fields[i],e.hasOwnProperty(a.text)?e[a.text]=e[a.text]+1:e[a.text]=1;for(i=0,n=this.fields.length;i<n;++i)""===(a=this.fields[i]).text?(a.input.addError(Strings.translateString("%s is required.",Strings.translateString("Field Title"))),t=!1):1<e[a.text]&&(a.input.addError(Strings.translateString("Field Title: %s is used more than once.",a.text)),t=!1)}else dialogs.alert.open({title:Strings.Vault.ERROR,text:Strings.translateString("Template must contain at least one field.")}),t=!1;return t},n.prototype.clear=function(){DialogInput.ErrorDisplayInput.prototype.clear.apply(this,arguments);for(var t=0,e=this.fields.length;t<e;++t)this.fields[t].input.clear();this.fields=[],this.hasNotes=!1,this.build()},n.prototype.hasError=function(){for(var t=0,e=this.fields.length;t<e;++t)if(this.fields[t].input.hasError())return!0;return!1},n.prototype.clearErrors=function(){for(var t=0,e=this.fields.length;t<e;++t)this.fields[t].input.clearErrors()},n.prototype.postValidate=function(){for(var t=0,e=this.fields.length;t<e;++t)this.fields[t].input.postValidate()},n.prototype.getValue=function(){for(var t=[],e=0,i=this.fields.length;e<i;++e){var n=this.fields[e];t.push({text:"textarea"===n.type&&Strings.translateString("Notes")===n.text?"Notes":n.text,type:n.type})}return t},n.prototype.addField=function(t){if("textarea"===t&&this.hasNotes)dialogs.alert.open({title:Strings.Vault.ERROR,text:Strings.translateString("You may only have one Notes field in a template.")});else{var e={text:"textarea"===t?Strings.translateString("Notes"):"",type:t,input:new DialogInput.Input(null,this.dialog)};this.hasNotes?this.fields.splice(this.fields.length-1,0,e):this.fields.push(e),"textarea"===t&&(this.hasNotes=!0),this.build()}},n.prototype.removeField=function(t){"textarea"===this.fields[t].type&&(this.hasNotes=!1),this.fields.splice(t,1),this.build()},n.prototype.dropField=function(t,e){for(var i=this.fields[t],n=[],a=0,o=this.fields.length;a<o;++a)e===a&&n.push(i),t!==a&&n.push(this.fields[a]);this.fields=n,this.build()};var a=function(t){var e;switch(t){case"text":e=new DialogInput.TextInput;break;case"password":e=new DialogInput.PasswordInput;break;case"textarea":e=new DialogInput.TextArea;break;case"monthDayYear":e=new DialogInput.AlphaDateInput;break;case"monthYear":e=new DialogInput.AlphaDateInput({includeDay:!1});break;case"textWithCopy":e=new DialogInput.TextInput({inputButton:Strings.translateString("Copy")})}var i=e.buildInputElement();return $(i).find("input,button").addBack("input").prop("disabled",!0),i},o,s,l=function(e,i,t,n){t.find(".customFieldName").bind("change",function(){i&&(i.text=this.value)}),t.find(".customFieldName").bind("focus",function(){t.prop("draggable",!1)}),t.find(".customFieldName").bind("blur",function(){t.prop("draggable",!0)}),t.find(".removeFieldButton").bind("click",function(){e.removeField(n)}),t.bind("dragstart",function(t){o=n,s=i,"function"==typeof t.originalEvent.dataTransfer.setData&&t.originalEvent.dataTransfer.setData("text/plain","")}),t.bind("dragover",function(t){o!==n&&t.preventDefault()}),t.bind("dragenter",function(t){o!==n&&$(t.currentTarget).toggleClass("dragTarget")}),t.bind("dragleave",function(t){o!==n&&$(t.currentTarget).toggleClass("dragTarget")}),t.bind("drop",function(t){t.preventDefault(),e.dropField(o,n)})};n.prototype.build=function(){this.container.empty();for(var t=0;this.fields&&t<this.fields.length;t++){var e=this.fields[t],i=$("#fieldTemplate").clone();e.input.setElement(i.find(".customFieldName")),"textarea"===e.type&&(i.attr("draggable",!1),i.find(".dialogInput").prop("disabled",!0)),i.find(".fieldTemplate").prepend(a(e.type)),l(this,this.fields[t],i,t),i.attr("id",""),i.attr("fieldType",e.type),i.attr("fieldName",e.text),$($(".customFieldName",i)[0]).val(e.text),this.container.append(i)}this.dialog.performValidate({data:this.dialog.getData(),errorsOnly:!0})},CustomNoteTemplateDialog.prototype.open=function(t){Dialog.prototype.open.call(this,$.extend(t,{title:t&&t.vaultItem?Strings.translateString("Edit Custom Template"):Strings.translateString("New Custom Template")}))},CustomNoteTemplateDialog.prototype.initialize=function(t){var e,i;Dialog.prototype.initialize.apply(this,arguments),this.inputFields.fields=new n(t.find(".fieldsContainer"),this),e=this,i=$("#actionOptionMenu"),e.hideDropDown=function(){i.hide()},$("#addTextButton").bind("click",function(){e.inputFields.fields.addField("text")}),$("#addNotesButton").bind("click",function(){e.inputFields.fields.addField("textarea")}),$("#addTextWithCopyButton").bind("click",function(){e.inputFields.fields.addField("textWithCopy")}),$("#addMonthDayYearButton").bind("click",function(){e.inputFields.fields.addField("monthDayYear")}),$("#addMonthYearButton").bind("click",function(){e.inputFields.fields.addField("monthYear")}),$("#addPasswordButton").bind("click",function(){e.inputFields.fields.addField("password")}),$("#actionOption, #actionOptionMenu").bind("click",function(t){i.toggle(),t.preventDefault(),t.stopPropagation()}),t.bind("click",function(){e.hideDropDown()})},CustomNoteTemplateDialog.prototype.close=function(){return this.hideDropDown&&this.hideDropDown(),Dialog.prototype.close.apply(this,arguments)},CustomNoteTemplateDialog.prototype.validate=function(t){var e=Dialog.prototype.validate.apply(this,arguments);""===t.title&&(this.inputFields.title.addError(Strings.translateString("%s is required.",Strings.translateString("Name"))),e=!1);for(var i=LPProxy.getCustomNoteTemplates(),n=0,a=i.length;n<a;++n)if(t.title===i[n].title){this.inputFields.title.addError(Strings.translateString("%s is already used.",t.title)),e=!1;break}return e},CustomNoteTemplateDialog.prototype.handleSubmit=function(t){LPRequest.makeRequest(LPProxy.saveCustomNoteTemplate,{params:t,success:function(t){Topics.get(Topics.SECURENOTE_TEMPLATE_ADDED).publish(t)}})}}();