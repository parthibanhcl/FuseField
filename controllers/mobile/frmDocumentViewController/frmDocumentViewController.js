define({ 

  onNavigate:function(){
    this.view.footerBar.setActiceStateMenu("Documents");
    this.view.imgBack.onTouchEnd=this.onBackButtonClick;
    //     this.view.CustomAlert.imgIconSrc="icon_feather_check_circle.png";
    //     this.view.CustomAlert.onAlertDoneClick=this.onAlertDoneClick;
    this.view.CustomActionSheet.setVisibility(false);
    this.view.footerBar.onSettingsClick=this.onSettingsClick;
    this.view.CustomActionSheet.actionSheetCanelClick=this.onCancelClick;
  },
  onBackButtonClick:function(){
    var navigateToPreviousForm = new kony.mvc.Navigation("frmDocuments");
    navigateToPreviousForm.navigate({navDirection:"back"});
  },
  onAlertDoneClick:function(){
    alert("Success");
  },
  onSettingsClick:function(){
     this.view.CustomActionSheet.setVisibility(true);
  },
  onCancelClick:function(){
    this.view.CustomActionSheet.setVisibility(false);
  }

});