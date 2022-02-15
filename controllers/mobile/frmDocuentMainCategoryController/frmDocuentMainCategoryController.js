define({ 

 //Type your controller code here 
  
  onNavigate:function(param){
    //to highlight the footer icon
    
    this.view.footerBar.setActiveStateMenu("Documents");

    this.view.flxInitiationContainer.onClick=function(){
      var labelText=this.view.lblDocmentTypeOne.text;
      this.navigateToNextPage(labelText);
    }.bind(this);
    this.view.flxDemoContainer.onClick=function(){
      var labelText=this.view.lblDocmentTypeTwo.text;
      this.navigateToNextPage(labelText);
    }.bind(this);
    
    this.view.imgBack.onTouchEnd=this.navigateToHomePage;
    
  },
  navigateToNextPage(labelName){
    var form = new kony.mvc.Navigation("frmDocumentSubCategory");
    form.navigate({labelText:labelName});
  },
  navigateToHomePage:function(){
    var form = new kony.mvc.Navigation("frmHome");
    form.navigate();
  }

 });