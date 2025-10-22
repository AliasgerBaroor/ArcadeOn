import { app } from "../app.js";

app.get('/files/list', async (c) => {
  const s3 = c.get('s3');
});

// await engine(eventActions["VendorCreated"], "all", {
//   db: { name: "abcd", users: [] },
//   analytics: { someAnalyticsData: 42 },
//   inbox: { message: "Inbox payload" },
//   notification: { label: "Welcome", title: "Vendor", body: "Created", badge: "🟢" }
// }, {
//   async: true,
//   context: { user: "Admin" }
// });

// await engine(eventActions["VendorCreated"], "notification", {
//   db: { name: "abcd", users: [] },
//   analytics: { someAnalyticsData: 42 },
//   inbox: { message: "Inbox payload" },
//   notification: { label: "Welcome", title: "Vendor", body: "Created", badge: "🟢" }
// }, {
//   onError: (err, key) => console.error(`Handler ${key} failed`, err),
//   context: { user: "Admin" }
// });

// await engine(eventActions["VendorCreated"], ["db", "analytics"], {
//   db: { name: "abcd", users: [] },
//   analytics: { someAnalyticsData: 42 },
//   inbox: { message: "Inbox payload" },
//   notification: { label: "Welcome", title: "Vendor", body: "Created", badge: "🟢" }
// });
