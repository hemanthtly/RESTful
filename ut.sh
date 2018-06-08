curl -H "Content-Type: application/json" -X POST -d '{"name": "Top 10 ES6 Features", "url":"http://webapplog.com/es6", "text": ""}'  "http://localhost:3000/posts" 
sleep 1
curl -H 'Content-Type: application/json' -X PUT -d '{"name": "Top 10 ES6 Features Every Developer Must Know", "url":"http://webapplog.com/es6", "text": ""}' "http://localhost:3000/posts/0"
sleep 1
curl -H 'Content-Type: application/json' -X PUT -d '{"name": "Top 10 ES6 Features", "url":"http://webapplog.com/es6", "text": "new modified text here"}' "http://localhost:3000/posts/1"
sleep 1
curl "http://localhost:3000/posts" 
sleep 1
curl -H "Content-Type: application/json" -X POST -d '{"text": "new comment here"}'  "http://localhost:3000/posts/0/comments" 
sleep 1
curl -H "Content-Type: application/json" -X POST -d '{"text": "new comment here 1"}'  "http://localhost:3000/posts/1/comments" 
sleep 1
curl -H "Content-Type: application/json" -X POST -d '{"text": "2 new comment here 0"}'  "http://localhost:3000/posts/0/comments" 
sleep 1
curl -H "Content-Type: application/json" -X POST -d '{"text": "2 new comment here 1"}'  "http://localhost:3000/posts/1/comments" 
sleep 1
curl -H "Content-Type: application/json" -X PUT -d '{"text": "updated 2 new comment here 0"}'  "http://localhost:3000/posts/0/comments/1" 
sleep 1
curl -H "Content-Type: application/json" -X PUT -d '{"text": "updated 2 new comment here 1"}'  "http://localhost:3000/posts/1/comments/1" 
sleep 1
curl "http://localhost:3000/posts/0/comments"
sleep 1
curl "http://localhost:3000/posts/1/comments" 
sleep 1
curl -X DELETE "http://localhost:3000/posts/1" 
sleep 1
curl "http://localhost:3000/posts" 
sleep 1
curl -X DELETE "http://localhost:3000/posts/0/comments/1" 
sleep 1
curl "http://localhost:3000/posts/0/comments"

