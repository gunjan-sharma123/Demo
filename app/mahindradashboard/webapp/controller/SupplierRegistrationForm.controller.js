sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (Controller) => {
    "use strict";
  
    return Controller.extend("com.app.mahindradashboard.controller.SupplierRegistrationForm", {
        onInit() {
          this.selectedValues = {}; // Store selected field values
        },
        onRegistrationformSubmit:function() 
        {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			    oRouter.navTo("View1", {} );

          var f1 = this.getView().byId('Rfname').setEditable(false);
            console.log(f1);
            var l1 = this.getView().byId('Rlname').setEditable(false);
            var E1 = this.getView().byId('Remail').setEditable(false);
            var P1 = this.getView().byId('Rphone').setEditable(false);

            // Make all checkboxes visible
            this.getView().byId('RfnameCheck').setVisible(true);
            this.getView().byId('RlnameCheck').setVisible(true);
            this.getView().byId('RemailCheck').setVisible(true);
            this.getView().byId('RphoneCheck').setVisible(true);

             // Get a reference to the "Send Back" button and Set the visibility of the "Send Back" button to true
             var oSendBackButton = this.getView().byId("SendBackButton"); 
             oSendBackButton.setVisible(true);

        },
        onCheckboxSelect: function (oEvent) {
          const checkbox = oEvent.getSource();
          const checkboxId = checkbox.getId();
          const fieldId = checkboxId.replace("Check", ""); // Corresponding input field ID
          const isSelected = checkbox.getSelected();
          const inputField = this.getView().byId(fieldId);

          if (isSelected) {
              // Change background color of checkbox
              checkbox.addStyleClass("checkbox-red");

              // Save the corresponding input field value in the controller variable
              const fieldValue = inputField.getValue();
              this.selectedValues[fieldId] = fieldValue;

              console.log(`Field Value Saved: ${fieldId} = ${fieldValue}`);
          } else {
              // Reset background color and remove value from selectedValues
              checkbox.removeStyleClass("checkbox-red");
              delete this.selectedValues[fieldId];
          }
      },
      onSendBack: function () {
        // Iterate through the checkboxes
        const checkboxes = ['RfnameCheck', 'RlnameCheck', 'RemailCheck', 'RphoneCheck'];
        const inputFields = ['Rfname', 'Rlname', 'Remail', 'Rphone'];
    
        checkboxes.forEach((checkboxId, index) => {
            const checkbox = this.getView().byId(checkboxId);
            const inputField = this.getView().byId(inputFields[index]);
    
            if (checkbox.getSelected()) {
                // If the checkbox is selected, make the corresponding field editable
                inputField.setEditable(true);
                inputField.addStyleClass("editableField");
            } else {
                // If the checkbox is not selected, keep the field non-editable
                inputField.setEditable(false);
                inputField.removeStyleClass("editableField");
            }
    
            // Hide all checkboxes
            checkbox.setVisible(false);

            var oerrormsg = this.getView().byId("errormsg"); 
            oerrormsg.setVisible(true);

            var oSendBackButton = this.getView().byId("SendBackButton"); 
            oSendBackButton.setVisible(false);

        }); 
      }
    });
  });