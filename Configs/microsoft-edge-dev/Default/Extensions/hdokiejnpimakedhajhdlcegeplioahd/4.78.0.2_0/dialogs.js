!function(t){var h="",a=[],l={},r=["newvaultGlobal","dialog","buttons"],n=["dialog","dialogFields","jsOTP.min.js"],f=7500,y=function(o){a.push(o)},L=function(o){for(var i=0,e=a.length;i<e;++i)a[i]===o&&a.splice(i,1)},g=function(o){return h+LPPlatform.getResourcePath(o)},s=(d=null,o=function(o,i){for(var e=0,t=o.length;e<t;++e){var a=o[e].getAttribute(i);a&&(d[a]=!0)}},{loadFile:function(o,i){null===d&&s.initialize();var t=g(o.name);void 0===d[t]?(d[t]=!0,l[t]=[i],o.load(function(){var o=l[t];delete l[t];for(var i=0,e=o.length;i<e;++i)o[i]()})):l[t]?l[t].push(i):i()},initialize:function(){null===d&&(d={},o(t.getElementsByTagName("link"),"href"),o(t.getElementsByTagName("script"),"src"))}}),d,o,c=function(){this.files=[],this.addedFiles={}};c.prototype.load=function(o){var i=0,e=this.files,t=function(){++i===e.length?o&&o():s.loadFile(e[i],t)};0===i&&0<e.length&&s.loadFile(e[0],t)},c.prototype.addFile=function(o){void 0===this.addedFiles[o.name]&&(this.files.push(o),this.addedFiles[o.name]=!0)},c.prototype.addFiles=function(o){if(o)for(var i=0,e=(o=[].concat(o)).length;i<e;++i)this.addFile(o[i])};var i=function(e){e.indexOf(".js")!==e.length-3&&(e=e+=".js"),this.name=e,this.load=function(o){var i=t.createElement("script");i.setAttribute("type","text/javascript"),i.setAttribute("src",g(e)),LPPlatform.addEventListener(i,"load",o),t.body.appendChild(i)}},e=function(e){e.indexOf(".css")!==e.length-4&&(e=e+=".css"),this.name=e,this.load=function(o){var i=t.createElement("link");i.setAttribute("type","text/css"),i.setAttribute("rel","stylesheet"),i.setAttribute("href",g(e)),LPPlatform.addEventListener(i,"load",o),t.body.appendChild(i)}},S=function(o){c.call(this);for(var i=0,e=(o=o?r.concat(o):r).length;i<e;++i)this.addFile(o[i])};((S.prototype=Object.create(c.prototype)).constructor=S).prototype.addFile=function(o){o&&c.prototype.addFile.call(this,new e(o))},S.prototype.load=function(o){for(var i=0,e=this.files,t=function(){++i===e.length&&o()},a=0,l=e.length;a<l;++a)s.loadFile(e[a],t)};var w=function(o){c.call(this);for(var i=0,e=(o=o?n.concat(o):n).length;i<e;++i)this.addFile(o[i])},D;((w.prototype=Object.create(c.prototype)).constructor=w).prototype.addFile=function(o){o&&c.prototype.addFile.call(this,new i(o))},LPRequire={requireJS:function(o,i){new w(o).load(i)}},LPDialog={DialogLoader:function(l){var i=this,e=!1,t=null,a=new w(l.js),r=new S(l.css),n=null;this.parentElementID=l.parentElementID,this.type=l.type,this.htmlSource=l.htmlSource;var g=function(){if(null===n)for(var o in dialogs)if(dialogs[o]===i){n=o;break}return n},s=function(o,i){var e,t,a={},l=o?[].concat(o):[];for(i=i?[].concat(i):[],e=0,t=l.length;e<t;++e)a[l[e]]=!0;for(e=0,t=i.length;e<t;++e)a.hasOwnProperty(i[e])||l.push(i[e]);return l};this.extend=function(o){return new LPDialog.DialogLoader({id:o.id||l.id,htmlSource:s(l.htmlSource,o.htmlSource),css:s(l.css,o.css),js:s(l.js,o.js),type:o.type||l.type,parentElementID:o.parentElementID||l.parentElementID})},this.loadedJS=function(){return e},this.getID=function(){return l.id};var d=(c=this,function(o){var i=window[l.type];t=new i(c),e=!0,o(t)}),c;this.loadJS=function(o){a?(Topics.get(Topics.DIALOG_LOADING).publish(),a.load(function(){d(o)})):d(o)};var D=function(o,a,l){l=l||0;var r=o.find("img");if(0<r.length)for(var i=function(){var o=0,i=null,e=!1;if(0<l){function t(){e=!0,o<r.length&&a()}i=setTimeout(t,l)}return function(){++o,e||o!==r.length||(clearTimeout(i),i=null,a())}}(),e=0,t=r.length;e<t;++e)$(r[e]).bind("load",i);else a()},u=function(e,o){(o=$(o)).find("[dialogsection]").addBack("[dialogsection]").each(function(){var o=this.getAttribute("dialogsection"),i=e.find("[dialogsection="+o+"]");i.before(this),i.remove()}),o.find("[dialogsectionbefore]").addBack("[dialogsectionbefore]").each(function(){var o=this.getAttribute("dialogsectionbefore");e.find("[dialogsection="+o+"]").before(this)}),o.find("[dialogsectionafter]").addBack("[dialogsectionafter]").each(function(){var o=this.getAttribute("dialogsectionafter");e.find("[dialogsection="+o+"]").after(this)}),o.find("[dialogsectionappend]").addBack("[dialogsectionappend]").each(function(){var o=this.getAttribute("dialogsectionappend");e.find("[dialogsection="+o+"]").append(this)}),o.find("[dialogsectionprepend]").addBack("[dialogsectionprepend]").each(function(){var o=this.getAttribute("dialogsectionprepend");e.find("[dialogsection="+o+"]").prepend(this)})},p=function(i,e,t,a){t<e.length?LPPlatform.getHTML(h+l.htmlSource[t],function(o){u(i,o),p(i,e,++t,a)}):a()},m=function(i,o){var e=function(){D(i,o,f)};l.htmlSource instanceof Array?LPPlatform.getHTML(h+l.htmlSource[0],function(o){i.html(o),p(i,l.htmlSource,1,e)}):l.htmlSource?LPPlatform.getHTML(h+l.htmlSource,function(o){i.html(o),e()}):e()};this.load=function(o,i){r?r.load(function(){m(o,i)}):m(o,i)},this.open=function(){var o=arguments;o&&o[0]?o[0].type=this.type:o=[{type:this.type}],this.loadedJS()?t.open.apply(t,o):(y(i),this.loadJS(function(){LPDialog.beforeLoad?LPDialog.beforeLoad(g(),function(){t.open.apply(t,o)}):t.open.apply(t,o),L(i)}))},this.close=function(){t&&t.close.apply(t,arguments)},this.getDialog=function(){return t}},JSFileSet:w,CSSFileSet:S,getPendingCount:function(){return a.length},getDialogs:function(){var o=[];for(var i in dialogs)o.push(dialogs[i]);return o},setBaseURL:function(o){h=o},openDialog:function(o,i){dialogs[o].open(i)}}}("undefined"!=typeof document&&document),dialogs={site:new LPDialog.DialogLoader({id:"siteDialog",htmlSource:"siteDialog.html",css:["buttons","dialog","siteDialog","passwordMeter"],js:["selectDropdown","typeaheadDropdown","dialog","dialogWithGroupInput","editableFieldsDialog","siteDialog","passwordMeter","bloodhound","bloodhoundDropdown","confirmationDialog"],type:"SiteDialog"}),note:new LPDialog.DialogLoader({id:"noteDialog",htmlSource:"noteDialog.html",css:["buttons","dialog","noteDialog"],js:["selectDropdown","typeaheadDropdown","stateDropdown","phoneInput","cc3l","dialog","dialogWithGroupInput","noteDialog","countrySelect","timezoneSelect"],type:"NoteDialog"}),customNoteTemplate:new LPDialog.DialogLoader({id:"customNoteTemplateDialog",htmlSource:"customNoteTemplateDialog.html",css:["buttons","dialog","customNoteTemplateDialog"],js:["selectDropdown","typeaheadDropdown","dialog","customNoteTemplateDialog"],type:"CustomNoteTemplateDialog"}),formFill:new LPDialog.DialogLoader({id:"formFillDialog",htmlSource:"formFillDialog.html",css:["buttons","dialog","formFillDialog"],js:["selectDropdown","typeaheadDropdown","formFillDialog","countrySelect","timezoneSelect","stateDropdown","phoneInput","cc3l"],type:"FormFillDialog"}),acceptShare:new LPDialog.DialogLoader({id:"acceptShareDialog",htmlSource:"acceptRejectShareDialog.html",css:["buttons","dialog","acceptRejectShareDialog"],js:["selectDropdown","typeaheadDropdown","dialog","dialogWithGroupInput","acceptRejectShareDialog"],type:"AcceptShareDialog"}),share:new LPDialog.DialogLoader({id:"shareDialog",htmlSource:"shareDialog.html",css:["buttons","dialog","shareDialog","containerSelectionDialog","vaultItem"],js:["selectDropdown","typeaheadDropdown","dialog","shareDialog","bloodhound","bloodhoundDropdown","vaultItemTypeahead","sharingModel"],type:"ShareDialog"}),identity:new LPDialog.DialogLoader({id:"identityDialog",htmlSource:"identityDialog.html",css:["buttons","dialog","containerSelectionDialog","identityDialog"],js:["dialog","containerSelectionDialog","identityDialog"],type:"IdentityDialog"}),sharedfolderAccess:new LPDialog.DialogLoader({id:"sharedFolderAccessDialog",htmlSource:"sharedFolderAccessDialog.html",css:["buttons","dialog","containerSelectionDialog","sharedFolderAccessDialog"],js:["dialog","containerSelectionDialog","sharedFolderAccessDialog"],type:"SharedFolderAccessDialog"}),sharedFolder:new LPDialog.DialogLoader({id:"sharedFolderDialog",htmlSource:"sharedFolderDialog.html",css:["buttons","dialog","sharedFolderDialog"],js:["dialog","sharedFolderDialog","bloodhound","selectDropdown","typeaheadDropdown","bloodhoundDropdown"],type:"SharedFolderDialog"}),familiesSharedFolder:new LPDialog.DialogLoader({id:"familiesSharedFolderDialog",htmlSource:"familiesSharedFolderDialog.html",css:["buttons","dialog","familiesSharedFolderDialog"],js:["dialog","selectDropdown","familiesSharedFolderDialog"],type:"FamiliesSharedFolderDialog"}),createSharedFolder:new LPDialog.DialogLoader({id:"createSharedFolderDialog",htmlSource:"createSharedFolderDialog.html",css:["buttons","dialog"],js:["dialog","dialogWithGroupInput","folderDialog"],type:"CreateSharedFolderDialog"}),convertLegacySharedFolder:new LPDialog.DialogLoader({id:"convertLegacySharedFolderDialog",htmlSource:"convertLegacySharedFolderDialog.html",css:["buttons","dialog","convertLegacySharedFolderDialog"],js:["dialog","selectDropdown","convertLegacySharedFolderDialog"],type:"ConvertLegacySharedFolderDialog"}),createCreditMonitoring:new LPDialog.DialogLoader({id:"createCreditMonitoringDialog",htmlSource:"createCreditMonitoringDialog.html",css:["buttons","dialog","createCreditMonitoringDialog"],js:["dialog","createCreditMonitoringDialog"],type:"CreateCreditMonitoringDialog"}),generatePassword:new LPDialog.DialogLoader({id:"generatePasswordDialog",htmlSource:"generatePasswordDialog.html",css:["buttons","dialog","generatePasswordDialog","passwordMeter"],js:["dialog","generatePasswordDialog","selectDropdown","passwordMeter"],type:"GeneratePasswordDialog"}),betterGeneratePassword:new LPDialog.DialogLoader({id:"betterGeneratePasswordDialog",htmlSource:"betterGeneratePasswordDialog.html",css:["buttons","dialog","passwordMeter","betterGeneratePassword","betterGeneratePasswordDialog"],js:["dialog","betterGeneratePasswordDialog","selectDropdown","passwordMeter"],type:"BetterGeneratePasswordDialog"}),login:new LPDialog.DialogLoader({id:"loginDialog",htmlSource:"loginDialog.html",css:["loginDialog"],js:["loginDialog","capslockstate"],type:"LoginDialog"}),reprompt:new LPDialog.DialogLoader({id:"repromptDialog",htmlSource:"repromptDialog.html",css:["repromptDialog"],js:["repromptDialog"],type:"RepromptDialog"}),createAccount:new LPDialog.DialogLoader({id:"createAccountDialog",htmlSource:"createAccountDialog.html",css:["buttons","dialog","createAccountDialog","passwordMeter"],js:["dialog","createAccountDialog","selectDropdown","passwordMeter"],type:"CreateAccountDialog"}),folder:new LPDialog.DialogLoader({id:"folderDialog",type:"FolderDialog",css:["buttons","dialog"],js:["dialog","selectDropdown","typeaheadDropdown","dialogWithGroupInput","folderDialog"],htmlSource:"folderDialog.html"}),fieldHistory:new LPDialog.DialogLoader({id:"fieldHistoryDialog",htmlSource:"fieldHistoryDialog.html",css:["buttons","dialog","fieldHistoryDialog"],js:["dialog","fieldHistoryDialog"],type:"FieldHistoryDialog"}),confirmation:new LPDialog.DialogLoader({id:"confirmationDialog",htmlSource:"confirmationDialog.html",css:["buttons","dialog"],js:["dialog","confirmationDialog"],type:"ConfirmationDialog"}),alert:new LPDialog.DialogLoader({id:"alertDialog",htmlSource:"alertDialog.html",css:["buttons","dialog"],js:["dialog","confirmationDialog"],type:"AlertDialog"}),enterpriseTrial:new LPDialog.DialogLoader({id:"enterpriseTrialDialog",htmlSource:"enterpriseTrialDialog.html",css:["buttons","dialog"],js:["dialog","enterpriseTrialDialog"],type:"EnterpriseTrialDialog"}),denyEmergencyAccess:new LPDialog.DialogLoader({id:"denyEmergencyAccessDialog",htmlSource:"denyEmergencyAccessDialog.html",css:["buttons","dialog"],js:["dialog","denyEmergencyAccessDialog"],type:"DenyEmergencyAccessDialog"}),verifyEmail:new LPDialog.DialogLoader({id:"verifyEmailDialog",htmlSource:"verifyEmailDialog.html",css:["buttons","dialog"],js:["dialog","verifyEmailDialog"],type:"VerifyEmailDialog"}),application:new LPDialog.DialogLoader({id:"applicationDialog",htmlSource:"applicationDialog.html",css:["buttons","dialog","passwordMeter"],js:["dialog","dialogWithGroupInput","editableFieldsDialog","passwordMeter","applicationDialog"],type:"ApplicationDialog"}),chooseProfile:new LPDialog.DialogLoader({id:"chooseProfileDialog",htmlSource:"chooseProfileDialog.html",css:["buttons","dialog","chooseProfileDialog"],js:["dialog","chooseProfileDialog"],type:"ChooseProfileDialog"}),vaultItemSelect:new LPDialog.DialogLoader({id:"vaultItemSelectDialog",htmlSource:"vaultItemSelectDialog.html",css:["buttons","dialog","vaultItem"],js:["dialog","vaultItemSelectDialog"],type:"VaultItemSelectDialog"}),inviteFriends:new LPDialog.DialogLoader({id:"inviteFriendsDialog",htmlSource:"inviteFriendsDialog.html",css:["buttons","dialog"],js:["dialog","inviteFriendsDialog"],type:"InviteFriendsDialog"}),addEmergencyAccess:new LPDialog.DialogLoader({id:"addEmergencyAccessDialog",htmlSource:"addEmergencyAccessDialog.html",css:["buttons","dialog"],js:["dialog","addEmergencyAccessDialog"],type:"AddEmergencyAccessDialog"}),upgradePremium:new LPDialog.DialogLoader({id:"upgradePremiumDialog",htmlSource:"upgradePremiumDialog.html",css:["buttons","dialog"],js:["dialog","upgradePremiumDialog"],type:"UpgradePremiumDialog"}),upgradeFamiliesForFolderSharing:new LPDialog.DialogLoader({id:"upgradeFamiliesForFolderSharingDialog",htmlSource:"upgradeFamiliesForFolderSharingDialog.html",css:["buttons","dialog"],js:["dialog","upgradeFamiliesForFolderSharingDialog"],type:"UpgradeFamiliesForFolderSharingDialog"}),familiesInvitation:new LPDialog.DialogLoader({id:"familiesInvitationDialog",htmlSource:"familiesInvitationDialog.html",css:["buttons","dialog"],js:["dialog","familiesInvitationDialog"],type:"FamiliesInvitationDialog"}),tryFamilies:new LPDialog.DialogLoader({id:"tryFamiliesDialog",htmlSource:"tryFamiliesDialog.html",css:["buttons","dialog"],js:["dialog","tryFamiliesDialog"],type:"TryFamiliesDialog"}),addTotpDialog:new LPDialog.DialogLoader({id:"addTotpDialog",htmlSource:"addTotpDialog.html",css:["buttons","dialog"],js:["dialog","addTotpDialog"],type:"AddTotpDialog"}),sharingKey:new LPDialog.DialogLoader({id:"sharingKeyDialog",htmlSource:"sharingKeyDialog.html",css:["buttons","dialog"],js:["dialog","sharingKeyDialog"],type:"SharingKeyDialog"}),addFormField:new LPDialog.DialogLoader({id:"addFormFieldDialog",htmlSource:"addFormFieldDialog.html",js:["dialog","dialogWithGroupInput","editableFieldsDialog"],type:"AddFormFieldDialog"}),addItem:new LPDialog.DialogLoader({id:"addItemDialog",htmlSource:"addItemDialog.html",js:["addItemDialog"],css:["addItemDialog","lpGrid"],type:"AddItemDialog"}),restrictedSharing:new LPDialog.DialogLoader({id:"restrictedSharingDialog",htmlSource:"restrictedSharingDialog.html",js:["restrictedSharingDialog"],css:["buttons","restrictedSharingDialog"],type:"RestrictedSharingDialog"}),restrictedEmergencyAccess:new LPDialog.DialogLoader({id:"restrictedEmergencyAccess",htmlSource:"restrictedEmergencyAccessDialog.html",js:["restrictedEmergencyAccessDialog"],css:["dialog","buttons","restrictedEmergencyAccessDialog"],type:"RestrictedEmergencyAccessDialog"}),vaultTakeoverUpdateNotification:new LPDialog.DialogLoader({id:"vaultTakeoverUpdateNotification",htmlSource:"vaultTakeoverUpdateNotification.html",js:["vaultTakeoverUpdateNotification"],css:["dialog","buttons","vaultTakeoverUpdateNotification"],type:"VaultTakeoverUpdateNotificationDialog"}),tourDialogBase:new LPDialog.DialogLoader({id:"introTourDialog",htmlSource:"Tour/introTourDialog.html",css:["buttons","dialog","lpGrid","Tour/introTourDialog"],js:["dialog","lpArrow","lpPing","lpTag","Tour/introTourData","Tour/introTourFlow","Tour/introTourQueue","Tour/introTour","Tour/introTourDialog"],type:"IntroTourDialog"}),vaultInfoBanner:new LPDialog.DialogLoader({css:["buttons","dialog","lpGrid","vaultInfoBanner"],htmlSource:"vaultInfoBanner.html",js:["dialog","vaultInfoBanner"],type:"VaultInfoBanner"}),vaultTierExpiredDialog:new LPDialog.DialogLoader({id:"vaultTierExpiredDialog",htmlSource:"vaultTierExpiredDialog.html",css:["buttons","dialog"],js:["dialog","vaultTierExpiredDialog"],type:"TierExpiredDialog"}),vaultBillingAddressDialog:new LPDialog.DialogLoader({id:"vaultBillingAddressDialog",htmlSource:"vaultBillingAddressDialog.html",js:["vaultBillingAddressDialog"],css:["dialog","buttons","vaultBillingAddressDialog"],type:"VaultBillingAddressDialog"}),vaultDeviceLimitNotificationDialog:new LPDialog.DialogLoader({id:"vaultDeviceLimitNotificationDialog",htmlSource:"vaultDeviceLimitNotificationDialog.html",js:["vaultDeviceLimitNotificationDialog"],css:["dialog","buttons","vaultDeviceLimitNotificationDialog"],type:"VaultDeviceLimitNotificationDialog"}),encryptedExportDialog:new LPDialog.DialogLoader({id:"encryptedExportDialog",htmlSource:"encryptedExportDialog.html",css:["encryptedExportDialog","dialog"],js:["encryptedExportDialog","dialog"],type:"EncryptedExportDialog"}),vaultDeviceLimitDialog:new LPDialog.DialogLoader({id:"vaultDeviceLimitDialog",htmlSource:"vaultDeviceLimitDialog.html",css:["vaultDeviceLimitDialog","buttons","dialog"],js:["vaultDeviceLimitDialog"],type:"VaultDeviceLimitDialog"}),reTrialDialog:new LPDialog.DialogLoader({id:"reTrialDialog",htmlSource:"reTrialDialog.html",css:["reTrialDialog","buttons","dialog"],js:["reTrialDialog"],type:"ReTrialDialog"}),vaultUpgradeToPremiumDialog:new LPDialog.DialogLoader({id:"vaultUpgradeToPremiumDialog",htmlSource:"vaultUpgradeToPremiumDialog.html",css:["vaultUpgradeToPremiumDialog","dialog"],js:["vaultUpgradeToPremiumDialog","dialog"],type:"VaultUpgradeToPremiumDialog"})},dialogs.changePassword=dialogs.vaultItemSelect.extend({id:"changePasswordDialog",js:"changePasswordDialog",type:"ChangePasswordDialog"}),"undefined"!=typeof module&&(module.exports=dialogs),function(){var o;(function(){"undefined"!=typeof $?$.extend.apply($,arguments):Object.assign.apply(Object,arguments)})(dialogs,{notification:new LPDialog.DialogLoader({id:"notificationDialog",htmlSource:"notificationDialog.html",css:["buttons","dialog","notificationDialog"],js:["dialog","notificationDialog"],type:"NotificationDialog"}),duplicatePassword:new LPDialog.DialogLoader({id:"duplicatePasswordDialog",htmlSource:"duplicatePasswordDialog.html",css:["buttons","dialog","duplicatePasswordDialog"],js:["dialog","duplicatePasswordDialog"],type:"DuplicatePasswordDialog"}),weakPassword:new LPDialog.DialogLoader({id:"weakPasswordDialog",htmlSource:"weakPasswordDialog.html",css:["buttons","dialog","weakPasswordDialog"],js:["dialog","weakPasswordDialog"],type:"WeakPasswordDialog"}),securityNotice:new LPDialog.DialogLoader({id:"securityNoticeDialog",htmlSource:"securityNoticeDialog.html",css:["buttons","dialog","securityNoticeDialog"],js:["dialog","securityNoticeDialog"],type:"SecurityNoticeDialog"}),breachAlert:new LPDialog.DialogLoader({id:"breachAlertDialog",htmlSource:"breachAlertDialog.html",css:["buttons","dialog","breachAlertDialog"],js:["dialog","breachAlertDialog"],type:"BreachAlertDialog"}),preferences:new LPDialog.DialogLoader({id:"preferencesDialog",htmlSource:"preferencesDialog.html",css:["buttons","dialog","preferencesDialog"],js:["dialog","preferencesDialog"],type:"PreferencesDialog"}),requestClipboardPermissions:new LPDialog.DialogLoader({id:"requestClipboardPermissionsDialog",htmlSource:"requestClipboardPermissionsDialog.html",css:["buttons","dialog","requestClipboardPermissionsDialog"],js:["dialog","requestClipboardPermissionsDialog"],type:"RequestClipboardPermissionsDialog"}),introTutorialWelcome:new LPDialog.DialogLoader({id:"introTutorialWelcomeDialog",htmlSource:"IntroTutorial/introTutorialWelcomeDialog.html",css:["buttons","dialog","lpGrid","IntroTutorial/introTutorialHelpDialog","IntroTutorial/introTutorial"],js:["dialog","IntroTutorial/introTutorialHelpDialogOriginal","IntroTutorial/introTutorialWelcomeDialog"],type:"IntroTutorialWelcomeDialog"}),inContextTutorialWelcome:new LPDialog.DialogLoader({id:"inContextTutorialWelcomeDialog",htmlSource:"IntroTutorial/inContextTutorialWelcomeDialog.html",css:["fonts/opensans/opensans","buttons","dialog","lpGrid","IntroTutorial/inContextTutorial"],js:["dialog","lpTile","IntroTutorial/LPSiteService","IntroTutorial/introTutorialImages","IntroTutorial/inContextTutorialWelcomeDialog"],type:"InContextTutorialWelcomeDialog"}),introTutorialSelectSite:new LPDialog.DialogLoader({id:"introTutorialSelectSiteDialog",htmlSource:"IntroTutorial/introTutorialSelectSiteDialog.html",css:["buttons","dialog","lpGrid","IntroTutorial/introTutorialHelpDialog","IntroTutorial/introTutorial"],js:["dialog","IntroTutorial/LPSiteService","IntroTutorial/introTutorialImages","IntroTutorial/introTutorialSelectSiteDialog"],type:"IntroTutorialSelectSiteDialog"}),introTutorialComplete:new LPDialog.DialogLoader({id:"introTutorialCompleteDialog",htmlSource:"IntroTutorial/introTutorialCompleteDialog.html",css:["buttons","dialog","lpGrid","IntroTutorial/introTutorialHelpDialog","IntroTutorial/introTutorial"],js:["dialog","IntroTutorial/introTutorialCompleteDialog"],type:"IntroTutorialCompleteDialog"}),introTutorialHelp:new LPDialog.DialogLoader({id:"introTutorialHelpDialog",htmlSource:"IntroTutorial/introTutorialHelpDialog.html",css:"IntroTutorial/introTutorialHelpDialog",js:["IntroTutorial/introTutorialHelpDialog"],type:"IntroTutorialHelpDialog"}),tourDialogBase:new LPDialog.DialogLoader({id:"introTourDialog",htmlSource:"Tour/introTourDialog.html",css:["buttons","dialog","lpGrid","Tour/introTourDialog"],js:["dialog","lpArrow","lpPing","Tour/introTourData","Tour/introTourFlow","Tour/introTourQueue","Tour/introTour","Tour/introTourDialog"],type:"IntroTourDialog"}),migration:new LPDialog.DialogLoader({id:"migrationPopup",htmlSource:"migrationPopup.html",css:["buttons","migrationPopup"],js:["migrationPopup"],type:"MigrationPopup"}),firefoxAccept:new LPDialog.DialogLoader({id:"firefoxAccept",htmlSource:"extensionFirefoxAccept.html",css:["buttons","dialog","lpGrid","extensionFirefoxAccept"],js:["dialog","request","extensionFirefoxAccept"],type:"ExtensionFirefoxAccept"}),siteFeedback:new LPDialog.DialogLoader({id:"siteFeedbackDialog",htmlSource:"siteFeedback.html",css:["buttons","dialog","siteFeedback"],js:["dialog","siteFeedbackDialog"],type:"SiteFeedbackDialog"})}),dialogs.login=dialogs.login.extend({htmlSource:"extensionLoginDialog.html",css:"extensionLoginDialog",js:["extensionLoginDialog","selectDropdown","typeaheadDropdown"],type:"ExtensionLoginDialog"}),dialogs.siteTutorial=dialogs.site.extend({css:"IntroTutorial/introTutorialHelpDialogOriginal",js:["IntroTutorial/introTutorialHelpDialogOriginal","extensionSiteTutorialDialog"],type:"ExtensionSiteTutorialDialog"}),function(){var o=new LPDialog.DialogLoader({id:"loginDialog",htmlSource:"extensionLoginDialogSimple.html",css:["fonts/opensans/opensans.css","loginDialog","extensionDialogSimple","extensionLoginDialogBase","lpGrid","backgroundOverlay"],js:["loginDialog","extensionLoginDialog","capslockstate","extensionLoginDialogSimple","selectDropdown","typeaheadDropdown","fieldValidator","backgroundOverlay"],type:"ExtensionLoginDialogSimple"});dialogs.loginSimple=o.extend({css:["extensionLoginDialogSimple"]}),dialogs.loginTab=o.extend({css:["extensionLoginDialogTab"]}),dialogs.loginApp=dialogs.loginSimple.extend({js:["extensionLoginDialogApp"],type:"ExtensionLoginDialogApp"});var i=new LPDialog.DialogLoader({id:"createAccountDialog",css:["fonts/opensans/opensans.css","extensionDialogSimple","buttons","dialog","lpGrid","passwordMeter","backgroundOverlay","extensionCreateAccountBase"],js:["createAccountDialog","dialog","extensionCreateAccount","selectDropdown","passwordMeter","fieldValidator","backgroundOverlay","fieldToolTip","emailToolTip","buildVars"],type:"ExtensionCreateAccount"});dialogs.createAccountSimple=i.extend({htmlSource:"extensionCreateAccountDialogSimple.html",css:["extensionCreateAccountSimple"],js:["extensionCreateAccountSimple"],type:"ExtensionCreateAccountSimple"}),dialogs.createAccountIcon=i.extend({htmlSource:"extensionCreateAccountDialogIcon.html",css:["extensionCreateAccountIcon","compositeBackgroundOverlay"],js:["extensionCreateAccountIcon","request","lpArrow","compositeBackgroundOverlay"],type:"ExtensionCreateAccountIcon"})}()}();