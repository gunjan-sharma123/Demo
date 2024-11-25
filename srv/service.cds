using { app.schema } from '../db/schema';

service Supplieronboarding{

  entity Buyer as projection on schema.Buyer;

}