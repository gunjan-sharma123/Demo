namespace app.schema;

using { cuid } from '@sap/cds/common';

entity Buyer :cuid {
firstName     : String;
lastName      : String;
email         : String;
phone         : String;
}
