define({ 

  //Type your controller code here 
  onNavigate:function(){
    this.view.btnLogin.onClick=this.naviageteToHome;
  },
  naviageteToHome:function(){
    var ntf = new kony.mvc.Navigation("frmHome");
    ntf.navigate();
  }
});