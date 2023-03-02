sap.ui.define(
  [
    "com/emc/fin/ap/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
  ],
  function (BaseController, MessageBox, MessageToast, JSONModel) {
    "use strict";
    return BaseController.extend("com.emc.fin.ap.controller.Add",{
      onInit: function(){
          this.oRouter = this.getOwnerComponent().getRouter();
          this.oRouter.getRoute("add").attachMatched(this.herculis, this);
          var oModel = new JSONModel();
          oModel.setData({
          });

          this.getView().setModel(oModel, "prod");
      },
      herculis: function (oEvent) {

      }
    });
  });
