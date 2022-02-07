define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.view.flxHome.onTouchEnd=this.homePageClick;
      this.view.flxDocument.onTouchEnd=this.documentsPageClick;
      this.view.flxNotificationContainer.onTouchEnd=this.notificationPageClick;
      this.view.flxSettings.onTouchEnd=this.setActionSheet;
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },
    homePageClick:function(){
      var form=new kony.mvc.Navigation("frmHome");
      form.navigate();
    },
    documentsPageClick:function(){
      var form=new kony.mvc.Navigation("frmDocuentMainCategory");
      form.navigate();
    },
    notificationPageClick:function(){
      var form=new kony.mvc.Navigation("frmNotifications");
      form.navigate();
    },
    onFooterReset : function(){
      this.view.imgHome.src = "group_1940_2.png";
      this.view.imgDocument.src = "group_1941.png";
      this.view.imgNotifications.src = "icon_ionic_ios_notifications_outline.png";
      this.view.imgSettings.src = "icon_feather_settings.png";
      this.view.lblHome.skin = "sknLblGray";
      this.view.lblDocument.skin="sknLblGray";
      this.view.lblNotifications.skin="sknLblGray";
      this.view.lblSettings.skin="sknLblGray";
    },
    setActiceStateMenu : function(pageName){
      this.onFooterReset();
      if(pageName==="Documents"){
        this.view.lblDocument.skin="sknBlue";
        this.view.imgDocument.src="group_1941_2.png";
      } else if(pageName==="Notifications"){
        this.view.lblNotifications.skin="sknBlue";
        this.view.imgNotifications.src="icon_ionic_ios_notifications_outline_2.png";
      } else if(pageName==="Home"){
        this.view.lblHome.skin  ="sknBlue";
        this.view.imgHome.src="group_1940.png";
      }
    },
  };
});