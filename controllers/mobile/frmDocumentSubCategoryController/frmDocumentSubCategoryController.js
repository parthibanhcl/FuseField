define({ 

  //Type your controller code here 
  onNavigate:function(context){
    //to highlight the footer icon
    if(context.navDirection!=="back"){
      this.view.footerBar.setActiceStateMenu("Documents");
      this.view.lblTitle.text=context.labelText;

      this.view.flxBack.onTouchEnd=function(){
        this.onBackButtonClick(context.labelText);
      }.bind(this);
      this.view.flxColumnOne.onClick=function(){
        var mainMenulabelText=context.labelText;
        var subMenulabelText=this.view.lblDocTitle.text;
        this.navigateToNextPage(mainMenulabelText,subMenulabelText);
      }.bind(this);
    }
     
      
  },
  onBackButtonClick:function(labelName){
    var navigateToPreviousForm = new kony.mvc.Navigation("frmDocuentMainCategory");
    navigateToPreviousForm.navigate();
  },
  navigateToNextPage(mainMenuLabel,subMenuLabel){
    var form = new kony.mvc.Navigation("frmDocuments");
    form.navigate({mainMainLabelText:mainMenuLabel,subMenuLabelText:subMenuLabel});
  }

});