sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("com.app.mahindradashboard.controller.View1", {
        onInit() {
        },
        onSubmit:function() // FOR CREATING NEW RECORD ************
        {
            var f1 = this.getView().byId('fname').getValue()
            console.log(f1);
            var l1 = this.getView().byId('lname').getValue()
            var E1 = this.getView().byId('email').getValue()
            var P1 = this.getView().byId('phone').getValue()
              var oAddBuyerData={}  
              oAddBuyerData.firstName=f1
              oAddBuyerData.lastName=l1
              oAddBuyerData.email=E1
              oAddBuyerData.phone=P1
              this.getView().getModel().create("/Buyer",oAddBuyerData,{
                method:"POST",    
                success:function (data){
                    MessageToast.show("Data save Successfully");
                },
                error: function (data){
                    MessageToast.show(data);
                },
                });

            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("SupplierRegistrationForm", {} );

            
        },
    });
});