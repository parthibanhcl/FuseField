define({ 

  onNavigate:function(context){
    if(context.navDirection!=="back"){
      this.view.btnDocApprove.onClick=this.onBtnDocApprove;
      this.view.btnDocExpired.onClick=this.onBtnDocExpire;
      this.view.btnDocArchived.onClick=this.onBtnDocArchived;
      this.view.footerBar.setActiceStateMenu("Documents");
      this.view.segDocument.onRowClick=this.onSegmentRowClick;
      this.view.lblBack.text="< "+context.mainMainLabelText;
      this.view.lblTitle.text=context.subMenuLabelText;
      this.view.flxBack.onTouchEnd= this.onBackButtonClick;
    }
    
       
       
      
  },
  onBtnDocApprove:function(){

    this.view.btnDocApprove.skin="sknButtonActive";
    this.view.btnDocExpired.skin="sknButtonInActive";
    this.view.btnDocArchived.skin="sknButtonInActive";
  },
  onBtnDocExpire:function(){
    this.view.btnDocApprove.skin="sknButtonInActive";
    this.view.btnDocExpired.skin="sknButtonActive";
    this.view.btnDocArchived.skin="sknButtonInActive";
  },
  onBtnDocArchived:function(){
    this.view.btnDocApprove.skin="sknButtonInActive";
    this.view.btnDocExpired.skin="sknButtonInActive";
    this.view.btnDocArchived.skin="sknButtonActive";
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