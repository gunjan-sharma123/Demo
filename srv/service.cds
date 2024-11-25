using { app.schema } from '../db/schema';

service Supplieronboarding{

  entity Buyer as projection on schema.Buyer;

  // Define action to get last record ID
  action getLastID() returns UUID;

}