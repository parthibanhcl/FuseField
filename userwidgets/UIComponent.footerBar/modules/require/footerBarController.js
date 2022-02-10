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
      this.view.imgHome.src = "home_unselected.png";
      this.view.imgDocument.src = "doucment_unselected.png";
      this.view.imgNotifications.src = "notification_unselected.png";
      this.view.imgSettings.src = "settings_unselected.png";
      this.view.lblHome.skin = "sknLblGray";
      this.view.lblDocument.skin="sknLblGray";
      this.view.lblNotifications.skin="sknLblGray";
      this.view.lblSettings.skin="sknLblGray";
    },
    setActiveStateMenu : function(pageName){
      this.onFooterReset();
      if(pageName==="Documents"){
        this.view.lblDocument.skin="sknVioletColor";
        this.view.imgDocument.src="doucment_selected.png";
      } else if(pageName==="Notifications"){
        this.view.lblNotifications.skin="sknVioletColor";
        this.view.imgNotifications.src="notification_selected.png";
      } else if(pageName==="Home"){
        this.view.lblHome.skin  ="sknVioletColor";
        this.view.imgHome.src="home_selected.png";
      }
    },
  };
});