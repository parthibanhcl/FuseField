define({ 

  //Type your controller code here 
  onNavigate:function(){
    this.createComponent();
    this.view.flxBackImg.onTouchEnd=this.onBackButtonClick;
    this.view.btnScan.onClick=this.onScanClick;
  },
  onBackButtonClick:function(){
    kony.application.destroyForm("frmQRCode");
    var navigateToPreviousForm = new kony.mvc.Navigation(kony.application.getPreviousForm().id);
    navigateToPreviousForm.navigate();
  },

  createComponent: function() {
    /* Creating the component's Object */
    var BarcodeQRScanner = new com.konymp.barcodeqrscanner(
      {
        "id": "BarcodeQRScanner",
        "isVisible": true,
        "width":"100%",
        "height":"100%"
      }, {}, {});

    /* Setting the component's properties */
    BarcodeQRScanner.cameraFacing = "Back";
    BarcodeQRScanner.renderAutomatic = true;
    BarcodeQRScanner.enableContinuousScanning = true;
    BarcodeQRScanner.closeButtonVisibility = true;
    BarcodeQRScanner.closeButtonImage = "close.png";
    BarcodeQRScanner.flashButtonVisibility = true;
    BarcodeQRScanner.flashButtonImage = "flash.png";

    /*Adding the component to a Form*/
    this.view.flxQRCompContainer.add(BarcodeQRScanner);

    /* Defining the error callback */
    this.view.BarcodeQRScanner.errorCallback = this.onErrorScan;

    this.view.BarcodeQRScanner.afterScan =this.afterScan;
    //     this.view.BarcodeQRScanner.stopScan();
  },
  onErrorScan:function(error)
  {
    alert("Error: "+error);
  },
  afterScan: function(result, format)
  {
    alert("Scan Result: "+result+" Code Format: "+format);
    //      this.view.BarcodeQRScanner.stopScan();
  },
  onScanClick:function(){
    //     this.view.BarcodeQRScanner.renderScan();
         this.view.BarcodeQRScanner.resumeScan();
  }
});