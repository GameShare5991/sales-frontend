# sales-frontend
Frontend service for GameShare sales data.

## URL: http://localhost:4006/NAMEHERE
```
docker build -t sales-frontend .

docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 4006:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    sales-frontend

```

