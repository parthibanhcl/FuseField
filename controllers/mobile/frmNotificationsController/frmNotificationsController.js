define({ 
  onNavigate:function(){
    this.view.footerBar.setActiveStateMenu("Notifications");
    this.view.btnDocNew.onClick=this.onBtnDocNew;
    this.view.btnDocRetired.onClick=this.onBtnDocRetired;
    this.view.CustomActionSheet.setVisibility(false);
    this.view.footerBar.onSettingsClick=this.onSettingsClick;
    this.view.CustomActionSheet.actionSheetCanelClick=this.onCancelClick;
  },
  onBtnDocNew:function(){
    this.view.btnDocNew.skin="sknButtonActive";
    this.view.btnDocRetired.skin="sknButtonInActive";
  },
  onBtnDocRetired:function(){
    this.view.btnDocNew.skin="sknButtonInActive";
    this.view.btnDocRetired.skin="sknButtonActive";
  },
  onSettingsClick:function(){
     this.view.CustomActionSheet.setVisibility(true);
  },
  onCancelClick:function(){
    this.view.CustomActionSheet.setVisibility(false);
  }


});