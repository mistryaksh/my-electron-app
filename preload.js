console.log("APP IS RUNNING");
const Realm = require("realm");

const app = new Realm.App({ id: "revolution_educational-ttenr" }); // create a new instance of the Realm.App

async function run() {
     // login with an anonymous credential
     await app.logIn(Realm.Credentials.anonymous());

     const DogSchema = {
          name: "Dog",
          properties: {
               _id: "int",
               name: "string",
               age: "int",
          },
          primaryKey: "_id",
     };

     const realm = await Realm.open({
          schema: [DogSchema],
          sync: {
               user: app.currentUser,
               partitionValue: "myPartition",
          },
     });

     // The myPartition realm is now synced to the device. You can
     // access it through the `realm` object returned by `Realm.open()`

     // write to the realm
}
run().catch((err) => {
     console.error("Failed to open realm:", err);
});
