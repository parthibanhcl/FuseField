define({ 
  //Type your controller code here 
  onNavigate:function(){
    this.view.mainpage.flxContainer.flxQrCode.onClick=this.onNavigateToQrCodeForm;
    this.view.mainpage.flxContainer.flxManual.onClick=this.onManualClick;
    this.view.CustomAlertWithInput.CacelClick=this.onAlertCancel;
     this.view.CustomAlertWithInput.SubmitClick=this.onAlertSubmit;
    this.view.CustomAlert.onAlertDoneClick=this.onAlertDoneClick;
    this.view.CustomAlertWithInput.referenceText="";
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
    var referenceText =this.view.CustomAlertWithInput.referenceText;
    
    if(referenceText!==null && referenceText.length===6){
      this.view.CustomAlertWithInput.setVisibility(false);
      this.view.CustomAlert.setVisibility(true);
    }
  
  },
  onAlertDoneClick:function(){
    this.view.CustomAlert.setVisibility(false);
  }
});