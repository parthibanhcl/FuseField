define({ 

  onNavigate:function(){
    kony.timer.schedule("mytimer12",this.timerFunc, 3, false);
  },
  timerFunc:function() {
    var ntf = new kony.mvc.Navigation("frmLogin");
    ntf.navigate();
    kony.application.destroyForm('frmSplash');
  }, 

 });