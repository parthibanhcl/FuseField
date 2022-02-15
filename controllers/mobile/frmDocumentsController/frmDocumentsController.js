define({ 

  onNavigate:function(context){
    if(context.navDirection!=="back"){
      this.view.flxApproved.onClick=this.onBtnDocApprove;
      this.view.flxExpired.onClick=this.onBtnDocExpire;
      this.view.flxArchived.onClick=this.onBtnDocArchived;
      this.view.footerBar.setActiveStateMenu("Documents");
      this.view.segDocument.onRowClick=this.onSegmentRowClick;
      this.view.lblBack.text=context.mainMainLabelText;
      this.view.lblTitle.text=context.subMenuLabelText;
      this.view.flxBack.onTouchEnd= this.onBackButtonClick;
      
      this.view.flxSeparatorOne.setVisibility(false);
      this.view.flxSeparatorTwo.setVisibility(true);
    }




  },
  onBtnDocApprove:function(){

    this.view.flxApproved.skin="sknFlxActive";
    this.view.lblApproved.skin="sknLabelViolet120";
    this.view.flxExpired.skin="sknFlxInActive";
    this.view.lblExpired.skin="sknLabelBlack110";
    this.view.flxArchived.skin="sknFlxInActive";
    this.view.lblArchived.skin="sknLabelBlack110";

    this.view.flxSeparatorOne.setVisibility(false);
    this.view.flxSeparatorTwo.setVisibility(true);
  },
  onBtnDocExpire:function(){
    this.view.flxApproved.skin="sknFlxInActive";
    this.view.lblApproved.skin="sknLabelBlack110";
    this.view.flxExpired.skin="sknFlxActive";
    this.view.lblExpired.skin="sknLabelViolet120";
    this.view.flxArchived.skin="sknFlxInActive";
    this.view.lblArchived.skin="sknLabelBlack110";

    this.view.flxSeparatorOne.setVisibility(false);
    this.view.flxSeparatorTwo.setVisibility(false);
  },
  onBtnDocArchived:function(){
    this.view.flxApproved.skin="sknFlxInActive";
    this.view.lblApproved.skin="sknLabelBlack110";
    this.view.flxExpired.skin="sknFlxInActive";
    this.view.lblExpired.skin="sknLabelBlack110";
    this.view.flxArchived.skin="sknFlxActive";
    this.view.lblArchived.skin="sknLabelViolet120";

    this.view.flxSeparatorOne.setVisibility(true);
    this.view.flxSeparatorTwo.setVisibility(false);
  },
  onSegmentRowClick:function(data){
    var form=new kony.mvc.Navigation("frmDocumentView");
    form.navigate();
  },
  onBackButtonClick:function(){
    var navigateToPreviousForm = new kony.mvc.Navigation("frmDocumentSubCategory");
    navigateToPreviousForm.navigate({navDirection:"back"});
  },

});