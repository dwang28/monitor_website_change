const cron = require('node-cron');
import { app } from './app';
import { run_task } from './task';

// cron.schedule('* * * * *', function () {
//   console.log('running a task every minute');
// });

app.listen(3000, () => {
  console.log('A test express service is now running on port 3000 !!!!!!!!!!');
  run_task();
});


