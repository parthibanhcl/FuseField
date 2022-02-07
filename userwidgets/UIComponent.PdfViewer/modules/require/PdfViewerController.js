define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
        this.view.flxHeaderImg.onTouchStart = this.closePDFView;

		},
        viewPDF: function(pdfURL) {
        this.view.browserPDFViewer.htmlString = "";
        this.view.browserPDFViewer.requestURLConfig = {
        URL: pdfURL,
        requestMethod: constants.BROWSER_REQUEST_METHOD_GET
        };
        this.view.setVisibility(true);
        },
         commonClosePDFView: function(){
           this.view.setVisibility(false);
         },
 
          
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		}
	};
});

