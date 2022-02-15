define({ 
  //Type your controller code here 
  onNavigate:function(){
    this.view.mainpage.flxContainer.flxQrCode.onClick=this.onNavigateToQrCodeForm;
    this.view.mainpage.flxContainer.flxManual.onClick=this.onManualClick;
    this.view.CustomAlertWithInput.CacelClick=this.onAlertCancel;
    this.view.CustomAlertWithInput.SubmitClick=this.onAlertSubmit;
    this.view.CustomAlert.onAlertDoneClick=this.onAlertDoneClick;
    this.view.CustomAlert.showPDFFile = this.showPDFFile;
    this.view.CustomAlertWithInput.referenceText="";
    this.view.PdfViewer.closePDFView = this.closePDFView;
    this.view.hamberger.imgCloseOnTouchEnd=this.onMenuClose;
    this.view.flxMenuContainer.setVisibility(false);
    this.view.hamberger.setVisibility(false);
    this.view.mainpage.imgHeaderOnTouchEnd=this.onAvatarPicClick;
    this.view.hamberger.onDashboardClick=function(){
      this.onMenuClickNavigation("frmHome");
    }.bind(this);
    this.view.hamberger.onDocumentMenuItemClick=function(){
      this.onMenuClickNavigation("frmDocuentMainCategory");
    }.bind(this);
    this.view.hamberger.onNotificationMenuItemClick=function(){
      this.onMenuClickNavigation("frmNotifications");
    }.bind(this);
    this.loadScannedDocuments();
  },
  onManualClick:function(){
    this.view.CustomAlertWithInput.setVisibility(true);     
  },
  onNavigateToQrCodeForm:function(){
    var form = new kony.mvc.Navigation("frmQRCode");
    form.navigate();
  },
  onAlertCancel:function(){
    this.view.CustomAlertWithInput.setVisibility(false);
  },
  onAlertSubmit:function(){
    var referenceText = this.view.CustomAlertWithInput.referenceText;

    if(referenceText!==null && referenceText.length===6){
      this.view.CustomAlertWithInput.setVisibility(false);
      this.view.CustomAlert.setVisibility(true);
    }

  },
  onAlertDoneClick:function(){
    this.view.CustomAlert.setVisibility(false);
  },
  showPDFFile:function(){
    this.view.PdfViewer.viewPDF("https://www.buds.com.ua/images/Lorem_ipsum.pdf");
  },
  closePDFView: function() {
    // this.view.PdfViewer.setVisibility(false);
    this.view.PdfViewer.commonClosePDFView();

  },
  loadScannedDocuments:function(){
    this.view.mainpage.flxContainer.segDocuments.setData([
      [
        {imgFolderIcon:"doucment_unselected.png",lblHeading:"Scanned DOCUMENTS",lblHeaderStatus:"Status"},
        [
          {lblHeading:"Practice Document WPD-NPC-001.pdf",lblDescription:"Zortress . Asset Classification",lblDocumentDate:"States Airlines",lblTime:{"text":"Expired","skin":"sknAlertRed"}},
          {lblHeading:"Practice Document WPD-NPC-001.pdf",lblDescription:"Zortress . Asset Classification",lblDocumentDate:"States Airlines",lblTime:{"text":"Not Found"}},
          {lblHeading:"Practice Document WPD-NPC-001.pdf",lblDescription:"Zortress . Asset Classification",lblDocumentDate:"States Airlines",lblTime:{"text":"Expires on 13-12-2021"}}
        ]
      ]
    ]);
  },
  onMenuClose:function(){
    this.view.flxMenuContainer.setVisibility(false);
    this.view.hamberger.setVisibility(false);
  },
  onAvatarPicClick:function(){
    this.view.flxMenuContainer.setVisibility(true);
    this.view.hamberger.setVisibility(true);
  },
  onMenuClickNavigation:function(page){
    this.view.flxMenuContainer.setVisibility(false);
    this.view.hamberger.setVisibility(false);
    if(page!==undefined){
      var form = new kony.mvc.Navigation(page);
      form.navigate();
    }

  },

});