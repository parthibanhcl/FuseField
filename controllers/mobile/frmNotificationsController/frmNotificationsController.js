define({ 
  onNavigate:function(){
    this.view.footerBar.setActiveStateMenu("Notifications");
    this.view.flxNew.onClick=this.onBtnDocNew;
    this.view.flxRetired.onClick=this.onBtnDocRetired;
    this.view.CustomActionSheet.setVisibility(false);
    this.view.footerBar.onSettingsClick=this.onSettingsClick;
    this.view.CustomActionSheet.actionSheetCanelClick=this.onCancelClick;
    this.view.imgBack.onTouchEnd=this.navigateToHomePage;
    this.loadNotificationSegment();
    
  },
  onBtnDocNew:function(){
    this.view.flxNew.skin="sknFlxActive";
    this.view.lblNew.skin="sknLabelViolet120";
    this.view.flxRetired.skin="sknFlxInActive";
     this.view.lblRetired.skin="sknLabelBlack110";
  },
  onBtnDocRetired:function(){
    this.view.flxNew.skin="sknFlxInActive";
     this.view.lblNew.skin="sknLabelBlack110";
    this.view.flxRetired.skin="sknFlxActive";
     this.view.lblRetired.skin="sknLabelViolet120";
  },
  onSettingsClick:function(){
    this.view.footerBar.setActiveStateMenu("Settings");
     this.view.CustomActionSheet.setVisibility(true);
  },
  onCancelClick:function(){
    this.view.CustomActionSheet.setVisibility(false);
  },
  
  loadNotificationSegment:function(){
    this.view.segNotification.setData([
      {
        lblNotificationHeader:{"text":"Notification 1 has been approved."},lblHeading:{"text":"Practice Document WPD-NPC-001.pdf"},lblDescription:{"text":"Zortress  |  Asset Classification"},lblDocumentDate:{"text":"Date of first use:10-4-2020  |  Expiry Date:13-12-2021"}
      },
      {
        lblNotificationHeader:{"text":"Notification 2 has been approved."},lblHeading:{"text":"Practice Document WPD-NPC-001.pdf"},lblDescription:{"text":"Zortress  |  Asset Classification"},lblDocumentDate:{"text":"Date of first use:10-4-2020  |  Expiry Date:13-12-2021"}
      },
      {
        lblNotificationHeader:{"text":"Notification 3 has been approved."},lblHeading:{"text":"Practice Document WPD-NPC-001.pdf"},lblDescription:{"text":"Zortress  |  Asset Classification"},lblDocumentDate:{"text":"Date of first use:10-4-2020  |  Expiry Date:13-12-2021"}
      },
      {
        lblNotificationHeader:{"text":"Notification 4 has been approved."},lblHeading:{"text":"Practice Document WPD-NPC-001.pdf"},lblDescription:{"text":"Zortress  |  Asset Classification"},lblDocumentDate:{"text":"Date of first use:10-4-2020  |  Expiry Date:13-12-2021"}
      },
      {
        lblNotificationHeader:{"text":"Notification 5 has been approved."},lblHeading:{"text":"Practice Document WPD-NPC-001.pdf"},lblDescription:{"text":"Zortress  |  Asset Classification"},lblDocumentDate:{"text":"Date of first use:10-4-2020  |  Expiry Date:13-12-2021"}
      },
      {
        lblNotificationHeader:{"text":"Notification 6 has been approved."},lblHeading:{"text":"Practice Document WPD-NPC-001.pdf"},lblDescription:{"text":"Zortress  |  Asset Classification"},lblDocumentDate:{"text":"Date of first use:10-4-2020  |  Expiry Date:13-12-2021"}
      },
      {
        lblNotificationHeader:{"text":"Notification 7 has been approved."},lblHeading:{"text":"Practice Document WPD-NPC-001.pdf"},lblDescription:{"text":"Zortress  |  Asset Classification"},lblDocumentDate:{"text":"Date of first use:10-4-2020  |  Expiry Date:13-12-2021"}
      }
    ]);
  },
  
  navigateToHomePage:function(){
    var form = new kony.mvc.Navigation("frmHome");
    form.navigate();
  }


});