var webClient=(window.webpackJsonpwebClient=window.webpackJsonpwebClient||[]).push([[3],{103:function(e,t,n){"use strict";function r(e,t){return{event:e,properties:t}}function _(e){return r(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0)}n.d(t,"a",function(){return r}),n.d(t,"b",function(){return _})},109:function(e,t,n){"use strict";var r,_=n(17),i=n(5),a=function(e){return Array.isArray(e)?e:[e]},o="[tracking] segment event";function s(e,t){return Object(i.a)({},e,{events:t})}function c(e,t,n){var r=t.event,_=t.properties;e&&e(r,_,n)}function u(e,t){var n=function(e,n,r){a(e).forEach(function(e){!function(e){return"function"===typeof e}(e)?r(e):t(function(e,t,n){return function(r){var _=e(r,t);switch(typeof _){case"boolean":return _;case"undefined":return!0;default:return _&&(Array.isArray(_)?_.forEach(n):n(_)),!1}}}(e,n,r))})};return function(t,_,i,a){switch(_){case r.LEGACY_SEGMENT:case r.SEGMENT:n(t[_],i,function(t){c(e[_],t,a)});break;case r.GOOGLE_ANALYTICS:n(t[_],i,function(t){!function(e,t){var n=t.hitType,r=t.event;e&&e(n,r)}(e[_],t)})}}}function E(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.passThrough,i=t.enabledSelector,a={},s=[],E=function(t){return function(u){return function(E){if(function(e){return e.type===o}(E))n?u(E):c(a[r.SEGMENT],E.payload);else{var l=E.events,f=E.metadata,I=Object(_.a)(E,["events","metadata"]);if(l){var d=t.getState();if(!i||i(d))for(var A in l)e(l,A,d,f)}u(I),s=s.filter(function(e){return e(t.getState())})}}}};return E.initialize=function(t){e=u(a=t,function(e){s.push(e)})},E}n.d(t,"b",function(){return s}),n.d(t,"a",function(){return E}),function(e){e.LEGACY_SEGMENT="legacySegment",e.SEGMENT="segment",e.GOOGLE_ANALYTICS="google"}(r||(r={}))},14:function(e,t,n){"use strict";function r(e,t){return void 0===t?{type:e}:{type:e,payload:t}}n.d(t,"a",function(){return r})},154:function(e,t,n){"use strict";function r(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.reduce(function(e,t){return new URL(t,e).href},e)}n.d(t,"a",function(){return r})},19:function(e,t,n){"use strict";var r;n.d(t,"a",function(){return r}),function(e){e.ENTERPRISE="Enterprise",e.ENTERPRISE_EXPIRED="Enterprise_Expired",e.ENTERPRISE_TRIAL="Enterprise_Trial",e.ENTERPRISE_TRIAL_EXPIRED="Enterprise_Trial_Expired",e.FAMILY="Family",e.FAMILY_EXPIRED="Family_Expired",e.FAMILY_TRIAL="Family_Trial",e.FAMILY_TRIAL_EXPIRED="Family_Trial_Expired",e.FREE="Free",e.PREMIUM="Premium",e.PREMIUM_TRIAL="Premium_Trial",e.TEAMS="Teams",e.TEAMS_EXPIRED="Teams_Expired",e.TEAMS_TRIAL="Teams_Trial",e.TEAMS_TRIAL_EXPIRED="Teams_Trial_Expired"}(r||(r={}))},30:function(e,t,n){"use strict";var r,_=n(31),i=n(83),a=n(25),o=n(29),s=n(32),c=n(33);!function(e){e.hidden="hidden",e.success="success",e.alert="alert",e.warning="warning",e.async="async"}(r||(r={})),n.d(t,"c",function(){return u}),n.d(t,"a",function(){return E}),n.d(t,"d",function(){return f}),n.d(t,"e",function(){return d}),n.d(t,"b",function(){return A});var u=function(e){function t(){return Object(_.a)(this,t),Object(a.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"toString",value:function(){return this.message}}]),t}(Object(c.a)(Error)),E=function(e){function t(e){var n;return Object(_.a)(this,t),(n=Object(a.a)(this,Object(o.a)(t).call(this,e.id))).messgeDesc=void 0,n.messgeDesc=e,n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"getMessageDescriptor",value:function(){return this.messgeDesc}}]),t}(Object(c.a)(Error)),l="401 Unauthorized",f=function(e){function t(){var e;return Object(_.a)(this,t),e=Object(a.a)(this,Object(o.a)(t).call(this)),Object(a.a)(e,new Error(l))}return Object(s.a)(t,e),t}(Object(c.a)(Error)),I="403 Forbidden",d=(Object(c.a)(Error),function(e){function t(){return Object(_.a)(this,t),Object(a.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),t}(Object(c.a)(Error))),A=function(e){function t(){return Object(_.a)(this,t),Object(a.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),t}(Object(c.a)(Error));r.alert},365:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(4),_=n.n(r),i=n(8),a=n(5),o=n(154);function s(e){if(e&&e.body)return Object(a.a)({},e,{body:e.body?JSON.stringify(e.body):"",headers:Object(a.a)({},e&&e.headers,{"Content-Type":"application/json"})})}var c=function(e,t){return fetch(e,t)};function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return location.origin},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c;return function(){var r=Object(i.a)(_.a.mark(function r(i,c){var u;return _.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return u=s(c),r.abrupt("return",n(Object(o.a)(t(),"lmiapi/",i),Object(a.a)({},u,{credentials:"include",headers:Object(a.a)({},u&&u.headers,{"X-CSRF-TOKEN":e()})})));case 2:case"end":return r.stop()}},r)}));return function(e,t){return r.apply(this,arguments)}}()}},368:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(5),_=n(53),i=n(131);function a(e,t){return function(n,a){if(!n){var o=t(n,a);return Object(r.a)({},e,o)}if(a.type===_.a)return Object(i.apply_patch)(n,a.payload);var s=t(n,a);return function(e,t){for(var n in t)if(e[n]!==t[n])return!0;return!1}(n,s)?Object(r.a)({},n,s):n}}},40:function(e,t,n){"use strict";var r;n.d(t,"a",function(){return r}),function(e){e.Note="Generic",e.Password="Password",e.PaymentCard="Credit Card",e.Address="Address",e.BankAccount="Bank Account",e.Database="Database",e.DriversLicense="Driver's License",e.Email="Email Account",e.HealthInsurance="Health Insurance",e.InstantMessenger="Instant Messenger",e.Insurance="Insurance",e.Membership="Membership",e.Passport="Passport",e.Server="Server",e.SocialSecurity="Social Security",e.SoftwareLicense="Software License",e.SshKey="SSH Key",e.WiFi="Wi-Fi Password",e.Custom="Custom"}(r||(r={}))},409:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={colors:{blue:{lighter:"#f5f7f8",light:"#00a3e0",neutral:"#3598db",neutral2:"#2b7bb1",dark:"#3c4862"},grey:{lighter:"#e7e8ea",light:"#c3cbcb",neutral:"#646d73",neutral2:"#747677",neutral3:"#757677",neutral4:"#5a6a81",dark:"#52585b",darker:"#1b283c"},orange:{neutral:"#f39c12",dark:"#ae6202"},green:{light:"#5fd889",dark:"#3a8454"},red:{light:"#d22d27"},black:"black",white:"#ffffff"},fonts:{primary:"'Open Sans', sans-serif"}}},53:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r="[state-sync]"},599:function(e,t,n){"use strict";n.d(t,"a",function(){return _});var r=n(0),_=function(e){return Object(r.useEffect)(function(){var t=document.getElementById("root");if(t){var n=function(){t.firstElementChild&&e(t.firstElementChild.clientWidth,t.firstElementChild.clientHeight)};if("undefined"!==typeof ResizeObserver){var r=new ResizeObserver(n);t.firstElementChild&&r.observe(t.firstElementChild);var _=new MutationObserver(function(e){n(),e.forEach(function(e){e.addedNodes.forEach(function(e){r.observe(e)}),e.removedNodes.forEach(function(e){r.unobserve(e)})})});return _.observe(t,{childList:!0}),function(){_.disconnect(),r.disconnect()}}var i,a=0,o=0,s=!1,c=function(){i=setInterval(function(){var e=!1;t.firstElementChild&&(t.firstElementChild.clientHeight!==a&&(a=t.firstElementChild.clientHeight,e=!0),t.firstElementChild.clientWidth!==o&&(o=t.firstElementChild.clientWidth,e=!0)),e&&n()},50)},u=function(){s||(s=!0,c())},E=function(){s=!1,clearInterval(i)};return window.addEventListener("focus",u),window.addEventListener("blur",E),c(),function(){window.removeEventListener("focus",u),window.removeEventListener("blur",E)}}},[e])}},604:function(e,t,n){"use strict";n.r(t);var r=n(4),_=n.n(r),i=n(8),a=n(1),o=(n(0),n(41)),s=n.n(o),c=n(7),u=n(35),E=n(409),l=function(){},f=n(90),I=n(368),d=function(){return Object(a.jsx)("div",{style:{width:"300px"}},"Hello Infield!")},A=n(599),O=n(94),T=n(91);function S(){return(S=Object(i.a)(_.a.mark(function e(t){var n,r,i,o;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=function(){return Object(A.a)(function(e,t){return i.dispatch(O.a.resizeInfieldContainer(e,t))}),Object(a.jsx)(u.a,{theme:E.a},Object(a.jsx)(c.a,{store:i},Object(a.jsx)(d,null)))},e.next=3,t.stateSync({filterType:f.a.Infield});case 3:n=e.sent,r=Object(T.a)(t,Object(I.a)(n.background.initialState,l),void 0,n),i=r.store,s.a.render(Object(a.jsx)(o,null),document.getElementById("root"));case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(e){S.apply(this,arguments)}(n(92).a)},70:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return u});var r=n(4),_=n.n(r),i=n(5),a=n(8);n(30);function o(e){return function(t,n){return function(){var r=Object(a.a)(_.a.mark(function r(a){return _.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",e(t,Object(i.a)({},n,{body:a,method:"POST"})));case 1:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()}}function s(e){return function(t,n){var r=o(e)(t,n);return function(){var e=Object(a.a)(_.a.mark(function e(t){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(t);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}}function c(e){return function(t,n){var r=o(e)(t,n);return function(){var e=Object(a.a)(_.a.mark(function e(t){var n;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(t);case 2:if(!((n=e.sent).status>=300)){e.next=5;break}throw new Error(n.statusText);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}}function u(e){return function(t,n){var r=o(e)(t,n);return function(){var e=Object(a.a)(_.a.mark(function e(t){var n;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(t);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}}},89:function(e,t,n){"use strict";function r(e,t){if(Object.values(e).includes(t))return t}n.d(t,"a",function(){return r})},90:function(e,t,n){"use strict";var r;n.d(t,"a",function(){return r}),function(e){e.ContentScript="content-script-filter",e.Popup="popup-filter",e.Vault="vault",e.SavePrompt="save-prompt",e.Infield="infield"}(r||(r={}))},91:function(e,t,n){"use strict";var r=n(46),_=n(134),i=(n(250),n(53));var a=n(36),o=n(109),s=n(5);function c(e,t){return function(n,r,_){return t.segment.post(Object(s.a)({event:n},e,{properties:Object(s.a)({},r,_)}))}}var u=n(130),E=n.n(u);n(19);function l(e,t){var n,r,_=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];e.subscribe(function(e){n=new E.a("SEGMENT_WRITE_KEY",{host:e})}),t.subscribe(function(e){r=e});return function(e,t){var a=r&&r.userId;a&&function(e){var t=i.find(function(t){return t.events.includes(e)});return!t||t.enabled()}(e)&&n.track({userId:a,event:e,properties:Object(s.a)({},t,{method:_.platform,lpversion:_.version},r&&r.traits),context:{page:{path:location.pathname,search:location.search,title:document.title,url:location.href,referrer:document.referrer},userAgent:navigator.userAgent}})}}function f(e,t){var n=new Set,r=t(e.getState()),_=null;function i(){var _=t(e.getState());_!==r&&(r=_,n.forEach(function(e){return e(r)}))}return{subscribe:function(t){return n.add(t),_||(_=e.subscribe(i)),t(r),{unsubscribe:function(){n.delete(t),!n.size&&_&&(_(),_=null)}}}}}var I,d,A=n(28),O=n(154),T=n(11),S=n(13),N=n(89);function R(){arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.LOG}!function(e){e.CANARY_TESTING="canary_testing",e.ANGULAR_FRONTEND_ENABLED="angular_frontend_enabled",e.BASIC_AUTH="basic_auth",e.COUNT_BLOB_SEGMENTS_FOR_REBUILD="count_blob_segments_for_rebuild",e.COLLECT_SHARED_FOLDER_STATISTIC="collect_shared_folder_statistic",e.NO_AUTO_FOLDER="no_auto_folder",e.OMAR_IA="omar_ia",e.OMAR_FOR_WEB="omar_for_web",e.OMAR_NON_CHROME="omar_non_chrome",e.OMAR_PASSWORD_GENERATOR="omar_password_generator",e.OMAR_UI_DRAWER_ENABLED="omar_ui_drawer_enabled",e.ZIGGY="ziggy",e.FORMFILL_MIGRATION="formfill_migration",e.FAMILY_SHARED_FOLDERS="family_shared_folders",e.FAMILY_LEGACY_SHARED_FOLDERS="family_legacy_shared_folders",e.OMAR_INFIELD_B="omar_infield_b",e.OMAR_INFIELD_C="omar_infield_c",e.TRY_FAMILIES="try_families",e.ONE_TO_ONE_SHARING_RESTRICTED="one_to_one_sharing_restricted",e.PREMIUM_SHARING_RESTRICTED="premium_sharing_restricted",e.EMERGENCY_ACCESS_RESTRICTED="emergency_access_restricted",e.RETIRE_3_0="retire_3_0",e.SAFARI_LEGACY_MESSAGING="safari_legacy_messaging",e.PREDATES_FAMILIES="predates_families",e.PROMPT_EMAIL_VERIFY_ON_SHARE_ACCEPT="prompt_email_verify_on_share_accept",e.PBKDF2_ITERATIONS_MIGRATION="pbkdf2_iterations_migration",e.BLOB_ENCRYPTION="blob_encryption",e.READ_FROM_ENCRYPTED_BLOB="read_from_encrypted_blob",e.CACHE_BLOB_ENCRYPTION_KEY="cache_blob_encryption_key",e.GETGO_ADDRESS_VALIDATION_SERVICE="getgo_address_validation_service",e.BUSINESS_BILLING_ADDRESS="business_billing_address",e.PERSONAL_BILLING_ADDRESS="personal_billing_address",e.LOGOFF_WHEN_CLOSE_BROWSER="logoff_when_close_browser",e.PASSWORD_SUBMITTED_EVENT="password_submitted_event",e.PREMIUM_BUY_AB_TEST="premium_buy_ab_test",e.ENTERPRISE_TRIAL_FORM="enterprise_trial_form",e.PRICE_CHANGE_2019="price_change_2019",e.PREMIUM_PRICE_CHANGE_2019="premium_price_change_2019",e.EMAIL_VERIFICATION_REQUIRED="email_verification_required",e.DOWNLOAD_EXTENSION_WEB_PROMPT="download_extension_web_prompt",e.LICENSE_EXPIRATION="license_expiration",e.SHOW_TRIAL_EXPIRATION="show_trial_expiration",e.LANGUAGE_USER_TEST="language_user_test",e.MIGRATION_OPT_IN="migration_opt_in",e.OMAR_MIGRATION_OPT_IN="omar_migration_opt_in",e.SAVE_A_SITE_WEB_REQUEST_2="save_a_site_web_request_2",e.OATH_KILL_SWITCH_ACTIVE="oath_kill_switch_active",e.AUTOFILL_HTTPS_TEST="autofill_https_test",e.REACT_LOGIN="react_login",e.REACT_LOGIN_CONTROL="react_login_control",e.REACT_LOGIN_EXT="react_login_ext",e.REDUX_VAULT_DATA="redux_vault_data",e.UNIVERSAL_ADMIN_CONSOLE="universal_admin_console",e.UAC_EXISTING_ADMIN_LAUNCH_LIGHTBOX="uac_existing_admin_launch_lightbox",e.UNIVERSAL_PROFILER="universal_profiler",e.SHARED_FOLDER_SKIP_LOG="shared_folder_skip_log",e.CSP_REPORTING_ENABLED="csp_reporting_enabled",e.BLOB_ASSEMBLE_TIME_TRACKING="blob_assemble_time_tracking",e.AUTORENEWAL_CHARGE="autorenewal_charge",e.KILL_LEGACY_SSO="kill_legacy_sso",e.SCIM_EXTENDED_LOGGING="scim_extended_logging",e.LOGIN_VERIFICATION_EMAIL_SENT_REPORT_LOG="login_verification_email_sent_report_log",e.LOGIN_TYPE_CHECK_NO_USER_FOUND_WITH_VALID_EMAIL_LOG="login_type_check_no_user_found_with_valid_email_log",e.IDENTITY_WEB_TRIAL_PURCHASE="identity_web_trial_purchase",e.BOSS_CONNECTION_ENABLED="boss_connection_enabled",e.VIEW_OLDUI_ON_INSTALL_PAGE="view_oldui_on_install_page",e.FAMILIES_PROVISIONING_UPDATE="families_provisioning_update",e.FILL_MULTI_STEP_LOGIN="fill_multi_step_login",e.ICON_EXPANDED_LOOKS_LIKE_USERNAME="icon_expanded_looks_like_username",e.SAVE_A_SITE_OTP="save_a_site_otp",e.MOVE_USER_TO_DATA_RESIDENCY_INSTEAD_OF_DC="move_user_to_data_residency_instead_of_dc",e.MOVE_COMPANY_TO_DATA_RESIDENCY_INSTEAD_OF_DC="move_company_to_data_residency_instead_of_dc",e.SITE_FEEDBACK="site_feedback",e.SITE_FEEDBACK_NEW_BADGE="site_feedback_new_badge",e.FIELD_OVERRIDE_GLOBAL="field_override_global",e.FIELD_OVERRIDE_ADMIN="field_override_admin",e.DECLINE_ENTERPRISE_INVITATION="decline_enterprise_invitation",e.GIFT_MENU_ITEM_BUTTON="gift_menu_item_button",e.SECURE_NOTE_HISTORY_INCREASED_TO_100="secure_note_history_increased_to_100",e.MESSAGE_DEPRECATED_CLIENTS_ON_LOGIN="message_deprecated_clients_on_login",e.DEVICE_LIMIT_NOTIFICATION="device_limit_notification",e.OMAR_VAULT_MIGRATION_PHASE_1="omar_vault_migration_phase_1",e.OMAR_VAULT_MIGRATION_PHASE_2="omar_vault_migration_phase_2",e.OMAR_VAULT_MIGRATION_PHASE_3="omar_vault_migration_phase_3",e.VAULT_PREMIUM_FEATURE_INDICATOR="vault_premium_feature_indicator",e.VAULT_PREMIUM_POPUPS_ENABLED="vault_premium_popups_enabled",e.NEW_NATIVE_EXTENSION_ADS_ENABLED="new_native_extension_ads_enabled",e.BINARYLESS_ATTACHMENT_HANDLING="binaryless_attachment_handling",e.ACCOUNT_VERSION_TRACKING="account_version_tracking",e.FAMILY_BOSS_CONNECTION_ENABLED="family_boss_connection_enabled",e.REPORT_INAPP_TO_BOSS="report_inapp_to_boss",e.DISPLAY_UPGRADE_ADFS_WARNING="display_upgrade_adfs_warning",e.ALLOW_PING_FEDERATE="allow_ping_federate",e.SSO_SHOW_IN_IFRAME="sso_show_in_iframe",e.PREMIUM_BOSS_CONNECTION_ENABLED="premium_boss_connection_enabled",e.SECURITY_DASHBOARD="security_dashboard",e.OVERRIDE_POLL_INTERVAL_POLICY="override_poll_interval_policy",e.PREMIUM_TRIAL_UPGRADE_TEST_SHARING="premium_trial_upgrade_test_sharing",e.PREMIUM_TRIAL_UPGRADE_TEST_EMERGENCY_ACCESS="premium_trial_upgrade_test_emergency_access",e.PREMIUM_TRIAL_TO_FAMILIES_TEST_GENERIC="premium_trial_to_families_test_generic",e.PREMIUM_TO_FAMILIES_TEST_GENERIC="premium_to_families_test_generic",e.FREE_TO_PREMIUM_AD_TEST_GENERIC="free_to_premium_ad_test_generic",e.FREE_TO_PREMIUM_AD_TEST_SHARING="free_to_premium_ad_test_sharing",e.IDENTITY_TRIAL_UPGRADE_TEST_GENERIC="identity_trial_upgrade_test_generic",e.BOSS_ACCOUNT_CREATION_FROM_FREE_ENABLED="boss_account_creation_from_free_enabled",e.BOSS_ACCOUNT_CREATION_FOR_USERS_WITH_PAYMENT_HISTORY="boss_account_creation_for_users_with_payment_history",e.ON_THE_FLY_PREMIUM_BOSS_MIGRATION_UPON_FREE_USER_CONVERSION="on_the_fly_premium_boss_migration_upon_free_user_conversion",e.ON_THE_FLY_FAMILIES_BOSS_MIGRATION_UPON_FREE_USER_CONVERSION="on_the_fly_families_boss_migration_upon_free_user_conversion",e.ON_THE_FLY_BUSINESS_BOSS_MIGRATION_UPON_FREE_USER_CONVERSION="on_the_fly_business_boss_migration_upon_free_user_conversion",e.CUSTOM_PRICE_FOR_BOSS_MIGRATION="custom_price_for_boss_migration",e.SHOW_INCLUDE_LOGGING="show_include_logging",e.LOG_EXPANDABLEDATA_STATS_IN_SPLUNK="log_expandabledata_stats_in_splunk",e.MANAGED_SERVICE_PROVIDER_FUNCTIONALITY="managed_service_provider_functionality",e.MSP_AGGREGATOR_FUNCTIONALITY="msp_aggregator_functionality",e.MSP_IDENTITY_CHILDREN="msp_identity_children",e.DISABLE_SF_FOR_EXPIRED_COMPANIES="disable_sf_for_expired_companies",e.ENABLE_SEGMENT_GROUP_ASSOCIATION_CALLS="enable_segment_group_association_calls",e.WEB_CLIENT_FILL="web_client_fill",e.WEB_CLIENT_FILL_TRACKING="web_client_fill_tracking",e.WEB_CLIENT_SAVE="web_client_save",e.WEB_CLIENT_INFIELD="web_client_infield",e.HIDE_PAYMENT_FLOWS="hide_payment_flows",e.BOSS_ACCOUNT_CREATION_FOR_EXPIRED_BUSINESS="boss_account_creation_for_expired_business",e.DO_SF_REPAIR="do_sf_repair",e.DWM_EXPRESS_VPN_AD="dwm_express_vpn_ad",e.ASYNC_INCREMENT_ACCTS_VERSION_MULTIPLE="async_increment_accts_version_multiple",e.CACHE_FILLABLE_SITES="cache_fillable_sites",e.SUPPORT_LEVEL0_ENABLED="support_level0_enabled",e.MIXPANEL_IAM="mixpanel_iam",e.FAST_USER_DELETE_BY_DEACTIVATED3="fast_user_delete_by_deactivated3",e.ENABLE_MFA_SERVICE="enable_mfa_service",e.IN_APP_MESSAGING_WEB_VAULT="in_app_messaging_web_vault",e.IN_APP_MESSAGING_EXTENSION_VAULT="in_app_messaging_extension_vault",e.IN_APP_MESSAGING_EXTENSION_DROPDOWN="in_app_messaging_extension_dropdown",e.HIDE_TWO_FACTOR_CODE_IN_VAULT="hide_two_factor_code_in_vault",e.PREMIUM_BILLING_ADDRESS_COLLECTION="premium_billing_address_collection",e.FAMILIES_ADMINS_BILLING_ADDRESS_COLLECTION="families_admins_billing_address_collection",e.TEAMS_ADMINS_BILLING_ADDRESS_COLLECTION="teams_admins_billing_address_collection",e.ENTERPRISE_ADMINS_BILLING_ADDRESS_COLLECTION="enterprise_admins_billing_address_collection",e.ALLOW_TRANSAKT_MFA="allow_transakt_mfa",e.OPTIMIZATION_FOR_SCIMOFFSETQUERIES="optimization_for_scimoffsetqueries",e.MULTI_DEVICE_PAYWALL="multi_device_paywall",e.PREMIUM_RETRIAL="premium_retrial",e.PROMOTION_VAULT_SEARCH="promotion_vault_search",e.PROMOTION_EXTENSION_SEARCH="promotion_extension_search",e.PROMOTION_VAULT_SIDEBAR_G2A="promotion_vault_sidebar_g2a",e.PROMOTION_VAULT_SIDEBAR_G2W="promotion_vault_sidebar_g2w",e.PROMOTION_VAULT_SIDEBAR_G2M_VARIANT_A="promotion_vault_sidebar_g2m_variant_a",e.PROMOTION_VAULT_SIDEBAR_G2M_VARIANT_B="promotion_vault_sidebar_g2m_variant_b",e.PROMOTION_EXTENSION_MENU_ITEM_G2A="promotion_extension_menu_item_g2a",e.PROMOTION_EXTENSION_MENU_ITEM_G2W="promotion_extension_menu_item_g2w",e.PROMOTION_EXTENSION_MENU_ITEM_G2M="promotion_extension_menu_item_g2m",e.PROMOTION_EXTENSION_DIALOG_G2A="promotion_extension_dialog_g2a",e.PROMOTION_EXTENSION_DIALOG_G2W="promotion_extension_dialog_g2w",e.PROMOTION_PROMPT_EMAIL_VERIFY="promotion_prompt_email_verify",e.PAYPAL_CANCELLATION="paypal_cancellation",e.SKIP_BACKUP_BEFORE_COMPANY_USER_DELETION="skip_backup_before_company_user_deletion",e.RESPECT_COMPANY_RESIDENCY_FOR_CASSANDRA_OPERATIONS="respect_company_residency_for_cassandra_operations",e.SCIM_PATCH_NO_CONTENT="scim_patch_no_content",e.INFIELD_MULTIDEVICE_PAYWALL_TRACKING="infield_multidevice_paywall_tracking",e.PERMISSION_ENGINE="permission_engine",e.FAMILY_AS_A_BENEFIT="family_as_a_benefit",e.FAMILY_AS_A_BENEFIT_WELCOME_DIALOG="family_as_a_benefit_welcome_dialog"}(I||(I={})),function(e){e.DEBUG="debug",e.LOG="log",e.WARN="warn",e.ERROR="error"}(d||(d={}));var p=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return R.apply(void 0,[d.LOG].concat(t))},m=["intro_tutorial_version","freamon","is_mobile_active","blob_version_set","isDogfood","hide_cloud_apps_policy_enabled","omar_vault_migration","security_dashboard_paywall"];function L(e){var t,n=e.omar_vault_migration,r=(t={},Object(S.a)(t,I.OMAR_VAULT_MIGRATION_PHASE_1,1===n),Object(S.a)(t,I.OMAR_VAULT_MIGRATION_PHASE_2,2===n),Object(S.a)(t,I.OMAR_VAULT_MIGRATION_PHASE_3,3===n),t);return Object.entries(e).forEach(function(e){var t=Object(T.a)(e,2),n=t[0],_=t[1];if(!m.includes(n))try{r[function(e){var t=Object(N.a)(I,e);if(t)return t;switch(e){case"better_generate_password_enabled":return I.OMAR_PASSWORD_GENERATOR;case"omaria":return I.OMAR_IA;case"family_legacy_shared_folders_enabled":return I.FAMILY_LEGACY_SHARED_FOLDERS;case"family_shared_folders_enabled":return I.FAMILY_SHARED_FOLDERS;case"try_families_enabled":return I.TRY_FAMILIES;case"omardrawer":return I.OMAR_UI_DRAWER_ENABLED;case"show_vault_premium_feature_indicator":return I.VAULT_PREMIUM_FEATURE_INDICATOR;default:throw new Error("Unmapped legacy feature flag name: "+e)}}(n)]=!!_}catch(i){p(d.WARN,i)}}),r}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return l(f(e,Object(A.a)(function(e){return e.login.baseUrl},function(e){return Object(O.a)(e,"/segment/web-client")})),f(e,Object(A.a)(function(e){return e.user.uid},function(e){return e.user.type},function(e){return e.user.enterpriseVersion},function(e,t,n){if(e&&t)return{userId:e.toString(),traits:{"Account Type":t,"Enterprise Version":n,features:L("undefined"!==typeof LPContentScriptFeatures?LPContentScriptFeatures:{})}}})),t,n)}var v=n(70);var g=n(365);function C(e,t){var n,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],u=arguments.length>3?arguments[3]:void 0,E=Object(_.a)(),l=Object(o.a)({enabledSelector:function(e){var t=localStorage.getItem("isTrackingEnabled");return null===t?e.encryptedVaultDataSource.repromptSettings.improve:e.encryptedVaultDataSource.repromptSettings.improve&&"true"===t}}),f=[l,E,(n=u.background.dispatch,function(){return function(e){return function(t){t.type!==i.a&&n(t),e(t)}}})].concat(Object(r.a)(s));var I=Object(a.e)(t,a.a.apply(void 0,Object(r.a)(f)));u.initialize(I.dispatch);var d,A={segment:(d=Object(g.a)(function(){return I.getState().user.csrf},function(){return I.getState().login.baseUrl},e.fetchAPI),{post:Object(v.a)(d)("segment/send-web-client-event")})};return l.initialize({legacySegment:c({platform:e.platform,version:e.version||""},A),segment:b(I,{platform:e.platform,version:e.version},[{events:["LastPass Fill Initiated","LastPass Fill Modified"],enabled:function(){return I.getState().settings.features.webClientFillTracking}}])}),{store:I,sagaMiddleware:E}}n.d(t,"a",function(){return C})},92:function(e,t,n){"use strict";var r;!function(e){e.WEB="web",e.CHROME="cr",e.OPERA="op",e.EDGE="edge",e.EDGE_CHROMIUM="edgecr",e.FIREFOX="ff",e.SAFARI="sfx"}(r||(r={}));var _=n(5),i=n(132);n.d(t,"a",function(){return a});var a={version:"4.78.0",platform:-1!=navigator.userAgent.indexOf(" OPR/")?r.OPERA:r.CHROME,stateSync:function(e){return new Promise(function(t){var n;"undefined"!==typeof browser&&(n=window===top?"0":Object(i.v4)());var r=chrome.runtime.connect({name:"sync"});r.onMessage.addListener(function n(_){r.onMessage.removeListener(n),t({background:{dispatch:function(e){try{r.postMessage(e)}catch(t){}},initialState:_},initialize:function(t){"disconnectAction"in e&&r.onDisconnect.addListener(function(){t(e.disconnectAction)}),r.onMessage.addListener(t)}})}),r.postMessage(Object(_.a)({},e,{initialize:!0,frameId:n}))})},binaryService:function(e){return new Promise(function(t,n){var r={argcount:e.arguments.length,cmd:e.cmd};e.arguments.forEach(function(e,t){r["arg"+t]=e}),chrome.runtime.sendNativeMessage("com.lastpass.nplastpass",r,function(e){chrome.runtime.lastError?n(chrome.runtime.lastError):t(e.retval)})})}}},94:function(e,t,n){"use strict";var r=n(14);function _(e,t){return void 0===t?{type:e}:{type:e,payload:t}}var i=n(109),a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),o=new Uint8Array(16);var s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var c=function(e){return"string"===typeof e&&s.test(e)},u=[],E=0;E<256;++E)u.push((E+256).toString(16).substr(1));var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]).toLowerCase();if(!c(n))throw TypeError("Stringified UUID is invalid");return n};var f=function(e,t,n){var r=(e=e||{}).random||(e.rng||function(){if(!a)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(o)})();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var _=0;_<16;++_)t[n+_]=r[_];return t}return l(r)};var I,d,A=n(5),O=n(103),T=n(40);function S(e){switch(e){case T.a.Address:return"Address";case T.a.PaymentCard:return"Credit Card";case T.a.Password:default:return"Password"}}function N(e,t,n){return{"Fill Session Id":e,Source:n,"Item Type":t}}function R(e,t){return function(n,r){var _=r.page.sections.find(function(t){return t.id===e});if(_){var i=_.type,a=_.sessionId,o=_.source,s=_.fields.find(function(e){return e.id===t});if(a&&o&&s&&s.fill){var c=S(i);return Object(O.b)("LastPass Fill Modified",Object(A.a)({},N(a,c,o),{"Field Type":s?s.type:""}))}}}}function p(e,t,n,r){return Object(O.b)("LastPass Fill Initiated",Object(A.a)({},N(e,S(t),n),{"Is Launch":r===I.Launch,"Is Auto Login":r===I.AutoLogin}))}function m(e){return e.sections.map(function(e){if(e.sessionId&&e.source)return Object(O.b)("LastPass Fill Submitted",{"Fill Session Id":e.sessionId,"Item Type":S(e.type),Source:e.source,"Is Launch":e.submissionType===I.Launch,"Is Auto Login":e.submissionType===I.AutoLogin})}).filter(function(e){return!!e})}!function(e){e[e.Launch=0]="Launch",e[e.AutoLogin=1]="AutoLogin"}(I||(I={})),n.d(t,"a",function(){return b}),n.d(t,"b",function(){return v}),function(e){e.RESET="[fill] reset",e.STATE_CHANGE="[fill] state change",e.CONFIRM_CROSS_DOMAIN_FILL="[fill] confirm cross domain fill",e.CROSS_DOMAIN_FILL_CONFIRM_RESULT="[fill] cross domain fill confirm result",e.MANUAL_FILL="[fill] manual fill",e.LEGACY_MANUAL_FILL="[fill] legacy manual fill",e.FILL="[fill] fill",e.RESET_TAB_STATE="[fill] reset tab state",e.FILL_VALUES="[fill] fill values",e.SET_PASSWORD_FILLED="[fill] set password filled",e.UPDATE_CONTEXT_MENU="[fill] update context menu",e.CHANGE_INPUTS="[fill] change inputs",e.SECTION_FILLED="[fill] section filled",e.SET_SECTIONS="[fill] set sections",e.ITEMS_TO_SAVE_DETECTED="[save] items to save detected",e.SAVE_ITEMS="[save] save items",e.CLOSE_INFIELD="[fill] close infield",e.OPEN_INFIELD="[fill] open infield",e.OPEN_INFIELD_WITH_POSITION="[fill] open infield with position",e.RESIZE_INFIELD_CONTAINER="[fill] resize infield container",e.LAUNCH="[fill] launch",e.SET_USERNAME="[fill] set username",e.SET_LAUNCHED="[fill] set launched",e.CLEAR_ACTIVE_PAGE="[fill] clear active page",e.GET_PARENT_FRAME_OFFSETS="[fill] get parent frame offsets",e.SET_PARENT_FRAME_OFFSET="[fill] set parent frame offset",e.SUBMIT_DETECTED="[save] submit detected",e.USER_INTERACTED="[fill] user interacted"}(d||(d={}));var L,b={reset:function(e){return _(d.RESET,{initialPageState:e})},stateChange:function(e){return _(d.STATE_CHANGE,{state:e})},getParentFrameOffsets:function(e,t){return Object(r.a)(d.GET_PARENT_FRAME_OFFSETS,{page:e,hierarchy:t})},setParentFrameOffset:function(e,t){return _(d.SET_PARENT_FRAME_OFFSET,{offset:e,parent:t})},confirmCrossDomainFill:function(e,t){return Object(r.a)(d.CONFIRM_CROSS_DOMAIN_FILL,{tabId:t,message:e})},crossDomainFillConfirmResult:function(e){return _(d.CROSS_DOMAIN_FILL_CONFIRM_RESULT,{confirmed:e})},manualFill:function(e,t,n,_){return Object(r.a)(d.MANUAL_FILL,{page:e,vaultRecord:t,source:n,sectionId:_})},manualFillFromPage:function(e,t,n){return _(d.MANUAL_FILL,{vaultRecord:e,source:t,sectionId:n})},legacyManualFill:function(e,t){return Object(r.a)(d.LEGACY_MANUAL_FILL,{vaultRecordId:e,source:t})},fill:function(e,t,n,r){var _,a,o=f();return Object(i.b)((_=d.FILL,void 0===(a={sectionId:n,vaultRecord:e,fillSessionId:o,source:t,submissionType:r})?{type:_}:{type:_,payload:a}),{segment:p(o,e.recordType,t,r)})},clearActivePage:function(){return Object(r.a)(d.CLEAR_ACTIVE_PAGE)},updateContextMenu:function(){return _(d.UPDATE_CONTEXT_MENU)},setUsername:function(e,t){return Object(r.a)(d.SET_USERNAME,{page:e,username:t})},launch:function(e){return Object(r.a)(d.LAUNCH,{vaultRecord:e})},setLaunched:function(e,t){return _(d.SET_LAUNCHED,{id:e,tabId:t})},resetTabState:function(e){return Object(r.a)(d.RESET_TAB_STATE,{tabId:e})},fillValues:function(e,t,n,_,i,a,o){return Object(r.a)(d.FILL_VALUES,{page:e,values:t,sessionId:_,sectionId:n,recordId:i,source:a,submissionType:o})},setPasswordFilled:function(e,t){return Object(r.a)(d.SET_PASSWORD_FILLED,{page:e,id:t})},changeInput:function(e,t,n){return Object(i.b)(_(d.CHANGE_INPUTS,{sectionId:e,id:t,value:n}),{segment:R(e,t)})},setSections:function(e){return _(d.SET_SECTIONS,{sections:e})},sectionFilled:function(e){return _(d.SECTION_FILLED,{section:e})},itemsToSaveDetected:function(e,t,n){return _(d.ITEMS_TO_SAVE_DETECTED,{itemsToSave:e,numberOfKind:t,submittedHostname:n})},resizeInfieldContainer:function(e,t){return _(d.RESIZE_INFIELD_CONTAINER,{width:t,height:e})},closeInfield:function(){return _(d.CLOSE_INFIELD)},openInfield:function(e,t,n){return _(d.OPEN_INFIELD,{inputRect:e,type:t,frameHierarchy:n})},openInfieldWithPosition:function(e,t){return Object(r.a)(d.OPEN_INFIELD_WITH_POSITION,{page:e,inputLocation:t})},userInteracted:function(){return _(d.USER_INTERACTED)},submitDetected:function(e){return Object(i.b)(Object(r.a)(d.SUBMIT_DETECTED,{submittedData:e}),{segment:m(e)})}};!function(e){e.ANIMATION_DONE="[save prompt] animationDone",e.CANCEL="[save prompt] cancel",e.SAVE="[save prompt] save",e.RESIZE="[save prompt] resize",e.SET_ACTIVE_SCREEN="[save prompt] set active screen",e.TRY_AGAIN="[save prompt] try again",e.SET_ICON_DATA="[save prompt] set icon data"}(L||(L={}));var v={cancel:function(){return _(L.CANCEL)},animationDone:function(){return _(L.ANIMATION_DONE)},save:function(e){return _(L.SAVE,{records:e})},resize:function(e,t){return _(L.RESIZE,{width:e,height:t})},tryAgain:function(){return _(L.TRY_AGAIN)},setIconData:function(e){return _(L.SET_ICON_DATA,{data:e})},setActiveScreen:function(e,t,n,_){return Object(r.a)(L.SET_ACTIVE_SCREEN,{tabId:e,frameId:t,url:n,screen:_})}}}},[[604,0,1]]]);