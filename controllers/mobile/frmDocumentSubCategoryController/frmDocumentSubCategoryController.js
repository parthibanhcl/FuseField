define({ 

  //Type your controller code here 
  onNavigate:function(context){
    //to highlight the footer icon
    if(context.navDirection!=="back"){
      this.view.footerBar.setActiveStateMenu("Documents");
      this.view.lblTitle.text=context.labelText;

      this.view.flxBack.onTouchEnd= this.onBackButtonClick;

      this.loadSubCategoryToSegment();
      this.view.segDocumentSubcategory.onRowClick=this.navigateToNextPage;
    }
     
      
  },
  onBackButtonClick:function(){
    var navigateToPreviousForm = new kony.mvc.Navigation("frmDocuentMainCategory");
    navigateToPreviousForm.navigate();
  },
  navigateToNextPage(selectedRowData){
    var form = new kony.mvc.Navigation("frmDocuments");
     form.navigate({mainMainLabelText:this.view.lblTitle.text,subMenuLabelText:selectedRowData.selectedItems[0].lblTitle.text});
  },
  loadSubCategoryToSegment:function(){
    this.view.segDocumentSubcategory.setData([     
        {imgPlus:{"src":"plus_icon.png"},lblTitle:{"text":"Ma liste positive PROMO"}},
        {imgPlus:{"src":"plus_icon.png"},lblTitle:{"text":"Tous les docs valides PROMO"}},
        {imgPlus:{"src":"plus_icon.png"},lblTitle:{"text":"Docs obsoletes PROMO"}},
        {imgPlus:{"src":"plus_icon.png"},lblTitle:{"text":"FF NVS CAG"}},
        {imgPlus:{"src":"plus_icon.png"},lblTitle:{"text":"Ma liste positive NON PROMO"}},
        {imgPlus:{"src":"plus_icon.png"},lblTitle:{"text":"Tous les docs valides NON PROMO"}},
        {imgPlus:{"src":"plus_icon.png"},lblTitle:{"text":"Docs obsoletes NON PROMO"}},
    ]);
  },

});