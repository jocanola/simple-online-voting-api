The are 6 endpoint for this app
Question 1
get the list of polling unit
https://bincom-voting-api.herokuapp.com/api/election/pollingUnit/all

get results of a particular polling unit by polling_unit_uniqueid and by pass it as params in polling_unit_uniqueid=id
https://bincom-voting-api.herokuapp.com/api/election/announcedPuResults/result/:id

Question 2
get all Local government
https://bincom-voting-api.herokuapp.com/api/election/lga/all

get result of polling unit of a particular local government by local government unique lga_id = id
https://bincom-voting-api.herokuapp.com/api/election/pollingUnit/pollingUnitByLga/:id

Question 3
Post new Polling unit result to the list of polling unit
https://bincom-voting-api.herokuapp.com/api/election/create
